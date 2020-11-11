import { combineReducers } from "redux" 
import authReducer from "./authReducer"
import userReducer from "./userReducer"
import fiReducer from "./fiReducer"
import bankProfileReducer from "./bankProfileReducer"
import popupReducer from "./popupReducer"
import activeBankReducer from "./activeBankReducer"
import beneficiaryReducer from "./beneficiaryReducer"
import billersReducer from "./billersReducer"

export default combineReducers({
    popup: popupReducer,
})