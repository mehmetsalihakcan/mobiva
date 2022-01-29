import * as actionTypes from './actionTypes';

const initialState = {
    products: [],
    token: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:

            return {
                ...state,
                products: action.payload,
            };
     

        default:
            return state;
    }
};