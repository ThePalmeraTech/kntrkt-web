import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingCalculator.scss';

const LandingCalculator = () => {
    const [calculatorData, setCalculatorData] = useState({
        weeklyVolume: 5,
        hourlyRate: 50
    });

    const [timePeriod, setTimePeriod] = useState('monthly'); // Default to monthly
    const [savings, setSavings] = useState({
        timeSavings: 0,
        moneySavings: 0,
        totalSavings: 0
    });

    const calculateSavings = (volume, rate) => {
        // Base weekly calculations
        const timePerContract = 7.5 / 60; // Convert to hours
        const weeklyTimeSaved = timePerContract * volume;
        const weeklyTimeSavingsValue = weeklyTimeSaved * rate;
        const weeklyMoneySaved = 13.30 * volume;
        const weeklyTotal = weeklyTimeSavingsValue + weeklyMoneySaved;

        // Calculate for different periods
        const periods = {
            weekly: {
                timeSavings: weeklyTimeSavingsValue,
                moneySavings: weeklyMoneySaved,
                totalSavings: weeklyTotal
            },
            monthly: {
                timeSavings: weeklyTimeSavingsValue * 4,
                moneySavings: weeklyMoneySaved * 4,
                totalSavings: weeklyTotal * 4
            },
            yearly: {
                timeSavings: weeklyTimeSavingsValue * 52,
                moneySavings: weeklyMoneySaved * 52,
                totalSavings: weeklyTotal * 52
            }
        };

        return periods[timePeriod];
    };

    useEffect(() => {
        const newSavings = calculateSavings(
            calculatorData.weeklyVolume,
            calculatorData.hourlyRate
        );
        setSavings(newSavings);
    }, [calculatorData, timePeriod]);

    return (
        <section className="landing-calculator">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="calculator-header text-center"
                >
                    <h2>Ready to Work Smarter?</h2>
                    <p className="lead">
                        Try our calculator now and see exactly how KNTRKT can save you time and money—no strings attached.
                    </p>
                </motion.div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div
                            className="calculator-form"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="form-group">
                                <label>Weekly Contract Volume</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={calculatorData.weeklyVolume}
                                    onChange={(e) => setCalculatorData({
                                        ...calculatorData,
                                        weeklyVolume: Number(e.target.value)
                                    })}
                                    className="form-range"
                                />
                                <div className="range-value">
                                    <span>{calculatorData.weeklyVolume} contracts/week</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Employee Hourly Rate ($)</label>
                                <input
                                    type="range"
                                    min="15"
                                    max="200"
                                    step="5"
                                    value={calculatorData.hourlyRate}
                                    onChange={(e) => setCalculatorData({
                                        ...calculatorData,
                                        hourlyRate: Number(e.target.value)
                                    })}
                                    className="form-range"
                                />
                                <div className="range-value">
                                    <span>${calculatorData.hourlyRate}/hour</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-6">
                        <motion.div
                            className="savings-display"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="time-period-selector">
                                <button 
                                    className={`period-btn ${timePeriod === 'weekly' ? 'active' : ''}`}
                                    onClick={() => setTimePeriod('weekly')}
                                >
                                    Weekly
                                </button>
                                <button 
                                    className={`period-btn ${timePeriod === 'monthly' ? 'active' : ''}`}
                                    onClick={() => setTimePeriod('monthly')}
                                >
                                    Monthly
                                </button>
                                <button 
                                    className={`period-btn ${timePeriod === 'yearly' ? 'active' : ''}`}
                                    onClick={() => setTimePeriod('yearly')}
                                >
                                    Yearly
                                </button>
                            </div>
                            <div className="savings-card">
                                <div className="savings-item">
                                    <span className="label">Time Value Saved</span>
                                    <span className="amount">${savings.timeSavings.toFixed(2)}</span>
                                </div>
                                <div className="savings-item">
                                    <span className="label">Money Saved</span>
                                    <span className="amount">${savings.moneySavings.toFixed(2)}</span>
                                </div>
                                <div className="total-savings">
                                    <span className="label">Total {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} Savings</span>
                                    <span className="amount">${savings.totalSavings.toFixed(2)}</span>
                                </div>
                            </div>
                            <Link to="/calculator" className="btn btn-primary btn-lg mt-4">
                                Get Detailed Calculation
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingCalculator; 