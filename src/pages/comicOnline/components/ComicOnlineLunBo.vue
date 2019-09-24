<template>
  <div class='comic-online-lunbo'>
    <!-- <div class="swiper-container"> -->
        <!-- <div> -->
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="item of this.swiperList" :key='item.id'>
                    <div><img alt='item.title' :src='item.imgURL' /></div>
              </swiper-slide>

              <!-- Optional controls -->
              <div class='swiper-pagination'  slot='pagination'></div>
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
  name: 'Carrousel',
  props: {
    swiperList: {
      type: Array,
      default: this.list
    }
  },
  data () {
    return {
      hello: 'hi comic online lun bo',
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
      imgUrl: 'https://oss.ishuhui.shop/img/view/2019/08/12d62acf-2fe0-4890-b13f-b9d5abf9fbd9.jpeg',
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: '.swiper-pagination',
        paginationType: 'bullets',
        paginationClickable: true,
        loop: true,
        autoplay: 2500,
        // slidesOffsetAfter: 500,
        centeredSlides: true,
        slidesOffsetBefore: -250

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
    /* color #aaa */
    /* background #aaa */
  .swiper-container >>> .swiper-pagination-bullet
    background #ddd
  .swiper-container
    width 100%
    height auto
    .swiper-pagination
      .swiper-pagination-bullet
        background #aaa
</style>
