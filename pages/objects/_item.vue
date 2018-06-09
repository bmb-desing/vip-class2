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
                Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов, внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек, фитнес-центров и т.д.
                Расположен комплекс в экологически чистом месте г.Севастополя по пр.Античный в районе бухты «Омега». Месторасположение жилого комплекса привлекательно тем, что находится в спокойном районе города в шаговой доступности от городских пляжей, а также знаменитого Парка Победы, где жители и гости Севастополя любят проводить свое время.
                Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов, внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек, фитнес-центров и т.д.
                Новый современный жилой комплекс «Жемчужина Севастополя» состоит из десятиэтажных монолитно-каркасных домов, внутренние перегородки из газобетона, где цокольные этажи предназначены для офисных помещений, магазинов, аптек, фитнес-центров и т.д.
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
                      Лицензия на проектные работы АВ №587591 от 15.06.2011г.
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
        console.log(section)
        const scroll = VueScrollTo.scrollTo(section, 500, options)
      }
    },
	}
</script>

<style>

</style>
