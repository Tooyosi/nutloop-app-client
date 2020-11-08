import React, { useState } from 'react'
import Sidebar from '../components/defaults/Sidebar'
import { AuthGuard } from '../routes/guards/AuthGuard'
import LoggedInGuard from '../routes/guards/LoggedInGuard'
import Main from "../components/common/Main"
import Wrapper from "../components/common/Wrapper"
import Navbar from '../components/defaults/Navbar'
import { Container } from 'reactstrap'
import Transfer from '../pages/Transfer'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAirtime, toggleBillsPay, toggleTransfer } from '../redux/actions/popupAction'
import BillsPayment from '../pages/BillsPayment/BillsPayment'
import BuyAirtime from '../pages/AirtimeAndData'
export default function Dashboard({ children }) {
    let [toggled, setToggled] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const updateToggle = () => {
        setToggled(!toggled)
    }
    return (
        <AuthGuard>
            <LoggedInGuard>
                <Wrapper>
                    <Sidebar isToggled={toggled} />
                    <Main>
                        <Navbar updateToggle={updateToggle} />
                        <Container fluid>
                            {children}
                        </Container>
                    </Main>
                    <Transfer modal={state.popup.showSendMoney} toggle={()=> dispatch(toggleTransfer())}/>
                    <BillsPayment modal={state.popup.showPayBills} toggle={()=> dispatch(toggleBillsPay())}/>
                    <BuyAirtime modal={state.popup.showBuyAirtime} toggle={()=> dispatch(toggleAirtime())}/>
                </Wrapper>
            </LoggedInGuard>
        </AuthGuard>
    )
}
