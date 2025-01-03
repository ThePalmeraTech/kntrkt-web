import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Features.scss';

const Features = () => {
    const features = [
        {
            title: 'Digital Contracts',
            description: 'Create and manage contracts with ease using our intuitive platform.',
            icon: 'fas fa-file-signature',
            image: 'https://placehold.co/600x400?text=Digital+Contracts'
        },
        {
            title: 'Seamless Payments',
            description: 'Fast and secure payment processing integrated directly into your contracts.',
            icon: 'fas fa-credit-card',
            image: 'https://placehold.co/600x400?text=Seamless+Payments'
        },
        {
            title: 'Smart Invoicing',
            description: 'Automate your invoicing process and get paid faster.',
            icon: 'fas fa-file-invoice-dollar',
            image: 'https://placehold.co/600x400?text=Smart+Invoicing'
        },
        {
            title: 'Legal Compliance',
            description: 'Ensure your contracts are compliant with regional laws and regulations.',
            icon: 'fas fa-balance-scale',
            image: 'https://placehold.co/600x400?text=Legal+Compliance'
        }
    ];

    return (
        <div className="features-page">
            <section className="features-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Features</h1>
                        <p className="lead">
                            Discover the powerful features that make Kntrkt the best choice for creative professionals.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="features-list">
                <div className="container">
                    <div className="row">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                className="col-md-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="feature-card">
                                    <div className="feature-icon">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                    <img src={feature.image} alt={feature.title} className="img-fluid rounded-4 shadow-lg" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="features-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Experience These Features?</h2>
                        <p>Start creating professional contracts and managing payments with Kntrkt today.</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-light btn-lg">
                                Start Free Trial
                            </Link>
                            <Link to="/pricing" className="btn btn-outline-light btn-lg">
                                View Pricing
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Features; 