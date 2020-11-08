import axios from "./apiAdapter";

export const getBillerCategories = () => axios.get(`/bill_payment/biller_categories/`)

export const getBillerCategory = (id) => axios.get(`/bill_payment/billers/category_id/${id}/`)

export const getAirtimeBillers = ()=> axios.get(`bill_payment/airtime_billers`)

export const billerValidation = (data) => axios.post(`/bill_payment/customer_validation`, data)

export const getBillerItems = (biller_code) => axios.get(`/bill_payment/biller_payment_items/biller_code/${biller_code}/`)

export const billerPay = (data) => axios.post(`/bill_payment/bill_payment_advice/`, data)
