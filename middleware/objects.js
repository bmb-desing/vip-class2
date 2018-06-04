export default function ({params, store, app}) {
  app.$axios.get('/rooms?type=' + params.item).then(items => {
    const data = items.data
    store.commit('loadObjects', data.house)
    store.commit('loadRange', data.setting)
  })
}
