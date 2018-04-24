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
                menuShow: 'mutationMenu'
            })
        }
    }
</script>

<style>

</style>