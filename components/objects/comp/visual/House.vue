<template>
  <div class="house" style="overflow: auto;">
      <div class="house__left">
        <span v-for="i in 10" :key="i" :class="i == getFloor ? 'active' : ''" @click="changeFloor(i)">{{i}}</span>
      </div>
      <div class="house__right" >
        <img :src="floorImg" alt="Выбор квартиры" :class="house == 2 ? 'no-full' : 'full'">
        <svg
          id="svg"
          version="1.1"
          :viewBox="house == 2 ? '0 0 2537 415' : '0 0 1063 414'">
          <path v-for="(item, k) in rooms" :key="k" :d="item.svgTemplate" :class="[!item.free ? 'no-buy' : item.filter == false ? 'filter-no' : 'buy']" :data-rooms="k" :data-house="house" :data-area="item.area" :data-section="item.section"  @click="loadRoom({id: item.id, free: item.free})"></path>
        </svg>
        <div class="house__text" id="text">
          <span v-for="(item, k) in rooms" :key="k" :class="[!item.free ? 'no-buy' : item.filter == false ? 'filter-no' : 'buy']">
            <b v-if="!item.free">Проданно</b>
            <b v-else-if="item.filter == false">Не подходит<br/>по параметрам</b>
          </span>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		name: "house",
    computed: {
      ...mapGetters({
        floorImg: 'getActiveHouseImageFloor',
        getFloor: 'getActiveFloor',
        getRooms: 'getActiveRooms',
        rooms: 'getActiveRooms',
        house: 'getActiveHouse',
        sections: 'getSections'
      }),
    },
    methods: {
      ...mapMutations({
        changeFloors: 'changeFloors',
        changeActiveRoom: 'changeActiveRoom',
        changeType: 'changeVisualType'
      }),
      ...mapActions({
        loadRoom: 'loadRoom'
      }),
      changeFloor(i) {
        this.changeFloors(i)
      },
      getRoom(room) {
        if (room.free) {
          this.$store.dispatch('loadRoom', room.id)
        }
      },
      changeTexts() {
        setTimeout(function () {
          const svg = document.getElementById('svg')
          const svgPos = svg.getBoundingClientRect()
          const svgChild = svg.childNodes
          var svgAttrs = []
          svgChild.forEach((item) => {
            const itemPos = item.getBoundingClientRect()
            const x = itemPos.x -svgPos.x
            const y = itemPos.y - svgPos.y
            const pos =
              "top: " + y + "px;" +
              "left: " + x + "px;" +
              "width: "+itemPos.width + "px;" +
              "height: "+itemPos.height + "px;" +
              "position: absolute"
            svgAttrs.push(pos)
          })
          const texts = document.getElementById('text')
          const textsItems = texts.childNodes
          textsItems.forEach((item, index) => {
            item.setAttribute('style', svgAttrs[index])
          })
        }, 250)
      }
    },
    mounted: function () {
      this.changeTexts()
      const vm = this
      window.addEventListener('resize', function () {
        vm.changeTexts()
      })
    },
    updated: function () {
      this.changeTexts()
    }


	}
</script>

<style>

</style>
