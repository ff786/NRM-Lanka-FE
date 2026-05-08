import { UI_SET_PAGE, UI_TOGGLE_CART, UI_TOGGLE_AUTH, UI_SHOW_NOTIFICATION, UI_HIDE_NOTIFICATION } from '../actions/uiActions';

const initialState = {
    currentPage: 'home',
    showCart: false,
    showAuth: false,
    notification: {
        show: false,
        message: '',
        type: 'success',
    },
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
                showCart: false,
            };

        case UI_TOGGLE_CART:
            return {
                ...state,
                showCart: !state.showCart,
            };

        case UI_TOGGLE_AUTH:
            return {
                ...state,
                showAuth: !state.showAuth,
            };

        case UI_SHOW_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: true,
                    message: action.payload.message,
                    type: action.payload.type,
                },
            };

        case UI_HIDE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    ...state.notification,
                    show: false,
                },
            };

        default:
            return state;
    }
};

export default uiReducer;