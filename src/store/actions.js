import { auth,
        board,
        list,
        card } from '../api'

const actions = {
    LOGIN ({ commit }, { email, password }) {
       return auth.login({ email, password })
          .then(() => commit('LOGIN', { accessToken: 'f5af9f51-07e6-4332-8f1a-c0c11c1e3728"' }))
    },
    FETCH_BOARD_LIST ({ commit }) {
        return  board.fetchAll()
          .then(res => commit('SET_BOARD_LIST', res.data))
    },
    FETCH_BOARD ({ commit }, id) {
        return  board.fetchBoard(id)
          .then( res => commit('SET_BOARD', res.data))
    },
    ADD_BOARD ( _, title) {
       return board.create({ title })
          .then( res => res.data.boardId)
    },
    UPDATE_BOARD ({ dispatch }, { id, title, bgColor }) {
        return  board.modify({ id, title, bgColor })
          .then( res => dispatch('FETCH_BOARD', res.data.boardId) )
    },
    DELETE_BOARD (_, id) {
        return  board.deleteBoard(id).then()
    },
    ADD_LIST ({ dispatch }, { title, boardId, pos }) {
        return  list.create({ title, boardId, pos })
          .then( res => dispatch('FETCH_BOARD', res.data.boardId))
    },
    UPDATE_LIST ({ dispatch }, { id, pos, title }) {
        return  list.modify({ id, pos, title })
          .then(res => dispatch('FETCH_BOARD', res.data.boardId))

    },
    DELETE_LIST ({ dispatch }, { id, boardId }) {
        return  list.deleteList({ id, boardId })
          .then(res => dispatch('FETCH_BOARD', res.data))
    },
    FETCH_CARD ({ commit }, id) {
        return  card.fetchCard(id)
          .then( res => commit('SET_CARD', res.data) )
    },
    ADD_CARD ({ dispatch }, { title, pos, listId, boardId }) {
        return  card.create({ title, position: pos, listId, boardId })
          .then(res => {dispatch('FETCH_BOARD', res.data.boardId)})
    },
    UPDATE_CARD({ dispatch }, { id, pos, title, description, listId }) {
        return   card.modify({ id, position: pos, title, description, listId })
          .then( res => dispatch('FETCH_BOARD', res.data.id))
    },
    DELETE_CARD({ dispatch }, id) {
        return   card.deleteCard(id)
          .then(() => dispatch('FETCH_BOARD', id))
    }
}

export default actions
