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
        <tr v-for="(item) in objects" :key="item.id" v-if="item.cell">
        <td>{{item.house}}</td>
        <td>{{item.floor}}</td>
        <td>{{item.section}}</td>
        <td>{{item.rooms}}</td>
        <td>{{item.area}} м<sup>2</sup></td>
        <td>{{item.price}} руб</td>
        <td>
          <button>Подробнее</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <p>С такими данными квартир нет</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
    props: ['objects'],
		name: "object-table",
    computed: {
      ...mapGetters({
      })
    },
    methods: {
      ...mapMutations({
        showForm: 'showForm'
      })
    }

	}
</script>

<style>

</style>
