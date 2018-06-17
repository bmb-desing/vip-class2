<template>
  <no-ssr>
    <div class="video">
      <youtube :video-id="'0-VdzOyOtiE'" player-width="0" player-height="0" :player-vars="options" @ended="endVideo"></youtube>
      <button class="video__button" @click="closeVideo">Пропустить</button>
    </div>
  </no-ssr>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
		name: "you-video",
    methods: {
      ...mapMutations({
        closeVideo: 'closeVideo'
      }),
      endVideo() {
        this.closeVideo()
      }
    },
    data() {
		  return {
		    options: {
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          rel: 0
        }
      }
    },
	}

</script>

<style scoped>

</style>
