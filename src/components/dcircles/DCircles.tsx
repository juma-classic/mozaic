import React, { useState, useEffect, useRef } from 'react';
import './DCircles.scss';

interface TickData {
    time: number;
    quote: number;
}

export const DCircles: React.FC = () => {
    const [ticks, setTicks] = useState<TickData[]>([]);
    const [selectedSymbol, setSelectedSymbol] = useState('R_10');
    const [selectedDigit, setSelectedDigit] = useState<number | null>(null);
    const [currentPrice, setCurrentPrice] = useState<number | null>(null);
    const [pipSize, setPipSize] = useState(2);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        connectWebSocket();
        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        };
    }, [selectedSymbol]);

    const connectWebSocket = () => {
        if (wsRef.current) {
            wsRef.current.close();
        }

        const ws = new WebSocket('wss://ws.derivws.com/websockets/v3?app_id=115423');
        wsRef.current = ws;

        ws.onopen = () => {
            ws.send(JSON.stringify({
                ticks_history: selectedSymbol,
                count: 1000,
                end: 'latest',
                style: 'ticks',
                subscribe: 1
            }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.history) {
                const tickData = data.history.prices.map((price: string, index: number) => ({
                    time: data.history.times[index],
                    quote: parseFloat(price)
                }));
                setTicks(tickData);
                if (data.pip_size !== undefined) {
                    setPipSize(data.pip_size);
                }
            } else if (data.tick) {
                const newTick = {
                    time: data.tick.epoch,
                    quote: parseFloat(data.tick.quote)
                };
                setTicks(prev => [...prev.slice(-999), newTick]);
                setCurrentPrice(newTick.quote);
                if (data.tick.pip_size !== undefined) {
                    setPipSize(data.tick.pip_size);
                }
            }
        };
    };

    const getLastDigit = (price: number): number => {
        return parseInt(price.toFixed(pipSize).slice(-1), 10);
    };

    const digitDistribution = (() => {
        const counts = Array(10).fill(0);
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            counts[digit]++;
        });
        return counts.map(count => (count / ticks.length) * 100);
    })();

    const currentDigit = currentPrice ? getLastDigit(currentPrice) : null;
    const maxPercent = Math.max(...digitDistribution);
    const minPercent = Math.min(...digitDistribution.filter(p => p > 0));

    const comparisonStats = selectedDigit !== null ? (() => {
        let over = 0, under = 0, equal = 0;
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            if (digit > selectedDigit) over++;
            else if (digit < selectedDigit) under++;
            else equal++;
        });
        const total = ticks.length;
        return {
            over: (over / total) * 100,
            under: (under / total) * 100,
            equal: (equal / total) * 100
        };
    })() : null;

    const evenOddStats = (() => {
        let even = 0, odd = 0;
        ticks.forEach(tick => {
            const digit = getLastDigit(tick.quote);
            if (digit % 2 === 0) even++;
            else odd++;
        });
        const total = ticks.length;
        return {
            even: (even / total) * 100,
            odd: (odd / total) * 100
        };
    })();

    return (
        <div className="dcircles-container">
            <div className="dcircles-header">
                <div className="price-display">
                    <div className="current-price">{currentPrice ? currentPrice.toFixed(pipSize) : 'N/A'}</div>
                    <div className="price-label">Current Price</div>
                </div>
                <div className="market-selector">
                    <select value={selectedSymbol} onChange={(e) => setSelectedSymbol(e.target.value)}>
                        <option value="R_10">Volatility 10 Index</option>
                        <option value="R_25">Volatility 25 Index</option>
                        <option value="R_50">Volatility 50 Index</option>
                        <option value="R_75">Volatility 75 Index</option>
                        <option value="R_100">Volatility 100 Index</option>
                        <option value="1HZ10V">Volatility 10 (1s) Index</option>
                        <option value="1HZ25V">Volatility 25 (1s) Index</option>
                        <option value="1HZ50V">Volatility 50 (1s) Index</option>
                        <option value="1HZ75V">Volatility 75 (1s) Index</option>
                        <option value="1HZ100V">Volatility 100 (1s) Index</option>
                        <option value="1HZ150V">Volatility 150 (1s) Index</option>
                        <option value="1HZ250V">Volatility 250 (1s) Index</option>
                        <option value="1HZ300V">Volatility 300 (1s) Index</option>
                    </select>
                    <div className="selector-label">Market</div>
                </div>
            </div>

            <section className="analysis-section">
                <h2>Digit Distribution</h2>
                <div className="digit-grid">
                    {digitDistribution.map((percent, digit) => {
                        const isLowest = percent === minPercent && percent > 0;
                        const isHighest = percent === maxPercent && percent > 0;
                        const progress = maxPercent > 0 ? (percent / maxPercent) * 100 : 0;

                        return (
                            <div key={digit} className="digit-container">
                                {digit === currentDigit && <div className="current-indicator">▼</div>}
                                <div className="digit-circle-wrapper">
                                    <div className="digit-circle">
                                        <svg className="progress-ring" viewBox="0 0 64 64">
                                            <circle
                                                cx="32"
                                                cy="32"
                                                r="26"
                                                fill="none"
                                                stroke={isLowest ? '#ef4444' : isHighest ? '#10b981' : '#374151'}
                                                strokeWidth="4"
                                                strokeDasharray={`${(progress / 100) * 163.4} 163.4`}
                                                strokeLinecap="round"
                                                transform="rotate(-90 32 32)"
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
                <div className="analysis-stats">
                    Highest: <span className="stat-highest">{maxPercent.toFixed(2)}%</span> | 
                    Lowest: <span className="stat-lowest">{minPercent.toFixed(2)}%</span>
                </div>
            </section>

            <section className="analysis-section">
                <h2>Digit Comparison</h2>
                <div className="digit-selector">
                    <div className="selector-label">Select a digit to analyze:</div>
                    <div className="digit-buttons">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => (
                            <button
                                key={d}
                                className={`digit-btn ${selectedDigit === d ? 'selected' : ''}`}
                                onClick={() => setSelectedDigit(d)}
                            >
                                {d}
                            </button>
                        ))}
                    </div>
                </div>
                {comparisonStats && (
                    <div className="comparison-grid">
                        <div className="stat-card over">
                            <div className="stat-value">{comparisonStats.over.toFixed(1)}%</div>
                            <div className="stat-label">Over {selectedDigit}</div>
                        </div>
                        <div className="stat-card under">
                            <div className="stat-value">{comparisonStats.under.toFixed(1)}%</div>
                            <div className="stat-label">Under {selectedDigit}</div>
                        </div>
                        <div className="stat-card equal">
                            <div className="stat-value">{comparisonStats.equal.toFixed(1)}%</div>
                            <div className="stat-label">Equal {selectedDigit}</div>
                        </div>
                    </div>
                )}
            </section>

            <section className="analysis-section">
                <h2>Even/Odd Pattern</h2>
                <div className="eo-grid">
                    <div className="stat-card even">
                        <div className="stat-value">{evenOddStats.even.toFixed(1)}%</div>
                        <div className="stat-label">Even</div>
                    </div>
                    <div className="stat-card odd">
                        <div className="stat-value">{evenOddStats.odd.toFixed(1)}%</div>
                        <div className="stat-label">Odd</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DCircles;
