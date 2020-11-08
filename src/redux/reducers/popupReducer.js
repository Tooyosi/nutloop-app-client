import * as types from '../constants'

const initialState = {
    showSendMoney: false,
    showPayBills: false,
    showBuyAirtime: false,
    showLoanApply: false
}


export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case types.SHOW_BUY_AIRTIME:
            return {
                ...state,
                showBuyAirtime: !state.showBuyAirtime
            }
        case types.SHOW_SEND_MONEY:
            return {
                ...state,
                showSendMoney: !state.showSendMoney
            }
        case types.SHOW_PAY_BILLS:
            return {
                ...state,
                showPayBills: !state.showPayBills
            }
        case types.SHOW_LOAN_APPLY:
            return {
                ...state,
                showLoanApply: !state.showLoanApply
            }
        default:
            return state;
    }
}