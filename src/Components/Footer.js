import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/uiActions';
import '../styles/footer.css';

const Footer = () => {
    const dispatch = useDispatch();
    const currentYear = new Date().getFullYear();

    const handleNavigate = (page) => {
        dispatch(setPage(page));
        window.scrollTo(0, 0);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>Regent Motors</h3>
                        <p>
                            100% genuine Toyota parts at competitive prices. Trusted by thousands
                            of customers across Sri Lanka.
                        </p>
                        <div className="social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                                f
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                                𝕏
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                                📷
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <button onClick={() => handleNavigate('home')} className="footer-link-btn">
                                    Home
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigate('products')} className="footer-link-btn">
                                    Products
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigate('about')} className="footer-link-btn">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavigate('contact')} className="footer-link-btn">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact Info</h4>
                        <ul className="contact-info">
                            <li>
                                <span>📞</span>
                                <a href="tel:+94112345678">+94 11 2 345 678</a>
                            </li>
                            <li>
                                <span>📧</span>
                                <a href="mailto:info@regentmotors.lk">info@regentmotors.lk</a>
                            </li>
                            <li>
                                <span>📍</span>
                                <span>No. 45, Colombo 4, Sri Lanka</span>
                            </li>
                            <li>
                                <span>💬</span>
                                <a href="https://wa.me/+94771234567" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Business Hours</h4>
                        <div className="business-hours">
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Regent Motors Lanka. All rights reserved.</p>
                    <div className="footer-badges">
                        <span className="badge">ISO 9001:2015</span>
                        <span className="badge">Authorized Toyota Dealer</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;