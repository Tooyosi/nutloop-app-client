import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAccountTypes, fetchBankProfile, getBanks } from '../../redux/actions/fiAction'
import { setUser } from '../../redux/actions/userActions'
import { async_status } from '../../redux/constants'
import Loader from '../../components/common/Loader'
import { fetchBeneficiaries } from '../../redux/actions/beneficiaryActions'
import { withRouter } from 'react-router-dom'
import { fetchAirtime, fetchBillers } from '../../redux/actions/billersActions'

function LoggedInGuard(props) {
    let user = localStorage.getItem("user")
    const dispatch = useDispatch()
    let state = useSelector(state => state)
    useEffect(() => {
        if (user == null || user == undefined) {
            return window.location.href = '/'
        } else {
            dispatch(setUser(JSON.parse(user)))

        }

        if (state.fis.status !== async_status.__LOADED__) {
            dispatch(getBanks())
        }

        if (state.fis.accountType.status !== async_status.__LOADED__) {
            dispatch(fetchAccountTypes())
        }

        if (state.bankProfile.status !== async_status.__LOADED__) {
            let userObj = JSON.parse(user)
            dispatch(fetchBankProfile(`${userObj.user.username}`))

        }

        if (state.beneficiary.status !== async_status.__LOADED__) {
            let userObj = JSON.parse(user)
            dispatch(fetchBeneficiaries(`${userObj.id}`))
        }

        if(state.billers.status !== async_status.__LOADED__){
            dispatch(fetchBillers())
        }

        if(state.billers.airtime.status !== async_status.__LOADED__){
            dispatch(fetchAirtime())
        }
    }, [])

    // if(state.bankProfile.status !== async_status.__LOADED__)
    //     return <Loader className="vh-100"/>
    if (user == null || user == undefined) {
        props.history.push('/')
        return <></>
    }

    return props.children
}

export default withRouter(LoggedInGuard)
