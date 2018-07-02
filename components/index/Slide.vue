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
            <div class="carousel__event">
              <div class="carousel__video" @click="openVideo">
                <img src="/img/video.jpg" alt="Видео">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" title="Посмотреть наше видео" @click="openVideo">
                    <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80
                      c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
                      c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
                      S349.156,266.641,344.48,269.57z"/>
                  </svg>
              </div>
                <div class="event">
                    <h2 class="event__title">
                        Акция!
                    </h2>
                    <div class="event__text">
                        <p v-html="event.link">
                        </p>
                    </div>
                    <div class="event__link">
                        <nuxt-link :to="'/events/' + event.alias">Подробнее</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>
<script>
  import  {mapMutations} from 'vuex'
  export default {
      props: ['slide', 'images', 'pos', 'length', 'event'],
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
        },
        ...mapMutations({
          openVideo: 'openVideo'
        })
      }
  }
</script>
