<template>
    <div name="t-login" class="t-log-in" v-on:click="cancelLogin">
      <div class="login-component" >
        <form class="whole-form" @click.stop action="https://www.baidu.com" method="post">
          <h2> 登录</h2>
          <div class="user-login-area" >
            <div class="user-login">
              <label for="username">用户名:</label>
              <input id="username"  placeholder="用户名/手机/邮箱"/>
            </div>
            <div class="user-login">
              <label for="password">密码:</label>
              <input id="password"  type="password" />
            </div>
            <div class="user-login">
              <input id="denglu" class="user-submit" type="submit" value="登录"/>
              <input id="zhuce" class="user-submit" type="submit" value="注册"/>
            </div>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      showLogin: false
    }
  },
  methods: {
    cancelLogin () {
      // alert('cancel login and showLogin is')
      this.showLogin = false
      // alert(this.showLogin)
      this.$emit('cancel-log', this.showLogin)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .t-log-in
    z-index 111
    position absolute
    left 31.25rem
    top 12.5rem
    background red
    .login-component
      width 21.875rem
      height 31.25rem
      background #fff
  // .t-login-enter-active
  //   transition: opacity .3s ease
  //   opacity 0.5

</style>
