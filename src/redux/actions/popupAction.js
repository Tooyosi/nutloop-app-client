import { getFi, getBankProfile } from "../../services/fiService"
import * as types from "../constants"

export const toggleAddToCart = ()=>{
    return dispatch => {
        return Promise.resolve(dispatch({
                type: types.SHOW_ADD_TO_CART,
            }))
        }
}