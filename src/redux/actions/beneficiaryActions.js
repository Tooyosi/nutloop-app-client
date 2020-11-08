import { getBeneficiaries } from "../../services/beneficiaryservice"
import * as actionTypes from "../actions/actionTypes"
import { async_status } from "../constants"

export const fetchBeneficiaries = (id) => {
    return dispatch => {
        dispatch({ type: actionTypes.BENEFICIARIES_LOADING })
        return getBeneficiaries(id)
            .then((response) => {
                if (response.data.response_code == "00") {
                    return Promise.resolve(dispatch({
                        type: actionTypes.BENEFICIARIES_SUCCESS,
                        payload: {
                            beneficiaries: response.data.record,
                            status: async_status.__LOADED__
                        }
                    }))
                } else {
                    return Promise.reject(dispatch({
                        type: actionTypes.BENEFICIARIES_FAILED,
                        status: async_status.__FAILED__,
                        ...response?.data
                    }))
                }
            })
            .catch((err) => {
                return Promise.reject(dispatch({
                    type: actionTypes.BENEFICIARIES_FAILED,
                    status: async_status.__FAILED__,
                    ...err.response?.data
                }))
            })
    }
}
