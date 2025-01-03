import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../Landing/Footer/Footer';
import './Community.scss';

const Community = () => {
    const events = [
        {
            id: 1,
            title: 'Kntrkt Connect 2024',
            date: 'June 15-17, 2024',
            location: 'San Francisco, CA',
            image: 'https://placehold.co/600x400?text=Kntrkt+Connect',
            description: 'Join us for our annual conference featuring industry leaders, workshops, and networking.',
            type: 'Conference'
        },
        {
            id: 2,
            title: 'Freelance Success Workshop',
            date: 'April 5, 2024',
            location: 'Virtual Event',
            image: 'https://placehold.co/600x400?text=Success+Workshop',
            description: 'Learn proven strategies for growing your freelance business with Kntrkt.',
            type: 'Workshop'
        },
        {
            id: 3,
            title: 'Contract Mastery Series',
            date: 'Monthly',
            location: 'Online',
            image: 'https://placehold.co/600x400?text=Mastery+Series',
            description: 'Monthly webinars covering contract best practices and legal insights.',
            type: 'Webinar'
        }
    ];

    const stories = [
        {
            id: 1,
            name: 'Sarah Chen',
            role: 'UX Designer',
            image: 'https://placehold.co/150x150?text=Sarah',
            quote: 'Kntrkt transformed how I handle client contracts. I save hours every week!',
            company: 'Freelance Designer'
        },
        {
            id: 2,
            name: 'Marcus Rodriguez',
            role: 'Agency Owner',
            image: 'https://placehold.co/150x150?text=Marcus',
            quote: 'Managing our agency\'s contracts and payments has never been easier.',
            company: 'Digital Spark Agency'
        },
        {
            id: 3,
            name: 'Aisha Patel',
            role: 'Developer',
            image: 'https://placehold.co/150x150?text=Aisha',
            quote: 'The templates and automation features are game-changers for my business.',
            company: 'Tech Solutions Inc.'
        }
    ];

    const resources = [
        {
            title: 'Community Forum',
            description: 'Connect with other professionals, share experiences, and get advice.',
            icon: 'fas fa-comments',
            link: '/forum'
        },
        {
            title: 'Resource Library',
            description: 'Access guides, templates, and best practices from industry experts.',
            icon: 'fas fa-book-open',
            link: '/resources'
        },
        {
            title: 'Mentorship Program',
            description: 'Connect with experienced professionals for guidance and support.',
            icon: 'fas fa-user-friends',
            link: '/mentorship'
        }
    ];

    return (
        <div className="community-page">
            <section className="community-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1>Join Our Community</h1>
                        <p className="lead">Connect, learn, and grow with thousands of professionals using Kntrkt</p>
                        <div className="hero-stats">
                            <div className="stat">
                                <span className="number">50K+</span>
                                <span className="label">Members</span>
                            </div>
                            <div className="stat">
                                <span className="number">100+</span>
                                <span className="label">Countries</span>
                            </div>
                            <div className="stat">
                                <span className="number">1M+</span>
                                <span className="label">Contracts Created</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="upcoming-events">
                <div className="container">
                    <h2>Upcoming Events</h2>
                    <div className="row g-4">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                className="col-lg-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="event-card">
                                    <div className="event-image">
                                        <img src={event.image} alt={event.title} />
                                        <span className="event-type">{event.type}</span>
                                    </div>
                                    <div className="event-content">
                                        <h3>{event.title}</h3>
                                        <div className="event-details">
                                            <span><i className="fas fa-calendar"></i> {event.date}</span>
                                            <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                                        </div>
                                        <p>{event.description}</p>
                                        <Link to="#" className="btn btn-outline-primary">Learn More</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="success-stories">
                <div className="container">
                    <h2>Success Stories</h2>
                    <div className="row g-4">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                className="col-lg-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="story-card">
                                    <div className="story-image">
                                        <img src={story.image} alt={story.name} />
                                    </div>
                                    <blockquote>{story.quote}</blockquote>
                                    <div className="story-author">
                                        <h4>{story.name}</h4>
                                        <p>{story.role}</p>
                                        <span>{story.company}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="community-resources">
                <div className="container">
                    <h2>Community Resources</h2>
                    <div className="row g-4">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.title}
                                className="col-lg-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="resource-card">
                                    <i className={resource.icon}></i>
                                    <h3>{resource.title}</h3>
                                    <p>{resource.description}</p>
                                    <Link to={resource.link} className="btn btn-outline-primary">
                                        Explore
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="community-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Ready to Join Our Community?</h2>
                        <p>Start connecting with professionals and growing your business today.</p>
                        <div className="cta-buttons">
                            <Link to="/register" className="btn btn-light btn-lg">
                                Join Now
                            </Link>
                            <Link to="/events" className="btn btn-outline-light btn-lg">
                                View All Events
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Community; 