<template>
  <div class="comic-online-area-shuhuihanhua">
    <h2>热血漫画</h2>
    <comic-online-area-swiper :swiperList="this.comicSwiperList"></comic-online-area-swiper>
  </div>
</template>

<script>
import axios from 'axios'
import ComicOnlineAreaSwiper from './ComicOnlineAreaSwiper'
export default {
  name: 'OnlineReXue',
  data () {
    return {
      comicSwiperList: []
    }
  },
  components: {
    ComicOnlineAreaSwiper
  },
  methods: {
    getShouYeLunBoList () {
      // console.log('"here get axios?"')
      // axios.get('/api/shouyelunbo.json').then(this.getShouYeLunBoListSucc)
      axios.get('http://localhost:31875/static/static-json/shouye-whole-zaixianmanhua.json').then(this.getShouYeLunBoListSucc)
    },
    getShouYeLunBoListSucc (res) {
      // const result = res.result
      // console.log('here axios ok?')
      const data = res.data
      const result = data.result
      // console.log(data)
      if (result) {
        this.comicSwiperList = data.comicWholeList
      }
      // console.log(res)
    }
  },
  mounted () {
    console.log('home mouted?')
    this.getShouYeLunBoList()
  }
}
</script>

<style lang="stylus" scoped>
  .comic-online-area-shuhuihanhua
    text-align left
</style>
