import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_QUANTITY, CART_CLEAR } from '../actions/cartActions';

const initialState = {
    items: [],
    totalPrice: 0,
    totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_ADD_ITEM: {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    totalPrice: state.totalPrice + action.payload.price,
                    totalItems: state.totalItems + 1,
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                totalPrice: state.totalPrice + action.payload.price,
                totalItems: state.totalItems + 1,
            };
        }

        case CART_REMOVE_ITEM: {
            const itemToRemove = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
                totalItems: state.totalItems - itemToRemove.quantity,
            };
        }

        case CART_UPDATE_QUANTITY: {
            const item = state.items.find(item => item.id === action.payload.productId);
            const quantityDifference = action.payload.quantity - item.quantity;

            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.productId
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
                totalPrice: state.totalPrice + (item.price * quantityDifference),
                totalItems: state.totalItems + quantityDifference,
            };
        }

        case CART_CLEAR:
            return initialState;

        default:
            return state;
    }
};

export default cartReducer;