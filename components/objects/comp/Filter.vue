<template>
    <div class="filter__content">
      <item v-for="(item, k) in filters" :key="k" :index="k" :filter="item"></item>
    </div>
</template>

<script>
  import Item from './FilterItem'
  import {mapGetters} from 'vuex'
	export default {
    components: {
	    Item
    },
    computed: {
      ...mapGetters({
        filters: 'getFilters'
      })
    },
		name: "filter-filter",
    methods: {
    }
	}
</script>

<style>

</style>
