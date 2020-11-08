import axios from "./apiAdapter"

export const createBeneficiary = (data)=> axios.post(`/bank/create_update_beneficiary/`, data)

export const getBeneficiaries = (user_id)=> axios.get(`/bank/get_beneficiary/${user_id}/`)