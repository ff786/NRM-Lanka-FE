export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_UPDATE_QUANTITY = 'CART_UPDATE_QUANTITY';
export const CART_CLEAR = 'CART_CLEAR';

export const addToCart = (product) => {
    return {
        type: CART_ADD_ITEM,
        payload: product,
    };
};

export const removeFromCart = (productId) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: productId,
    };
};

export const updateCartQuantity = (productId, quantity) => {
    return {
        type: CART_UPDATE_QUANTITY,
        payload: { productId, quantity },
    };
};

export const clearCart = () => {
    return {
        type: CART_CLEAR,
    };
};