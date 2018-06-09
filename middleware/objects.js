export default async function ({params, store, app}) {
  const object = await app.$axios.get('/rooms?type=' + params.item)
  const data = object.data
  store.commit('loadObjects', data.house)
  store.commit('loadRange', data.setting)
  store.commit('clearObject')
}
