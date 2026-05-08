import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, toggleCart, toggleAuth } from '../redux/actions/uiActions';
import '../styles/header.css';

const Header = () => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector(state => state.ui);
    const { items } = useSelector(state => state.cart);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (page) => {
        dispatch(setPage(page));
        setMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'Home', page: 'home' },
        { label: 'Products', page: 'products' },
        { label: 'About', page: 'about' },
        { label: 'Contact', page: 'contact' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo" onClick={() => handleNavClick('home')}>
                    🚗 Regent Motors
                </div>

                <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map(item => (
                        <button
                            key={item.page}
                            className={`nav-link ${currentPage === item.page ? 'active' : ''}`}
                            onClick={() => handleNavClick(item.page)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="header-actions">
                    <button className="icon-btn" onClick={() => dispatch(toggleCart())} title="Shopping Cart">
                        🛒
                        {items.length > 0 && <span className="cart-badge">{items.length}</span>}
                    </button>
                    <button className="icon-btn" onClick={() => dispatch(toggleAuth())} title="Account">
                        👤
                    </button>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        title="Menu"
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
