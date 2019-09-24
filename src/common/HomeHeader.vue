<template>
    <!-- <div class="home-header"> -->
        <div class="top-nav">
            <!-- <div class="top-nav-pic"> -->
            <router-link to="/Home"><img class="top-nav-logo" src='@/assets/shuhui-logo.png'/></router-link>
            <!-- </div> -->
            <ul class="top-nav-menu">
                <router-link  class="top-nav-menu-item"
                v-for="item of TopNavMenu"
                :key='item.id'
                :to=item.destinationUrl>{{item.text}}</router-link>
            </ul>
            <div class="top-nav-user" @click.stop="logIn">
                <router-link class="top-nav-user-logoin" to="">登录</router-link>
                <router-link class="top-nav-user-register" to="">注册</router-link>
            </div>
            <login v-show="showLogin"></login>
        </div>
    <!-- </div> -->
</template>

<script>
import Login from '@/pages/login/Login'
export default {
  name: 'HomeHeader',
  components: {
    Login
  },
  data () {
    return {
      TopNavMenu: [{
        id: '001',
        text: '首页',
        destinationUrl: '/Home'
      }, {
        id: '002',
        text: '在线漫画',
        destinationUrl: '/ComicOnline'
      }, {
        id: '003',
        text: '文章资讯',
        destinationUrl: '/'
      }, {
        id: '004',
        text: '在线动画',
        destinationUrl: '/'
      }, {
        id: '005',
        text: '商品周边',
        destinationUrl: '/'
      }, {
        id: '006',
        text: '加入我们',
        destinationUrl: '/'
      }, {
        id: '007',
        text: '问题反馈',
        destinationUrl: '/'
      }]
    }
  },
  methods: {
    logIn () {
      alert('12356')
      this.$emit('log-in')
    }
  }
}
</script>

<style lang="stylus"  scoped>
  .top-nav
    position relative
    float left
    padding 0 12.5rem 0 8.125rem
    width 100%
    height 3.25rem
    overflow hidden
    // box-sizing border-box
    border-bottom black solid 0.0625rem
    // .top-nav-pic
    //   height 100%
    //   float left
    //   // left -7.5rem
    .top-nav-logo
      position absolute
      // right 9.375rem
      float left
      height 100%
      left 0
      top 0
    .top-nav-menu
      position relative
      height 100%
      float left
      line-height 3.125rem
      font-size 0.8125rem
      margin-left 1.25rem
      margin-bottom 1.25rem
      text-align center
      // padding 0 1.25rem
      // text-decoration none
      .top-nav-menu-item
        box-sizing border-box
        padding 0.1875rem 0.375rem 0.0625rem 0.375rem
        font-size 1rem
        text-align center
        float left
        list-style-type none
        text-decoration none
        color black
        // :hover border-bottom 0.125rem red solid
        &:hover
          color red
          border-bottom 0.125rem red solid
    .top-nav-user
      position: relative
      height 100%
      float left
      box-sizing border-box
      padding 0 12.5rem 0 8.125rem
      a
        color black
        text-decoration none
      .top-nav-user-logoin
        box-sizing border-box
        padding 0.375rem
        float left
        &:hover
          cursor hand
          color red
      .top-nav-user-register
        float right
        box-sizing border-box
        padding 0.375rem
        &:hover
          cursor hand
          color red
</style>
