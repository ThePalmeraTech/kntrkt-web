import React from 'react';
import { motion } from 'framer-motion';
import './Features.scss';

const Features = () => {
    const features = [
        {
            title: 'Quick Contracts',
            description: 'Create tailored agreements in just minutes—no hassle, no guesswork.',
            image: 'https://placehold.co/300x200?text=Quick+Contracts'
        },
        {
            title: 'Payments Made Easy',
            description: 'Secure, embedded payment options that take the stress out of getting paid.',
            image: 'https://placehold.co/300x200?text=Easy+Payments'
        },
        {
            title: 'Smart Invoicing',
            description: 'Automate follow-ups and keep everything on track with minimal effort.',
            image: 'https://placehold.co/300x200?text=Smart+Invoicing'
        },
        {
            title: 'Legal Peace of Mind',
            description: 'Stay compliant with built-in safeguards designed to protect your business.',
            image: 'https://placehold.co/300x200?text=Legal+Protection'
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Features That Make Life Easier
                    </motion.h2>
                    <motion.p 
                        className="features-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Tired of jumping between tools to get things done? KNTRKT delivers a one-stop solution 
                        to keep your business running seamlessly. Here's how:
                    </motion.p>
                </div>
                <div className="row">
                    {features.map((feature, index) => (
                        <motion.div 
                            className="col-md-6 col-lg-3" 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                        >
                            <div className="feature-card">
                                <img src={feature.image} alt={feature.title} className="img-fluid" />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
