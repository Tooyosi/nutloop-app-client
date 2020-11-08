import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    beneficiaries: [],
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { beneficiaries: [...action.payload.beneficiaries], status: action.payload.status })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BENEFICIARIES_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.BENEFICIARIES_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.BENEFICIARIES_SUCCESS:
            return updateState(state, action);
        default:
            return state
    }
}

export default reducer