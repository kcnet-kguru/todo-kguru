import axios from 'axios'

function create(data) {
  return axios.post('/api/cards', data)
}

function fetchCard(id) {
  return axios.get(`/api/cards/${id}`)
}

function modify(data) {
  return axios.put(`/api/cards/${data.id}`, data)
}

function deleteCard(id) {
  return axios.delete(`/api/cards/${id}`)
}

export default {
  create,
  fetchCard,
  modify,
  deleteCard
}
