<template>
  <div class="filter__header">
    <div class="filter__container">
      <div class="filter__left">
        <h2 class="filter__title">«Жемчужина Севастополя»</h2>
      </div>
      <div class="filter__center">
        <div class="filter__button active" v-if="visual == 'house' && type == 'visual'" @click="changeType('street')">
          <span>К выбору дома</span>
        </div>
      </div>
      <div class="filter__right">
        <div class="filter__button" @click="change('visual')" :class="type == 'visual' ? 'active' : ''">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 932.15 932.15" style="enable-background:new 0 0 932.15 932.15;"
                 xml:space="preserve">
            <g>
              <path d="M466.075,161.525c-205.6,0-382.8,121.2-464.2,296.1c-2.5,5.3-2.5,11.5,0,16.9c81.4,174.899,258.601,296.1,464.2,296.1
                s382.8-121.2,464.2-296.1c2.5-5.3,2.5-11.5,0-16.9C848.875,282.725,671.675,161.525,466.075,161.525z M466.075,676.226
                c-116.1,0-210.1-94.101-210.1-210.101c0-116.1,94.1-210.1,210.1-210.1c116.1,0,210.1,94.1,210.1,210.1
                S582.075,676.226,466.075,676.226z"/>
              <circle cx="466.075" cy="466.025" r="134.5"/>
            </g>
          </svg>
          <span>Визуальный<br/>выбор</span>
        </div>
        <div class="filter__button filter__button_visual" @click="change('table')" :class="type == 'table' ? 'active' : ''">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 231 231">
            <g>
              <rect width="181" x="50" y="164.5" height="33"/>
              <rect width="181" x="50" y="99.5" height="33"/>
              <rect width="181" x="50" y="32.5" height="33"/>
              <rect width="33" y="165.5" height="33"/>
              <rect width="33" y="99.5" height="33"/>
              <rect width="33" y="32.5" height="33"/>
            </g>
          </svg>
          <span>Выбор по<br/>параметрам</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "filter-header",
    computed: {
      ...mapGetters({
        type: 'getType',
        visual: 'getVisualType'
      })
    },
    methods: {
      ...mapMutations({
        change: 'changeType',
        changeType: 'changeVisualType'
      })
    }
	}
</script>

<style>

</style>
