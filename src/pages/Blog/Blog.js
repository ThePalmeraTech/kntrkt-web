import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Blog.scss';

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'How to Create Bulletproof Freelance Contracts',
            excerpt: 'Learn the essential elements every freelance contract should include to protect your business.',
            category: 'Contracts',
            author: 'Julio Luque',
            date: 'March 15, 2024',
            image: 'https://placehold.co/600x400?text=Contract+Tips',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'The Future of Digital Payments in Creative Industries',
            excerpt: 'Explore how digital payments are transforming the way creative professionals do business.',
            category: 'Payments',
            author: 'Hanaley Mosley',
            date: 'March 12, 2024',
            image: 'https://placehold.co/600x400?text=Digital+Payments',
            readTime: '4 min read'
        },
        {
            id: 3,
            title: 'Legal Essentials for Digital Agencies',
            excerpt: 'A comprehensive guide to legal requirements and best practices for digital agencies.',
            category: 'Legal',
            author: 'Teo Irrisari',
            date: 'March 10, 2024',
            image: 'https://placehold.co/600x400?text=Legal+Guide',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Building Client Trust Through Transparent Contracts',
            excerpt: 'Discover how clear contracts can help build lasting client relationships.',
            category: 'Business',
            author: 'Sussane Holand',
            date: 'March 8, 2024',
            image: 'https://placehold.co/600x400?text=Client+Trust',
            readTime: '4 min read'
        }
    ];

    return (
        <div className="blog-page">
            <section className="blog-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1>Kntrkt Blog</h1>
                        <p className="lead">
                            Insights and guides for freelancers, agencies, and creative professionals
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="blog-content">
                <div className="container">
                    <div className="row g-4">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                className="col-lg-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <article className="blog-card">
                                    <Link to={`/blog/${post.id}`} className="image-link">
                                        <img src={post.image} alt={post.title} className="card-img" />
                                    </Link>
                                    <div className="card-content">
                                        <div className="meta">
                                            <span className="category">{post.category}</span>
                                            <span className="read-time">{post.readTime}</span>
                                        </div>
                                        <Link to={`/blog/${post.id}`}>
                                            <h2>{post.title}</h2>
                                        </Link>
                                        <p>{post.excerpt}</p>
                                        <div className="author-info">
                                            <span className="author">{post.author}</span>
                                            <span className="date">{post.date}</span>
                                        </div>
                                    </div>
                                </article>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Stay Updated with Kntrkt</h2>
                        <p>Get the latest insights and updates delivered to your inbox.</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-light btn-lg">
                                Subscribe Now
                            </Link>
                            <Link to="/contact" className="btn btn-outline-light btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog; 