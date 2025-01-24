import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './EarlyAccess.scss';
import { Helmet } from 'react-helmet';
import SEO from '../../../components/SEO/SEO';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <SEO 
                title="Join Early Access - Get Started Today"
                description="Be among the first to experience KNTRKT's revolutionary contract management and payment platform. Sign up for early access now."
                keywords="early access, beta access, contract management, payment platform, signup, exclusive access"
            />
            <div className="early-access-page">
                <section className="early-access-section">
                    <div className="container">
                        <motion.div 
                            className="early-access-content"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2>Join Early Access</h2>
                            <p>Be among the first to experience KNTRKT and shape the future of contract management.</p>
                            
                            <form onSubmit={handleSubmit} className="early-access-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email address"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="country">Country</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your country"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Join Early Access
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default EarlyAccess; 