import { auth,
        board,
        list,
        card } from '../api'

const actions = {
    LOGIN ({ commit }, { email, password }) {
        auth.login({ email, password })
          .then(() => commit('LOGIN', { accessToken: 'f5af9f51-07e6-4332-8f1a-c0c11c1e3728"' }))
    },
    FETCH_BOARD_LIST ({ commit }) {
        board.fetchAll()
          .then(res => commit('SET_BOARD_LIST', res.data))
    },
    FETCH_BOARD ({ commit }, id) {
        board.fetchBoard(id)
          .then( res => commit('SET_BOARD', res.data))
    },
    ADD_BOARD ({ dispatch }, title) {
        board.create({ title })
          .then( res => dispatch('FETCH_BOARD', res.data.id))
    },
    UPDATE_BOARD ({ dispatch }, { id, title, bgColor }) {
        board.modify({ id, title, bgColor })
          .then( res => dispatch('FETCH_BOARD', res.data.id) )
    },
    DELETE_BOARD (_, id) {
        board.deleteBoard(id).then()
    },
    ADD_LIST ({ dispatch }, { title, boardId, pos }) {
        list.create({ title, boardId, pos })
          .then( res => dispatch('FETCH_BOARD', res.data.id))
    },
    UPDATE_LIST ({ dispatch }, { id, pos, title }) {
        list.modify({ id, pos, title })
          .then(res => dispatch('FETCH_BOARD', res.data.id))

    },
    DELETE_LIST ({ dispatch }, { id, pos, title }) {
        list.deleteList({ id, pos, title })
          .then(res => dispatch('FETCH_BOARD', res.data.id))
    },
    FETCH_CARD ({ commit }, id) {
        card.fetchCard(id)
          .then( res => commit('SET_CARD', res.data) )
    },
    ADD_CARD ({ dispatch }, { title, pos, listId }) {
        card.create({ title, pos, listId })
          .then(res => dispatch('FETCH_BOARD', res.data.id))
    },
    UPDATE_CARD({ dispatch }, { id, pos, title, description, listId }) {
        card.modify({ id, pos, title, description, listId })
          .then( res => dispatch('FETCH_BOARD', res.data.id))
    },
    DELETE_CARD({ dispatch }, id) {
        card.deleteCard(id)
          .then(() => dispatch('FETCH_BOARD', id))
    }
}

export default actions
