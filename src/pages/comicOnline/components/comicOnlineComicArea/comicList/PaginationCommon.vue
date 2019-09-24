<template>
  <div class="common-pagination">
    <paginate
      v-model="page"
      :page-count="6"
      :page-range="3"
      :margin-pages="2"
      :initial-page="4"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">

     <!-- <span slot="prevContent">Changed previous button</span>
      <span slot="nextContent">Changed next button</span>
      <span slot="breakViewContent">
        <svg width="16" height="4" viewBox="0 0 16 4">
          <circle fill="#999999" cx="2" cy="2" r="2" />
          <circle fill="#999999" cx="8" cy="2" r="2" />
          <circle fill="#999999" cx="14" cy="2" r="2" />
        </svg>
      </span> -->
    </paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
  name: 'CommonPagination',
  data () {
    return {
      page: 1
    }
  },
  components: {
    Paginate
  },
  methods: {
    clickCallback (pageNum) {
      alert(pageNum)
      // document.getElementsByTagName('span')[pageNum-1].click()
      document.getElementsByClassName('swiper-pagination-bullet')[pageNum - 1].click()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .common-pagination
    .pagination
      width 50rem
      height 5rem
      display inline-flex
      float left
      margin 0.125rem
      border 2px solid blueviolet
      list-style-type none
      font-size 3rem
      &:hover
        color red
      .page-item
        font-size 1.5625rem
        background red
        display block
        box-sizing border-box
        margin-top 0.3125rem
        margin-right 0.3125rem
        border 0.3125rem solid red
        &:hover
          color blue

</style>
