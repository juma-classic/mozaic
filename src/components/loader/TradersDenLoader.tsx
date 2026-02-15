import React, { useEffect, useRef, useState } from 'react';
import './TradersDenLoader.scss';

interface TradersDenLoaderProps {
    onLoadComplete?: () => void;
    duration?: number;
}

export const TradersDenLoader: React.FC<TradersDenLoaderProps> = ({ onLoadComplete, duration = 1500 }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const statuses = [
        'Establishing Connection...',
        'Loading Market Data...',
        'Initializing Trading Platform...',
        'Access Granted. Welcome to MOZAIC TRADING HUB.',
    ];

    // Digital Rain Effect - Optimized for performance
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const fontSize = 14;
        const characters = '01';
        let columns: number;
        let drops: number[];
        let animationId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.floor(Math.random() * -100);
            }
        };

        const drawDigitalRain = () => {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#06D6A0';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            animationId = requestAnimationFrame(drawDigitalRain);
        };

        resizeCanvas();
        animationId = requestAnimationFrame(drawDigitalRain);
        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    // Progress and Status Updates - Optimized for faster loading
    useEffect(() => {
        const statusInterval = duration / statuses.length;
        const progressInterval = 30; // Update every 30ms for smooth animation
        const progressIncrement = 100 / (duration / progressInterval);

        const progressTimer = setInterval(() => {
            setProgress(prev => {
                const next = prev + progressIncrement;
                return next >= 100 ? 100 : next;
            });
        }, progressInterval);

        const statusTimer = setInterval(() => {
            setStatusIndex(prev => {
                if (prev < statuses.length - 1) {
                    return prev + 1;
                }
                return prev;
            });
        }, statusInterval);

        const completeTimer = setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
                if (onLoadComplete) {
                    onLoadComplete();
                }
            }, 300); // Reduced fade out time
        }, duration);

        return () => {
            clearInterval(progressTimer);
            clearInterval(statusTimer);
            clearTimeout(completeTimer);
        };
    }, [duration, onLoadComplete, statuses.length]);

    return (
        <div className={`traders-den-loader ${isComplete ? 'fade-out' : ''}`}>
            <canvas ref={canvasRef} className='digital-rain-canvas' />

            <div className='loading-container'>
                {/* App Logo/Name */}
                <div className='logo-section'>
                    <h1 className='logo-title'>
                        <span className='logo-traders'>TRADERS</span>
                        <span className='logo-den'>DEN</span>
                    </h1>
                    <p className='logo-subtitle'>Decoding Market Algorithms...</p>
                </div>

                {/* Custom Data Pulse Loader */}
                <div className='data-pulse-container'>
                    <div className='data-bar bar-1'></div>
                    <div className='data-bar bar-2'></div>
                    <div className='data-bar bar-3'></div>
                </div>

                {/* Progress Bar and Status */}
                <div className='progress-section'>
                    <div className='progress-bar-container'>
                        <div className='progress-bar-fill' style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className='loading-status'>{statuses[statusIndex]}</p>
                </div>
            </div>
        </div>
    );
};

export default TradersDenLoader;
