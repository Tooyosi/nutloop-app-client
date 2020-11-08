import { getFi, getBankProfile } from "../../services/fiService"
import * as types from "../constants"

export const toggleTransfer = ()=>{
    return dispatch => {
        return Promise.resolve(dispatch({
                type: types.SHOW_SEND_MONEY,
            }))
        }
}

export const toggleBillsPay = ()=>{
    return dispatch => {
        return Promise.resolve(dispatch({
                type: types.SHOW_PAY_BILLS,
            }))
        }
}

export const toggleAirtime = ()=>{
    return dispatch => {
        return Promise.resolve(dispatch({
                type: types.SHOW_BUY_AIRTIME,
            }))
        }
}