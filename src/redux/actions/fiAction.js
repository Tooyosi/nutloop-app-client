import { getFi, getBankProfile, getAccountType } from "../../services/fiService"
import * as actionTypes from "../actions/actionTypes"
import { async_status } from "../constants"
export const getBanks = () => {
    return dispatch => {
        dispatch({ type: actionTypes.FI_LOADING })
        return getFi()
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.FI_SUCCESS,
                        payload: {
                            fis: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.FI_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            }).catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.FI_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}

export const fetchAccountTypes = () => {
    return dispatch => {
        dispatch({ type: actionTypes.ACCOUNT_TYPES_LOADING })
        return getAccountType()
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.ACCOUNT_TYPES_SUCCESS,
                        payload: {
                            accountTypes: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.ACCOUNT_TYPES_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            })
            .catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.ACCOUNT_TYPES_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}

export const fetchBankProfile = (phone) => {
    return dispatch => {
        dispatch({ type: actionTypes.BANK_PROFILE_LOADING })
        return getBankProfile(phone)
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.BANK_PROFILE_SUCCESS,
                        payload: {
                            bankProfile: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.BANK_PROFILE_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            })
            .catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.BANK_PROFILE_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}


export const toggleActiveBank = (data) => {
    return dispatch => {
        return Promise.resolve(dispatch({
            type: actionTypes.ACTIVE_BANK_SUCCESS,
            payload: {
                activeBank: data,
                status: async_status.__LOADED__
            }
        }))
    }
}