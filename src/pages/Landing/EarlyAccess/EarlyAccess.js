/* eslint-disable no-undef */
import React, { useState } from 'react';
import Select from 'react-select';
import { countries } from 'country-data';
import { motion } from 'framer-motion';
import './EarlyAccess.scss';
import SEO from '../../../components/SEO/SEO';
import Footer from '../../../components/Footer/Footer';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    });

    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Map countries for the dropdown
    const countryOptions = countries.all.map((country) => ({
        label: country.name,
        value: country.alpha2
    }));

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (selectedOption) => {
        setFormData({
            ...formData,
            country: selectedOption.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, country } = formData;

        // Validaciones básicas
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !country.trim()) {
            setMessage("Please fill in all fields.");
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            setIsLoading(true);
            setMessage(""); // Limpiamos mensajes anteriores
            
            const formDataForSheet = new FormData();
            formDataForSheet.append('First Name', firstName);
            formDataForSheet.append('Last Name', lastName);
            formDataForSheet.append('Email', email);
            formDataForSheet.append('Country', country);

            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbzGJB70ztRa5iJ_UThqtGaNg-Lv7x5lnw2FIlAGmnuN_RFA3odZUb6g99UBjVyqALV-/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formDataForSheet
                }
            );

            await new Promise(resolve => setTimeout(resolve, 1500)); // Pequeño delay para mejor UX
            setFormData({ firstName: '', lastName: '', email: '', country: '' });
            setIsSubmitted(true);
            
        } catch (error) {
            console.error('Error:', error);
            setMessage("Sorry, there was an error. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const customStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '0.375rem',
            color: '#fff',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#5f9ea0',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
                ? 'rgba(95, 158, 160, 0.9)'
                : state.isFocused
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'transparent',
            color: '#fff',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#fff',
        }),
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
                        {!isSubmitted ? (
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
                                    {message && <p className="message">{message}</p>}
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
                                        <Select
                                            id="country"
                                            options={countryOptions}
                                            onChange={handleSelectChange}
                                            styles={customStyles}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            placeholder="Select your country"
                                        />
                                    </div>
                                    <button 
                                        type="submit" 
                                        className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <motion.div className="loading-wrapper">
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="loading-spinner"
                                                />
                                                <span>Submitting...</span>
                                            </motion.div>
                                        ) : (
                                            'Join Early Access'
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="success-message"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="success-icon">
                                    <motion.svg
                                        width="100"
                                        height="100"
                                        viewBox="0 0 100 100"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    >
                                        <circle cx="50" cy="50" r="45" fill="none" stroke="#5f9ea0" strokeWidth="2" />
                                        <path
                                            d="M30 50 L45 65 L70 35"
                                            fill="none"
                                            stroke="#5f9ea0"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </motion.svg>
                                </div>
                                <h2>Thank You!</h2>
                                <p>Your early access request has been successfully submitted.</p>
                                <p className="sub-message">We'll be in touch soon with exclusive updates about KNTRKT.</p>
                                <motion.button
                                    className="btn btn-primary"
                                    onClick={() => setIsSubmitted(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Submit Another Request
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default EarlyAccess;
