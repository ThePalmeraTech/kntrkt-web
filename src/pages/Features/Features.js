import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Features.scss';
import { Helmet } from 'react-helmet';
import SEO from '../../components/SEO/SEO';
import Footer from '../../components/Footer/Footer';

const Features = () => {
    const features = [
        {
            id: 1,
            title: 'Smart Contract Generation',
            description: 'Create professional contracts in minutes with our AI-powered templates.',
            icon: '🔒',
            highlights: [
                'Pre-approved legal templates',
                'Custom branding options',
                'Digital signature ready',
                'Multi-language support'
            ],
            image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Smart+Contract+Generation'
        },
        {
            id: 2,
            title: 'Automated Payments',
            description: 'Get paid faster with integrated payment processing and automated reminders.',
            icon: '💳',
            highlights: [
                'Multiple payment methods',
                'Automatic invoicing',
                'Payment tracking',
                'Instant notifications'
            ],
            image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Automated+Payments'
        },
        {
            id: 3,
            title: 'Client Management',
            description: 'Keep all your client information organized and accessible in one place.',
            icon: '👥',
            highlights: [
                'Client profiles',
                'Communication history',
                'Document sharing',
                'Activity tracking'
            ],
            image: 'https://placehold.co/600x400/2a2a2a/ffffff?text=Client+Management'
        }
    ];

    return (
        <>
            <SEO 
                title="Features - Smart Contract Management Tools"
                description="Explore KNTRKT's powerful features: AI-powered contract generation, secure digital signatures, automated payments, and client management tools."
                keywords="contract templates, digital signatures, automated payments, client management, contract automation"
            />
            <div className="features-page">
                <section className="features-hero">
                    <div className="container">
                        <motion.div 
                            className="hero-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1>
                                <span className="gradient-text">Powerful Features</span>
                                <br />
                                for Modern Professionals
                            </h1>
                            <p>Transform the way you manage contracts and payments with our innovative tools.</p>
                        </motion.div>
                    </div>
                    <div className="hero-background">
                        <div className="gradient-overlay"></div>
                        <div className="pattern-overlay"></div>
                    </div>
                </section>

                <section className="features-main">
                    <div className="container">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={feature.id}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="feature-content">
                                    <span className="feature-icon">{feature.icon}</span>
                                    <h2>{feature.title}</h2>
                                    <p>{feature.description}</p>
                                    <ul className="feature-highlights">
                                        {feature.highlights.map((highlight, i) => (
                                            <li key={i}>
                                                <svg viewBox="0 0 24 24" className="check-icon">
                                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                                </svg>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="feature-visual">
                                    <img src={feature.image} alt={feature.title} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="features-cta">
                    <motion.div 
                        className="container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="cta-content">
                            <h2>Ready to streamline your workflow?</h2>
                            <p>Join thousands of professionals already using KNTRKT</p>
                            <div className="cta-buttons">
                                <Link to="/early-access" className="btn btn-primary">
                                    Join Early Access
                                </Link>
                                <Link to="/demo" className="btn btn-outline">
                                    Watch Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Features; 