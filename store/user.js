import Cookie from 'js-cookie'
import cookieparser from 'cookieparser'
export default {
  state: {
    showVideo: true,
  },
  getters: {
    getVideo: (state) => {
      return state.showVideo
    }
  },
  mutations: {
    closeVideo: (state) => {
      Cookie.set('showVideo', true, {expires: 30})
      return state.showVideo = false
    },
    openVideo: (state) => {
      return state.showVideo = true
    }
  },
  actions: {
    async nuxtServerInit({commit}, {req}) {
      if(req.headers.cookie) {
        const parse = cookieparser.parse(req.headers.cookie)
        if(parse.showVideo) {
          commit('closeVideo')
        }
      }
    }
  }
}
