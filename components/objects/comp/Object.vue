<template>
    <div style="width: 100%;flex-basis: 100%;max-width: 100%;">
      <visual v-if="type == 'visual'" :objects="objects"></visual>
      <tables v-if="type == 'table'" :objects="objects"></tables>
    </div>
</template>

<script>
  import Tables from './objectTable'
  import Visual from './objectVisual'
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "object-filter",
    computed: {
      ...mapGetters({
        type: 'getType',
        objects: 'getObject'
      })
    },
    components: {
		  Tables,
      Visual
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
    beforeDestroy() {
		  window.removeEventListener('resize')
    }
	}
</script>

<style>

</style>
