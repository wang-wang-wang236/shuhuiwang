<template>
  <div id="table-comic" class="ui vertical stripe segment">
      <h1>tablehhh</h1>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-info ref="paginationInfoTop"
        ></vuetable-pagination-info>
        <vuetable-pagination ref="paginationTop"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
      </div>
      <vuetable ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        pagination-path=""
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <div class="vuetable-pagination ui basic segment grid">
        <vuetable-pagination-info ref="paginationInfo"
        ></vuetable-pagination-info>

        <vuetable-pagination ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
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
          name: '__checkbox',   // <----
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: '__sequence',   // <----
          title: '#',
          titleClass: 'center aligned',
          dataClass: 'right aligned'
        },
        {
          name: 'name',
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
    allcap (value) {
      return (value + 'k1').toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon">Male</i></span>'
        : '<span class="ui pink label"><strong class="large woman icon">Female</strong></span>'
    },
    onPaginationData (paginationData) {
      this.$refs.paginationTop.setPaginationData(paginationData)
      this.$refs.paginationInfoTop.setPaginationData(paginationData)

      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }

}
</script>

<style>
</style>
