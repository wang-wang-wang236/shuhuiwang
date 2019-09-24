<template>
  <div class='comic-list-swiper'>
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
              <!-- <div class='swiper-pagination'  slot='pagination'></div> -->
              <!-- <div class='swiper-button-prev' slot='button-prev'></div>
              <div class='swiper-button-next' slot='button-next'></div>
              <div class='swiper-scrollbar'   slot='scrollbar'></div> -->
            </swiper>
        <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'ComicListSwiper',
  props: {
    swiperList: {
      type: Array,
      default: this.list
    }
  },
  data () {
    return {
      hello: 'hi',
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
        // pagination: '.swiper-pagination',
        // paginationType: 'bullets',
        // loop: true,
        // autoplay: 2500,
        // slidesOffsetAfter: 500,
        centeredSlides: true,
        slidesOffsetBefore: -450,
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumn: 6,
        spaceBetween: 5,
        noSwipingClass: '.stop-swiping',
        noSwiping: true,
        preventClicks: false

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
}
</script>

<style lang='stylus' scoped>
  .swiper-container >>> .swiper-pagination-bullet-active
    background #fff
    /* background #aaa */
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
    .comic-latest-info
      a
        &:hover
          color red
</style>
