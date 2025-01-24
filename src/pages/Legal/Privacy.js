import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO/SEO';
import Footer from '../Landing/Footer/Footer';
import './Legal.scss';

const Privacy = () => {
    const sections = [
        {
            title: "Data Collection",
            content: "We collect information that you provide directly to us, including personal information, account details, and usage data to improve our services.",
            icon: "📊",
            items: ["Personal Information", "Usage Data", "Device Information", "Payment Details"]
        },
        {
            title: "Data Usage",
            content: "Your data is used to provide and improve our services, communicate with you, and ensure platform security.",
            icon: "🔄",
            items: ["Service Improvement", "Communication", "Security", "Analytics"]
        },
        {
            title: "Data Protection",
            content: "We implement robust security measures to protect your personal information from unauthorized access and disclosure.",
            icon: "🛡️",
            items: ["Encryption", "Access Controls", "Regular Audits", "Secure Storage"]
        },
        {
            title: "Your Rights",
            content: "You have the right to access, correct, or delete your personal information, and to object to its processing.",
            icon: "✅",
            items: ["Access Rights", "Correction Rights", "Deletion Rights", "Processing Rights"]
        }
    ];

    return (
        <>
            <SEO 
                title="Privacy Policy"
                description="Learn how KNTRKT protects and handles your personal information. Our commitment to your privacy and data security."
                keywords="privacy policy, data protection, GDPR compliance, data security, user privacy"
            />
            <div className="legal-page privacy-page">
                <section className="legal-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hero-content"
                        >
                            <h1>Privacy Policy</h1>
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
                                <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>
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
                                        <ul className="items-list">
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
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

export default Privacy; 