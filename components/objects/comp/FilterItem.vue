<template>
    <div class="filter__item" :class="'filter__item_' + filter.size">
      <div class="filter__visible">
        <span class="filter__value">{{getVal}}</span>
        <span class="filter__span">{{filter.text}}</span>
      </div>
      <div class="filter__drop" @click="changeShow" :class="show ? 'active' : ''"></div>
      <div class="filter__dropdown"  v-if="show && filter.type == 'select'" >
        <div class="el1" v-bar style="height: 150px;">
          <div class="el2">
            <ul>
              <li v-for="(item, k) in filter.values" :key="k" @click="changeFilter(item)">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="filter__range" v-if="show && filter.type != 'select'">
        <p>От: <input type="text" :value="getMin(index)" @change="changeMin"></p>
        <p>До: <input type="text" :value="getMax(index)" @change="changeMax"></p>
      </div>
    </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
	export default {
	  props: ['filter', 'index'],
		name: "filter-item",
    data() {
	    return {
        show: false
      }
    },
    computed: {
      ...mapGetters({
        getMin: 'getMin',
        getMax: 'getMax'
      }),
      getVal() {
        if (this.filter.type == 'range') {
          return this.getMin(this.index) + '-' + this.getMax(this.index)
        }
        else {
          return this.filter.value || '*'
        }
      }
    },
    methods: {
      ...mapMutations({
        change: 'changeFilter',
        min: 'changeMin',
        max: 'changeMax'
      }),
	    changeShow() {
	      return this.show = this.show ? false : true
      },
      changeFilter(item) {
        this.change({
          id: this.index,
          value: item
        })
        this.show = false
      },
      changeMin(e) {
        this.min({
          id: this.index,
          value: e.target.value
        })
      },
      changeMax(e) {
        this.max({
          id: this.index,
          value: e.target.value
        })
      }
    }
	}
</script>

<style>

</style>
