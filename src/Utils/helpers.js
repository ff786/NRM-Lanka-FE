// Format currency to LKR
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 0,
    }).format(amount);
};

// Format currency display
export const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-LK')}`;
};

// Filter products based on criteria
export const filterProducts = (products, filter, search, priceRange) => {
    return products.filter(product => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesCategory && matchesSearch && matchesPrice;
    });
};

// Sort products
export const sortProducts = (products, sortBy) => {
    const sorted = [...products];

    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'popular':
        default:
            return sorted.sort((a, b) => b.stock - a.stock);
    }
};

// Validate email
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate phone number (Sri Lanka format)
export const validatePhone = (phone) => {
    const phoneRegex = /^(\+94|0)[0-9]{9}$/;
    return phoneRegex.test(phone);
};

// Get total cart value
export const calculateCartTotal = (items) => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Local storage helpers
export const saveToLocalStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

export const getFromLocalStorage = (key, defaultValue = null) => {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return defaultValue;
    }
};

export const removeFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing from localStorage:', error);
    }
};