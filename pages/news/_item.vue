<template>
    <div class="container">
      <div class="section section-image" :style="'background-color: #e1e1e1;background-image: url('+ news.image +');'">
        <div class="content">
          <div class="content__left">
            <h1 class="content__title">{{news.title}}</h1>
            <div class="content__text news">
              <div class="el1" v-bar style="height: 460px;">
                  <div class="el2" style="padding-right: 20px;" ref="text">
                    <img v-if="item.type == 'img'" v-for="(item, k) in text" :key="k" :src="item.src" v-img :alt="item.alt">
                    <div v-else v-html="item"></div>
                  </div>
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
  import cheerio from 'cheerio'
	export default {
		name: "news-item",
    head() {
      return {
        title: this.news.title,
        meta: [
          {hid: 'description', name: 'description' , itemprop: 'description', content: this.news.description},
          {hid: 'name', itemprop: 'name', name: 'name',  content: this.news.title},
          {hid: 'og:title', name: 'og:title', content: this.news.title },
          {hid: 'og:url', name: 'og:url', content: this.$route.fullPath},
        ]
      }
    },

    async asyncData({app, params}) {
		  const item = params.item
      const news = await app.$axios.get('/news/' + item)
      const events = await app.$axios.get('/events/get-for-news');
      var imagesArr = []
      const $ = cheerio.load(news.data.text, { decodeEntities: false, xmlMode: true})
      $('img').each(function (item) {
        const src = $(this).attr('src');
        const alt = $(this).attr('alt') || '';
        $(this).replaceWith('{'+ item +'}');
        imagesArr.push({
          type: 'img',
          src: src,
          alt: alt
        })
      })
      const text = $.html();
      var texts = []
      const reg = /{[0-9]}/;
      const textArr = text.split(reg);
      textArr.map((value, index) => {
        texts.push(value)
        if(imagesArr[index]) {
          texts.push(imagesArr[index])
        }
      })

      return {
        news: news.data,
        events: events.data,
        text: texts
      }
    },
    data() {
      return {}
    },
	}
</script>


