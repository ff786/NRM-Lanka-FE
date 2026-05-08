export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_SET_ERROR = 'AUTH_SET_ERROR';

export const login = (email) => {
    return {
        type: AUTH_LOGIN,
        payload: {
            email,
            name: 'Customer',
            isLoggedIn: true,
        },
    };
};

export const logout = () => {
    return {
        type: AUTH_LOGOUT,
    };
};

export const register = (name, email) => {
    return {
        type: AUTH_REGISTER,
        payload: {
            name,
            email,
            isLoggedIn: true,
        },
    };
};

export const setAuthError = (error) => {
    return {
        type: AUTH_SET_ERROR,
        payload: error,
    };
};
