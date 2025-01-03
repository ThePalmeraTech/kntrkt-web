import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Templates.scss';

const Templates = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const categories = [
        { id: 'all', name: 'All Templates' },
        { id: 'freelance', name: 'Freelance' },
        { id: 'agency', name: 'Agency' },
        { id: 'consulting', name: 'Consulting' },
        { id: 'digital', name: 'Digital Services' }
    ];

    const templates = [
        {
            id: 1,
            title: 'Freelance Service Agreement',
            description: 'Professional contract template for freelancers and clients.',
            category: 'freelance',
            price: 29,
            popularity: 'High',
            regions: ['US', 'EU', 'UK'],
            preview: 'https://placehold.co/600x400?text=Template+Preview'
        },
        {
            id: 2,
            title: 'Agency-Client Contract',
            description: 'Comprehensive agreement for agencies and their clients.',
            category: 'agency',
            price: 49,
            popularity: 'Medium',
            regions: ['US', 'CA', 'EU'],
            preview: 'https://placehold.co/600x400?text=Template+Preview'
        },
        // Add more templates...
    ];

    const filteredTemplates = selectedCategory === 'all' 
        ? templates 
        : templates.filter(template => template.category === selectedCategory);

    return (
        <div className="templates-page">
            <motion.section 
                className="templates-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container">
                    <h1>Legal Templates</h1>
                    <p>Professional contract templates crafted by legal experts</p>
                </div>
            </motion.section>

            <section className="templates-main">
                <div className="container">
                    <div className="templates-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <motion.div 
                        className="templates-grid"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {filteredTemplates.map(template => (
                            <motion.div 
                                key={template.id}
                                className="template-card"
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="template-preview">
                                    <img src={template.preview} alt={template.title} />
                                </div>
                                <div className="template-content">
                                    <h3>{template.title}</h3>
                                    <p>{template.description}</p>
                                    <div className="template-meta">
                                        <span className="price">${template.price}</span>
                                        <span className="popularity">{template.popularity} demand</span>
                                    </div>
                                    <div className="template-regions">
                                        {template.regions.map(region => (
                                            <span key={region} className="region-badge">{region}</span>
                                        ))}
                                    </div>
                                    <Link to={`/templates/${template.id}`} className="btn btn-primary">
                                        View Template
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="templates-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Create Your First Contract?</h2>
                        <p>Choose from our professionally crafted templates and start protecting your business today.</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-light btn-lg">
                                Get Started Free
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

export default Templates; 