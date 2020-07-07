import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://localhost:8000',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})
export default ({ Vue }) => {
  Vue.prototype.$axios = axios
}
export { axiosInstance }
