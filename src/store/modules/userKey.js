const state = () => ({userKey: ''})

const getters = {
    userKey: state => state.userKey,
}

const actions = {
    setUserKey ({ commit }, userKey) {
        commit('setUserKey', userKey)
    }
}

const mutations = {
    setUserKey (state, userKey) {
        state.userKey = userKey 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}