<template>
    <div class="container">
      <div class="section section-image" style="background-image: url(img/technadzor.jpg)">
        <div class="content">
          <div class="content__left">
            <h1 class="content__title">Строительство:</h1>
            <div class="content__text">
              <div class="el1" v-bar style="height: 460px;">
                <div class="el2">
                  <p>Объединение VIPCLASS работает на строительном рынке с 2005 года и производит полный комплекс строительно-монтажных работ, конечным результатом которых является полностью готовое здание или сооружение.</p>
                  <p>Специалисты объединения - квалифицированные, опытные профессионалы - проявляют скрупулёзность и точность в выполнении поставленных задач.</p>
                  <p>Основные принципы работы Объединения VIPCLASS:</p>
                  <ul>
                    <li>гибкая ценовая политика</li>
                    <li>контроль качества и сроков строительства</li>
                    <li>строгое соблюдение норм строительного законодательства</li>
                    <li>применение инновационных технологий</li>
                    <li>индивидуальные условия для любого клиента</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="content__right">
            <div class="info info_red">
              <h3>Возведение каркаса здания</h3>
              <span>от</span> <b>12000</b> <span>руб</span>
            </div>
            <div class="info info_darkred">
              <h3>Комплекс строительно-<br/>монтажных работ</h3>
              <span>от</span> <b>25000</b> <span>руб</span>
            </div>
            <div class="info info_blue">
              <a href="#">
                Сертификат на обследование <br/>
                зданий и сооружений АЕ №000452 <br/>
                от 23.07.2012г.
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="section section_pad">
        <h2 class="section__title">Наши объекты</h2>
        <div class="list__content">
          <div class="list__block" v-for="(item, index) in objects" :key="index">
            <h3 class="list__title">
              {{item.name}}
            </h3>
            <div class="list__images">
              <img :src="val.image" :alt="val.description" v-for="(val, k) in item.items" :key="k" @click="getImages(index, k)">
            </div>
          </div>
        </div>

      </div>
      <no-ssr>
        <carousel
          v-if="images"
          :images="images"
          :active="activeSlide"
          @closeCarousel="close"
        ></carousel>
      </no-ssr>
	</div>
</template>

<script>
	import Carousel from '~/components/stroitelstvo/Carousel.vue'
	import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "stroitelstvo",
    scrollToTop: true,
		head() {
			return {
				title: 'Строительство'
			}
		},
		components: {
			Carousel
		},
		data() {
			return {
				images: false,
				activeSlide: 0,
				objects : [
					{
						name: 'Многоквартирный жилой дом в г. Севастополе по пр. Античный',
						id: 1,
						items: [
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
							}
						]
					},
					{
						name: 'Кофейня "Шоколадница" в гостинице Севастополь',
						id: 2,
						items: [
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							},
							{
								image: '/img/bg-index.jpg',
								description: 'Описание картинки'
							}
						]
					}
				]
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
			getImages(images, active) {
				this.images = this.objects[images].items
				this.activeSlide = active
				return this
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
