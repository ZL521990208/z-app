<template>
  <div>
    <van-button
      type="primary"
      @click="signIn"
    >主要按钮</van-button>
	<h1>登录</h1>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {}
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    //   模拟登录 获得 token
    signIn() {
      localStorage.setItem('token', '12345678')
      console.log(1)
      this.$router.push('/')
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
