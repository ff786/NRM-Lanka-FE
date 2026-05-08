import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, AUTH_SET_ERROR } from '../actions/authActions';

const initialState = {
    user: null,
    isLoggedIn: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                user: {
                    email: action.payload.email,
                    name: action.payload.name,
                },
                isLoggedIn: true,
                error: null,
            };

        case AUTH_REGISTER:
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                },
                isLoggedIn: true,
                error: null,
            };

        case AUTH_LOGOUT:
            return initialState;

        case AUTH_SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;