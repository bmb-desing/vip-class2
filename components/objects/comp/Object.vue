<template>
    <div style="width: 100%;flex-basis: 100%;max-width: 100%;">
      <visual v-if="type == 'visual'"></visual>
      <tables v-if="type == 'table'" ></tables>
      <room v-if="rooms"></room>
    </div>
</template>

<script>
  import Tables from './objectTable'
  import Visual from './objectVisual'
  import Room from './visual/Room'
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "object-filter",
    computed: {
      ...mapGetters({
        type: 'getType',
        objects: 'getObject',
        rooms: 'getActiveRoom',
      })
    },
    components: {
		  Tables,
      Visual,
      Room
    },
    methods: {
      ...mapMutations({
        typeChange: 'changeType'
      })
    },
    mounted() {
		  const vm = this
		  const width = document.body.clientWidth
      if (width <= 768) {
		    this.typeChange('table')
      }
      window.addEventListener('resize', function () {
        const width = document.body.clientWidth
        if (width <= 768) {
          vm.typeChange('table')
        }
      })
    },
	}
</script>

<style>

</style>
