<template>
  <div class="container container_contacts">
      <div class="section">
            <no-ssr>
                <yandex-map
                    :coords="[44.594030, 33.453514]"
                    style="width: 100%; height: 100vh; min-height: 100vh"
                    :placemarks="placemarks"
                    zoom="15"
                >
                    <ymap-marker
                        :markerId="index"
                        marker-type="placemark"
                        v-for="(marker, index) in markers"
                        :key="index"
                        :coords="marker.coord"
                        :icon="{color: 'red', glyph: 'dot'}"
                        :balloon="{header: marker.header, body: marker.body, footer: marker.footer}"
                        :hint-content="marker.hint"
                    >
                    </ymap-marker>
                </yandex-map>
            </no-ssr>
            <div class="contacts">
                <div class="contacts__wrapper">
                    <div class="contacts__title">
                        <h2>Контакты</h2>
                    </div>
                    <div class="contacts__block">
                        <h3>Отдел продаж</h3>
                        <p>г. Севастополь, пр.Античный 26, <br/> (цокольный этаж)</p>
                        <p><a href="tel:797888814180">+7 (978) 881-41-80</a></p>
                    </div>
                    <hr>
                    <div class="contacts__block">
                        <h3>&laquo;ЖЕМЧУЖИНА СЕВАСТОПОЛЯ&raquo;</h3>
                        <p>г. Севастополь, пр.Античный 26</p>
                    </div>
                    <hr>
                    <div class="contacts__block">
                        <h3>Главный офис</h3>
                        <p>г. Севастополь, ул. Кесаева 14-Г</p>
                        <p class="contacts__small">
                            <span>Email:</span> <a href="mailto:vipclass@bk.ru">vipclass@bk.ru</a><br/>
                            <span>Skpe:</span> vipclass.vipclass
                        </p>
                        <p class="contacts__small">
                            <span>Тел:</span> <a href="tel:78692416000">+7 (8692) 41-60-00</a><br/>
                            <span>Моб.тел:</span> <a href="tel:79788556184">+7 (978) 855-61-84</a>
                        </p>
                        <p class="contacts__small">
                            <span>Отдел продаж:</span> <a href="tel:797888814180">+7 (978) 881-41-80</a>
                        </p>
                        <p class="contacts__small">
                            Режим работы: <br/>
                            Пн-Пт: 8:00-17:00'
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'contacts',
    data() {
        return {
            placemarks: [
                {
                    coords: [54.8, 39.8],
                    properties: {}, // define properties here
                    options: {}, // define options here
                    clusterName: "1",
                }
            ],

            markers: [
                {
                    coord: [44.594728, 33.437734],
                    hint: '&laquo; ЖЕМЧУЖИНА СЕВАСТОПОЛЯ &raquo;',
                    header: '&laquo; ЖЕМЧУЖИНА СЕВАСТОПОЛЯ &raquo;',
                    body: 'г. Севастополь, пр.Античный 26',
                },
                {
                    coord: [44.593822, 33.438196],
                    hint: 'Отдел продаж',
                    header: 'Отдел продаж',
                    body: 'г. Севастополь, пр.Античный 26, <br/> (цокольный этаж)',
                    footer: '<a href="tel:797888814180">+7 (978) 881-41-80</a>'
                },
                {
                    coord: [44.587229, 33.455076],
                    hint: 'Главный офис',
                    header: 'Главный офис',
                    body: 'г. Севастополь, ул. Кесаева 14-Г<br/>\
                        Email: <a href="mailto:vipclass@bk.ru">vipclass@bk.ru</a><br/>\
                        Skpe: vipclass.vipclass<br/>\
                        Тел: <a href="tel:78692416000">+7 (8692) 41-60-00</a><br/>\
                        Моб.тел: <a href="tel:79788556184">+7 (978) 855-61-84</a><br/>\
                        Режим работы: <br/>\
                        Пн-Пт: 8:00-17:00'
                }
            ]
        }
    },
}
</script>
