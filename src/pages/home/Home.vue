<template>
    <div class="home">
        <home-header v-on:log-in='logIn'></home-header>
        <carrousel :swiperList="lunBoList"></carrousel>
        <home-comic-area></home-comic-area>

    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '@/common/HomeHeader'
import Carrousel from '@/common/Carrousel'
import HomeComicArea from './components/homeComicArea/HomeComicArea'
// import Login from '@/pages/login/Login'
export default {
  name: 'Home',
  data () {
    return {
      lunBoList: [],
      showLogin: false
    }
  },
  components: {
    HomeHeader,
    Carrousel,
    HomeComicArea
    // Login
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
    logIn () {
      // alert('it xiangshang chuandi  login')
      this.showLogin = true
    },
    logInEnter () {
      alert('hi in ')
    }
  },
  mounted () {
    console.log('home mouted?')
    this.getShouYeLunBoList()
  }
}
</script>

<style lang="stylus" scoped>

</style>
