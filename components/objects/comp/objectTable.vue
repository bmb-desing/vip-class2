<template>
  <div class="table-responsive">
    <table class="object-table" v-if="objects.length">
      <thead>
        <tr>
          <th>Корпус</th>
          <th>Этаж</th>
          <th>Секция</th>
          <th>Кол. комнат</th>
          <th>Площадь</th>
          <th>Цена</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, k) in objects" :key="k" v-if="item.filter && item.free">
        <td>{{item.house}}</td>
        <td>{{item.floors}}</td>
        <td>{{item.section}}</td>
        <td>{{item.rooms}}</td>
        <td>{{item.area}} м<sup>2</sup></td>
        <td>{{item.price}} руб</td>
        <td>
          <button @click="changeActiveRoom({
            house: item.houseEl,
            room: item.index
          })">Подробнее</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else class="error">
      <p>С такими данными квартир нет</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
		name: "object-table",
    computed: {
      ...mapGetters({
        objects: 'getTableObject'
      })
    },
    methods: {
      ...mapMutations({
        showForm: 'showForm',
        changeActiveRoom: 'changeActiveRoom',
      })
    }

	}
</script>

<style>

</style>
