<template>
    <div class="home">
        <home-header></home-header>
        <carrousel :swiperList="lunBoList"></carrousel>
        <home-comic-area></home-comic-area>
        <!-- <h4>****************</h4> -->
        <!-- <comic-area-table :comicAllList="this.comicList"></comic-area-table> -->
        <!-- <login v-show="showLogin" v-on:cancel-login='cancelLogin'></login> -->
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '@/common/HomeHeader'
import Carrousel from '@/common/Carrousel'
import HomeComicArea from './components/homeComicArea/HomeComicArea'
import Login from '@/pages/login/Login'
import ComicAreaTable from '@/pages/comicOnline/components/comicOnlineComicArea/ComicAreaTable'
export default {
  name: 'Home',
  data () {
    return {
      lunBoList: [],
      showLogin: false,
      comicList: []
    }
  },
  components: {
    HomeHeader,
    Carrousel,
    HomeComicArea,
    Login,
    ComicAreaTable
  },
  methods: {
    getShouYeLunBoList () {
      // console.log('"here get axios?"')
      // axios.get('/api/shouyelunbo.json').then(this.getShouYeLunBoListSucc)
      axios.get('http://localhost:31875/static/static-json/shouyelunbo.json').then(this.getShouYeLunBoListSucc)
    },
    getShouYeLunBoListSucc (res) {
      // const result = res.result
      // console.log('here axios ok?')
      const data = res.data
      const result = data.result
      // console.log(data)
      if (result) {
        this.lunBoList = data.shouyetuijian
      }
      // console.log(res)
    },
    getComicList () {
      // console.log('in get list?')
      axios.get('http://localhost:31875/static/static-json/comicAll.json').then(this.getComicListSucc)
    },
    getComicListSucc (res) {
      // console.log('comic all list data?', res)
      const data = res.data
      // const flag = data.result
      // if (flag) {
      //   console.log('get flag?')
      // }
      const comicAllList = data.comicAllList
      // console.log('comic list 666', data)
      this.comicList = comicAllList
      // console.log(res)
    }
    // logIn (showLoginFromHomeHeader) {
    //   alert('it xiangshang chuandi  login from showLoginFromHomeHeader')
    //   alert(showLoginFromHomeHeader)
    //   this.showLogin = showLoginFromHomeHeader
    // },
    // logInEnter () {
    //   alert('hi in ')
    // },
    // cancelLogin (cancelLoginInFromLogin) {
    //   alert('it xiangshang chuandi  login from cancelLoginInFromLogin')
    //   alert(cancelLoginInFromLogin)
    //   this.showLogin = cancelLoginInFromLogin
    // }
  },
  mounted () {
    console.log('home mouted?')
    this.getShouYeLunBoList()
    this.getComicList()
  }
}
</script>

<style lang="stylus" scoped>

</style>
