import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { showNotification } from '../redux/actions/uiActions';
import { formatPrice } from '../utils/helpers';
import '../styles/productCard.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
        }));
        dispatch(showNotification(`${product.name} added to cart!`, 'success'));
    };

    return (
        <div className="product-card">
            <div className="product-image">{product.image}</div>

            <h3 className="product-name">{product.name}</h3>

            <p className="product-category">{product.category}</p>

            <p className="product-description">{product.description}</p>

            <div className="product-footer">
                <div>
                    <div className="product-price">{formatPrice(product.price)}</div>
                    <div className="product-meta">
                        <div className="product-rating">⭐ {product.rating}</div>
                        <div className="product-stock">
                            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </div>
                    </div>
                </div>
            </div>

            <button
                className={`product-action ${product.stock === 0 ? 'disabled' : ''}`}
                onClick={handleAddToCart}
                disabled={product.stock === 0}
            >
                {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    );
};

export default ProductCard;
