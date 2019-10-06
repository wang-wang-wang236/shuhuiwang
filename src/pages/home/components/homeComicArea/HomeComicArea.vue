<template>
  <div class="home-comic-area">
      <div class="fenjianxian" style="padding-left: 10px; padding-right: 10px;">
        <div style="width: 100%; height: 1px; background: rgb(204, 204, 204); margin: 20px 0px;"></div>
      </div>
      <div class="comic-whole-area">
        <div class="comic-content">
          <div class="comic-nav">
            <div class="comic-text-category">
              <router-link class="comic-text-title"
              v-for="item of comicTextCategory"
              :key="item.id"
              :to="item.destinationUrl">
                {{item.title}}
              </router-link>
            </div>
          </div>
          <div class="comic-whole-list">
            <!-- <comic-wholw-list :comicWholeList="zaixianmanhualist">
            </comic-wholw-list> -->
            <comic-list-swiper :swiperList="zaixianmanhualist"></comic-list-swiper>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// import ComicWholwList from './ComicWholeList'
import ComicListSwiper from './ComicListSwiper'
import axios from 'axios'
export default {
  name: 'HomeComicArea',
  data () {
    return {
      zaixianmanhualist: [],
      comicTextCategory: [{
        'id': '001',
        'title': '在线漫画',
        'destinationUrl': '/ComicOnline'
      }, {
        'id': '002',
        'title': '鼠绘汉化',
        'destinationUrl': '/ComicOnline/ListShuHuiHanHua'
      }, {
        'id': '003',
        'title': '热血漫画',
        'destinationUrl': '/ComicOnline/ListReXueManHua'
      }, {
        'id': '004',
        'title': '国产漫画',
        'destinationUrl': '/ComicOnline/ListReXueManHua'
      }]
    }
  },
  components: {
    // ComicWholwList
    ComicListSwiper
  },
  methods: {
    getComicWholeList () {
      axios.get('http://localhost:31875/static/static-json/shouye-whole-zaixianmanhua.json').then(this.getComicWholeListSucc)
    },
    getComicWholeListSucc (res) {
      // console.log(res)
      const data = res.data
      const result = data.result
      if (result) {
        this.zaixianmanhualist = data.comicWholeList
      }
    }
  },
  mounted () {
    this.getComicWholeList()
  }
}
</script>

<style lang="stylus" scoped>
  .comic-whole-area
    margin-left -0.625rem
    padding 0 0.625rem
    .comic-content
      display block
      .comic-nav
        padding 0 0.625rem
        margin-bottom 0.625rem
        height 2rem
        .comic-text-category
          box-sizing border-box
          padding 0 0.625rem
          .comic-text-title
            text-decoration none
            color black
            float left
            padding-right 0.625rem
            margin-right 0.625rem
            &:hover
              color red
      .comic-whole-list
        width 100%
        height 50rem
            // margin-bottom 0.625rem
</style>
