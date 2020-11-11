import * as types from '../constants'

const initialState = {
    showAddToCart: false,
}


export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.SHOW_ADD_TO_CART:
            return {
                ...state,
                showAddToCart: !state.showAddToCart
            }
        default:
            return state;
    }
}