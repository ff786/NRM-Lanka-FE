import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartQuantity, clearCart } from '../redux/actions/cartActions';
import { setPage } from '../redux/actions/uiActions';
import { formatPrice } from '../utils/helpers';
import '../styles/pages/cart.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector(state => state.cart);

    const handleRemove = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleQuantityChange = (productId, quantity) => {
        if (quantity > 0) {
            dispatch(updateCartQuantity(productId, quantity));
        }
    };

    const handleContinueShopping = () => {
        dispatch(setPage('products'));
    };

    const handleCheckout = () => {
        dispatch(setPage('checkout'));
    };

    return (
        <div className="cart-page">
            <div className="container">
                <h1>Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">🛒</div>
                        <h2>Your cart is empty</h2>
                        <p>Start adding some genuine Toyota parts!</p>
                        <button className="btn btn-primary btn-lg" onClick={handleContinueShopping}>
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="cart-content">
                        {/* Cart Items */}
                        <div className="cart-items">
                            <div className="cart-header">
                                <div className="col-product">Product</div>
                                <div className="col-price">Price</div>
                                <div className="col-quantity">Quantity</div>
                                <div className="col-total">Total</div>
                                <div className="col-action">Action</div>
                            </div>

                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="col-product">
                                        <span className="product-image">{item.image}</span>
                                        <div className="product-info">
                                            <h3>{item.name}</h3>
                                            <p>{item.category}</p>
                                        </div>
                                    </div>
                                    <div className="col-price">{formatPrice(item.price)}</div>
                                    <div className="col-quantity">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(item.id, parseInt(e.target.value))
                                            }
                                            className="quantity-input"
                                        />
                                    </div>
                                    <div className="col-total">
                                        <strong>{formatPrice(item.price * item.quantity)}</strong>
                                    </div>
                                    <div className="col-action">
                                        <button
                                            className="btn-remove"
                                            onClick={() => handleRemove(item.id)}
                                            title="Remove item"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cart Summary */}
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(totalPrice)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Delivery</span>
                                <span className="delivery-free">Free</span>
                            </div>
                            <div className="summary-row tax-row">
                                <span>Tax (10%)</span>
                                <span>{formatPrice(totalPrice * 0.1)}</span>
                            </div>
                            <div className="summary-row total-row">
                                <span>Total</span>
                                <span>{formatPrice(totalPrice + totalPrice * 0.1)}</span>
                            </div>

                            <button className="btn btn-primary btn-lg" onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>

                            <button className="btn btn-secondary" onClick={handleContinueShopping}>
                                Continue Shopping
                            </button>

                            <button
                                className="btn btn-outline btn-sm"
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
