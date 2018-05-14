<template>
  <div class="section section-image filter" style="background-color: #e1e1e1;background-image: url(/img/object-bg.jpg);" id="choice-apartment">
    <div class="content">
      <header-obj></header-obj>
      <filters></filters>
      <objects-filter></objects-filter>
    </div>
  </div>
</template>

<script>
  import HeaderObj from './comp/Header'
  import Filters from './comp/Filter'
  import ObjectsFilter from './comp/Object'
	export default {
		name: "index",
    components: {
		  HeaderObj,
      Filters,
      ObjectsFilter
    },
	}
</script>

<style>

</style>
