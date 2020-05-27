<template>
  <div>
    <van-nav-bar title="个人信息" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'Information',
  data() {
    return {}
  },
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    }
  },
  components: {},
  created() {},
  mounted() {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
