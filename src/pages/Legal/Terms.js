import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Footer from '../../components/Footer/Footer';
import './Legal.scss';

const Terms = () => {
    const sections = [
        {
            title: "1. Terms of Service",
            content: "By accessing and using KNTRKT's services, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our services.",
            icon: "⚖️"
        },
        {
            title: "2. User Obligations",
            content: "Users must maintain accurate account information, protect their credentials, and use the platform responsibly. Any misuse or unauthorized access should be reported immediately.",
            icon: "👤"
        },
        {
            title: "3. Service Description",
            content: "KNTRKT provides contract management and payment processing services. We reserve the right to modify, suspend, or discontinue any aspect of our services with notice to users.",
            icon: "🔧"
        },
        {
            title: "4. Intellectual Property",
            content: "All content, features, and functionality of KNTRKT are owned by us and protected by international copyright, trademark, and other intellectual property laws.",
            icon: "📜"
        },
        {
            title: "5. Data Usage",
            content: "We collect and process data as described in our Privacy Policy. By using our services, you consent to such processing and guarantee that all data provided has been obtained legally.",
            icon: "🔐"
        },
        {
            title: "6. Payment Terms",
            content: "Users agree to pay all fees associated with their use of KNTRKT. Fees are non-refundable unless otherwise specified or required by law.",
            icon: "💳"
        }
    ];

    return (
        <>
            <SEO 
                title="Terms & Conditions"
                description="Read KNTRKT's terms and conditions. Understanding your rights and responsibilities when using our platform."
                keywords="terms of service, legal terms, user agreement, KNTRKT terms, conditions of use"
            />
            <div className="legal-page terms-page">
                <section className="legal-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-content"
                        >
                            <h1>Terms & Conditions</h1>
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                        </motion.div>
                    </div>
                </section>

                <section className="legal-content">
                    <div className="container">
                        <div className="content-wrapper">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="introduction"
                            >
                                <p>Welcome to KNTRKT. These terms and conditions outline the rules and regulations for the use of our platform.</p>
                            </motion.div>

                            <div className="sections-grid">
                                {sections.map((section, index) => (
                                    <motion.div
                                        key={section.title}
                                        className="section-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="section-icon">{section.icon}</div>
                                        <h2>{section.title}</h2>
                                        <p>{section.content}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Terms; 