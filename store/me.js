export const state = () => {
  return {
    user: {},
    token: '',
    refresh_token: '',
    breadcrumb: '',
    product: '',
    toggle: true,
    role: 0,
  }
}
export const getters = {
  getToken: (state) => {
    const t = localStorage.getItem('token') || state.token
    return t
  },
  getRefreshToken: (state) => {
    const rt = localStorage.getItem('refresh_token') || state.refresh_token
    return rt
  },
  getUser: (state) => {
    const user = localStorage.getItem('user') || state.user
    let u = JSON.parse(user)
    return u
  },
  getRole: (state) => {
    const role = localStorage.getItem('role') || state.role
    let r = JSON.parse(role)
    return r
  },
  getToggle: (state) => {
    const toggle = state.toggle
    return toggle
  },
  getBreadcrumb: (state) => {
    const breadcrumb = state.breadcrumb
    return breadcrumb
  },
  getProduct: (state) => {
    const product = state.product
    return product
  },
}
export const mutations = {
  SET_TOKEN(state, token) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token)
    }
    state.token = token
  },
  SET_REFRESH_TOKEN(state, refresh_token) {
    localStorage.setItem('refresh_token', refresh_token)
    state.refresh_token = refresh_token
  },
  SET_USER(state, user) {
    const u = JSON.stringify(user)
    localStorage.setItem('user', u)
    state.user = user
  },
  SET_ROLE(state, role) {
    const u = JSON.stringify(role)
    localStorage.setItem('role', u)
    state.role = role
  },
  CLEAR_USER(state) {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    state.user = {}
    state.token = ''
    state.refresh_token = ''
  },
  SET_TOGGLE(state) {
    state.toggle = !state.toggle
  },
  SET_BREADCRUMB(state, breadcrumb) {
    state.breadcrumb = breadcrumb
  },
  SET_PRODUCT(state, product) {
    state.product = product
  },
}
export const actions = {
  async userLogin({ commit, dispatch }, data) {
    const self = this
    return await self.$api
      .userLogin(data)
      .then(async (response) => {
        await commit('SET_TOKEN', response.data.token)
        await commit('SET_REFRESH_TOKEN', response.data.refresh_token)

        await dispatch('me')
        return undefined
      })
      .catch((error) => {
        return error
      })
  },
  async me({ commit }) {
    const self = this
    return await self.$api.userGetMe().then(async (response) => {
      await commit('SET_USER', response.data)
      await commit('SET_ROLE', response.data.roles[0].role)
    })
  },
  async logout({ commit }) {
    const self = this
    return await self.$api
      .userLogout()
      .then(async () => {
        await commit('CLEAR_USER')
        return undefined
      })
      .catch(async (error) => {
        return error
      })
  },
  setToggle({ commit }) {
    commit('SET_TOGGLE')
  },
  setBreadcrumb({ commit }, breadcrumb) {
    commit('SET_BREADCRUMB', breadcrumb)
  },
  setProduct({ commit }, product) {
    commit('SET_PRODUCT', product)
  },
}
