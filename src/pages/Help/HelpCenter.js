import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import './HelpCenter.scss';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        {
            title: 'Getting Started',
            icon: 'fas fa-rocket',
            articles: [
                'How to create your first contract',
                'Setting up your profile',
                'Understanding the dashboard'
            ]
        },
        {
            title: 'Account & Billing',
            icon: 'fas fa-user-circle',
            articles: [
                'Managing your subscription',
                'Payment methods',
                'Billing history'
            ]
        },
        {
            title: 'Contracts & Templates',
            icon: 'fas fa-file-signature',
            articles: [
                'Using contract templates',
                'Customizing contracts',
                'Contract signing process'
            ]
        },
        {
            title: 'Payments & Invoicing',
            icon: 'fas fa-credit-card',
            articles: [
                'Setting up payments',
                'Creating invoices',
                'Payment tracking'
            ]
        }
    ];

    const faqs = [
        {
            question: 'How secure are my contracts?',
            answer: 'All contracts are encrypted and stored securely. We use industry-standard security protocols to protect your data.'
        },
        {
            question: 'Can I cancel my subscription?',
            answer: 'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.'
        },
        {
            question: 'How do I share contracts with clients?',
            answer: 'You can share contracts via email or generate a secure link. Recipients don\'t need a Kntrkt account to view or sign.'
        }
    ];

    return (
        <>
            <SEO 
                title="Help Center - Support & Resources"
                description="Get help with KNTRKT's contract management platform. Find guides, tutorials, and answers to frequently asked questions."
                keywords="KNTRKT support, help center, user guides, tutorials, FAQ, customer support"
            />
            <div className="help-center-page">
                <section className="help-hero">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1>How can we help you?</h1>
                            <div className="search-box">
                                <i className="fas fa-search"></i>
                                <input 
                                    type="text"
                                    placeholder="Search for help articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="help-categories">
                    <div className="container">
                        <div className="row g-4">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    className="col-md-6 col-lg-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="category-card">
                                        <i className={category.icon}></i>
                                        <h3>{category.title}</h3>
                                        <ul>
                                            {category.articles.map((article, i) => (
                                                <li key={i}>
                                                    <Link to="#">{article}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="faqs">
                    <div className="container">
                        <h2>Frequently Asked Questions</h2>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        className="faq-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <h3>{faq.question}</h3>
                                        <p>{faq.answer}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="help-cta">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Still Need Help?</h2>
                            <p>Our support team is available 24/7 to assist you.</p>
                            <div className="cta-buttons">
                                <Link to="/contact" className="btn btn-light btn-lg">
                                    Contact Support
                                </Link>
                                <Link to="/documentation" className="btn btn-outline-light btn-lg">
                                    View Documentation
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default HelpCenter; 