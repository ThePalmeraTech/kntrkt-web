import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './BlogPost.scss';

const BlogPost = () => {
    const { id } = useParams();

    // Mock data - replace with API call
    const post = {
        id: id,
        title: 'How to Create Bulletproof Freelance Contracts',
        content: `
            <p>Creating effective freelance contracts is essential for protecting your business and ensuring clear expectations with clients. Here's what you need to know...</p>
            
            <h2>1. Define the Scope of Work</h2>
            <p>The first and most crucial element of any freelance contract is a clear, detailed scope of work. This section should outline:</p>
            <ul>
                <li>Specific deliverables</li>
                <li>Project milestones</li>
                <li>Timeline expectations</li>
                <li>Revision policies</li>
            </ul>

            <h2>2. Payment Terms</h2>
            <p>Clear payment terms protect both you and your client. Be sure to include:</p>
            <ul>
                <li>Payment amounts and schedule</li>
                <li>Accepted payment methods</li>
                <li>Late payment penalties</li>
                <li>Deposit requirements</li>
            </ul>

            <h2>3. Intellectual Property Rights</h2>
            <p>Clearly define who owns the work product and when ownership transfers. Consider:</p>
            <ul>
                <li>Copyright ownership</li>
                <li>Usage rights</li>
                <li>Transfer conditions</li>
            </ul>
        `,
        category: 'Contracts',
        author: 'Julio Luque',
        authorTitle: 'CEO at Kntrkt',
        date: 'March 15, 2024',
        image: 'https://placehold.co/1200x600?text=Contract+Tips',
        readTime: '5 min read'
    };

    const relatedPosts = [
        {
            id: 2,
            title: 'The Future of Digital Payments',
            excerpt: 'Explore how digital payments are transforming business...',
            image: 'https://placehold.co/600x400?text=Digital+Payments',
            author: 'Hanaley Mosley',
            date: 'March 12, 2024'
        },
        {
            id: 3,
            title: 'Legal Essentials for Agencies',
            excerpt: 'A comprehensive guide to legal requirements...',
            image: 'https://placehold.co/600x400?text=Legal+Guide',
            author: 'Teo Irrisari',
            date: 'March 10, 2024'
        }
    ];

    return (
        <div className="blog-post-page">
            <section className="post-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link to="/blog" className="back-link">
                            <i className="fas fa-arrow-left"></i> Back to Blog
                        </Link>
                        <div className="post-meta">
                            <span className="category">{post.category}</span>
                            <span className="read-time">{post.readTime}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <div className="author-info">
                            <div className="author">
                                <span className="name">{post.author}</span>
                                <span className="title">{post.authorTitle}</span>
                            </div>
                            <span className="date">{post.date}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <img src={post.image} alt={post.title} className="featured-image" />
                                <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-posts">
                <div className="container">
                    <h2>Related Articles</h2>
                    <div className="row g-4">
                        {relatedPosts.map((relatedPost, index) => (
                            <motion.div
                                key={relatedPost.id}
                                className="col-md-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link to={`/blog/${relatedPost.id}`} className="related-post-card">
                                    <img src={relatedPost.image} alt={relatedPost.title} />
                                    <div className="card-content">
                                        <h3>{relatedPost.title}</h3>
                                        <p>{relatedPost.excerpt}</p>
                                        <div className="meta">
                                            <span className="author">{relatedPost.author}</span>
                                            <span className="date">{relatedPost.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-post-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Streamline Your Contracts?</h2>
                        <p>Join thousands of professionals who trust Kntrkt for their business needs.</p>
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

export default BlogPost; 