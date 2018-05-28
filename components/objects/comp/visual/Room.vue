<template>
    <div class="room" style="background-color: #e1e1e1;background-image: url(/img/object-bg.jpg);">
      <div class="room__container">
        <div class="room__header">
          <div class="room__header__left">
            <h2 class="filter__title">«Жемчужина Севастополя»</h2>
          </div>
          <div class="room__header__right">
            <div class="room__cross" @click="closeRoom">
              <span><</span>
              <b>К выбору квартиры</b>
            </div>
          </div>
        </div>
        <div class="room__content">
          <div class="room__left">
            <img :src="room.image" alt="" class="room__img">
          </div>
          <div class="room__right">
            <ul>
              <li>
                <span>Этаж:</span>
                <b>{{room.floors}}</b>
              </li>
              <li>
                <span>Секция:</span>
                <b>{{room.section}}</b>
              </li>
              <li>
                <span>Комнат:</span>
                <b>{{room.rooms}}</b>
              </li>
              <li>
                <span>Площадь:</span>
                <b>{{room.area}}м<sup>2</sup></b>
              </li>
              <li>
                <span>Цена:</span>
                <b>{{priceReplace}} руб</b>
              </li>
            </ul>
            <div class="room__button">
              <button @click="showForm('Забронировать квартиру')" class="carousel__link">Забронировать</button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "room",
    computed: {
      ...mapGetters({
        room: 'getActiveRoom'
      }),
      priceReplace() {
        return this.room.price.toLocaleString()
      }
    },
    methods: {
      ...mapMutations({
        closeRoom: 'closeRoom',
        showForm: 'showForm'
      })

    }
	}
</script>

<style scoped>

</style>
