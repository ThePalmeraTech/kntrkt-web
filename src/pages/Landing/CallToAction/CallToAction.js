import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './CallToAction.scss';

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Transform Your Creative Business?</h2>
                        <p>Join thousands of creatives who've already revolutionized their workflow with Kntrkt.</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-light btn-lg">
                                Start Free Trial
                            </Link>
                            <Link to="/demo" className="btn btn-outline-light btn-lg">
                                Watch Video
                            </Link>
                        </div>
                        <div className="cta-trust">
                            <div className="trust-stats">
                                <div className="stat">
                                    <span className="number">10K+</span>
                                    <span className="label">Active Users</span>
                                </div>
                                <div className="stat">
                                    <span className="number">4.9/5</span>
                                    <span className="label">User Rating</span>
                                </div>
                                <div className="stat">
                                    <span className="number">99.9%</span>
                                    <span className="label">Uptime</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
