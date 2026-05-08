import { PRODUCTS_SET_FILTER, PRODUCTS_SET_SEARCH, PRODUCTS_SET_SORT, PRODUCTS_SET_PRICE_RANGE } from '../actions/productActions';

const initialState = {
    filter: 'All',
    search: '',
    sortBy: 'popular',
    priceRange: [0, 20000],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_SET_FILTER:
            return {
                ...state,
                filter: action.payload,
            };

        case PRODUCTS_SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            };

        case PRODUCTS_SET_SORT:
            return {
                ...state,
                sortBy: action.payload,
            };

        case PRODUCTS_SET_PRICE_RANGE:
            return {
                ...state,
                priceRange: action.payload,
            };

        default:
            return state;
    }
};

export default productReducer;