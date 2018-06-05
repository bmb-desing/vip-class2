<script src="../../stroy/store/index.js"></script>
<template>
    <div class="el1" v-bar style="height: 100vh;">
        <div class="el2 scroller" >
            <my-header/>
            <my-menu/>
            <nuxt/>
            <contacts v-if="showContact"></contacts>

            <transition name="form">
                <user-form v-if="showForm"/>
            </transition>
            </div>
    </div>
</template>

<script>
import MyHeader from '~/components/pages/Header.vue'
import MyMenu from '~/components/pages/MyMenu.vue'
import UserForm from '~/components/pages/UserForm.vue'
import Contacts from '~/components/pages/Contacts.vue'
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      showContact: true,
    }
  },
	components: {
		MyHeader,
        MyMenu,
        UserForm,
        Contacts
	},
  computed: {
      ...mapGetters({
          showForm: 'showForm'
      })
  },
  mounted() {
    this.$router.afterEach((r) => {
      if (this.$route.path.indexOf('events') != -1 || this.$route.path.indexOf('news') != -1) {
        this.showContact = false
      }
      else {
        this.showContact = true
      }
      console.log(this.$route.path.indexOf('events') != -1)
      const scroller = document.getElementsByClassName('scroller')
      scroller[0].scrollTop = 0
    })
  }
}
</script>

<style lang="sass">
</style>
