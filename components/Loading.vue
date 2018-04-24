<template>
    <transition name="loader">
        <div class="loader" v-if="show">
            <div class="loader__wrapper">
                <div class="loader__container">
                    <div class="loader__logo">
                        <img src="~/assets/img/logo-loader.png" alt="Вип-класс загрузка">
                    </div>
                    <div class="loader-image">
                        <span class="loader-image__item loader-image__item_passive"></span>
                        <span class="loader-image__item loader-image__item_active" v-bind:style="{width: percent + '%'}"></span>
                    </div>
                    <div class="loader-line">
                        <span class="loader-line__item loader-line__item_passive"></span>
                        <span class="loader-line__item loader-line__item_active" v-bind:style="{width: percent + '%'}"></span>
                    </div>
                    <div class="loader-number" v-if="canSuccess">
                        {{percent}}%
                    </div>
                    
                    <div class="loader-number error" v-else>Ошибка при загрузке</div>    
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
	export default {
		name: "loading",
        data() {
            return {
                percent: 0,
                show: false,
                canSuccess: true,
                duration: 50
            }
        },
        methods: {
            start() {
                this.show = true
                this.canSuccess = true
                if(this._timer) {
                    clearInterval(this._timer)
                    this.percent = 0
                }
                this._cut = 20 / Math.floor(this.duration)
                this._timer = setInterval(() => {
                    this.increase(this._cut * Math.random())
                    if(this.percent > 95) {
                        this.finish()
                    }
                }, 100)
                return this
            },
            set(num) {
                this.percent = this.percent + Math.floor(num)
                return this
            },
            increase(num) {
                this.percent = this.percent + Math.floor(num)
                return this
            },
            decrease(num) {
                this.percent = this.percent - Math.floor(num)
                return this
            },
            finish() {
                this.percent = 100;
                this.hide()
                return this
            },
            pause() {
                clearInterval(this._timer)
                return this
            },
            hide() {
                clearInterval(this._timer)
                this._timer = null
                setTimeout(() => {
                    this.show = false
                    this.percent = 0
                }, 250)
                return this
            },
            fail() {
                this.canSuccess = false
                return this
            }
        }
	}
</script>

<style>
</style>