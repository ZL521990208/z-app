<template>
  <div>
    <van-nav-bar title="资讯" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div>
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
      <van-card desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" />
    </div>
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
