<template>
    <main class="container">
        <div class="section section-slider" >
            <slider :sliders="slider" :event="event"></slider>
        </div>

    </main>
</template>

<script>
import Slider from '~/components/index/Slider.vue'
export default {

	async asyncData ({app}) {
	  const event = await app.$axios.get('/events/get-first')
    return {
	    event: event.data
    }
	},
    data() {
		return {
			slider: [
                {
                	subtitle: 'Доступные квартиры у Черного моря',
                    title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
                    text: 'Комфортные квартиры по наиболее доступным ценам в одном из самых живописнейших\n' +
                    'и экологически благоприятных уголков города Севастополя, находится в спокойном районе города\n' +
                    'в шаговой доступности от городских пляжей, а также знаменитого Парка Победы с потрясающим\n' +
                    'видом и развитой инфраструктурой, где жители и гости Севастополя любят проводить свое время.',
                    image: '/img/bg-index.jpg',
                    link: '/objects/residential',
                    id: 1
                },
				{
					subtitle: 'Доступные квартиры у Черного моря',
					title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
                    text: 'Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов,внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек,фитнес-центров и т.д.',
                    image: '/img/bg-index2.jpg',
                    link: '/objects/residential',
                    id: 2
                },
				{
					subtitle: 'Доступные квартиры у Черного моря',
					title: '«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»',
                    text: 'Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов,внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек,фитнес-центров и т.д.',
                    image: '/img/bg-index3.jpg',
                    link: '/objects/residential',
                    id: 3
                }
            ]
        }
    },
	head () {
		return {
			title: 'Главная страница'
		}
    },
    components: {
        Slider
    }
}
</script>

<style lang="sass">
</style>
