<template>
  <div style="position: relative;">
    <img :src="getImage('street').image" alt="Выберите дом" usemap="#map">
    <div class="visual__svg" v-html="getImage('street').svg"></div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
	export default {
		name: "street",
    computed: {
      ...mapGetters({
        getImage: 'getImage'
      })
    },
    methods: {
		  hoverHouse() {
		    console.log(123)
      },
      leaveHouse() {
		    console.log(456)
      }
    }
	}
</script>

<style>

</style>
