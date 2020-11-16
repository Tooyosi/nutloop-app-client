import React from 'react'
import CartItems from './CartItems'
import {useSelector} from "react-redux"

export default function Cart() {
    const state = useSelector(state => state)
    return (
        <div>
            <CartItems items={state.cart.cartItems}/>
        </div>
    )
}
