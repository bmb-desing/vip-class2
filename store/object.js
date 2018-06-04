import {state} from "./index";

export default {
  state: {
    activeRoom: null,
    object: [],
    visualType: 'street',
    type: 'visual',
    filters: {
      house: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'корпус',
        values: [
          'Античная 26',
          'К-9',
          'К-10',
          'К-13'
        ]
      },
      floor: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'этаж',
        values: [
          1, 2, 3, 4, 5, 6, 7, 8 ,9, 10
        ]
      },
      section: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'секция',
        values: [
          1, 2, 3, 4, 5
        ]
      },
      apartment: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'комнатная',
        values: [
          1, 2, 3, 4, 5
        ]
      },
      area: {
        size: 'big',
        type: 'range',
        text: 'площадь М2',
        value: {
          min: null,
          max: null
        },
        values: [
          20, 150
        ]
      },
      price: {
        size: 'big',
        type: 'range',
        text: 'руб',
        value: {
          min: null,
          max: null
        },
        values: [
          100000, 6000000
        ]
      }
    },
  },
  getters: {
    getActiveHouseImageFloor: (state) => {
      const house = state.filters.house.value
      var activeHouse = -1
      state.object.map((item, index) => {
        if(item.name == house) {
          activeHouse = index
        }
      })
      if(activeHouse != -1) {
        return state.object[activeHouse].floorImg
      }
      else {
        return
      }
    },

    getActiveFloor: (state) => {
      return state.filters.floor.value || 1
    },
    getActiveRoom: (state) => {
      return state.activeRoom
    },
    getActiveHouse: (state) => {
      const house = state.filters.house.value
      var activeHouse = -1
      state.object.map((item, index) => {
        if(item.name == house) {
          activeHouse = index
        }
      })
      return activeHouse
    },
    getSections: (state, getters) => {
      const house = getters.getActiveHouse
      console.log(house)
    },
    getActiveRooms: (state, getters) => {
      const house = state.filters.house.value
      const floor = state.filters.floor.value || 1
      var activeHouse = -1
      state.object.map((item, index) => {
        if(item.name == house) {
          activeHouse = index
        }
      })
      var activeRooms = []
      if (activeHouse != -1) {
        state.object[activeHouse].rooms.map((item) => {
          if (item.floor == floor) {
            item.filter = getters.getRoomByFilter(item)
            activeRooms.push(item)
          }
        })
        return activeRooms
      }
      else  {
        return
      }

    },
    getTableObject: (state, getters) => {
      var activeHouse = null
      var house = state.filters.house.value
      var activeRooms = []
      if (house) {
        state.object.map((item, index) => {
          if(item.name == house) {
            activeHouse = index
          }
        })
      }
      if (activeHouse) {
        state.object[activeHouse].rooms.map((item, k) => {
          item.filter = getters.getRoomByFilter(item)
          item.house = house
          item.index = k
          item.houseEl = activeHouse
          activeRooms.push(item)
        })

      }
      else {
        state.object.map((val, index) => {
          val.rooms.map((item, k) => {
            item.filter = getters.getRoomByFilter(item)
            item.house = val.name
            item.index = k
            item.houseEl = index
            activeRooms.push(item)
          })
        })
      }
      return activeRooms
    },
    getFilters: (state) => {
      return state.filters
    },
    getRoomByFilter: (state) => (data) => {
      const floor = state.filters.floor.value || null
      const appartament = state.filters.apartment.value || null
      const minPrice = state.filters.price.value.min
      const maxPrice = state.filters.price.value.max
      const minArea = state.filters.area.value.min
      const maxArea = state.filters.area.value.max
      const section = state.filters.section.value
      const filters = {
        floor: floor == null || floor == data.floor,
        appartament: appartament == null || appartament == data.rooms,
        section:  section == null || section == data.section,
        minPrice: minPrice == null || minPrice <= data.price,
        maxPrice: maxPrice == null || maxPrice >= data.price.minPrice,
        minArea: minArea == null || minArea <= data.area,
        maxArea: maxArea == null || maxArea >= data.area
      }
      if (filters.appartament && filters.minPrice && filters.maxPrice && filters.minArea && filters.maxArea && filters.section && filters.floor) {
        return true
      }
      else {
        return false
      }
    },
    getSelect: (state) => {
      return state.select
    },
    getMin: (state) => (data) => {
      return state.filters[data].value.min || state.filters[data].values[0]
    },
    getMax: (state) => (data) => {
      return state.filters[data].value.max || state.filters[data].values[1]
    },
    getType: (state) => {
      return state.type
    },
    getObject: (state) => {
      return state.object
    },
    getImage: (state) => (data) => {
      return state.images[data]
    },
    getVisualType: (state) => {
      return state.visualType
    },
    getHouseRoomsCount: (state) => (data) => {
      var sections = state.object[data].sectionCount
      var roomsNotBuyCount = 0
      var name = state.object[data].name
      state.object[data].rooms.map((item) => {
        if(item.free) {
          roomsNotBuyCount++
        }
      })
      return {
        countFree: roomsNotBuyCount,
        name: name,
        section: sections,
        floors: 10
      }
    }
  },
  mutations: {
    changeFilter: (state, payload) => {
      state.filters[payload.id].value = payload.value
      if (state.filters.house.value) {
        state.visualType = 'house'
      }
      if (state.activeRoom) {
        state.visualType = 'room'
      }
      return state
    },
    changeFloors: (state, payload) => {
      return state.filters.floor.value = payload
    },
    changeMin: (state, payload) => {
      var value
      const minVal = state.filters[payload.id].values[0]
      const val = payload.value
      const maxVal = state.filters[payload.id].value.max || state.filters[payload.id].values[1]
      if (minVal > val ) {
        value = minVal
      }
      else if (maxVal <= val) {
        value = maxVal - 1
      }
      else {
        value = val
      }
      return state.filters[payload.id].value.min = value
    },
    changeMax: (state, payload) => {
      var value
      const val = payload.value
      const minVal = state.filters[payload.id].value.min || state.filters[payload.id].values[0]
      const maxVal = state.filters[payload.id].values[1]
      if (val < minVal) {
        value = minVal + 1
      }
      else if(val > maxVal) {
        value = maxVal
      }
      else {
        value = val
      }
      return state.filters[payload.id].value.max = value
    },
    changeType: (state, payload) => {
      return state.type = payload
    },
    changeVisualType: (state, payload) => {
      return state.visualType = payload
    },
    changeActiveRoom: (state, payload) => {
      state.activeRoom = payload
      return state
    },
    closeRoom: (state) => {
      return state.activeRoom = null
    },
    loadObjects: (state, payload) => {
      return state.object = payload
    },
    loadRange: (state, payload) => {
      state.filters.area.values = [parseInt(payload.minArea), parseInt(payload.maxArea)]
      state.filters.price.values = [payload.minPrice, payload.maxPrice]
    },

  },
  actions: {
    loadRoom({commit}, payload) {
      if (payload.free) {
        console.log(this)
        this.$axios.get('/rooms/' + payload.id).then(room => {
          console.log(room)
          commit('changeActiveRoom', room.data)
        })
      }

    }
  }
}
