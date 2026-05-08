export const PRODUCTS_SET_FILTER = 'PRODUCTS_SET_FILTER';
export const PRODUCTS_SET_SEARCH = 'PRODUCTS_SET_SEARCH';
export const PRODUCTS_SET_SORT = 'PRODUCTS_SET_SORT';
export const PRODUCTS_SET_PRICE_RANGE = 'PRODUCTS_SET_PRICE_RANGE';

export const setProductFilter = (category) => {
    return {
        type: PRODUCTS_SET_FILTER,
        payload: category,
    };
};

export const setProductSearch = (query) => {
    return {
        type: PRODUCTS_SET_SEARCH,
        payload: query,
    };
};

export const setProductSort = (sortBy) => {
    return {
        type: PRODUCTS_SET_SORT,
        payload: sortBy,
    };
};

export const setProductPriceRange = (range) => {
    return {
        type: PRODUCTS_SET_PRICE_RANGE,
        payload: range,
    };
};