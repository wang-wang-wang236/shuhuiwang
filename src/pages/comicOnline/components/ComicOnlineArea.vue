<template>
  <div class="comic-online-area">
    <online-han-hua></online-han-hua>
    <fen-jian-xian></fen-jian-xian>
    <online-re-xue></online-re-xue>
    <fen-jian-xian></fen-jian-xian>
    <online-guo-chan></online-guo-chan>
    <fen-jian-xian></fen-jian-xian>
  </div>
</template>

<script>
import FenJianXian from '@/common/FenJianXian'
import OnlineHanHua from './comicOnlineComicArea/ShuHuiHanHua'
import OnlineReXue from './comicOnlineComicArea/ReXueManHua'
import OnlineGuoChan from './comicOnlineComicArea/GuoChanManHua'
export default {
  name: 'ComicOnlineArea',
  components: {
    OnlineHanHua,
    OnlineReXue,
    OnlineGuoChan,
    FenJianXian
  }
}
</script>

<style >
</style>
