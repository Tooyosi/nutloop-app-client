import axios from "./apiAdapter"

export const getFi = ()=> axios.get(`/bank/get_bank/`)

export const getAccountType = ()=> axios.get(`bank/get_bank_account_type/`)

export const nameEnquiry = (data)=> axios.post(`/common/name_enquiry/`, data)

export const createBankProfile = (data) => axios.post(`user_profile/create_bank_profile/`, data)

export const getBankProfile = (phone) => axios.get(`user_profile/profile_details/${phone}/`)

export const validateAccountNumber = (data) => axios.post(`common/validate_account_number/`, data)

export const createBankProfileAccount = (data) => axios.post(`/user_profile/create_bank_profile_account/`, data)