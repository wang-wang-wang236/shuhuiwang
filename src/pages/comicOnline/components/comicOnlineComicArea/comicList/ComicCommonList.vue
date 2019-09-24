<template>
  <div class='comic-common-list'>
        <div class="contain-the-swiper">
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide class="stop-swiping" v-for="item of this.swiperList" :key='item.id'>
                    <div class="comic-item-area">
                      <router-link tag="a"
                        :to="item.itemImgToSpecificComic">
                          <img alt='item.title' :src='item.imgURL' />
                        </router-link>
                        <!-- <img :src="item.imgURL"/> -->
                        <router-link
                        :to="item.itemTitleTo">
                          <p>{{item.title}}</p>
                        </router-link>
                        <div class="comic-latest-info">
                          <router-link
                          :to="item.itemH3ToLatestTitle">
                            <h3>更新至：{{item.latestNumber}}话</h3>
                          </router-link>
                          <p v-if="item.latestTitle">{{item.latestTitle}}</p>
                          <p v-else>第{{item.latestNumber}}话</p>
                        </div>
                      </div>
              </swiper-slide>

              <!-- Optional controls -->
             <div class="swiper-pagination"  slot="pagination"></div>
           <!--   <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div> -->
              <!-- <div class='swiper-scrollbar'   slot='scrollbar'></div> -->
            </swiper>
            <!-- <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" >上一页</div>
            <div class="swiper-button-next" >下一页</div> -->
        </div>
        <!-- <paginate
          v-model="page"
          :page-count="6"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'">
        </paginate> -->
        <!-- <div class="swiper-button-next" >下一页</div> -->
        <common-pagination></common-pagination>
        <!-- <pagination :data="swiperList">
          <span slot="prev-nav">&lt; Previous</span>
          <span slot="next-nav">Next &gt;</span>
        </pagination> -->
  </div>
</template>

<script>
// import Pagination from 'laravel-vue-pagination'
import CommonPagination from './PaginationCommon'
// import Paginate from 'vuejs-paginate'
export default {
  name: 'ComicCommicList',
  components: {
    // Paginate,
    CommonPagination
    // Pagination
  },
  props: {
    swiperList: {
      type: Array,
      default: this.list
    }
  },
  data () {
    return {
      hello: 'hi commic common list',
      page: 1,
      list: [{
        'id': '0001',
        'title': ',',
        'imgURL': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
      }, {
        'id': '0002',
        'title': ',',
        'imgURL': 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      }, {
        'id': '0003',
        'title': ',',
        'imgURL': 'http://localhost:8080/static/img/shouyelunbo/onepiece.jpeg'
      }],
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true,
        paginationHide: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        // loop: true,
        // autoplay: 2500,
        // slidesOffsetAfter: 500,
        centeredSlides: true,
        slidesOffsetBefore: -500,
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumn: 2,
        spaceBetween: 0.2,
        // noSwipingClass: '.stop-swiping',
        // noSwiping: true,
        preventClicks: false,
        uniqueNavElements: false
        // paginationBulletRender: function (swiper, index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>'
        // }
      }
    }
  },
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.hello)
    // this.swiper.slideTo(3, 1000, false)
  }
  // methods: {
  //   clickCallback (pageNum) {
  //     alert(pageNum)
  //     // document.getElementsByTagName('span')[pageNum-1].click()
  //     document.getElementsByClassName('swiper-pagination-bullet')[pageNum - 1].click()
  //   }
  // }
}
</script>

<style lang='stylus' scoped>
  .swiper-container >>> .swiper-pagination-bullet-active
    background #fff
    /* background #aaa */
  .swiper-pagination-bullet >>> .swiper-pagination-bullet-active
    background #fff
  .comic-common-list
    width 93.75rem
    height 93.75rem
    .contain-the-swiper
      .swiper-container
        width 100%
        height auto
        .comic-item-area
          padding-left 0 0.625rem 0.625rem 0.625rem
          a
            color black
            text-decoration none
            &:hover
              color red

        .swiper-pagination
          .swiper-pagination-bullet
            background #fff
            color red
</style>
    /* .pagination
      width 100%
      height 100%
      &:hover
        color purple
      li
        list-style-type none
        &:hover
          color red */
