import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>
                            Contracts & Payments
                            <br />
                            <span>for</span> forward-thinking Professionals
                        </h1>
                        <p className="hero-subtitle">
                            <strong>Work Smarter, Not Harder</strong>
                            <br /><br />
                            Say goodbye to tedious admin tasks with digital payment agreements.
                            KNTRKT makes managing contracts, payments, and invoices effortless
                            —giving you back time to focus on your business and what matters most.
                        </p>
                        <div className="hero-cta">
                            <Link to="/register" className="btn btn-primary btn-lg">
                                Start Free Trial
                            </Link>
                            <Link to="/demo" className="btn btn-outline-primary btn-lg">
                                Watch Video
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="col-lg-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="hero-image">
                            <img 
                                src="https://placehold.co/600x400?text=Platform+Preview" 
                                alt="Platform Preview"
                                className="img-fluid"
                            />
                        </div>
                        <div className="hero-caption mt-4">
                            <em>Effortless and Simplified</em>
                            <p className="text-muted">
                                Digital agreements built for milestone payouts and recurring transactions
                                —tailored to meet the needs of the modern-day professional.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
