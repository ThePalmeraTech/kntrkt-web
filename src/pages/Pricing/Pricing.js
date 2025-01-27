import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Pricing.scss';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(true);

    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for freelancers and individuals',
            monthlyPrice: 9,
            annualPrice: 89,
            features: [
                'Up to 5 contracts per month',
                'Basic contract templates',
                'Digital signatures',
                'Email support',
                'Basic analytics'
            ],
            cta: 'Start Free Trial',
            highlighted: false
        },
        {
            name: 'Professional',
            description: 'Ideal for growing agencies and teams',
            monthlyPrice: 29,
            annualPrice: 290,
            features: [
                'Unlimited contracts',
                'Premium templates',
                'Priority support',
                'Advanced analytics',
                'Custom branding',
                'Team collaboration',
                'API access'
            ],
            cta: 'Get Started',
            highlighted: true
        },
        {
            name: 'Enterprise',
            description: 'For large organizations with custom needs',
            monthlyPrice: 99,
            annualPrice: 990,
            features: [
                'Everything in Professional',
                'Custom contract workflows',
                'Dedicated account manager',
                'SLA support',
                'Advanced security features',
                'Custom integrations',
                'Bulk operations'
            ],
            cta: 'Contact Sales',
            highlighted: false
        }
    ];

    return (
        <div className="pricing-page">
            <section className="pricing-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1>Simple, Transparent Pricing</h1>
                        <p className="lead">Choose the perfect plan for your business</p>
                        
                        <div className="pricing-toggle">
                            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                            <button 
                                className={`toggle-switch ${isAnnual ? 'active' : ''}`}
                                onClick={() => setIsAnnual(!isAnnual)}
                            >
                                <span className="switch"></span>
                            </button>
                            <span className={isAnnual ? 'active' : ''}>
                                Annual
                                <span className="savings-badge">Save 20%</span>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pricing-plans">
                <div className="container">
                    <div className="row g-4">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                className="col-lg-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                                    <div className="card-header">
                                        <h3>{plan.name}</h3>
                                        <p>{plan.description}</p>
                                        <div className="price">
                                            <span className="currency">$</span>
                                            <span className="amount">
                                                {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="period">
                                                /{isAnnual ? 'year' : 'month'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="features-list">
                                            {plan.features.map((feature, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                >
                                                    <i className="fas fa-check"></i>
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <Link 
                                            to={plan.name === 'Enterprise' ? '/contact' : '/register'} 
                                            className={`btn btn-lg ${plan.highlighted ? 'btn-primary' : 'btn-outline-primary'} w-100`}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport
                    >
                        <h2>Ready to get started?</h2>
                        <p>Start your free trial today and see how our platform can help you grow your business.</p>
                        <Link to="/register" className="btn btn-lg btn-primary">Get Started</Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing; 