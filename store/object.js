export default {
  state: {
    visualType: 'street',
    objects: [
      {
        id: 1,
        house: 1,
        floor: 1,

      }
    ],
    filters: {
      house: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'корпус',
        values: [
          1, 2, 3, 4, 5
        ]
      },
      floor: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'этаж',
        values: [
          1, 2, 3, 4, 5
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
    }
  },
  getters: {
    getFilters: (state) => {
      return state.filters
    },
    getMin: (state) => (data) => {
      return state.filters[data].value.min || state.filters[data].values[0]
    },
    getMax: (state) => (data) => {
      return state.filters[data].value.max || state.filters[data].values[1]
    },
  },
  mutations: {
    changeFilter: (state, payload) => {
      return state.filters[payload.id].value = payload.value
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
    }
  }
}
