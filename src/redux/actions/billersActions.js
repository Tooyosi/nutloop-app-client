import * as actionTypes from "./actionTypes"
import { async_status } from "../constants"
import { getAirtimeBillers, getBillerCategories } from "../../services/billsPayService"

export const fetchBillers = () => {
    return dispatch => {
        dispatch({ type: actionTypes.BILLERS_LOADING })
        return getBillerCategories()
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.BILLERS_SUCCESS,
                        payload: {
                            billers: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.BILLERS_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            })
            .catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.BILLERS_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}

export const fetchAirtime = () => {
    return dispatch => {
        dispatch({ type: actionTypes.AIRTIME_LOADING })
        return getAirtimeBillers()
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.AIRTIME_SUCCESS,
                        payload: {
                            airtime: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.AIRTIME_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            })
            .catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.BILLERS_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}
