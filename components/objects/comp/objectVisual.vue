<template>
  <div class="visual">
    <street v-if="type == 'street'"></street>
    <house v-if="type == 'house'"></house>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Street from './visual/Street'
  import House from './visual/House'
	export default {
	  props: ['objects'],
		name: "object-visual",
    computed: {
      ...mapGetters({
        type: 'getVisualType',
      })
    },
    components: {
	    Street,
      House,
    }
	}
</script>

<style>

</style>
