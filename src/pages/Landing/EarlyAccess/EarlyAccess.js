import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { countries } from 'country-data';
import { motion } from 'framer-motion';
import './EarlyAccess.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import SEO from '../../../components/SEO/SEO';

const EarlyAccess = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: ''
    });

    const recaptchaRef = useRef(null);
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

        // Validate that fields are not empty
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !country.trim()) {
            console.error("Please fill in all fields.");
            return;
        }

        // Validate email format
        if (!/\S+@\S+\.\S+/.test(email)) {
            console.error("Please enter a valid email address.");
            return;
        }

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            console.error("Please complete the CAPTCHA");
            return; // Stop the function if CAPTCHA is not resolved
        }

        const formDataWithToken = {
            ...formData,
            token: '+W+aGff55H54r4IAnbey4bgKTmfwiq2v9kpk6vq82NI=' // Include the token here
        };

        // Proceed to send the data
        fetch('https://script.google.com/macros/s/AKfycby-Ph-nExI0wGZIzg6EUWiTg1yOlHfwmAqT8CNXBDOwlmi9jJ335BAsTORx_moE62ct4/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataWithToken)
        })
        .then(response => console.log('Form submitted successfully'))
        .catch(error => console.error('Error submitting form:', error));
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
                                        className="basic-single"
                                        classNamePrefix="select"
                                        placeholder="Select your country"
                                    />
                                </div>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LeLXcMqAAAAAC1zBt2qyXVQdCpOfoG1WeRUTkL"
                                />
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
