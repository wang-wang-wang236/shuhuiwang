<template>
  <div class="comic-table">123</div>
</template>

<script>
var Vue = require('vue');
var VueResource = require('vue-resource');
Vue.use(VueResource);
import Vuetable from 'vuetable/src/components/Vuetable.vue'
import VuetablePagination from 'vuetable/src/components/VuetablePagination.vue'
import VuetablePaginationDropdown from 'vuetable/src/components/VuetablePaginationDropdown.vue'

export default {
  name: 'ComicAreaTable',
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationDropdown
  }
}
</script>

<style>
</style>
