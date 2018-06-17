<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__left">
                <div class="burger" @click="menuShow" v-bind:class="{active: activeMenu}">
                    <span class="burger__item burger__item_first"></span>
                    <span class="burger__item burger__item_center"></span>
                    <span class="burger__item burger__item_last"></span>
                </div>
                <div class="logo">
                    <nuxt-link :to="{name: 'index'}" class="logo__link">
                        <img src="~assets/img/logo.png" alt="logo">
                    </nuxt-link>
                </div>
            </div>
            <div class="header__center">
                <nuxt-link :to="{name: 'index'}" class="logo__link">
                    <img src="~assets/img/logo.png" alt="logo">
                </nuxt-link>
            </div>
            <div class="header__right">
                <div class="header__play">
                  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" title="Посмотреть наше видео" @click="openVideo">
                    <path d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M344.48,269.57l-128,80
                      c-2.59,1.617-5.535,2.43-8.48,2.43c-2.668,0-5.34-0.664-7.758-2.008C195.156,347.172,192,341.82,192,336V176
                      c0-5.82,3.156-11.172,8.242-13.992c5.086-2.836,11.305-2.664,16.238,0.422l128,80c4.676,2.93,7.52,8.055,7.52,13.57
                      S349.156,266.641,344.48,269.57z"/>
                  </svg>

                </div>
                <div class="header__adress">
                    {{setting.cellAdress}}
                </div>
                <div class="header__phone">
                    <a :href="'tel:' + setting.phone">{{setting.phone}}</a>
                </div>
                <div class="menu__button">
                    <button @click="showForm('Обратный звонок')">Обратный звонок</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    export default {
        name: 'myHeader',
        computed: {
            ...mapGetters({
                activeMenu: 'showMenu',
                setting: 'getSetting'
            })
        },
        methods: {
            ...mapMutations({
                menuShow: 'mutationMenu',
                showForm: 'showForm',
                openVideo: 'openVideo'
            })
        }
    }
</script>

<style>

</style>
