import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions/uiActions';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, FEATURES, TESTIMONIALS } from '../utils/mockData';
import '../styles/pages/home.css';

const HomePage = () => {
    const dispatch = useDispatch();
    const featuredProducts = MOCK_PRODUCTS.slice(0, 6);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>100% Genuine Toyota Parts</h1>
                    <p>Trusted by mechanics and vehicle owners across Sri Lanka since 2015</p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => dispatch(setPage('products'))}
                    >
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Regent Motors?</h2>
                    <div className="features-grid">
                        {FEATURES.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="featured-section">
                <div className="container">
                    <h2 className="section-title">Featured Products</h2>
                    <div className="product-grid">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="section-cta">
                        <button
                            className="btn btn-outline"
                            onClick={() => dispatch(setPage('products'))}
                        >
                            View All Products
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">What Our Customers Say</h2>
                    <div className="testimonials-grid">
                        {TESTIMONIALS.map(testimonial => (
                            <div key={testimonial.id} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {'⭐'.repeat(testimonial.rating)}
                                </div>
                                <p className="testimonial-text">"{testimonial.text}"</p>
                                <p className="testimonial-name">— {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-section">
                <div className="container">
                    <h2 className="section-title">Why Customers Trust Us</h2>
                    <div className="trust-grid">
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <h3>Authorized Toyota Dealer</h3>
                            <p>Official dealer status with Toyota</p>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <h3>ISO 9001:2015 Certified</h3>
                            <p>Quality management standards certified</p>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <h3>10+ Years Experience</h3>
                            <p>Over a decade of trusted service</p>
                        </div>
                        <div className="trust-item">
                            <span className="trust-icon">✓</span>
                            <h3>Lifetime Warranty</h3>
                            <p>Extended warranty on all parts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Find Your Parts?</h2>
                    <p>Browse our complete catalog of genuine Toyota parts</p>
                    <button
                        className="btn btn-primary btn-lg"
                        onClick={() => dispatch(setPage('products'))}
                    >
                        Start Shopping
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
