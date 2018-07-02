<template>
  <div class="container" id="container" ref="container">
    <!--Первая секция-->
    <div class="section section-image" style="background-color: #e1e1e1;background-image: url(/img/object-1.jpg);" id="about-object">
      <div class="content object">
        <div class="content__left object__left">
          <h1 class="content__title object__title">«ЖЕМЧУЖИНА СЕВАСТОПОЛЯ»</h1>
          <div class="content__text object__text">
            <div class="el1" v-bar style="height: 205px;">
              <div class="el2" style="padding-right: 12px;">
                <p>
                  ЖК "Жемчужина Севастополя" – новый современный жилой комплекс,
                  который состоит из четырех 10-этажных домов и  находится на проспекте Античный,26 в Гагаринском районе
                  г.Севастополя. Этот архитектурный проект расположен в динамично развивающемся, экологически чистом районе города.
                  Местоположение жилого комплекса привлекательно тем, что находится в шаговой доступности от песочного пляжа «Омега»( расстояние  340 метров),
                  пляжа «Адмиральский» (460 метров), а также знаменитого Парка Победы, где жители и гости Севастополя любят проводить свое время.
                </p>
                <p>
                  Рядом с ЖК находятся: торгово-развлекательный центр «Апельсин», современный развлекательный
                  детский парк «Динопарк»( 460 метров), школа №15, строится новая школа-коллегиум(окончание строительства в 2019году),
                  действующие детские сады №№116,129, также в шаговой доступности строится новый детский садик, который уже скоро откроет свои двери малышам.
                  Гаражный комплекс на территории жилого комплекса обеспечит потребности жителей в парковке автомобилей. Транспортная развязка позволяет добраться круглосуточно в любую точку города.
                </p>
                <p>ЖК «Жемчужина Севастополя» обладает всеми достоинствами современного и качественного жилья и удовлетворит предпочтения любого клиента благодаря широкому выбору квартир.</p>
                <p>Планировочные решения 1-комнатных и 2-комнатных квартир обеспечат комфортное проживание жителям. В цокольных этажах расположены   магазины, аптеки, фитнес-центры, офисные помещения и т.д. </p>
                <p>
                  Мы предлагаем:
                </p>
                <ul>
                  <li>
                    однокомнатные квартиры от 40 до 47 кв.м.
                  </li>
                  <li>двухкомнатные квартиры от 54 до 72 кв.м.</li>
                  <li>коммерческие помещения от 40 до 60 кв.м.</li>
                </ul>
                <p>Характеристики объекта:</p>
                <ul>
                  <li>Развитая инфраструктура;</li>
                  <li>Благоустроенная территория;</li>
                  <li>Автопаркинг для машин;</li>
                  <li>Индивидуальное отопление в каждой квартире;</li>
                  <li>Близость остановок(5-7 минут), школ, детских садов;</li>
                  <li>Беспроцентная рассрочка от застройщика на период строительства;</li>
                  <li>Экологически чистый район;</li>
                  <li>В цокольных этажах – магазины, салоны красоты, фитнес-клубы, офисы;</li>
                  <li>Тип дома – монолитно-каркасный, материал стен – газобетон;</li>
                  <li>Утепленный фасад.</li>
                </ul>
                <p>
                  В квартирах устанавливаются водомеры, электросчетчики,
                  металлические входные двери, система отопления предусматривает двухконтурный котел с разводкой
                  и монтажом радиаторов. Квартиры отличаются удобной планировкой, хорошей освещенностью благодаря витражным окнам и остеклению балконов. 
                </p>
                <p>
                  ЖК «Жемчужина Севастополя» совмещает в себе современную, деловую, активную городскую жизнь и спокойную,
                  размеренную жизнь в комфортном и динамично развивающемся районе города на берегу моря. На территории комплекса
                  предусмотрены детские площадки, зеленые насаждения, где жители нашего комплекса смогут проводить время на свежем воздухе,
                  играть с детьми и общаться с соседями.
                </p>
                <p>Если Вас привлекают квартиры в Севастополе в современном жилом комплексе
                  у моря, мы рады предложить отличное решение на наиболее выгодных условиях с возможностью приобрести квартиру в рассрочку!</p>
              </div>
            </div>
          </div>
          <button class="carousel__link" @click="showForm('Заявка на ' + type == residential ? 'Жилой объект' : 'Коммерческий объект' + '')">Оформить заявку</button>
        </div>
        <div class="content__right  content__events object__right">
          <object-nav active="#about-object" @changeActive="changeSection"></object-nav>
        </div>
      </div>
    </div>
    <!--Первая секция конец-->
    <!--Вторая секция-->
    <objects></objects>
    <!--Вторая секция конец-->
    <!--Третья секция-->
    <div class="section section-image" style="background-color: #e1e1e1;background-image: url(/img/object-3.jpg);" id="construction-progress">
      <div class="content object">
        <div class="content__left object__left object__left_big">
          <h2 class="content__title object__title object__title_red">Ход строительства</h2>
          <b class="object__bold">Стройка в режиме Online</b>
          <div class="translation">
            <a href="http://ipcamlive.com/omega2a13" target="_blank">
              <img src="/img/object-5.jpg" alt="Онлайн трансляция">
            </a>
          </div>

          <button class="carousel__link" @click="showForm('Заявка на ' + type == residential ? 'Жилой объект' : 'Коммерческий объект' + '')">Оформить заявку</button>
        </div>
        <div class="content__right  content__events object__right">
          <object-nav active="#construction-progress" @changeActive="changeSection"></object-nav>
        </div>
      </div>
    </div>
    <!--Третья секция конец-->
    <!--Четвертая секция-->
    <div class="section section-image" style="background-color: #e1e1e1;background-image: url(/img/object-4.jpg);" id="documentation">
      <div class="content object">
        <div class="content__left object__left">
          <h1 class="content__title documentation__title">Документация:</h1>
          <div class="content__text object__text documentation__text">
            <div class="el1" v-bar style="height: 250px;">
              <div class="el2" style="padding-right: 12px;">
                <ul>
                  <li>
                    <a href="/pdf/svid.pdf" target="_blank">Свидетельство о допуске к определенным видам работ
                      члена СРО</a>
                  </li>
                  <li>
                    <a href="/pdf/lic_bud.pdf" target="_blank">
                      Лицензия на строительно-монтажные работы АВ №790/02 от 16.08.2017г
                    </a>
                  </li>
                  <li>
                    <a href="/pdf/lic_obst.png" target="_blank">
                      Сертификат на проектирование в части обеспечения
                      механического сопротивления и стойкости
                      АР №001015 от 20.06.2012г.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button class="carousel__link" @click="showForm('Заявка на ' + type == residential ? 'Жилой объект' : 'Коммерческий объект' + '')">Оформить заявку</button>
        </div>
        <div class="content__right  content__events object__right">
          <object-nav active="#documentation" @changeActive="changeSection"></object-nav>
        </div>
      </div>
    </div>
    <!--Четвертая секция конец-->
    <!--Пятая секция-->
    <div class="section section-image" style="background-color: #e1e1e1;background-image: url(/img/object-5.jpg);" id="about-developer">
      <div class="content object">
        <div class="content__left object__left">
          <h1 class="content__title documentation__title">Объединение <span class="developer__span">«VIP CLASS»</span></h1>
          <div class="content__text object__text documentation__text ">
            <div class="el1" v-bar style="height: 400px;">
              <div class="el2" style="padding-right: 12px;">
                <p>Наши опытные, квалифицированные специалисты - архитекторы и инженеры-проектировщики осуществляют проектирование
                  различных объектов архитектуры, с использованием инновационных проектных решений. Для достижения наилучших результатов в нашем распоряжении
                  современное лицензионное программное обеспечение - для визуализации, расчетов конструкций и т.д. Основой нашей работы являются профессиональные знания, опирающиеся
                  на наш собственный и мировой опыт в области архитектуры и дизайна.</p>
                <p>Специалисты объединения постоянно работают над совершенствованием проектных технологий,
                  изучают лучшие образцы мирового строительства и применяют изящные технические решения с целью
                  удовлетворения самого требовательного заказчика.</p>
                <p>Заказчиками нашей компании являются не только частные лица - но и государственные организации.
                  Так, нашими специалистами были успешно исполнены многие проекты, в том числе проект детского сада на 200 мест в
                  с. Кичменгский Городок в Вологодской области, изолятора временного содержания в г. Донской в Тульской области, реконструкции здания суда в
                  г. Севастополе, общежития КНИТУ-КАИ в г. Казань.</p>
              </div>
            </div>
          </div>
          <button class="carousel__link" @click="showForm('Заявка на ' + type == residential ? 'Жилой объект' : 'Коммерческий объект' + '')">Оформить заявку</button>
        </div>
        <div class="content__right  content__events object__right">
          <object-nav active="#about-developer" @changeActive="changeSection"></object-nav>
        </div>
      </div>
    </div>
    <!--Пятая секция конец-->
  </div>
</template>

<script>
  import {mapMutations, mapActions} from 'vuex'
  import VueScrollTo from 'vue-scrollto'
  import Objects from '~/components/objects/Index.vue'
  import ObjectNav from '~/components/objects/ObjectNav.vue'
	export default {
		name: "objects-item",
    middleware: ['objects'],
    components: {
		  ObjectNav,
      Objects
    },
    data() {
		  return {
		    type: this.$route.params.item,
      }
    },
    head() {
		  return {
		    title: this.type == 'residential' ? 'Жилые объекты' : 'Коммерческие объекты'
      }
    },
    methods: {
      ...mapMutations({
        showForm: 'showForm'
      }),
      ...mapActions({
        loadObjects: 'loadObjects'
      }),
      changeSection(section) {
        const options = {
          container: '.scroller',
          easing: 'ease-in',
          offset: -60,
          cancelable: true,
          onStart: function(element) {
            console.log('Скролл начился')
          },
          onDone: function(element) {
            console.log('Скрол успешен')
          },
          onCancel: function() {
            console.log('Скрол ошибка')
          },
          x: false,
          y: true
        }
        const scroll = VueScrollTo.scrollTo(section, 500, options)
      }
    },
	}
</script>

<style>

</style>
