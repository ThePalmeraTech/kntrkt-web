import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.scss';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter (Freemium)',
            price: '$9',
            period: '/mo',
            description: 'Start strong with no upfront costs—only pay per transaction service fees. Perfect for testing the waters risk-free.',
            note: '*With our Starter plan, you only pay service fees until your first 12 contracts are signed—giving you flexibility without commitment.',
            ctaText: 'Get Started'
        },
        {
            name: 'Studio',
            price: '$29',
            period: '/mo',
            description: 'Scale up with confidence. Gain access to premium templates, custom branding, advanced tools, and team collaboration features to grow your business seamlessly.',
            ctaText: 'Get Started'
        },
        {
            name: 'Enterprise',
            price: '$99',
            period: '/mo',
            description: 'Unlock it all. Enjoy unlimited features, custom workflows, bulk operations, and dedicated 24/7 support tailored for large teams and complex projects.',
            ctaText: 'Contact Sales'
        }
    ];

    return (
        <section className="pricing-section">
            <div className="container">
                <motion.div
                    className="pricing-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Pick Your Perfect Match</h2>
                    <p>Start free and scale as you grow</p>
                </motion.div>
                <div className="row pricing-cards">
                    {plans.map((plan, index) => (
                        <motion.div
                            className="col-md-4"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="pricing-card">
                                <h3>{plan.name}</h3>
                                <div className="price">
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">{plan.period}</span>
                                </div>
                                <p className="description">{plan.description}</p>
                                {plan.note && <p className="note">{plan.note}</p>}
                                <button className="btn btn-primary">{plan.ctaText}</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="pricing-footer text-center">
                    <p className="tagline">
                        <em>It's not just a platform; it's a partner in efficiency.</em>
                    </p>
                    <p className="subtitle">
                        KNTRKT is the all-in-one recipe for streamlining your workflow so you can focus on making big moves.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
