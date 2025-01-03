import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../Landing/Footer/Footer';
import './TemplateDetail.scss';

const TemplateDetail = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [selectedTab, setSelectedTab] = useState('overview');

    // Mock data - replace with API call
    useEffect(() => {
        // Simulated API call
        const mockTemplate = {
            id: id,
            title: 'Freelance Service Agreement',
            description: 'A comprehensive contract template designed for freelancers and independent contractors.',
            price: 29,
            popularity: 'High',
            regions: ['US', 'EU', 'UK'],
            preview: 'https://placehold.co/800x600?text=Template+Preview',
            features: [
                'Customizable payment terms',
                'Intellectual property rights',
                'Confidentiality clauses',
                'Scope of work definition',
                'Revision and amendment terms',
                'Termination conditions'
            ],
            includes: [
                'Editable contract template',
                'Usage guidelines',
                'Regional variations',
                'Digital signature support',
                'PDF export functionality'
            ],
            legalInfo: {
                validRegions: ['United States', 'European Union', 'United Kingdom'],
                lastUpdated: '2024-03-15',
                compliance: ['GDPR', 'CCPA'],
                reviewedBy: 'Legal Team at Kntrkt'
            }
        };
        setTemplate(mockTemplate);
    }, [id]);

    if (!template) {
        return (
            <div className="template-detail-loading">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="template-detail-page">
            <div className="template-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/templates" className="back-link">
                            <i className="fas fa-arrow-left"></i> Back to Templates
                        </Link>
                        <h1>{template.title}</h1>
                        <p className="template-description">{template.description}</p>
                    </motion.div>
                </div>
            </div>

            <div className="template-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <motion.div
                                className="template-tabs"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <button
                                    className={`tab-btn ${selectedTab === 'overview' ? 'active' : ''}`}
                                    onClick={() => setSelectedTab('overview')}
                                >
                                    Overview
                                </button>
                                <button
                                    className={`tab-btn ${selectedTab === 'features' ? 'active' : ''}`}
                                    onClick={() => setSelectedTab('features')}
                                >
                                    Features
                                </button>
                                <button
                                    className={`tab-btn ${selectedTab === 'legal' ? 'active' : ''}`}
                                    onClick={() => setSelectedTab('legal')}
                                >
                                    Legal Information
                                </button>
                            </motion.div>

                            <div className="tab-content">
                                {selectedTab === 'overview' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <div className="template-preview">
                                            <img src={template.preview} alt={template.title} />
                                        </div>
                                        <div className="includes-section">
                                            <h3>What's Included</h3>
                                            <ul className="includes-list">
                                                {template.includes.map((item, index) => (
                                                    <li key={index}>
                                                        <i className="fas fa-check"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}

                                {selectedTab === 'features' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="features-section"
                                    >
                                        <h3>Template Features</h3>
                                        <ul className="features-list">
                                            {template.features.map((feature, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-star"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}

                                {selectedTab === 'legal' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="legal-section"
                                    >
                                        <h3>Legal Information</h3>
                                        <div className="legal-info">
                                            <div className="info-item">
                                                <h4>Valid Regions</h4>
                                                <ul>
                                                    {template.legalInfo.validRegions.map((region, index) => (
                                                        <li key={index}>{region}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="info-item">
                                                <h4>Compliance</h4>
                                                <ul>
                                                    {template.legalInfo.compliance.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="info-item">
                                                <h4>Last Updated</h4>
                                                <p>{template.legalInfo.lastUpdated}</p>
                                            </div>
                                            <div className="info-item">
                                                <h4>Reviewed By</h4>
                                                <p>{template.legalInfo.reviewedBy}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="template-detail-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Start Using This Template Today</h2>
                        <p>Join thousands of professionals who trust Kntrkt for their contract needs.</p>
                        <div className="cta-buttons">
                            <button className="btn btn-light btn-lg">
                                Use This Template
                            </button>
                            <Link to="/templates" className="btn btn-outline-light btn-lg">
                                View More Templates
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default TemplateDetail; 