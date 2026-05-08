import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';
import { setPage } from '../redux/actions/uiActions';
import { formatPrice } from '../utils/helpers';
import '../styles/pages/checkout.css';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector(state => state.cart);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        paymentMethod: 'card',
    });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || !formData.phone || !formData.address) {
            alert('Please fill in all required fields');
            return;
        }

        const order = {
            number: Math.floor(Math.random() * 1000000),
            date: new Date().toLocaleDateString('en-LK'),
            items,
            total: totalPrice + totalPrice * 0.1,
            customer: formData,
        };

        setOrderNumber(order.number);
        setOrderPlaced(true);

        setTimeout(() => {
            dispatch(clearCart());
            dispatch(setPage('home'));
        }, 3000);
    };

    if (items.length === 0 && !orderPlaced) {
        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="empty-checkout">
                        <h2>Your cart is empty</h2>
                        <p>Please add items before proceeding to checkout.</p>
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={() => dispatch(setPage('products'))}
                        >
                            Back to Products
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h2>Order Placed Successfully!</h2>
                        <p>Thank you for your purchase</p>
                        <div className="order-number">
                            Order #<strong>{orderNumber}</strong>
                        </div>
                        <p className="success-subtitle">
                            We've sent a confirmation email to <strong>{formData.email}</strong>
                        </p>
                        <p className="success-info">
                            Redirecting to home page in a few seconds...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <h1>Checkout</h1>

                <div className="checkout-content">
                    {/* Checkout Form */}
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <section className="form-section">
                            <h3>Billing Information</h3>

                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
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
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="form-section">
                            <h3>Delivery Address</h3>

                            <div className="form-group">
                                <label htmlFor="address">Street Address *</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="postalCode">Postal Code</label>
                                    <input
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="form-section">
                            <h3>Payment Method</h3>

                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={formData.paymentMethod === 'card'}
                                        onChange={handleInputChange}
                                    />
                                    <span>Credit / Debit Card</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="bank"
                                        checked={formData.paymentMethod === 'bank'}
                                        onChange={handleInputChange}
                                    />
                                    <span>Bank Transfer</span>
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={formData.paymentMethod === 'cod'}
                                        onChange={handleInputChange}
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>
                        </section>

                        <div className="form-actions">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => dispatch(setPage('products'))}
                            >
                                Back to Products
                            </button>
                            <button type="submit" className="btn btn-primary btn-lg">
                                Place Order
                            </button>
                        </div>
                    </form>

                    {/* Order Summary */}
                    <aside className="order-summary">
                        <h3>Order Summary</h3>

                        <div className="summary-items">
                            {items.map(item => (
                                <div key={item.id} className="summary-item">
                                    <div className="item-details">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-qty">x{item.quantity}</span>
                                    </div>
                                    <span className="item-total">{formatPrice(item.price * item.quantity)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-calc">
                            <div className="calc-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(totalPrice)}</span>
                            </div>
                            <div className="calc-row">
                                <span>Delivery</span>
                                <span className="free">Free</span>
                            </div>
                            <div className="calc-row">
                                <span>Tax (10%)</span>
                                <span>{formatPrice(totalPrice * 0.1)}</span>
                            </div>
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total">
                            <span>Total Amount</span>
                            <span>{formatPrice(totalPrice + totalPrice * 0.1)}</span>
                        </div>

                        <div className="summary-note">
                            <p>✓ 100% Genuine Parts</p>
                            <p>✓ Full Warranty Included</p>
                            <p>✓ Secure Payment</p>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
