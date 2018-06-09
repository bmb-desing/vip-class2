<template>
  <div class="container">
    <div class="section section-image" style="background-image: url(img/design-bg.jpg)">
      <div class="content">
        <div class="content__left">
          <div class="design">
            <div class="design__block design__block_red">
              <h1>Дизайн проект</h1>
              <p>Компания ООО "Объединение Вип Класс" предлагает Вам варианты дизайна интерьера квартир в ЖК Жемчужина Севастополя. Квартиры с видом на мечту!</p>
            </div>
            <div class="design__block design__block_blue">
              <h2>Комплексный дизайн-проект</h2>
              <p>от <b>600</b> руб за м<sup>2</sup></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section_sketch">
      <div class="sketch">
        <div class="sketch__title">
          <h2>Наши дизайн-проекты:</h2>
        </div>
        <div class="sketch__container">
          <div class="list__images">
              <div class="list__image" v-for="(image, k) in design" :key="image.id">
                <img :src="image.image" :alt="image.name"  @click="selectDesign(k)">
              </div>

          </div>
          <div class="menu__button" v-if="design.length < count">
            <button @click="loadImages(design.length)">Загрузить еще</button>
          </div>
        </div>
      </div>
    </div>
    <carousel v-if="images" :images="images" :active="activeSlide" @closeCarousel="close"></carousel>
  </div>
</template>

<script>
  import Carousel from '~/components/stroitelstvo/Carousel.vue'
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "design",
    head() {
		  return {
		    title: 'Дизайн-проект'
      }
    },
    components: {
		  Carousel
    },
    async asyncData({app}) {
      const design = await app.$axios.get('/design')
      return {
        design: design.data.design,
        count: design.data.count
      }
    },
    data() {
		  return {
        images: false,
        activeSlide: 0,
      }
    },
    computed: {
      ...mapGetters({
        getCarousel: 'showCarousel'
      }),
    },
    methods: {
      ...mapMutations({
        showCarousel: 'showCarousel'
      }),
      selectDesign(index) {
        this.images = this.design
        this.activeSlide = index
        return this
      },
      async loadImages(images) {
        const design = await this.$axios.get('/design?skip=' + images)
        design.data.design.map(item => {
          this.design.push(item)
        })

      },
      close() {
        this.images = null
        this.active = null
        return this
      },
    }
	}
</script>

<style>

</style>
