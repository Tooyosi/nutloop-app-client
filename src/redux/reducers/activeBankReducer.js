import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    activeBank: {},
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { activeBank: {...action.payload.activeBank}, status: action.payload.status })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTIVE_BANK_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.ACTIVE_BANK_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.ACTIVE_BANK_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer