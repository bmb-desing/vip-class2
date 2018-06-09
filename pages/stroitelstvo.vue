<template>
    <div class="container">
      <div class="section section-image" style="background-image: url(/img/stroitelstvo.jpg)">
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
              <a href="/pdf/lic_bud.pdf" target="_blank">
                Лицензия на строительно-монтажные<br/> работы АВ №587591 от 15.06.2011г
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
              <div class="list__image" v-for="(val, k) in item.objects_images" :key="k">
                <img :src="val.image" :alt="val.description"  @click="getImages(index, k)">
              </div>

            </div>
            <div v-if="item.imagesCount > item.objects_images.length" class="menu__button">
              <button @click="loadImages(item.objects_images.length, item.id, index)">Загрузить еще</button>
            </div>
          </div>
          <div v-if="objects.length < count" class="menu__button">
            <button @click="loadObject(objects.length)">Загрузить еще</button>
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
				title: 'Строительство',
        meta: [
          {hid: 'description', name: 'description', content: '«VIP CLASS» строительство объектов' },
        ]
			}
		},
		components: {
			Carousel
		},
    async asyncData({app}) {
		  const constr = await app.$axios.get('/construction');
		  return {
		    objects: constr.data.objects,
        count: constr.data.count
      }
    },
		data() {
			return {
				images: false,
				activeSlide: 0,
				newObjects: []
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
				this.images = this.objects[images].objects_images
				this.activeSlide = active
				return this
			},
			close() {
				this.images = null
				this.active = null
				return this
			},
      async loadImages(count, id, key) {
			  const images = await this.$axios.get('/construction/images?skip=' + count + '&id=' +id)
        images.data.map((image) => {
          this.objects[key].objects_images.push(image)
        })
        return this
      },
      async loadObject(length) {
			  const newObjects = await this.$axios.get('/construction/objects?skip=' + length)
        const objects = newObjects.data
        objects.map((object) => {
          this.objects.push(object)
        })
        return this
      }
		}
	}
</script>

<style>

</style>
