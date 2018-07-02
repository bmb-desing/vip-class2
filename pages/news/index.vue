<template>
  <div class="container" style="background-color: #e1e1e1;">
    <div class="section section-image section-bg-top" style="background-image: url(/img/news-bg.jpg); background-color: #e1e1e1;-webkit-background-size: cover;background-size: cover;">
      <div class="content">
        <div class="content__left">
          <h1 class="events__title events__title_news">Новости</h1>
          <div class="news">
            <div class="news__item" v-for="item in news" :key="item.id">
              <nuxt-link :to="'news/' + item.alias"><h2 class="news__title">{{item.title}}</h2></nuxt-link>
              <div class="news__text" v-html="item.shortText"></div>
              <nuxt-link :to="'news/' + item.alias"><img :src="item.image" :alt="item.title"></nuxt-link>
              <nuxt-link :to="'news/' + item.alias" class="carousel__link">Подробнее</nuxt-link>
            </div>
          </div>
        </div>
        <div class="content__right content__events">
          <div class="event" v-for="item in events" :key="item.id">
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
  name: 'news',
  head() {
    return {
      title: 'Новости',
      meta: [
        {hid: 'description', name: 'description', content: 'Список новостей компании «VIP CLASS»' },
      ]
    }
  },
  async asyncData({app}) {
    const news = await app.$axios.get('/news')
    const events = await app.$axios.get('/events/get-for-news');
    return {
      news: news.data,
      events: events.data
    }
  },

}
</script>
