import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, country } = formData;

        if (!firstName.trim() || !lastName.trim() || !email.trim() || !country.trim()) {
            console.error("Please fill in all fields.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            console.error("Please enter a valid email address.");
            return;
        }

        console.log('Form submitted:', formData);
    };

    // Estilos personalizados para react-select
    const customStyles = {
        control: (base, state) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '0.375rem',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
                borderColor: '#5f9ea0',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '0.5rem',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            marginTop: '4px',
        }),
        menuList: (base) => ({
            ...base,
            padding: '0.5rem',
            '::-webkit-scrollbar': {
                width: '8px',
                height: '0px',
            },
            '::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
            },
            '::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '4px',
                '&:hover': {
                    background: 'rgba(255, 255, 255, 0.4)',
                },
            },
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected 
                ? 'rgba(95, 158, 160, 0.9)' 
                : state.isFocused 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'transparent',
            color: '#fff',
            cursor: 'pointer',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
            '&:hover': {
                backgroundColor: state.isSelected 
                    ? 'rgba(95, 158, 160, 0.9)' 
                    : 'rgba(255, 255, 255, 0.15)',
            },
        }),
        singleValue: (base) => ({
            ...base,
            color: '#fff',
        }),
        input: (base) => ({
            ...base,
            color: '#fff',
        }),
        placeholder: (base) => ({
            ...base,
            color: 'rgba(255, 255, 255, 0.5)',
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: 'rgba(255, 255, 255, 0.5)',
            transition: 'all .2s ease',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
            '&:hover': {
                color: '#5f9ea0',
            },
        }),
        indicatorSeparator: (base) => ({
            ...base,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
                                        styles={customStyles} // Aplicar estilos personalizados
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
