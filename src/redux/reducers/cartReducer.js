import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    cartItems: [],
    cartItem: {
        item: {},
        status: async_status.__DEFAULT__
    },
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { cartItems: [...action.payload.cartItems], status: action.payload.status })
}

const updateCartItem = (state, action) => {
    return updateObject(state, { cartItem: { ...state.cartItem, item: { ...action.payload.item }, status: action.payload.status } })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CART_ITEM_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.CART_ITEM_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.CART_ITEM_SUCCESS:
            return updateCartItem(state, action);
        case actionTypes.CART_ITEMS_FAILED:
            return { ...state, cartItems: { ...state.cartItems, status: async_status.__FAILED__ } };
        case actionTypes.CART_ITEMS_LOADING:
            return { ...state, cartItems: { ...state.cartItems, status: async_status.__LOADING__ } };
        case actionTypes.CART_ITEMS_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer