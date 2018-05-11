<template>
  <div class="section section-image filter" style="background-color: #e1e1e1;background-image: url(/img/object-bg.jpg);" id="choice-apartment">
    <div class="content">
      <header-obj :type="type" @changeType="typeChange"></header-obj>
      <filters></filters>
    </div>
  </div>
</template>

<script>
  import HeaderObj from './comp/Header'
  import Filters from './comp/Filter'
  import {mapGetters} from 'vuex'
	export default {
		name: "index",
    components: {
		  HeaderObj,
      Filters
    },
    data() {
	    return {
	      type: 'visual',

      }
    },
    computed: {
      ...mapGetters({
        filters: 'getFilters'
      })
    },
    methods: {
		  typeChange(type) {
		    this.type = type
        return this
      },
      filterChange(item, value) {
		    console.log(item)
		    item = value
      }
    }
	}
</script>

<style>

</style>
