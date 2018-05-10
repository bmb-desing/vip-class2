<template>
  <div class="container" style="background-color: #e1e1e1;">
    <div class="section section-image section-bg-top" style="background-image: url(img/news-bg.jpg); background-color: #e1e1e1;-webkit-background-size: cover;background-size: cover;">
      <div class="content">
        <div class="content__left">
          <h1 class="events__title events__title_news">Новости</h1>
          <div class="news">
            <div class="news__item" v-for="item in news" :key="item.id">
              <nuxt-link :to="'news/' + item.alias"><h2 class="news__title">{{item.title}}</h2></nuxt-link>
              <p class="news__date">{{item.date}}</p>
              <div class="news__text" v-html="item.shortText"></div>
              <nuxt-link :to="'news/' + item.alias"><img :src="item.thumbnail" :alt="item.title"></nuxt-link>
              <nuxt-link :to="'news/' + item.alias" class="carousel__link">Подробнее</nuxt-link>
            </div>
          </div>
        </div>
        <div class="content__right content__events">
          <div class="event">
            <h2 class="event__title">
              Акция!
            </h2>
            <div class="event__text">
              <p>
                Преобретите квартиру
                до <b>25.05.2018</b> и получите
                в подарок <b>бесплатный ремонт</b>
              </p>
            </div>
            <div class="event__link">
              <nuxt-link :to="'123'">Подробнее</nuxt-link>
            </div>
          </div>
          <div class="event">
            <h2 class="event__title">
              Акция!
            </h2>
            <div class="event__text">
              <p>
                Преобретите квартиру
                до <b>25.05.2018</b> и получите
                в подарок <b>бесплатный ремонт</b>
              </p>
            </div>
            <div class="event__link">
              <nuxt-link :to="'123'">Подробнее</nuxt-link>
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
      title: 'Новости'
    }
  },
  data() {
    return {
      news: [
        {
          id: 1,
          title: 'Поздравляем победителей',
          date: '12.03.2018',
          shortText: 'Дорогие друзья, поздравляем победителей акции\n' +
          '"Купи квартиру - получи телевизор в подарок!".\n' +
          'От всей души благодарим Вас за оказанное доверие!\n' +
          'Спасибо за Ваш выбор!',
          thumbnail: '/img/news-bg.jpg',
          alias: '123'
        }
      ]
    }
  }
}
</script>
