import {state} from "./index";

export default {
  state: {
    activeRoom: null,
    object: [
      {
        svg: 'm 3432.3962,1625.2642 63.5095,-516.7359 34.6415,11.5472 80.8302,-14.434 83.7169,-57.7358 86.6038,2.8868 129.9057,-49.0755 83.717,-54.84908 77.9434,5.77359 23.0943,-5.77359 2.8868,-37.5283' +
        ' 49.0755,25.98113 118.3584,17.32076 115.4717,83.71699 46.1887,25.9811 -20.2075,23.0944 -135.6793,493.6415 -560.0377,262.6981 -20.2076,8.6604 -268.4717,-199.1887 z',
        name: 'К-10',
        rooms: []
      },
      {
        //То что заполняем сейчас
        svg: 'm 1348.1321,1804.2453 -441.67927,-366.6227 -83.71698,-461.88675 -25.98113,-11.54717 2.88679,-25.98113 178.98113,-83.71698 121.24526,-2.8868' +
        ' 34.6415,-14.43396 v 25.98113 l 418.5849,245.37736 31.7548,-11.5472 14.4339,282.9057 -46.1887,23.0943 -11.5471,-23.0943 -20.2076,8.6604 34.6415,334.8679 z',
        name: 'Античная 26',
        floorImg: '/img/object/house-2-section.png',
        sections: 2,
        rooms: [
          {
            area: 72.1,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 1,
            section: 1,
            free: false,
            image: '/img/object/rooms/72-1-right.png',
            svgTemplate: 'M 532.90879,5.4123573 H 732.11345 L 732.84047,48.30679 718.29998,47.579765 V 165.3577 l -28.35394,0.72702 1.45405,5.8162 -61.07004,-1.45405 v 34.89716 l -98.8753,1.45405 z'
          },
          {
            area: 55.1,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 2,
            section: 1,
            free: false,
            image: '/img/object/rooms/55-1-right.png',
            svgTemplate: 'm 1.4540486,208.97915 1.4540485,93.78614 18.1756069,18.1756' +
            ' 20.35668,2.9081 0.727024,67.61326 15.994534,18.90263 107.599588,-0.72703' +
            ' 3.63513,-151.94807 12.35941,-0.72702 -0.72703,-51.61873 z'
          },
          {
            area: 41.3,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 3,
            section: 1,
            free: true,
            image: '/img/object/rooms/41-3-right.png',
            svgTemplate: 'm 181.02904,205.34403 107.5996,2.18108' +
            ' -2.9081,200.6587 -119.95901,1.45404 3.63513,-151.94807 12.35941,-0.72702 z'
          },
          {
            area: 42.2,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 4,
            section: 1,
            free: false,
            image: '/img/object/rooms/42-2-right.png',
            svgTemplate: 'm 288.62864,207.52511 117.77793,-0.72703 2.18107,201.38573 h -122.8671 z'
          },
          {
            area: 46.7,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 5,
            section: 1,
            free: true,
            image: '/img/object/rooms/46-7-right.png',
            svgTemplate: 'm 406.40657,206.79808 h 125.04818 l 0.72702,202.83977 -123.59413,-1.45404 z'
          },
          {
            area: 63.5,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 6,
            section: 1,
            free: false,
            image: '/img/object/rooms/63-5-right.png',
            svgTemplate: 'M 531.45475,206.79808 H 657.22994 L 655.7759,409.63785 H 532.18177 Z'
          },
          {
            area: 63.5,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 55,
            section: 2,
            free: true,
            image: '/img/object/rooms/63-5-left.png',
            svgTemplate: 'M 657.22994,206.79808 H 776.46193 V 408.91083 L 655.7759,409.63785 Z'
          },
          {
            area: 46.7,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 56,
            section: 2,
            free: false,
            image: '/img/object/rooms/46-7-left.png',
            svgTemplate: 'M 776.46193,206.79808 H 880.4264 v 49.43765 h 15.26751 V 411.0919 l -119.23198,-2.18107 z'
          },
          {
            area: 42.2,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 57,
            section: 2,
            free: true,
            image: '/img/object/rooms/42-2-left.png',
            svgTemplate: 'm 880.4264,206.79808 176.6669,2.18107 2.9081,93.78614 -19.6297,18.1756' +
            ' -16.7215,0.72703 -1.4541,71.9754 -15.9945,15.26751 -110.50769,2.18107 V 256.23573 H 880.4264 Z'
          },
          {
            area: 41.3,
            floors: 1,
            rooms: 1,
            price: 400000,
            number: 58,
            section: 2,
            free: false,
            image: '/img/object/rooms/41-3-left.png',
            svgTemplate: 'm 1057.0933,208.97915 2.1811,-96.69422 -21.0837,-20.356684 -15.9946,0.727024 -1.454,-68.340282' +
            ' L 1003.2935,7.5934301 825.17255,6.8664058 824.44553,43.21762 837.53197,42.490595 V 166.81175 l 80.69969,2.90809 1.45405,37.80527 z'
          },
          {
            area: 55.1,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 59,
            section: 2,
            free: true,
            image: '/img/object/rooms/55-1-left.png',
            svgTemplate: 'M 328.61497,44.671668 V 6.1393815 L 532.90879,5.4123573 531.45475,206.79808 h -98.87531' +
            ' l -0.72702,-36.35121 h -58.88897 l -1.45405,-5.8162 -26.89989,-0.72702 V 46.125717 Z'
          },
          {
            area: 72.1,
            floors: 1,
            rooms: 2,
            price: 400000,
            number: 60,
            section: 2,
            free: true,
            image: '/img/object/rooms/72-1-left.png',
            svgTemplate: 'm 239.19099,7.5934301 -0.72703,36.3512139 -13.08643,0.727024 V 166.08472' +
            ' l -0.72703,1.45405 -80.69969,1.45405 -1.45405,40.71336 L 1.4540486,208.97915 2.9080971,114.466' +
            ' 25.44585,93.382295 H 41.440384 L 42.167408,22.86094 59.615991,6.8664058 Z'

          },
        ]
      },
      {
        svg: 'm 1610.8302,687.0566 127.0189,-63.50943 129.9056,-8.66038 476.3208,202.07547 -25.9812,256.92454 -14.4339,-17.3208 -23.0944,2.8868' +
        ' v 34.6415 l -92.3773,34.6415 -77.9434,2.8868 -46.1887,51.9623 -98.1509,40.4151 -8.6604,-17.3208 -31.7547,8.6604 -5.7736,25.9812 -49.0755,28.8679 -216.5094,-115.4717 z',
        name: 'К-19',
        rooms: []
      },
      {
        svg: 'm 2344.0755,816.96226 -11.5472,-378.16981 -2.8868,-17.32075 40.4151,-8.66038 57.7359,-37.5283' +
        ' 63.5094,2.88679 31.7547,-11.54717 v 17.32076 l 31.7547,17.32075 17.3208,-11.54717 h 34.6415 l 46.1887,31.75472' +
        ' 11.5471,14.43396 106.8114,34.64151 23.0943,-11.54717 57.7358,2.88679 51.9623,40.4151 v 8.66037 l 60.6226,11.54717 11.5472,-14.43396' +
        ' 23.0944,11.54717 -5.7736,17.32076 46.1887,17.32075 8.6603,-17.32075 57.7359,5.77358 75.0566,49.07547 v 5.77359 l 57.7358,17.32075 20.2076,-11.54717' +
        ' 17.3207,2.8868 -5.7736,23.09433 40.4151,11.54717 106.8114,-5.77358 54.849,40.41509 2.8868,11.54717 161.6604,54.84906 5.7736,-14.43396 83.717,8.66038 77.9434,46.18867' +
        ' 5.7735,11.54717 60.6227,28.86793 49.0755,-23.09434 -8.6604,49.07547 -14.434,8.66038 -17.3207,147.22644 -98.151,46.1887 -86.6038,-2.8868 -83.7169,57.7358 -80.8302,14.434' +
        ' -34.6415,-11.5472 -28.868,219.3962 -629.3207,-262.6981 v -31.7547 l -121.2453,-75.05661 -98.1509,-31.75471 -23.0944,5.77358 -2.8868,23.09434 -248.2641,-138.56604',
        name: 'К-9',
        rooms: []
      }
    ],
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
          'К-19'
        ]
      },
      floor: {
        value: null,
        type: 'select',
        size: 'small',
        text: 'этаж',
        values: [
          1, 2, 3, 4, 5, 6, 7, 8 ,9 , 10
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
          if (item.floors == floor) {
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
        floor: floor == null || floor == data.floors,
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
      var roomsCount = 0
      var sections = state.object[data].sections
      var roomsNotBuyCount = 0
      var name = state.object[data].name
      state.object[data].rooms.map((item) => {
        roomsCount++
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
      state.activeRoom = state.object[payload.house].rooms[payload.room]
      return state
    },
    closeRoom: (state) => {
      return state.activeRoom = null
    }
  }
}
