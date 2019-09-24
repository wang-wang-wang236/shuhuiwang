<template>
  <div class="comic-online">
    <!-- <home-header></home-header> -->
    <carrousel :swiperList="this.lunBoList"></carrousel>
    <fen-jian-xian></fen-jian-xian>
    <san-fen-lei></san-fen-lei>
    <fen-jian-xian></fen-jian-xian>
    <comic-online-area></comic-online-area>
  </div>

</template>

<script>
// import HomeHeader from '@/common/HomeHeader'
import FenJianXian from '@/common/FenJianXian'
import Carrousel from './components/ComicOnlineLunBo'
import SanFenLei from './components/SanFenLei'
import ComicOnlineArea from './components/ComicOnlineArea'
import axios from 'axios'
export default {
  name: 'ComicOnlieOriginal',
  data () {
    return {
      lunBoList: []
    }
  },
  components: {
    // HomeHeader,
    Carrousel,
    SanFenLei,
    FenJianXian,
    ComicOnlineArea
  },
  methods: {
    getLunBoList () {
      axios.get('http://localhost:31875/static/static-json/zaixianmanhua-lunbo.json').then(this.getLunBoListSucc)
    },
    getLunBoListSucc (res) {
      const data = res.data
      const result = data.result
      if (result) {
        // console.log('this is in' + result)
        this.lunBoList = data.zaixiannamhualunbo
      }
    }
  },
  mounted () {
    this.getLunBoList()
  }
}
</script>

<style lang="stylus" scoped>
</style>
