<template>
  <div class="container">
    <div class="section section-image" :style="'background-image:' + 'url(' + event.image + ')'">
      <div class="content">
        <div class="content__left">
          <h1 class="content__title">{{event.title}}</h1>
          <div class="content__text">
            <div class="el1" v-bar style="height: 460px;">
              <div class="el2" v-html="event.text">
              </div>
            </div>
          </div>
        </div>
        <div class="content__right content__events">
          <div class="event" v-for="item in otherEvent" :key="item.id">
            <h2 class="event__title">
              Акция!
            </h2>
            <div class="event__text">
              <p v-html="item.link">
              </p>
            </div>
            <div class="event__link">
              <nuxt-link :to="'/events/' + item.alias">Подробнее</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "events-event",
    head() {
		  return {
		    title: this.event.title,
        meta: [
          {hid: 'description', name: 'description', content: this.event.description },
        ]
      }
    },
    async asyncData({app, params}) {
        const event = await app.$axios.get('/events/' + params.event)
        const otherEvent = await app.$axios.get('/events/get-for-events/' + params.event)
        return {
          event: event.data,
          otherEvent: otherEvent.data
        }
    }
	}
</script>

<style>

</style>
