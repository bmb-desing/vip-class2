<template>
  <div class="visual">
    <street v-if="type == 'street'"></street>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Street from './visual/Street'
	export default {
	  props: ['objects'],
		name: "object-visual",
    computed: {
      ...mapGetters({
        type: 'getVisualType',

      })
    },
    components: {
	    Street
    }
	}
</script>

<style>

</style>
