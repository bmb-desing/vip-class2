<template>
  <div style="position: relative;">
    <img src="/img/object/object.jpg" alt="Выберите дом" style="width: 100%;">
    <div class="visual__svg">
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="svg10"
        viewBox="0 0 1732 784">
        <path v-for="(item, k) in objects" :key="k"
          :d="item.svgTemplate"
          :data-house="k"
          @mouseenter="hoverHouse"
          @mouseleave="leaveHouse"
          @click="clickHouse(item.name)"
        />
        <path
          d="m 446.51561,360.51098 -12.01388,14.01619 -49.05664,7.00809 -25.02891,-9.0104 -11.01271,-91.10521 2.00231,-14.01618 23.02659,-10.01156 37.04277,-2.00231 22.02544,-13.01503 51.05896,-23.02659 59.06821,-6.00694 114.13179,-35.04046 -1.00116,-18.02081 23.02659,-8.00925 21.02428,10.01156 40.04624,-20.02312 40.04624,-4.00462 75.08671,-22.02544 v -12.01387 l 50.0578,-12.013874 36.04162,17.019654 -8.00925,83.09595 -153.17688,-54.06242 -40.04624,4.00462 -40.04624,20.02312 8.00925,118.13642 -34.03931,-1.00116 -131.15144,-66.0763 -59.06821,6.00694 -51.05896,23.02659 z"
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
        this.hoverX = x + 20
        this.hoverY = y + 20
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
        this.hoverX = x + 20
        this.hoverY = y + 20
      },
      leaveParking() {
        this.hoverGarage = false
      }
    }
	}
</script>

<style>

</style>
