import React from 'react';
import '../Styles/header.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                <h1>About Regent Motors Lanka</h1>

                {/* Story Section */}
                <section className="about-section">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2015, Regent Motors Lanka has been a trusted name in genuine Toyota
                        parts distribution across Sri Lanka. What started as a small parts shop has
                        grown into a leading supplier serving mechanics, vehicle owners, and corporate
                        clients throughout the country.
                    </p>
                    <p>
                        Our commitment to authenticity, quality, and customer service has made us the
                        preferred choice for genuine Toyota spare parts in the region. We take pride in
                        being an authorized Toyota dealer with ISO 9001:2015 certification.
                    </p>
                </section>

                {/* Mission & Values */}
                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        To provide 100% genuine Toyota parts at competitive prices while delivering
                        exceptional customer service and building long-term relationships with our clients.
                    </p>

                    <div className="values-grid">
                        <div className="value-card">
                            <h3>🎯 Quality</h3>
                            <p>Only genuine, original parts from Toyota</p>
                        </div>
                        <div className="value-card">
                            <h3>⚡ Speed</h3>
                            <p>Fast delivery with same-day service available</p>
                        </div>
                        <div className="value-card">
                            <h3>💼 Professionalism</h3>
                            <p>Expert staff trained in automotive parts</p>
                        </div>
                        <div className="value-card">
                            <h3>💝 Trust</h3>
                            <p>Integrity in all business dealings</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="about-section">
                    <h2>Why Choose Regent Motors?</h2>
                    <div className="benefits-grid">
                        {[
                            {
                                title: '100% Authentic Parts',
                                desc: 'All parts are directly sourced from Toyota',
                            },
                            {
                                title: 'Full Warranty',
                                desc: 'Extended warranty on every purchase',
                            },
                            {
                                title: 'Swift Delivery',
                                desc: 'Same-day delivery available in Colombo',
                            },
                            {
                                title: 'Expert Team',
                                desc: 'Knowledgeable staff to assist you',
                            },
                            {
                                title: 'Competitive Pricing',
                                desc: 'Best prices without compromising quality',
                            },
                            {
                                title: '24/7 Support',
                                desc: 'Always ready to help our customers',
                            },
                        ].map((benefit, i) => (
                            <div key={i} className="benefit-card">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section className="about-section">
                    <h2>Certifications & Partnerships</h2>
                    <div className="certifications">
                        <div className="cert-item">
                            <span className="cert-icon">🏆</span>
                            <p>Authorized Toyota Dealer</p>
                        </div>
                        <div className="cert-item">
                            <span className="cert-icon">✓</span>
                            <p>ISO 9001:2015 Certified</p>
                        </div>
                        <div className="cert-item">
                            <span className="cert-icon">📋</span>
                            <p>Board of Investment Registered</p>
                        </div>
                        <div className="cert-item">
                            <span className="cert-icon">🤝</span>
                            <p>Chamber of Commerce Member</p>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Our experienced team of automotive parts specialists is dedicated to helping
                        you find the right parts for your vehicle. With over 50 years of combined
                        experience in the automotive industry, we're equipped to handle any inquiry.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;