<template>
  <div class="section section-image filter" style="background-color: #e1e1e1;background-image: url(/img/object-bg.jpg);" id="choice-apartment">
    <div class="content">
      <header-obj :type="type" @changeType="typeChange"></header-obj>
      <filter :filter="filter" @changeFilter="filterChange"></filter>
    </div>
  </div>
</template>

<script>
  import HeaderObj from './comp/Header'
  import Filter from './comp/Filter'
	export default {
		name: "index",
    components: {
		  HeaderObj,
      Filter
    },
    data() {
	    return {
	      type: 'visual',
        filter: {
	        house: null,
          floor: null,
          section: null,
          apartment: null,

        }
      }
    },
    methods: {
		  typeChange(type) {
		    this.type = type
        return this
      },
      filterChange(item, value) {
		    console.log(item)
		    this.filter[item] = value
      }
    }
	}
</script>

<style>

</style>
