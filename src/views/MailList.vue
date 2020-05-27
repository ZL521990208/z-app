<template>
  <div>
    <van-nav-bar title="通讯录" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="D" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="E" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="F" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="G" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="H" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="I" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-index-anchor index="J" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
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
