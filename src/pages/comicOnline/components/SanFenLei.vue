<template>
    <div class="san-fen-lei">
      <router-link class="san-fen-lei-item"
      tag="a"
      v-for="item of sanFenLeiList"
      :key="item.id"
      :to="item.destinationUrl">
        <div class="san-fen-lei-item-click">
          <img-logo></img-logo>
          <h3>{{item.title}}</h3>
        </div>
      </router-link>
    </div>
</template>

<script>
import ImgLogo from '@/common/ImgTuBiao'
export default {
  name: 'SanFenLei',
  data () {
    return {
      sanFenLeiList: [{
        'id': '001',
        'title': '鼠绘汉化',
        'destinationUrl': '/ComicOnline/ListShuHuiHanHua'
      }, {
        'id': '002',
        'title': '热血漫画',
        'destinationUrl': '/ComicOnline/ListReXueManHua'
      }, {
        'id': '003',
        'title': '国产漫画',
        'destinationUrl': '/ComicOnline/ListGuoChanManHua'
      }]
    }
  },
  components: {
    ImgLogo
  }
}
</script>

<style lang="stylus" scopde>
  .san-fen-lei
    width 100%
    height 10rem
    .san-fen-lei-item
      color black
      float left
      display inline-block
      width 8.4875rem
      height 100%
      padding 0 0.625rem
      margin-bottom 0.625rem
      // .san-fen-lei-item-click
      //   display block
</style>
