<template>
    <div>
      <vue-sprintf :text="text + '{0}'">
        <page-item slot="0">
          <img src="/img/bg-index2.jpg" v-img alt="">
        </page-item>
      </vue-sprintf>
    </div>
</template>

<script>

  import PageItem from '~/components/PageItem'
	export default {
    data() {
      return {
        content: []
      }
    },
		name: "page-text",
    props: ['text'],
    components: {
      VueSprintf,
      PageItem
    }
	}
</script>

<style scoped>

</style>
