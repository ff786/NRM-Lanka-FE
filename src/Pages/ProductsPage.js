import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductFilter, setProductSearch, setProductSort, setProductPriceRange } from '../redux/actions/productActions';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, CATEGORIES } from '../utils/mockData';
import { filterProducts, sortProducts } from '../utils/helpers';
import '../styles/pages/products.css';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { filter, search, sortBy, priceRange } = useSelector(state => state.products);

    // Filter and sort products
    const filtered = filterProducts(MOCK_PRODUCTS, filter, search, priceRange);
    const sorted = sortProducts(filtered, sortBy);

    return (
        <div className="products-page">
            <div className="products-container">
                {/* Sidebar Filters */}
                <aside className="filter-sidebar">
                    <h3>Filters</h3>

                    <div className="filter-group">
                        <h4>Category</h4>
                        <div className="category-list">
                            {CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    className={`category-btn ${filter === category ? 'active' : ''}`}
                                    onClick={() => dispatch(setProductFilter(category))}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group">
                        <h4>Price Range</h4>
                        <div className="price-input-group">
                            <input
                                type="range"
                                min="0"
                                max="20000"
                                value={priceRange[1]}
                                onChange={(e) =>
                                    dispatch(setProductPriceRange([0, parseInt(e.target.value)]))
                                }
                                className="price-slider"
                            />
                            <div className="price-display">
                                Rs. 0 - Rs. {priceRange[1].toLocaleString('en-LK')}
                            </div>
                        </div>
                    </div>

                    <div className="filter-group">
                        <h4>Sort By</h4>
                        <select
                            value={sortBy}
                            onChange={(e) => dispatch(setProductSort(e.target.value))}
                            className="sort-select"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="products-main">
                    {/* Search Bar */}
                    <div className="search-section">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => dispatch(setProductSearch(e.target.value))}
                            className="search-input"
                        />
                    </div>

                    {/* Results Info */}
                    <div className="results-info">
                        <p>
                            Showing <strong>{sorted.length}</strong> of{' '}
                            <strong>{MOCK_PRODUCTS.length}</strong> products
                        </p>
                    </div>

                    {/* Products Grid */}
                    {sorted.length > 0 ? (
                        <div className="product-grid">
                            {sorted.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-products">
                            <p>No products found matching your criteria.</p>
                            <p className="no-products-subtitle">Try adjusting your filters or search query.</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ProductsPage;