/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { countries } from 'country-data';
import { motion } from 'framer-motion';
import './EarlyAccess.scss';
import SEO from '../../../components/SEO/SEO';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    });

    const [message, setMessage] = useState('');
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        // Verificar cuando reCAPTCHA se carga
        const checkRecaptcha = setInterval(() => {
            if (window.grecaptcha && window.grecaptcha.execute) {
                setRecaptchaLoaded(true);
                clearInterval(checkRecaptcha);
            }
        }, 100);

        return () => clearInterval(checkRecaptcha);
    }, []);

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

        // Validación para campos vacíos
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !country.trim()) {
            setMessage("Please fill in all fields.");
            return;
        }

        // Validación para email
        if (!/\S+@\S+\.\S+/.test(email)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            if (!recaptchaLoaded) {
                throw new Error("reCAPTCHA not loaded yet. Please try again.");
            }

            setMessage("Submitting...");
            
            const recaptchaToken = await window.grecaptcha.execute('6LeLXcMqAAAAAC1zB2tqyXVQdCpOfoG1WeRUTkL', { action: 'submit' });
            
            // Crear FormData
            const formDataForSheet = new FormData();
            formDataForSheet.append('First Name', firstName);
            formDataForSheet.append('Last Name', lastName);
            formDataForSheet.append('Email', email);
            formDataForSheet.append('Country', country);
            formDataForSheet.append('Token', recaptchaToken);

            // Enviar datos (asegúrate de usar la URL correcta de tu Google Apps Script)
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwG1MQBm_YtU5kDQJLug0M-QCxcnTsIo7EdtYMn38QtrRthXu-qbBN5D5xvZv-i3Q2e/exec',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    body: formDataForSheet
                }
            );

            // Limpiar formulario y mostrar mensaje de éxito
            setFormData({ firstName: '', lastName: '', email: '', country: '' });
            setMessage("Thank you for your interest! We'll be in touch soon.");
            
        } catch (error) {
            console.error('Error:', error);
            setMessage(error.message || "Sorry, there was an error. Please try again later.");
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
