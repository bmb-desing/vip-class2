<template>
  <div class="carousel__item">
      <div class="carousel__wrap"  :style="{'background-image': getBackground}">
          <div class="carousel__container">
            <div class="carousel__left">
                <b class="carousel__subtitle">
                    {{slide.subtitle}}
                </b>
                <h2 class="carousel__title">
                    {{slide.title}}
                </h2>
                <p class="carousel__text">
                    {{slide.text}}
                </p>
                <nuxt-link :to="slide.link" class="carousel__link">Узнать больше</nuxt-link>
            </div>
            <div class="carousel__right">
                <div class="carousel__content">
                    <div class="carousel__buttons">
                        <div class="carousel__button carousel__button_left" @click="changesSlide(pos-1)"></div>
                        <div class="carousel__button carousel__button_right" @click="changesSlide(pos+1)"></div>
                    </div>
                    <div class="carousel__images">
                        <div class="carousel__image" v-for="(value, k) in images" :key="k">
        
                            <img :src="value" alt="123" v-if="k <= 1">
                        </div>
                    </div>
                    <div class="carousel__bottom">
                        {{slide.subtext}}
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
    export default {
        props: ['slide', 'images', 'pos', 'length'],
        name: 'slide-item',
        computed: {
            getBackground() {
                return  'url(' + this.slide.image + ')'
            },
            getImages() {
                const pos = this.pos
                const slider = this.images;
                const length = this.images.length
                const arr = [];
                if(pos == length) {
                    arr.push(slider[0])
                    arr.push(slider[1])
                }
                else if (pos + 1 == length) {
                    arr.push(slider[1])
                    arr.push(slider[2])
                }
                else {
                    arr.push(slider[pos+1])
                    arr.push(slider[pos+2])
                }
                return arr
            },
        },
        methods: {
            changesSlide(index) {
                console.log(index)
                this.$emit('shangeSlide', index)
            }
        }
    }
</script>