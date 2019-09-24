<template>
  <!-- <div class="comic-whole-area">
    <div class="comic-content">
      <div class="comic-nav">
        <div class="comic-text-category">
          <div class="comic-text-title"
          v-for="item of comicTextCategory" :key="item.id">{{item.title}}</div>
        </div>
      </div> -->
      <div class="comicwholelist">
        <div class="comic-item"
        v-for="item of comicWholeList" :key="item.id">
          <img :src="item.imgURL"/>
          <p>{{item.title}}</p>
          <div class="comic-latest-info">
            <h3>更新至：{{item.latestNumber}}话</h3>
            <p v-if="item.latestTitle">{{item.latestTitle}}</p>
            <p v-else>第{{item.latestNumber}}话</p>
          </div>
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: 'ComicWholwList',
  data () {
    return {
      itemLatestInfo: ''
    }
  },
  props: {
    comicWholeList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comicwholelist
    display flex
</style>
