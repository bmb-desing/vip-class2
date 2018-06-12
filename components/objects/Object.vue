<template>
  <div class="form form_object" ref="modal">
      <div class="form__wrapper form__wrapper_big">
            <div class="sketch__left">
                <img :src="object.image" :alt="object.title">
            </div>
            <div class="sketch__right">
                <div class="form__cross">
                    <svg  version="1.1" xmlns="http://www.w3.org/2000/svg" class="form__svg" @click="closeForm" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                        <g>
                            <path fill="#1D1D1B" d="M28.941,31.786L0.613,60.114c-0.787,0.787-0.787,2.062,0,2.849c0.393,0.394,0.909,0.59,1.424,0.59   c0.516,0,1.031-0.196,1.424-0.59l28.541-28.541l28.541,28.541c0.394,0.394,0.909,0.59,1.424,0.59c0.515,0,1.031-0.196,1.424-0.59   c0.787-0.787,0.787-2.062,0-2.849L35.064,31.786L63.41,3.438c0.787-0.787,0.787-2.062,0-2.849c-0.787-0.786-2.062-0.786-2.848,0   L32.003,29.15L3.441,0.59c-0.787-0.786-2.061-0.786-2.848,0c-0.787,0.787-0.787,2.062,0,2.849L28.941,31.786z"/>
                        </g>
                    </svg>
                </div>
                <h2>{{object.name}}</h2>
                <div class="sketch__content">
                    <div class="sketch__text" v-html="object.description"></div>
                </div>
                <div class="sketch__footer">
                    <a :href="'tel:' + setting.phone" class="sketch__phone">{{setting.phone}}</a>
                        <div class="menu__button menu__button_big">
                            <button @click="showForm('Заказать проект дома' + object.id)">Заказать проектирование</button>
                        </div>
                </div>
            </div>
      </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    props: ['object'],
    computed: {
        ...mapGetters({
            setting: 'getSetting',
        })
    },
    methods: {
        closeForm() {
            return this.$emit('closeCarousel')
        },
        ...mapMutations({
            showForm: 'showForm'
        })
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
