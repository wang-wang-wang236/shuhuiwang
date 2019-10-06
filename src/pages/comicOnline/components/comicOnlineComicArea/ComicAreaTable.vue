<template>
  <div id="table-comic" class="table-comic ui vertical stripe segment">
      <h1>全部漫画</h1>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-dropdown ref="paginationDropdrownTop"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination-dropdown>
        <!-- <vuetable-pagination ref="paginationTop"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination> -->
      </div>

      <vuetable  ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        pagination-path=""
        :per-page="this.per_page_number"
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <div class="vuetable-pagination ui basic segment grid">
        <!-- <vuetable-pagination ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination> -->
        <vuetable-pagination-dropdown ref="paginationDropdrown"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination-dropdown>
      </div>
  </div>
</template>

<script>
// import Vuetable from 'vuetable-2/src/components/Vuetable.vue'
// import axios from 'axios'
import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationDropdown from 'vuetable-2/src/components/VuetablePaginationDropdown'
// var Vue = require('vue')
// var VueResource = require('vue-resource')
// Vue.use(VueResource)
export default {
  name: 'ComicAreaTable',
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationDropdown,
    VuetablePaginationInfo
  },
  props: {
    comicAllList: {
      type: Array,
      default: this.comicList
    }
  },
  data () {
    return {
      // total: 46,
      comicList: [],
      per_page_number: 5,
      current_page: 1,
      last_page: 14,
      get_page: 'https:' + '\\' + '/' + '\\' + '/vuetable.ratiw.net' + '\\' + '/api' + '\\' + '/users?page=',
      // next_page_url: 'https:\/\/vuetable.ratiw.net\/api\/users?page=2',
      next_page_url: null,
      prev_page_url: null,
      fields: [
        // {
        //   name: '__checkbox',
        //   titleClass: 'center aligned',
        //   dataClass: 'center aligned'
        // },
        {
          name: '__sequence',
          title: '序号',
          titleClass: 'center aligned table-title',
          dataClass: 'right aligned'
        },
        {
          name: 'name',
          title: '漫画图片',
          titleClass: 'center aligned table-title',
          // sortField: 'name'
          callback: 'loadIMG'
        },
        {
          name: 'email',
          title: '漫画名字',
          titleClass: 'center aligned table-title',
          sortField: 'email'
        },
        {
          name: 'age',
          title: '最新话',
          titleClass: 'center aligned table-title',
          sortField: 'age',
          dataClass: 'center aligned'
        },
        {
          name: 'birthdate',
          titleClass: 'center aligned table-title',
          title: '最新集数'
        },
        // {
        //   name: 'nickname',
        //   callback: 'allcap'
        //   // callback: 'xH'
        // },
        // {
        //   name: 'gender',
        //   titleClass: 'center aligned',
        //   dataClass: 'center aligned',
        //   callback: 'genderLabel'
        // },
        // {
        //   name: 'salary'
        // },
        {
          name: 'id',
          // display: false,
          visible: false
          // callback: 'replaceData'
        }
      ],
      imgHtml: '<img src="">'
    }
  },
  create () {
    console.log('in mouted?')
    this.getComicList()
  },
  methods: {
    allcap (value) {
      return (value + 'k1').toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon">Male</i></span>'
        : '<span class="ui pink label"><strong class="large woman icon">Female</strong></span>'
    },
    onPaginationData (paginationData) {
      // this.$refs.paginationTop.setPaginationData(paginationData)
      // this.$refs.paginationInfoTop.setPaginationData(paginationData)
      // this.$refs.pagination.setPaginationData(paginationData)
      // this.$refs.paginationInfo.setPaginationData(paginationData)
      paginationData = this.replaceDatabyid(paginationData)
      this.$refs.paginationDropdrown.setPaginationData(paginationData)
      this.$refs.paginationDropdrownTop.setPaginationData(paginationData)
      console.log('pagination data is', paginationData.data)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    loadIMG (imgURL) {
      if (imgURL) {
        // return axios.get(imgURL)
        let img = '<img width="50px" height="80px" src="' + imgURL + '"' + '>'
        // console.log(img)
        // console.log(this.comicAllList)
        return img
      }
    },
    // replaceData (id) {
    //   getComicDataById(id)
    // },
    replaceDatabyid (paginationData) {
      // let xiabiao = (id - 1) % 46
      // for (let data of this.pagina)
      for (let oriData of paginationData.data) {
        for (let newData of this.comicAllList) {
          let id = oriData.id % 46
          if (!id) {
            id = 46
          }
          if (Number(newData.id) === id) {
            // console.log('id ok')
            oriData.name = newData.imgURL
            oriData.email = newData.title
            oriData.age = newData.latestTitle
            oriData.birthdate = newData.latestNumber
            if (!newData.latestTitle) {
              oriData.age = newData.latestNumber
            }
          }
        }
      }
      return paginationData
    }

  }

}
</script>

<style lang="stylus" scoped="scoped">
  // @import '~/src/assets/css/vueTable.css'
</style>
