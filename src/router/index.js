import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import ComicOnlineAllHeader from '@/pages/comicOnline/ComicOnlineAllHeader'
import ComicOnlineOriginal from '@/pages/comicOnline/ComicOnlineOriginal'
import ComicAllList from '@/pages/comicOnline/components/comicOnlineComicArea/comicAllList/comicAllList'
import ComicReXueManHua from '@/pages/comicOnline/components/comicOnlineComicArea/comicAllList/ComicReXueManHua'
import ComicShuHuiHanHua from '@/pages/comicOnline/components/comicOnlineComicArea/comicAllList/ComicShuHuiHanHua'
import ComicGuoChanManHua from '@/pages/comicOnline/components/comicOnlineComicArea/comicAllList/ComicGuoChanManHua'
import ComicAreaTable from '@/pages/comicOnline/components/comicOnlineComicArea/ComicAreaTable'
import ComicAreaTable1 from '@/pages/comicOnline/components/comicOnlineComicArea/ComicAreaTable1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/ComicOnline',
      name: 'ComicOnlineAllHeader',
      component: ComicOnlineAllHeader,
      children: [{
        path: 'List',
        name: 'ComicAllList',
        component: ComicAllList
      }, {
        path: '',
        name: 'ComicOnlineOriginal',
        component: ComicOnlineOriginal
      }, {
        path: 'ListShuHuiHanHua',
        name: 'ComicShuHuiHanHua',
        component: ComicShuHuiHanHua
      }, {
        path: 'ListReXueManHua',
        name: 'ComicReXueManHua',
        component: ComicReXueManHua
      }, {
        path: 'ListGuoChanManHua',
        name: 'ComicGuoChanManHua',
        component: ComicGuoChanManHua
      }, {
        path: 'ComicAreaTable',
        name: 'ComicAreaTable',
        component: ComicAreaTable
      }, {
        path: 'ComicAreaTable1',
        name: 'ComicAreaTable1',
        component: ComicAreaTable1
      }]
    }
  ]
})
