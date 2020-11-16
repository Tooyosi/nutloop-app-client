import * as actionTypes from "./actionTypes"
import { async_status } from "../constants"


export const setCartItem = (data)=>{
    return dispatch =>{
        return Promise.resolve(dispatch({
            type: actionTypes.CART_ITEM_SUCCESS,
            payload: {
                item: data,
                status: async_status.__LOADED__
            }
        }))
    }
}


export const setCartItems = (data)=>{
    return dispatch =>{
        return Promise.resolve(dispatch({
            type: actionTypes.CART_ITEMS_SUCCESS,
            payload: {
                cartItems: data || [],
                status: async_status.__LOADED__
            }
        }))
    }
}
