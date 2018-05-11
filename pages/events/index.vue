<template>
    <div class="container">
      <div class="section section-image section-bg-top" style="background-image: url(img/events-bg.jpg)">
        <div class="events">
          <h1 class="events__title">Акции</h1>
          <div class="events__container">
            <div class="events__item" v-for="event in events" :key="event.id" :style="'background-image:' + 'url(' + event.thumbnail + ')'" >
              <nuxt-link :to="'events/' + event.alias" class="events__content">
                <h2>{{event.title}}</h2>
                <div class="events__text" v-html="event.shortText"></div>
                <button>Подробнее</button>
              </nuxt-link>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'events',
  head() {
    return {
      title: 'Акции'
    }
  },
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Квартиры в \n' +
          'военную ипотеку',
          shortText: 'Уважаемые покупатели, военнослужащие Российской Федерации! Приобретайте квартиры в ЖК «Жемчужина Севастополя» в Военную ипотеку! Для подробного ознакомления перейдите по ссылке.',
          alias: 'voenaya-kvartira',
          thumbnail: 'img/event-1.jpg'
        },
        {
          id: 2,
          title: 'Покупка квартиры с привлечением маткапитала',
          shortText: 'Компания «VIP CLASS» с готовностью принимает материнский капитал.',
          alias: 'voenaya-kvartira',
          thumbnail: 'img/event-2.jpg'
        },
      ]
    }
  }
}
</script>
