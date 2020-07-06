import axios from 'axios'

function create(data) {
  return axios.post('/api/lists', data)
}

function modify(data) {
  return axios.put(`/api/lists/${data.id}`, data)
}

function deleteList({ id, boardId }) {
  return axios.delete(`/api/lists/${boardId}/${id}`)
}

export default {
  create,
  modify,
  deleteList
}
