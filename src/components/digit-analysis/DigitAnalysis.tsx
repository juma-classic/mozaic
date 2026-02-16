import React, { useState, useEffect, useRef } from 'react';
import './DigitAnalysis.scss';

interface TickData {
    time: number;
    quote: number;
}

interface MarketGroup {
    volatility: any[];
    jump: any[];
    other: any[];
}

export const DigitAnalysis: React.FC = () => {
    const [ticks, setTicks] = useState<TickData[]>([]);
    const [selectedSymbol, setSelectedSymbol] = useState<string>(() => 
        localStorage.getItem('selectedSymbol') || 'R_10'
    );
    const [compareDigit, setCompareDigit] = useState<number | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [showAll, setShowAll] = useState(false);
    const [pipSize, setPipSize] = useState(2);
    const [markets, setMarkets] = useState<any[]>([]);
    const [marketGroups, setMarketGroups] = useState<MarketGroup>({
        volatility: [],
        jump: [],
        other: []
    });

    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const currentSubscriptionRef = useRef<string | null>(null);

    useEffect(() => {
        connectWebSocket();
        return () => {
            if (reconnectTimeoutRef.current) clearTimeout(reconnectTimeoutRef.current);
            if (wsRef.current) wsRef.current.close();
        };
    }, []);

    const connectWebSocket = () => {
        if (wsRef.current) {
            wsRef.current.onclose = null;
            wsRef.current.close();
        }

        const ws = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=115423');
        wsRef.current = ws;

        ws.onopen = () => {
            setIsConnected(true);
            ws.send(JSON.stringify({
                active_symbols: 'brief',
                product_type: 'basic'
            }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.msg_type === 'active_symbols') {
                const symbols = data.active_symbols.filter(
                    (s: any) => s.subgroup === 'synthetics' && 
                    (s.market === 'synthetic_index' || s.market === 'volatility_indices')
                );

                symbols.sort((a: any, b: any) => {
                    const getNum = (name: string) => {
                        const match = name.match(/\d+/);
                        return match ? parseInt(match[0], 10) : 0;
                    };
                    return getNum(a.display_name) - getNum(b.display_name);
                });

                setMarkets(symbols);

                const vol: any[] = [];
                const jmp: any[] = [];
                const oth: any[] = [];

                symbols.forEach((s: any) => {
                    const name = s.display_name.toLowerCase();
                    if (name.includes('jump')) {
                        jmp.push(s);
                    } else if (name.includes('volatility') || name.includes('vol') || s.market === 'volatility_indices') {
                        vol.push(s);
                    } else {
                        oth.push(s);
                    }
                });

                setMarketGroups({ volatility: vol, jump: jmp, other: oth });

                if (symbols.length > 0 && !currentSubscriptionRef.current) {
                    const symbol = symbols.find((s: any) => s.symbol === selectedSymbol) 
                        ? selectedSymbol 
                        : symbols[0].symbol;
                    subscribeToTicks(symbol);
                }
            }

            if (data.history) {
                const tickData = data.history.prices.map((price: string, idx: number) => ({
                    time: data.history.times[idx],
                    quote: parseFloat(price)
                }));
                setTicks(tickData);
                if (data.pip_size !== undefined) setPipSize(data.pip_size);
            } else if (data.tick && data.tick.symbol === currentSubscriptionRef.current) {
                const quote = parseFloat(data.tick.quote);
                setCurrentPrice(quote);
                setTicks(prev => {
                    const newTicks = [...prev, { time: data.tick.epoch, quote }];
                    return newTicks.length > 1000 ? newTicks.slice(-1000) : newTicks;
                });
                if (data.tick.pip_size !== undefined) setPipSize(data.tick.pip_size);
            }
        };

        ws.onclose = () => {
            setIsConnected(false);
            reconnectTimeoutRef.current = setTimeout(connectWebSocket, 2000);
        };

        ws.onerror = () => {
            setIsConnected(false);
            reconnectTimeoutRef.current = setTimeout(connectWebSocket, 2000);
        };
    };

    const subscribeToTicks = (symbol: string) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            if (currentSubscriptionRef.current && currentSubscriptionRef.current !== symbol) {
                wsRef.current.send(JSON.stringify({ forget: currentSubscriptionRef.current }));
            }
            wsRef.current.send(JSON.stringify({
                ticks_history: symbol,
                count: 1000,
                end: 'latest',
                style: 'ticks',
                subscribe: 1
            }));
            currentSubscriptionRef.current = symbol;
            setTicks([]);
        }
    };

    const handleSymbolChange = (symbol: string) => {
        setSelectedSymbol(symbol);
        localStorage.setItem('selectedSymbol', symbol);
        setTicks([]);
        setTimeout(() => subscribeToTicks(symbol), 300);
    };

    const getLastDigit = (quote: number): number => {
        return parseInt(quote.toFixed(pipSize).slice(-1), 10);
    };

    // Calculate digit distribution
    const digitDistribution = (() => {
        const counts = Array(10).fill(0);
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            counts[digit]++;
        });
        return counts.map(count => (count / ticks.length) * 100);
    })();

    // Calculate even/odd
    const evenOddStats = (() => {
        const counts = Array(10).fill(0);
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            counts[digit]++;
        });
        const evenCount = counts.filter((_, idx) => idx % 2 === 0).reduce((a, b) => a + b, 0);
        const oddCount = counts.filter((_, idx) => idx % 2 !== 0).reduce((a, b) => a + b, 0);
        const total = evenCount + oddCount;
        return {
            even: total > 0 ? (evenCount / total) * 100 : 0,
            odd: total > 0 ? (oddCount / total) * 100 : 0
        };
    })();

    // Calculate rise/fall
    const riseFallStats = (() => {
        let rise = 0, fall = 0;
        for (let i = 1; i < ticks.length; i++) {
            if (ticks[i].quote > ticks[i - 1].quote) rise++;
            else if (ticks[i].quote < ticks[i - 1].quote) fall++;
        }
        const total = rise + fall;
        return {
            rise: total > 0 ? (rise / total) * 100 : 0,
            fall: total > 0 ? (fall / total) * 100 : 0
        };
    })();

    // Calculate over/under/equal
    const compareStats = (() => {
        if (compareDigit === null) return { over: 0, under: 0, equal: 0 };
        let over = 0, under = 0, equal = 0;
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            if (digit > compareDigit) over++;
            else if (digit < compareDigit) under++;
            else equal++;
        });
        const total = ticks.length;
        return {
            over: total > 0 ? (over / total) * 100 : 0,
            under: total > 0 ? (under / total) * 100 : 0,
            equal: total > 0 ? (equal / total) * 100 : 0
        };
    })();

    const currentDigit = currentPrice ? getLastDigit(currentPrice) : null;
    const maxPercent = Math.max(...digitDistribution);
    const minPercent = Math.min(...digitDistribution.filter(p => p > 0));
    const lastDigits = ticks.map(t => getLastDigit(t.quote));
    const displayCount = showAll ? 100 : 50;
    const displayDigits = lastDigits.slice(-displayCount);

    return (
        <div className='digit-analysis'>
            <main className='digit-analysis__main'>
                {/* Price Section */}
                <section className='digit-analysis__price-section'>
                    <div className='price-content'>
                        <div className='current-price'>
                            {currentPrice ? currentPrice.toFixed(pipSize) : 'N/A'}
                        </div>
                        <div className='price-label'>Current Price</div>
                    </div>
                    <div className='market-selector'>
                        <select
                            value={selectedSymbol}
                            onChange={(e) => handleSymbolChange(e.target.value)}
                            className='symbol-select'
                        >
                            {marketGroups.volatility.length > 0 && (
                                <optgroup label='VOLATILITY MARKETS'>
                                    {marketGroups.volatility.map(m => (
                                        <option key={m.symbol} value={m.symbol}>{m.display_name}</option>
                                    ))}
                                </optgroup>
                            )}
                            {marketGroups.jump.length > 0 && (
                                <optgroup label='JUMP INDICES'>
                                    {marketGroups.jump.map(m => (
                                        <option key={m.symbol} value={m.symbol}>{m.display_name}</option>
                                    ))}
                                </optgroup>
                            )}
                            {marketGroups.other.length > 0 && (
                                <optgroup label='OTHER MARKETS'>
                                    {marketGroups.other.map(m => (
                                        <option key={m.symbol} value={m.symbol}>{m.display_name}</option>
                                    ))}
                                </optgroup>
                            )}
                            {markets.length === 0 && <option value='R_10'>Loading Markets...</option>}
                        </select>
                        <div className='selector-label'>Market</div>
                    </div>
                </section>

                {/* Digit Distribution */}
                <section className='digit-analysis__section'>
                    <h2 className='section-title'>Digit Distribution</h2>
                    <div className='digit-grid'>
                        {digitDistribution.map((percent, digit) => {
                            const isLowest = percent === minPercent && percent > 0;
                            const isHighest = percent === maxPercent && percent > 0;
                            const progress = maxPercent > 0 ? (percent / maxPercent) * 100 : 0;
                            const circumference = 163.4;
                            const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

                            return (
                                <div key={digit} className='digit-container'>
                                    {digit === currentDigit && (
                                        <div className='current-indicator'>▼</div>
                                    )}
                                    <div className='digit-circle-wrapper'>
                                        <div className='digit-circle'>
                                            <svg className='progress-ring' viewBox='0 0 64 64'>
                                                <circle
                                                    cx='32'
                                                    cy='32'
                                                    r='26'
                                                    fill='none'
                                                    stroke={isLowest ? '#ef4444' : isHighest ? '#10b981' : '#374151'}
                                                    strokeWidth='4'
                                                    strokeDasharray={strokeDasharray}
                                                    strokeLinecap='round'
                                                    transform='rotate(-90 32 32)'
                                                />
                                            </svg>
                                            <div className={`digit-number ${digit === currentDigit ? 'current' : isLowest ? 'lowest' : isHighest ? 'highest' : ''}`}>
                                                {digit}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`digit-percentage ${isLowest ? 'lowest' : isHighest ? 'highest' : ''}`}>
                                        {percent.toFixed(1)}%
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='analysis-stats'>
                        Highest: <span className='stat-highest'>{maxPercent.toFixed(2)}%</span> | 
                        Lowest: <span className='stat-lowest'>{minPercent.toFixed(2)}%</span>
                    </div>
                </section>

                {/* Digit Comparison */}
                <section className='digit-analysis__section'>
                    <h2 className='section-title'>Digit Comparison</h2>
                    <div className='digit-selector'>
                        <div className='selector-label'>Select a digit to analyze:</div>
                        <div className='digit-buttons'>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => (
                                <button
                                    key={d}
                                    className={`digit-btn ${compareDigit === d ? 'selected' : ''}`}
                                    onClick={() => setCompareDigit(d)}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                    </div>
                    {compareDigit !== null && (
                        <div className='comparison-analysis'>
                            <div className='comparison-grid'>
                                <div className='stat-card over'>
                                    <div className='stat-value'>{compareStats.over.toFixed(1)}%</div>
                                    <div className='stat-label'>Over {compareDigit}</div>
                                </div>
                                <div className='stat-card under'>
                                    <div className='stat-value'>{compareStats.under.toFixed(1)}%</div>
                                    <div className='stat-label'>Under {compareDigit}</div>
                                </div>
                                <div className='stat-card equal'>
                                    <div className='stat-value'>{compareStats.equal.toFixed(1)}%</div>
                                    <div className='stat-label'>Equal {compareDigit}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Even/Odd Pattern */}
                <section className='digit-analysis__section'>
                    <h2 className='section-title'>Even/Odd Pattern</h2>
                    <div className='eo-grid'>
                        <div className='stat-card even'>
                            <div className='stat-value'>{evenOddStats.even.toFixed(1)}%</div>
                            <div className='stat-label'>Even</div>
                        </div>
                        <div className='stat-card odd'>
                            <div className='stat-value'>{evenOddStats.odd.toFixed(1)}%</div>
                            <div className='stat-label'>Odd</div>
                        </div>
                    </div>
                    <div className='pattern-section'>
                        <h3 className='pattern-title'>Last 50 Digits Pattern</h3>
                        <div className='pattern-grid'>
                            {displayDigits.map((d, idx) => (
                                <div key={idx} className={`pattern-box ${d % 2 === 0 ? 'even' : 'odd'}`}>
                                    {d % 2 === 0 ? 'E' : 'O'}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Market Movement */}
                <section className='digit-analysis__section'>
                    <h2 className='section-title'>Market Movement</h2>
                    <div className='rf-grid'>
                        <div className='stat-card rise'>
                            <div className='stat-value'>{riseFallStats.rise.toFixed(1)}%</div>
                            <div className='stat-label'>Rise</div>
                        </div>
                        <div className='stat-card fall'>
                            <div className='stat-value'>{riseFallStats.fall.toFixed(1)}%</div>
                            <div className='stat-label'>Fall</div>
                        </div>
                    </div>
                </section>

                {/* Last Digits Stream */}
                <section className='digit-analysis__section'>
                    <h2 className='section-title'>Last Digits Stream</h2>
                    <div className='last-digits-container'>
                        <div className='digits-header'>
                            <span className='header-label'>Latest digits ({displayCount} showing)</span>
                        </div>
                        <div className='digits-content'>
                            <div className='digits-grid'>
                                {displayDigits.map((d, idx) => (
                                    <div
                                        key={idx}
                                        className={`digit-item ${d % 2 === 0 ? 'even-digit' : 'odd-digit'} ${idx === displayDigits.length - 1 ? 'latest' : ''}`}
                                        title={`Position ${displayCount - idx}: ${d}`}
                                    >
                                        <span className='digit-value'>{d}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='digits-footer'>
                            <button className='toggle-btn' onClick={() => setShowAll(!showAll)}>
                                {showAll ? 'Show Less (50)' : 'Show More (100)'}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DigitAnalysis;
