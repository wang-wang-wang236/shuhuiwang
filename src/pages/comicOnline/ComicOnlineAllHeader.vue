<template>
  <div class="comic-online-all-header">
    <home-header></home-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HomeHeader from '@/common/HomeHeader'
export default {
  name: 'ComicOnlineAllHeader',
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
