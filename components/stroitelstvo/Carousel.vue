<template>
  <div class="form" ref="modal">
      <div class="slider__wrapper">
        <slick ref="slick" class="slick1" :options="slickOptions" @init="handleInit">
          <div  v-for="(val, index) in images" :key="index">
            <img :src="val.image" :alt="val.description">
            <p>{{val.description}}</p>
          </div>
        </slick>
        <slick ref="slick2" class="slick2" :options="slickOptions2">
          <div  v-for="(val, index) in images" :key="index">
            <img :src="val.image" :alt="val.description">
          </div>
        </slick>
        <div class="form__cross">
          <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" class="form__svg" @click="closeForm" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
            <g>
              <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
            </g>
          </svg>
        </div>
      </div>
  </div>
</template>
<script>

export default {
    props: ['images', 'active'],
    data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 5000,
                asNavFor: '.slick2',
            },
            slickOptions2: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.slick1',
                focusOnSelect: true,
            },
        }
    },
    methods: {
        handleInit(event, slick) {
            return slick.currentSlide = this.active
        },
        closeForm() {
            return this.$emit('closeCarousel')
        }

    },
    mounted: function() {
        const modal = this.$refs.modal
        const vm = this
        modal.addEventListener('click', function(e) {
            const target = e.target.className
            if (target == 'form') {
                vm.closeForm()
            }
        })
        document.addEventListener('keypress', function(e) {
            const key = e.keyCode;
            if(key == 27) {
                vm.closeForm()
            }
        })
    },
    beforeDestroy: function() {
        const modal = this.$refs.modal
        modal.removeEventListener('click', function() {
            console.log('Успешно удален')
        })
        document.removeEventListener('keypress', function() {})
    }
}
</script>
<style lang="sass">
    @import 'node_modules/slick-carousel/slick/slick.css'
</style>
