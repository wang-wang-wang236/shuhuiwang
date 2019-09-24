<template>
  <transtion name="t-login" class="t-log-in"
   v-on:enter="logInEnter">
    <div class="login-component">
      <form class="whole-form">
        <h2> 登录</h2>
      </form>
    </div>
  </transtion>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus" scoped>
  .t-log-in
    z-index 11
    position absolute
    left 31.25rem
    top 12.5rem
    .login-component
      width 21.875rem
      height 31.25rem
      background #fff
  .t-login-enter-active
    transition: opacity .3s ease
    opacity 0.5

</style>
