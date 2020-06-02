import axios from 'axios'

function login(data) {
  return axios.post('/api/auth', data)
}

export default {
  login
}
