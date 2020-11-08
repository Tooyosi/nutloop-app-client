import axios from 'axios'
import Swal from 'sweetalert2'
// import { logout } from "./authService";
import { toastr } from 'react-redux-toastr';


const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});

export function setToken(config, idToken = '') {
  config.headers.common['Authorization'] = `Bearer ${idToken}`;
}

instance.interceptors.request.use(config => {

  //set interceptor token header
  setToken(config, localStorage.getItem('token'));

  return config
}, error => {
  return Promise.reject(error)
});

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    if (!error.response) {
      Swal.fire({
        type: 'info',
        title: 'Network Error: Request Failed',
        showConfirmButton: false,
        // timer: 1000,
        allowOutsideClick: true
      });
      return Promise.reject({
        response: {
          data: {
            code: 502,
            message: "Network unavailable",
            status: false,
          }
        }
      })
    }

    if (error.response.status === 401) {
      toastr.error('Unauthorized', 'Unauthorized Request', {
        timeOut: 2000,
        showCloseButton: false,
        progressBar: false,
        position: "bottom-right"
      })
      // return logout();
    }
    return Promise.reject(error);
  });

/**
 * oauth api axios object
 */

// returns default axios config
export default instance
