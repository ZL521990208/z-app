<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/"
      >主页</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/information"
      >资讯</van-tabbar-item>
      <van-tabbar-item
        icon="friends-o"
        to="/maillist"
      >通讯录</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        to="/message"
      >消息</van-tabbar-item>
      <van-tabbar-item
        icon="setting-o"
        to="/personal"
      >个人信息</van-tabbar-item>
    </van-tabbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
