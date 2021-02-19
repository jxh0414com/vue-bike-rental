import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: []
    },
    getters: {
        getCart(state) {
            return state.cart;
        }
    },
    mutations: {
        add(state, item) {
            state.cart = [...state.cart, item]
        },
        remove(state, id) {
            state.cart = state.cart.filter(e => e.id !== id)
        },
        increase(state, id) {
            state.cart.map(e => e.id === id ? {...e, count: e.count++ } : e)
        },
        decrease(state, id) {
            state.cart.map(e => e.id === id ? {...e, count: e.count-- } : e)
        }
    },
    actions: {
        addToCart({ commit, state }, item) {
            state.cart.some(e =>  e.id === item.id) ? commit('increase', item.id) : commit('add', { ...item, count: 1 })
        },
        removeFromCart({ commit }, id) {
            commit('remove', id)
        },
        increaseByOne({ commit }, id) {
            commit('increase', id)
        },
        decreaseByOne({ commit, state }, id) {
            let item = state.cart.find(e =>  e.id === id);
            item.count <= 1 ? commit('remove', id) : commit('decrease', id)
        }
    }
})