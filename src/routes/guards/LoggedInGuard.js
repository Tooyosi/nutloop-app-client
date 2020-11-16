import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

function LoggedInGuard(props) {
    let user = localStorage.getItem("user")
    const dispatch = useDispatch()
    let state = useSelector(state => state)
   
    // if(state.bankProfile.status !== async_status.__LOADED__)
    //     return <Loader className="vh-100"/>
    if (user == null || user == undefined) {
        props.history.push('/')
        return <></>
    }

    return props.children
}

export default withRouter(LoggedInGuard)
