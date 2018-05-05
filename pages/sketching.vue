<template>
	<div class="container">
		<div class="section section-image" style="background-image: url(img/technadzor.jpg)">
			<div class="content">
				<div class="content__left">
					<h1 class="content__title">Проектирование:</h1>
					<div class="content__text">
						<div class="el1" v-bar style="height: 460px;">
							<div class="el2">
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit sequi pariatur, deserunt exercitationem illum esse veniam modi facere ea unde eum saepe aut in nesciunt doloremque, corporis veritatis officia!</p>

							</div>
						</div>
					</div>
				</div>
				<div class="content__right">
					<div class="info info_red">
						<h3>Предпроектные работы</h3>
						<span>от</span> <b>60</b> <span>до</span> <b>240</b> <span>руб за м<sup>2</sup></span>
					</div>
					<div class="info info_darkred">
						<h3>Комплексное проектирование</h3>
						<span>от</span> <b>240</b> <span>до</span> <b>900</b> <span>руб за м<sup>2</sup></span>
					</div>
					<div class="info info_blue">
						<a href="#">
							Сертификат на обследование <br/>
							зданий и сооружений АЕ №000452 <br/>
							от 23.07.2012г.
						</a>
					</div>
					<div class="info info_blue">
						<a href="#">
							Сертификат на обследование <br/>
							зданий и сооружений АЕ №000452 <br/>
							от 23.07.2012г.
						</a>
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
		<div class="section  section_ready" style="background-color: #e1e1e1;">
			<h2>Мы выполняем</h2>
      <div class="ready">
        <div class="ready__item" @click="changeReady(index)" :class="item.show ? 'show' : 'hide'" v-for="(item, index) in ready" :key="index">
          <h3 >{{item.title}}</h3>
          <div class="ready__text" v-html="item.text" v-show="item.show"></div>
        </div>
      </div>
		</div>
		<div class="section section_sketch">
			<div class="sketch" v-for="(items, index) in sketch" :key="items.id">
				<div class="sketch__title">
					<h2>{{items.title}}</h2>
				</div>
				<div class="sketch__container">
					<div class="list__images">
						<img :src="image.image" :alt="image.title" v-for="image in items.images" :key="image.id" @click="selectActiveObject(image)">
					</div>
					<div class="menu__button" v-if="items.images.length < items.count">
						<button @click="getImages(index, items.id, items.images.length)">Загрузить еще</button>
					</div>
				</div>
			</div>
		</div>
		<objects v-if="activeObject" :object="activeObject" @closeCarousel="close"></objects>
	</div>

</template>

<script>
	import Objects from '~/components/objects/Object.vue'
	export default {
		name: "sketching",
		components: {
			Objects
		},
		head() {
			return {
				title: 'Проектирование'
			}
		},
		data() {
			return {
				showObject: false,
				activeObject: null,
        ready: [
          {
            title: 'Предпроектные \n' +
            'работы',
            show: false,
            text: 'разработка предварительных архитектурных предложений; \n' +
            '\n' +
            'разработка предложений по расположению объектов на земельных участках; \n' +
            '\n' +
            'проработка инженерной характеристики объекта и составление опросных листов и другие виды работ, необходимые для начала процесса проектирования; \n' +
            '\n' +
            'помощь в получении технических условий по инженерному обеспечению объектов архитектуры'
          },
          {
            title: 'Комплексное \n' +
            'проектирование \n' +
            'различных \n' +
            'объектов \n' +
            'строительства',
            show: false,
            text: 'разработка предварительных архитектурных предложений; \n' +
            '\n' +
            'разработка предложений по расположению объектов на земельных участках; \n' +
            '\n' +
            'проработка инженерной характеристики объекта и составление опросных листов и другие виды работ, необходимые для начала процесса проектирования; \n' +
            '\n' +
            'помощь в получении технических условий по инженерному обеспечению объектов архитектуры'
          },
          {
            title: 'Авторский \n' +
            'надзор за \n' +
            'объектами \n' +
            'строительства',
            show: false,
            text: 'разработка предварительных архитектурных предложений; \n' +
            '\n' +
            'разработка предложений по расположению объектов на земельных участках; \n' +
            '\n' +
            'проработка инженерной характеристики объекта и составление опросных листов и другие виды работ, необходимые для начала процесса проектирования; \n' +
            '\n' +
            'помощь в получении технических условий по инженерному обеспечению объектов архитектуры'
          },
          {
            title: 'Согласование \n' +
            'проектной \n' +
            'документации',
            show: false,
            text: 'разработка предварительных архитектурных предложений; \n' +
            '\n' +
            'разработка предложений по расположению объектов на земельных участках; \n' +
            '\n' +
            'проработка инженерной характеристики объекта и составление опросных листов и другие виды работ, необходимые для начала процесса проектирования; \n' +
            '\n' +
            'помощь в получении технических условий по инженерному обеспечению объектов архитектуры'
          }
        ],
				sketch : [
					{
						title: 'Бюджетные проекты',
						count: 20,
						id: 1,
						images: [
							{
								id: 1,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 2,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 3,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 4,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							}
						]
					},
					{
						title: 'Коммерческие проекты',
						count: 10,
						id: 2,
						images: [
							{
								id: 1,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 2,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 3,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 4,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 5,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 6,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 7,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							},
							{
								id: 8,
								image: '/img/bg-index.jpg',
								title: 'Индивидуальный жилой дом',
								area: 200,
								rooms: 8,
								floors: 2,
								price: 2500000,
								text: 'АРХИТЕКТУРНЫЙ ПАСПОРТ АДАПТАЦИЯ ФУНДАМЕНТА ПАКЕТ ТЕПЛЫЙ ПОЛ'
							}
						]
					}
				]
			}
		},
		methods: {
			getImages(index, id, length) {
				//@TODO Добавить получение картинок с сервера
			},
			selectActiveObject(object) {
				this.activeObject = object
				return this
			},
			close() {
				this.activeObject = null
				return this
			},
      changeReady(index) {
			  return this.ready[index].show = this.ready[index].show ? false : true
      }
		}
	}
</script>

<style>

</style>
