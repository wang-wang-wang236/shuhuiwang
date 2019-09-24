<template>
  <div class="comic-all-list">
    <!-- <div class="comic-all-list-header-category">
      <ul class="comic-all-list-header-category-text-ul">
        <router-link class="comic-all-list-header-category-text-li"
        v-for="item of categoryText" :key="item.id"
        :to="item.destinationUrl">
          {{item.title}}
        </router-link>
      </ul>
    </div> -->
    <comic-list-category></comic-list-category>
    <comic-common-list :swiperList="this.allList"></comic-common-list>
  </div>
</template>

<script>
import ComicCommonList from '../comicList/ComicCommonList'
import ComicListCategory from '../comicList/ComicListCategory'
import axios from 'axios'
export default {
  name: 'ComicAllList',
  data () {
    return {
      allList: []
    }
  },
  components: {
    ComicCommonList,
    ComicListCategory
  },
  methods: {
    getAllList () {
      axios.get('http://localhost:31875/static/static-json/comicAll.json').then(this.getAllListSucc)
    },
    getAllListSucc (res) {
      const data = res.data
      const result = data.result
      if (result) {
        console.log('this is in comic all list' + result)
        this.allList = data.comicAllList
      }
    }
  },
  mounted () {
    this.getAllList()
  }
}
</script>

<style lang="stylus" scoped>

</style>
