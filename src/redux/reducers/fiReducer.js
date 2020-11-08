import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    fis: [],
    accountType: {
        accountTypes: [],
        status: async_status.__DEFAULT__
    },
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { fis: [...action.payload.fis], status: action.payload.status })
}

const updateAccountTypes = (state, action) => {
    return updateObject(state, { accountType: { accountTypes: [...action.payload.accountTypes], status: action.payload.status } })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FI_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.FI_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.FI_SUCCESS:
            return updateState(state, action);
        case actionTypes.ACCOUNT_TYPES_FAILED:
            return {
                ...state, accountType: {
                    accountTypes: [...state.accountType.accountTypes],
                    status: async_status.__FAILED__
                }
            };
        case actionTypes.ACCOUNT_TYPES_LOADING:
            return {
                ...state, accountType: {
                    accountTypes: [...state.accountType.accountTypes],
                    status: async_status.__LOADING__
                }
            };
        case actionTypes.ACCOUNT_TYPES_SUCCESS:
            return updateAccountTypes(state, action);
        default:
            return state
    }
}

export default reducer