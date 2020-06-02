import axios from 'axios'

function create(data) {
  return axios.post('/api/boards', data)
}

function fetchAll() {
  return axios.get('/api/boards')
}

function fetchBoard(id) {
  return axios.get(`/api/boards/${id}`)
}

function modify(data) {
  return axios.put(`/api/boards/${data.id}`, data)
}

function deleteBoard(id) {
  return axios.delete(`/api/boards/${id}`)
}

export default {
  create,
  fetchAll,
  fetchBoard,
  modify,
  deleteBoard
}
