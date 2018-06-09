<template>
  <div style="position: relative;">
    <img src="/img/object/object.jpg" alt="Выберите дом">
    <div class="visual__svg">
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        id="svg10"
        viewBox="0 0 4666.6665 2448">
        <path v-for="(item, k) in objects" :key="k"
          :d="item.svgTemplate"
          :data-house="k"
          @mouseenter="hoverHouse"
          @mouseleave="leaveHouse"
          @click="clickHouse(item.name)"
        />
        <path
          d="m 880.4717,1270.1887 -80.83019,31.7547 h -92.37736 l -57.73585,-34.6415 -49.07547,-248.2642
         31.75472,-43.30185 83.71698,-28.86793 83.71698,-8.66032 178.98113,-83.717 155.88676,-17.3208 404.151,-141.45282
          5.7736,-31.75472 37.5283,-20.20754 46.1886,14.43396 109.6982,-34.64148 554.2641,-170.32078 49.0755,25.98113 2.8868,274.24528
           -86.6038,28.86792 -389.717,-167.43395 -129.9056,8.6604 -127.0189,63.5094 34.6415,320.434 -181.8679,66.3962 -329.0944,-236.717 -155.88676,17.3208 -178.98113,83.717 z"
          @mouseenter="hoverParking"
          @mouseleave="leaveParking"
          @click="showForm('Подробнее о гараже или парковке')"
        ></path>
      </svg>
      <div class="visual__hover" v-if="hover" v-bind:style="{top: hoverY + 'px', left: hoverX + 'px'}">
        <h2>{{house.name}}</h2>
        <p>Секции: {{house.section}}</p>
        <p>Этажей: {{house.floors}}</p>
        <p>В продаже: {{house.countFree}}</p>
      </div>
      <div class="visual__hover" v-if="hoverGarage" v-bind:style="{top: hoverY + 'px', left: hoverX + 'px'}">
        <h2>Паркинг и гаражи</h2>
        <p>Для более подробной информации отправьте форму,<br/> и мы с вами свяжемся в ближайшее время</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "street",
    computed: {
      ...mapGetters({
        objects: 'getObject',
        roomsCount: 'getHouseRoomsCount'
      })
    },
    data() {
		  return {
		    hover: false,
        hoverGarage: false,
        hoverX: 0,
        hoverY: 0,
        house: {}
      }
    },
    methods: {
      ...mapMutations({
        changeFilter: 'changeFilter',
        showForm: 'showForm'
      }),
		  hoverHouse(e) {
        const x = e.layerX
        const y = e.layerY
		    const house = e.target.getAttribute('data-house')
        const rooms = this.roomsCount(house)
        this.house = rooms
        this.hover = true
        this.hoverX = x
        this.hoverY = y
      },
      leaveHouse() {
		    this.house= {}
		    this.hover = false
      },
      clickHouse(house) {
        this.changeFilter({
          id: 'house',
          value: house
        })
      },
      hoverParking(e) {
        const x = e.layerX
        const y = e.layerY
        this.hoverGarage = true
        this.hoverX = x
        this.hoverY = y
      },
      leaveParking() {
        this.hoverGarage = false
      }
    }
	}
</script>

<style>

</style>
