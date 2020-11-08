import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from 'reactstrap'
import { toggleActiveBank } from '../../redux/actions/fiAction'
import { async_status } from '../../redux/constants'

export default function BanksDropdown(props) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const doBankToggle = (data) => {
        dispatch(toggleActiveBank(data))
    }


    const changeBank = ({ target: { value } }) => {
        let bank = state.bankProfile.bankProfile.filter((a) => a.id == value)[0]
        doBankToggle(bank)
    }

    useEffect(() => {
        if (state.bankProfile.status == async_status.__LOADED__) {
            if (state.activeBank.status !== async_status.__LOADED__) {
                doBankToggle(state.bankProfile.bankProfile[0])
            }
        }
    }, [state.bankProfile.status])
    return (
        <div className={`${props.className} d-flex`}>
            {/* {console.log(state.activeBank.activeBank)} */}
            {state.activeBank.activeBank?.bank?.logo && <img width="40" className="mr-1" src={`data:image/png;base64,${state.activeBank.activeBank?.bank?.logo}`} />}
            <Input
                className="bank-dropdown"
                type="select"
                value={state.activeBank.activeBank.id}
                onChange={changeBank}>

                {state.bankProfile.bankProfile.map((profile, i) => (
                    <option key={profile.id} value={profile.id} style={{ backgroundImage: `url(data:image/png;base64,${profile.bank.logo})` }}>
                        {/* <img src={profile.bank.logo} /> */}
                        {profile.bank.name}
                    </option>
                ))}
            </Input>
        </div>
    )
}
