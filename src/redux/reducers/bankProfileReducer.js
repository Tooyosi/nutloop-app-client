import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    bankProfile: [],
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { bankProfile: [...action.payload.bankProfile], status: action.payload.status })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BANK_PROFILE_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.BANK_PROFILE_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.BANK_PROFILE_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer