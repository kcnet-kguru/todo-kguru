import axios from 'axios'

function create(data) {
  return axios.post('/api/cards', data)
}

function modify(data) {
  return axios.put(`/api/lists/${data.id}`, data)
}

function deleteList(id) {
  return axios.delete(`/api/lists/${id}`)
}

export default {
  create,
  modify,
  deleteList
}
