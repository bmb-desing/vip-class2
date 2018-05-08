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
            <img :src="image.image" :alt="image.description" v-for="(image, k) in des" :key="image.id" @click="selectDesign(k)">
          </div>
          <div class="menu__button" v-if="des.length < count">
            <button @click="loadImages(des.length)">Загрузить еще</button>
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
    data() {
		  return {
        images: false,
        activeSlide: 0,
        count: 30, //@TODO Получение с сервера
        des: [
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки1',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки2',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки3',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки4',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки5',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки6',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки7',
          },
          {
            image: '/img/bg-index.jpg',
            description: 'Описание картинки8',
          }]
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
        this.images = this.des
        this.activeSlide = index
        return this
      },
      loadImages(images) {
        //@TODO Добавить получение картинки с сервера
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
