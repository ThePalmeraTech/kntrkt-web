import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Documentation.scss';

const Documentation = () => {
    const [activeSection, setActiveSection] = useState('getting-started');

    const sections = {
        'getting-started': {
            title: 'Getting Started',
            content: [
                {
                    id: 'introduction',
                    title: 'Introduction',
                    content: 'Welcome to Kntrkt documentation. Our platform helps you create, manage, and automate your contracts and payments efficiently.'
                },
                {
                    id: 'quick-start',
                    title: 'Quick Start Guide',
                    content: 'Get started with Kntrkt in minutes:',
                    steps: [
                        'Create your account and verify your email',
                        'Complete your professional profile',
                        'Set up your payment preferences',
                        'Create your first contract using templates',
                        'Send it to your client for review and signature'
                    ]
                },
                {
                    id: 'system-requirements',
                    title: 'System Requirements',
                    content: 'Kntrkt works best with:',
                    steps: [
                        'Modern browsers (Chrome, Firefox, Safari, Edge)',
                        'Stable internet connection',
                        'PDF viewer for contract downloads',
                        'Valid email address for notifications'
                    ]
                }
            ]
        },
        'contracts': {
            title: 'Contracts',
            content: [
                {
                    id: 'creating-contracts',
                    title: 'Creating Contracts',
                    content: 'Learn how to create professional contracts:',
                    steps: [
                        'Choose from pre-made templates or start from scratch',
                        'Customize contract terms and conditions',
                        'Add payment schedules and milestones',
                        'Include your branding and company details',
                        'Set up automatic reminders'
                    ]
                },
                {
                    id: 'templates',
                    title: 'Using Templates',
                    content: 'Explore our template library:',
                    steps: [
                        'Freelance service agreements',
                        'Project-based contracts',
                        'Retainer agreements',
                        'Non-disclosure agreements (NDAs)',
                        'Subcontractor agreements'
                    ]
                },
                {
                    id: 'signatures',
                    title: 'Digital Signatures',
                    content: 'Our secure digital signature system ensures legal compliance:',
                    steps: [
                        'Electronic signature validation',
                        'Multi-party signing workflow',
                        'Audit trail and verification',
                        'Time-stamped signatures',
                        'PDF certificate generation'
                    ]
                }
            ]
        },
        'payments': {
            title: 'Payments & Invoicing',
            content: [
                {
                    id: 'payment-setup',
                    title: 'Payment Setup',
                    content: 'Configure your payment settings:',
                    steps: [
                        'Connect your bank account or payment processor',
                        'Set up multiple currencies',
                        'Configure automatic payments',
                        'Manage payment schedules',
                        'Set up recurring billing'
                    ]
                },
                {
                    id: 'invoicing',
                    title: 'Invoice Management',
                    content: 'Create and manage professional invoices:',
                    steps: [
                        'Automatic invoice generation',
                        'Custom invoice templates',
                        'Payment tracking and reminders',
                        'Late payment notifications',
                        'Invoice history and reporting'
                    ]
                },
                {
                    id: 'tax-handling',
                    title: 'Tax Handling',
                    content: 'Manage tax requirements:',
                    steps: [
                        'Automatic tax calculation',
                        'VAT/GST handling',
                        'Tax report generation',
                        'Multiple tax rate support',
                        'Tax document management'
                    ]
                }
            ]
        },
        'account': {
            title: 'Account Management',
            content: [
                {
                    id: 'profile-settings',
                    title: 'Profile Settings',
                    content: 'Manage your account profile:',
                    steps: [
                        'Update personal information',
                        'Manage notification preferences',
                        'Set up two-factor authentication',
                        'Customize branding settings',
                        'Manage team members'
                    ]
                },
                {
                    id: 'security',
                    title: 'Security Features',
                    content: 'Keep your account secure:',
                    steps: [
                        'Password management',
                        'Login history tracking',
                        'Device authorization',
                        'API key management',
                        'Security notifications'
                    ]
                }
            ]
        },
        'integrations': {
            title: 'Integrations',
            content: [
                {
                    id: 'available-integrations',
                    title: 'Available Integrations',
                    content: 'Connect with your favorite tools:',
                    steps: [
                        'Payment processors (Stripe, PayPal)',
                        'Cloud storage (Dropbox, Google Drive)',
                        'CRM systems (Salesforce, HubSpot)',
                        'Accounting software (QuickBooks, Xero)',
                        'Project management tools (Asana, Trello)'
                    ]
                },
                {
                    id: 'api-usage',
                    title: 'API Documentation',
                    content: 'Integrate Kntrkt with your systems:',
                    code: `
// Authentication
curl -X POST https://api.kntrkt.com/v1/auth \\
  -H "Content-Type: application/json" \\
  -d '{"apiKey": "your-api-key"}'

// Create Contract
curl -X POST https://api.kntrkt.com/v1/contracts \\
  -H "Authorization: Bearer {token}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Service Agreement",
    "client": "client_id",
    "template": "template_id"
  }'
                    `
                }
            ]
        }
    };

    return (
        <div className="documentation-page">
            <section className="documentation-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Documentation</h1>
                        <p className="lead">Everything you need to know about using Kntrkt</p>
                    </motion.div>
                </div>
            </section>

            <section className="documentation-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <motion.div
                                className="sidebar"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <nav className="nav-menu">
                                    {Object.entries(sections).map(([key, section]) => (
                                        <button
                                            key={key}
                                            className={`nav-link ${activeSection === key ? 'active' : ''}`}
                                            onClick={() => setActiveSection(key)}
                                        >
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </motion.div>
                        </div>
                        <div className="col-lg-9">
                            <motion.div
                                className="content-area"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                                {sections[activeSection].content.map((item) => (
                                    <div key={item.id} className="content-section">
                                        <h2>{item.title}</h2>
                                        <p>{item.content}</p>
                                        {item.steps && (
                                            <ul className="steps-list">
                                                {item.steps.map((step, index) => (
                                                    <li key={index}>{step}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.code && (
                                            <pre className="code-block">
                                                {item.code}
                                            </pre>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="documentation-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Need Help?</h2>
                        <p>Can't find what you're looking for? Our support team is here to help.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-light btn-lg">
                                Contact Support
                            </Link>
                            <Link to="/help" className="btn btn-outline-light btn-lg">
                                Help Center
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Documentation; 