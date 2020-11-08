import React, { Component, useEffect, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { getOauthToken } from "../../redux/actions/authAction"
import { async_status } from '../../redux/constants'
import Loader from "../../components/common/Loader"
export const AuthGuard = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const [loader, updateLoader] = useState(true)
    

    return props.children
}

export default AuthGuard
