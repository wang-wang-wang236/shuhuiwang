<template>
  <div class="comic-all-list-header-category">
    <ul class="comic-all-list-header-category-text-ul">
      <router-link class="comic-all-list-header-category-text-li"
      v-for="item of categoryText" :key="item.id"
      :to="item.destinationUrl">
        {{item.title}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComicListCategory',
  data () {
    return {
      allList: [],
      list: ['全部', '鼠绘汉化', '热血漫画', '国产漫画'],
      categoryText: [{
        'id': '001',
        'title': '全部',
        'destinationUrl': 'List'
      }, {
        'id': '002',
        'title': '鼠绘汉化',
        'destinationUrl': 'ListShuHuiHanHua'
      }, {
        'id': '003',
        'title': '热血漫画',
        'destinationUrl': 'ListReXueManHua'
      }, {
        'id': '004',
        'title': '国产漫画',
        'destinationUrl': 'ListGuoChanManHua'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comic-all-list-header-category
    position relative
    width 100%
    height 2rem
    // display inline-block
    // float left
    .comic-all-list-header-category-text-ul
      color #2C3E50
      width 100%
      display inline-block
      float left
      height 100%
      .comic-all-list-header-category-text-li
        text-decoration none
        width 20%
        height 1.25rem
        color black
        float left
        list-style-type none
        &:hover
          color red
          border-bottom 0.125rem solid red
</style>
