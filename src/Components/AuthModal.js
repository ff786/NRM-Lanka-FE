import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/actions/authActions';
import { toggleAuth } from '../redux/actions/uiActions';
import '../styles/authModal.css';

const AuthModal = () => {
    const dispatch = useDispatch();
    const { showAuth } = useSelector(state => state.ui);
    const { isLoggedIn, user } = useSelector(state => state.auth);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';

        if (!isLoginMode) {
            if (!formData.name) newErrors.name = 'Name is required';
            if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (isLoginMode) {
            dispatch(login(formData.email, formData.password));
        } else {
            dispatch(register(formData.name, formData.email, formData.password));
        }

        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        dispatch(toggleAuth());
    };

    const handleClose = () => {
        dispatch(toggleAuth());
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        setErrors({});
    };

    if (!showAuth) return null;

    return (
        <div className="auth-modal-overlay" onClick={handleClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={handleClose} title="Close">
                    ✕
                </button>

                {!isLoggedIn ? (
                    <>
                        <h2>{isLoginMode ? 'Login' : 'Create Account'}</h2>

                        <div className="mode-toggle">
                            <button
                                className={`toggle-btn ${isLoginMode ? 'active' : ''}`}
                                onClick={() => {
                                    setIsLoginMode(true);
                                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                                    setErrors({});
                                }}
                            >
                                Login
                            </button>
                            <button
                                className={`toggle-btn ${!isLoginMode ? 'active' : ''}`}
                                onClick={() => {
                                    setIsLoginMode(false);
                                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                                    setErrors({});
                                }}
                            >
                                Register
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="auth-form">
                            {!isLoginMode && (
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && <span className="error">{errors.name}</span>}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your@email.com"
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="••••••••"
                                />
                                {errors.password && <span className="error">{errors.password}</span>}
                            </div>

                            {!isLoginMode && (
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                    />
                                    {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary btn-lg">
                                {isLoginMode ? 'Login' : 'Create Account'}
                            </button>
                        </form>

                        <p className="auth-footer">
                            {isLoginMode ? "Don't have an account?" : 'Already have an account?'}
                            <button
                                className="auth-link"
                                onClick={() => {
                                    setIsLoginMode(!isLoginMode);
                                    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                                    setErrors({});
                                }}
                            >
                                {isLoginMode ? 'Sign up' : 'Login'}
                            </button>
                        </p>
                    </>
                ) : (
                    <div className="user-logged-in">
                        <div className="user-avatar">👤</div>
                        <h3>Welcome, {user.name}!</h3>
                        <p>{user.email}</p>

                        <div className="user-menu">
                            <button className="user-menu-item">
                                📦 Order History
                            </button>
                            <button className="user-menu-item">
                                ❤️ Wishlist
                            </button>
                            <button className="user-menu-item">
                                ⚙️ Settings
                            </button>
                        </div>

                        <button
                            className="btn btn-secondary btn-lg"
                            onClick={() => {
                                dispatch({ type: 'AUTH_LOGOUT' });
                                handleClose();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;
