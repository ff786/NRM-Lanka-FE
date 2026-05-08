import React, { useState } from 'react';
import '../styles/pages/contact.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="contact-page">
            <div className="container">
                <h1>Contact Us</h1>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Get in Touch</h2>
                        {submitted && <div className="success-msg">✓ Message sent successfully!</div>}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <aside className="contact-info-section">
                        <h2>Contact Information</h2>

                        <div className="info-card">
                            <h3>📍 Address</h3>
                            <p>No. 45, Main Street</p>
                            <p>Colombo 4, Sri Lanka</p>
                        </div>

                        <div className="info-card">
                            <h3>📞 Phone</h3>
                            <p>
                                <a href="tel:+94112345678">+94 11 2 345 678</a>
                            </p>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </div>

                        <div className="info-card">
                            <h3>📧 Email</h3>
                            <p>
                                <a href="mailto:info@regentmotors.lk">info@regentmotors.lk</a>
                            </p>
                            <p>Response within 24 hours</p>
                        </div>

                        <div className="info-card">
                            <h3>💬 WhatsApp</h3>
                            <p>
                                <a href="https://wa.me/+94771234567" target="_blank" rel="noopener noreferrer">
                                    +94 77 1 234 567
                                </a>
                            </p>
                            <p>Chat with us directly</p>
                        </div>

                        <div className="info-card">
                            <h3>⏰ Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </aside>
                </div>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        {[
                            {
                                q: 'Do you offer warranty on parts?',
                                a: 'Yes! All our parts come with extended warranty. Terms vary by product.',
                            },
                            {
                                q: 'How quickly can I get delivery?',
                                a: 'Same-day delivery available in Colombo. Others within 2-3 business days.',
                            },
                            {
                                q: 'Are all parts genuine?',
                                a: '100% genuine Toyota parts only. We are an authorized Toyota dealer.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept card, bank transfer, and cash on delivery options.',
                            },
                            {
                                q: 'Can I return parts if unsatisfied?',
                                a: 'Yes, hassle-free returns within 7 days if unopened and unused.',
                            },
                            {
                                q: 'Do you provide installation services?',
                                a: 'We provide consultation. Installation can be done by authorized mechanics.',
                            },
                        ].map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h4>{faq.q}</h4>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;