import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Calculator.scss';
import { Helmet } from 'react-helmet';
import SEO from '../../components/SEO/SEO';

const Calculator = () => {
    const [calculatorData, setCalculatorData] = useState({
        transferAmount: 500,
        weeklyVolume: 5,
        hourlyRate: 50,
        transactionsPerWeek: 10
    });

    const [timePeriod, setTimePeriod] = useState('monthly'); // Default to monthly

    const [savings, setSavings] = useState({
        paymentSavings: 0,
        timeSavings: 0,
        contractSavings: 0,
        totalSavings: 0
    });

    const calculateFees = (amount) => {
        const paypalFee = (amount * 0.029) + 0.30;
        const achFee = 1.50;
        const kntrktFee = (amount * 0.029) + 0.30;
        return {
            paypal: paypalFee,
            ach: achFee,
            kntrkt: kntrktFee
        };
    };

    const calculateTimeSavings = (transactions, hourlyRate) => {
        // PayPal takes 12.5 mins avg, Kntrkt takes 2.5 mins avg
        const timePerTransaction = (12.5 - 2.5) / 60; // Time saved in hours
        const weeklySavings = timePerTransaction * transactions * hourlyRate;
        
        const periods = {
            weekly: weeklySavings,
            monthly: weeklySavings * 4,
            yearly: weeklySavings * 52
        };
        
        return periods[timePeriod];
    };

    const calculateContractSavings = (contracts, hourlyRate) => {
        const timePerContract = (17.5 - 10) / 60; // Time saved in hours
        const weeklySavings = timePerContract * contracts * hourlyRate;
        
        const periods = {
            weekly: weeklySavings,
            monthly: weeklySavings * 4,
            yearly: weeklySavings * 52
        };
        
        return periods[timePeriod];
    };

    useEffect(() => {
        const fees = calculateFees(calculatorData.transferAmount);
        const feeDifference = fees.paypal - fees.kntrkt;
        
        // Calculate fee savings based on time period
        const periodMultiplier = {
            weekly: 1,
            monthly: 4,
            yearly: 52
        };
        
        const periodFees = feeDifference * calculatorData.transactionsPerWeek * periodMultiplier[timePeriod];
        const timeSavings = calculateTimeSavings(calculatorData.transactionsPerWeek, calculatorData.hourlyRate);
        const contractSavings = calculateContractSavings(calculatorData.weeklyVolume, calculatorData.hourlyRate);
        
        setSavings({
            paymentSavings: periodFees,
            timeSavings: timeSavings,
            contractSavings: contractSavings,
            totalSavings: periodFees + timeSavings + contractSavings
        });
    }, [calculatorData, timePeriod]);

    return (
        <>
            <SEO 
                title="Savings Calculator - See Your Potential ROI"
                description="Calculate your potential time and cost savings with KNTRKT's contract management and payment automation platform."
                keywords="ROI calculator, contract management savings, payment processing fees, time savings calculator, business efficiency"
            />
            <div className="calculator-page">
                <section className="calculator-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>Savings Calculator</h1>
                            <p className="lead">See how much time and money you can save with Kntrkt</p>
                        </motion.div>
                    </div>
                </section>

                <section className="calculator-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <motion.div
                                    className="calculator-form"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2>Enter Your Details</h2>
                                    <div className="form-group">
                                        <label>Average Transfer Amount ($)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={calculatorData.transferAmount}
                                            onChange={(e) => setCalculatorData({
                                                ...calculatorData,
                                                transferAmount: Number(e.target.value)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Weekly Contract Volume</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={calculatorData.weeklyVolume}
                                            onChange={(e) => setCalculatorData({
                                                ...calculatorData,
                                                weeklyVolume: Number(e.target.value)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Hourly Rate ($)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={calculatorData.hourlyRate}
                                            onChange={(e) => setCalculatorData({
                                                ...calculatorData,
                                                hourlyRate: Number(e.target.value)
                                            })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Weekly Payment Transactions</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={calculatorData.transactionsPerWeek}
                                            onChange={(e) => setCalculatorData({
                                                ...calculatorData,
                                                transactionsPerWeek: Number(e.target.value)
                                            })}
                                        />
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-lg-6">
                                <motion.div
                                    className="savings-results"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <h2>Your Potential Savings</h2>
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
                                            <h3>Payment Processing Savings</h3>
                                            <p className="amount">${savings.paymentSavings.toFixed(2)}</p>
                                            <span className="detail">vs. Traditional Payment Methods</span>
                                        </div>
                                        <div className="savings-item">
                                            <h3>Time Savings Value</h3>
                                            <p className="amount">${savings.timeSavings.toFixed(2)}</p>
                                            <span className="detail">Based on Payment Processing Time</span>
                                        </div>
                                        <div className="savings-item">
                                            <h3>Contract Management Savings</h3>
                                            <p className="amount">${savings.contractSavings.toFixed(2)}</p>
                                            <span className="detail">vs. Traditional Contract Methods</span>
                                        </div>
                                        <div className="total-savings">
                                            <h3>Total {timePeriod.charAt(0).toUpperCase() + timePeriod.slice(1)} Savings</h3>
                                            <p className="amount">${savings.totalSavings.toFixed(2)}</p>
                                            <span className="detail">Combined Time & Money Savings</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Calculator; 