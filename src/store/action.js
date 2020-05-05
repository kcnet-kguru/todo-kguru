import boardList from '../data/data.json'

const actions = {
    LOGIN ({ commit }, { email, password }) {
        console.log(`passed email:: ${email} and passowrd:: ${password}`);
        commit('LOGIN', { accessToken: 'f5af9f51-07e6-4332-8f1a-c0c11c1e3728"' })
    },
    FETCH_BOARD_LIST ({ commit }) {
        commit('SET_BOARD_LIST', boardList)
    },
    FETCH_BOARD ({ commit }, id) {
        let item;
        boardList.forEach(e => {
            if(e.id === id) item = e;
        })
        commit('SET_BOARD', { item })
    },
    ADD_BOARD (_, title) {
        boardList.push({id: 99, title: title, bgColor: "rgb(0, 121, 191)"})
    },
    UPDATE_BOARD ({ state, dispatch }, { id, title, bgColor }) {
        console.log(title)
        boardList.forEach(e => {
            if(e.id === id) e.bgColor = bgColor;
        })
        dispatch('FETCH_BOARD', state.board.id)
    },
    DELETE_BOARD (_, id) {
        console.log(id);
    },
    ADD_LIST ({ state, dispatch }, { title, boardId, pos }) {
        console.log({ title, boardId, pos })
        dispatch('FETCH_BOARD', state.board.id)
    },
    UPDATE_LIST ({ state, dispatch }, { id, pos, title }) {
        console.log({ id, pos, title })
        dispatch('FETCH_BOARD', state.board.id)
    },
    DELETE_LIST ({ state, dispatch }, { id, pos, title }) {
        console.log({ id, pos, title })
        dispatch('FETCH_BOARD', state.board.id)
    },
    FETCH_CARD ({ commit }, id) {
        let data;
        boardList.forEach(e => {
            e.lists.forEach(list => {
                list.cards.forEach(card => {
                    if(card.id === id) data = card
                })
            })
        })
        commit('SET_CARD', data)
    },
    ADD_CARD ({ state, dispatch }, { title, pos, listId }) {
        console.log({ title, pos, listId })
        dispatch('FETCH_BOARD', state.board.id)
    },
    UPDATE_CARD({ state, dispatch }, { id, pos, title, description, listId }) {
        console.log({ id, pos, title, description, listId })
        dispatch('FETCH_BOARD', state.board.id)
    },
    DELETE_CARD({ state, dispatch }, id) {
        console.log(id)
        dispatch('FETCH_BOARD', state.board.id)
    }
}

export default actions
