export default {
  state: {
    images: {
      street: {
        image: '/object/object.jpg',
        svg: '<svg\n' +
        '   version="1.1"\n' +
        '   id="svg10"\n' +
        '   viewBox="0 0 1170 658"\n' +
        '>\n' +
        '    <path\n' +
        '      d="m 92.337264,356.93396 49.660376,-30.26179 51.98821,-3.87972 209.50472,28.70991 9.31132,205.625 c 0,0 -83.02595,48.88443 -80.69812,55.09198 2.32783,6.20755 -48.10849,-0.77594 -48.10849,-0.77594 L 93.889151,555.57547 Z"\n' +
        '      id="path20"\n' +
        '    />\n' +
        '    <path\n' +
        '      d="m 429.87264,316.58491 27.93396,-29.48585 53.5401,0.77594 173.03538,19.39858 9.31132,166.82784 -27.15802,51.9882 -238.21463,-49.66037 z"\n' +
        '      id="path22"\n' +
        '    />\n' +
        '</svg>\n'
      },
      house: [
        '/object/house/1.png'
      ]
    },
    visualType: 'street',
    object: [
      {
        id: 1,
        house: 1,
        section: 1,
        floor: 1,
        rooms: 1,
        area: 35,
        price: 2000000,
        cell: true
      },
      {
        id: 2,
        house: 1,
        section: 2,
        floor: 1,
        rooms: 1,
        area: 35,
        price: 2000000,
        cell: false
      },
      {
        id: 3,
        house: 2,
        section: 1,
        floor: 1,
        rooms: 1,
        area: 35,
        price: 2000000,
        cell: true
      },
    ],
    type: 'visual',
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
    }
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
    },
    changeType: (state, payload) => {
      return state.type = payload
    }
  }
}
