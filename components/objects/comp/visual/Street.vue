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
          :d="item.svg"
          :data-house="k"
          @mouseenter="hoverHouse"
          @mouseleave="leaveHouse"
          @click="clickHouse(item.name)"
        />
      </svg>
      <div class="visual__hover" v-if="hover" v-bind:style="{top: hoverY + 'px', left: hoverX + 'px'}">
        <h2>{{house.name}}</h2>
        <p>Секции: {{house.section}}</p>
        <p>Этажей: {{house.floors}}</p>
        <p>В продаже: {{house.countFree}}</p>
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
        hoverX: 0,
        hoverY: 0,
        house: {}
      }
    },
    methods: {
      ...mapMutations({
        changeFilter: 'changeFilter'
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
      }

    }
	}
</script>

<style>

</style>
