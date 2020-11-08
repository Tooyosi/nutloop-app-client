import * as actionTypes from '../actions/actionTypes'
import { async_status } from '../constants'
import { updateObject } from '../utility'

const initialState = {
    billers: [],
    airtime: {
        airtime: [],
        status: async_status.__DEFAULT__
    },
    status: async_status.__DEFAULT__
}


const updateState = (state, action) => {
    return updateObject(state, { billers: [...action.payload.billers], status: action.payload.status })
}

const updateAirtime = (state, action) => {
    return updateObject(state, { airtime: { ...state.airtime, airtime: [...action.payload.airtime], status: action.payload.status } })
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BILLERS_FAILED:
            return { ...state, status: async_status.__FAILED__ };
        case actionTypes.BILLERS_LOADING:
            return { ...state, status: async_status.__LOADING__ };
        case actionTypes.BILLERS_SUCCESS:
            return updateState(state, action);
        case actionTypes.AIRTIME_FAILED:
            return { ...state,airtime: {...state.airtime, status: async_status.__FAILED__}};
        case actionTypes.AIRTIME_LOADING:
            return { ...state,airtime: {...state.airtime, status: async_status.__LOADING__}};
        case actionTypes.AIRTIME_SUCCESS:
            return updateAirtime(state, action);
        default:
            return state
    }
}

export default reducer