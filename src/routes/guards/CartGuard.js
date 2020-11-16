import React, {useEffect} from 'react'
import {useDispatch} from "react-redux"
import { setCartItems } from '../../redux/actions/cartActions'
export default function CartGuard(props) {
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCartItems(JSON.parse(localStorage.getItem("cart"))))    
    }, [])
    return props.children
}
