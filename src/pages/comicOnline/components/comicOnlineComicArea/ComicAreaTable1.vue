<template>
  <div id="table-comic" class="ui vertical stripe segment">
      <h1>tablehhh</h1>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-info ref="paginationInfoTop"
        ></vuetable-pagination-info>
        <!-- <vuetable-pagination ref="paginationTop"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination> -->
      </div>
      <!-- //api-url="https://vuetable.ratiw.net/api/users" -->
      <!-- api-url="http://localhost:31875/static/static-json/users.json" -->
      <vuetable ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"

        :fields="fields"
        pagination-path=""
        :per-page="10"
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-info ref="paginationInfo"
        ></vuetable-pagination-info>

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
  data () {
    return {
      fields: [
        {
          name: '__checkbox',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: '__sequence',
          title: '序号',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'xH'
        },
        {
          name: 'name',
          title: '123',
          sortField: 'name'
        },
        {
          name: 'email',
          sortField: 'email'
        },
        {
          name: 'age',
          sortField: 'age',
          dataClass: 'center aligned'
        },
        {
          name: 'birthdate'
        },
        {
          name: 'nickname',
          callback: 'allcap'
          // callback: 'xH'
        },
        {
          name: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary'
        }
      ]
    }
  },
  methods: {
    xH (value) {
      let xuhao = '<span><i>k' + value + '</i></span>'
      let j = value + 1
      if (value) {
        console.log('in console?', value, j)
      }
      // return (value + 'k1').toUpperCase()
      return xuhao
    },
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
      this.$refs.paginationInfoTop.setPaginationData(paginationData)

      // this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
      this.$refs.paginationDropdrown.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }

}
</script>

<style>
</style>
