<template>
    <div class="wrapper">
        <div class="carousel" :style="{'width': sliderWidth, 'left' : slidePosition}">
            <slide :slide="slide" v-for="(slide, index) in sliders" :key="index"
            :images="getImagesSlider" :pos="index"
            :length="sliders.length-1"
            :style="{width: slideWidth, left: getPosition(index)}"
            :event="event"
            @shangeSlide="replaceActiveSlide"
            ></slide>
        </div>

        <div class="carousel__pagination">
            <div class="carousel__pagination__item" v-for="(value, index) in sliders" :key="index">
                <span :class="index == active ? 'active' : ''" @click="replaceActiveSlide(index)"></span>
            </div>
        </div>
    </div>
</template>
<script>
    import Slide from './Slide.vue'
    export default {
        props: ['sliders', 'event'],
        name: 'slider',
        components: {
            Slide
        },
        data() {
            return {
                active: 0,
                right: 0
            }
        },
        computed: {
            getImagesSlider() {
                const sliderImages = []
                this.sliders.map(slide => {
                    sliderImages.push(slide.image)
                })
                return sliderImages
            },
            sliderWidth() {
                return this.sliders.length * 100 + '%'
            },
            slideWidth() {
                return  100 / this.sliders.length + '%'
            },
            slidePosition() {
                return '-' +  100 * this.right + '%'
            }
        },
        methods: {
            getPosition(index) {
                return  index * 100 + '%'
            },
            replaceActiveSlide(slide) {
                if(slide < 0) {
                    this.active = this.sliders.length - 1
                    this.right = this.sliders.length - 1
                }
                else if(slide >= this.sliders.length) {
                    this.active = 0
                    this.right = 0
                }
                else {
                    this.active = slide
                    this.right = slide
                }

                return this
            }
        }
    }
</script>
