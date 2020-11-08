import axios from "./apiAdapter"


let dataToSend = new FormData()
dataToSend.append("grant_type", "client_credentials")
dataToSend.append("client_id", process.env.REACT_APP_CLIENT_ID)
dataToSend.append("client_secret", process.env.REACT_APP_CLIENT_SECRET)
export const getToken = (data) => axios.post(`/o/token/`,dataToSend
//  {
//     'grant_type': 'client_credentials',
//     'client_id': process.env.REACT_APP_CLIENT_ID,
//     'client_secret': process.env.REACT_APP_CLIENT_SECRET
// }
)

export const register = (data)=> axios.post(`user_profile/create_user/`, data)

export const validate_user = (email)=>axios.get(`user_profile/validate_username/${email}/`)

export const createProfile = (data)=> axios.post(`user_profile/create_update_profile/`, data)

export const generateSignupOtp = (phone)=> axios.get(`common/generate_token/${phone}/`)

export const validateSignupOtp = (data) => axios.post(`common/validate_token/`, data)

export const login = (data)=> axios.post(`user_profile/login/`, data)