export const UI_SET_PAGE = 'UI_SET_PAGE';
export const UI_TOGGLE_CART = 'UI_TOGGLE_CART';
export const UI_TOGGLE_AUTH = 'UI_TOGGLE_AUTH';
export const UI_SHOW_NOTIFICATION = 'UI_SHOW_NOTIFICATION';
export const UI_HIDE_NOTIFICATION = 'UI_HIDE_NOTIFICATION';

export const setPage = (page) => {
    return {
        type: UI_SET_PAGE,
        payload: page,
    };
};

export const toggleCart = () => {
    return {
        type: UI_TOGGLE_CART,
    };
};

export const toggleAuth = () => {
    return {
        type: UI_TOGGLE_AUTH,
    };
};

export const showNotification = (message, type = 'success') => {
    return {
        type: UI_SHOW_NOTIFICATION,
        payload: { message, type },
    };
};

export const hideNotification = () => {
    return {
        type: UI_HIDE_NOTIFICATION,
    };
};