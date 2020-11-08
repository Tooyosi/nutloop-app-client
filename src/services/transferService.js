import axios from "./apiAdapter"

export const fundsTransfer = (data)=> axios.post(`/transfer/fund_transfer/`, data)