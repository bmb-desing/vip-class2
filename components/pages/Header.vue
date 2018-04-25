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
                <div class="header__adress">
                    г. Севастополь, пр. Античный, 26, цокольный этаж
                </div>
                <div class="header__phone">
                    <a href="tel:79788556184">+7 (978) 855-61-84 </a>
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
                activeMenu: 'showMenu'
            })
        },
        methods: {
            ...mapMutations({
                menuShow: 'mutationMenu',
                showForm: 'showForm'
            })
        }
    }
</script>

<style>

</style>