<!--  -->
<template>
  <div class="header">
    <div class="header-left"><i class="iconfont iconfanhui"></i></div>
    <div class="header-input">
      <i class="iconfont iconsousuo"></i> 输入城市/景点/主题
    </div>
    <div class="header-right">城市 <i class="iconfont iconjiantou"></i></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {}
};
</script>
<style scoped lang="less">
@import "~@/assets/style/varibles.less";
.header {
  height: 0.86rem;
  line-height: 0.86rem;
  display: flex;
  color: #fff;
  background: @bgColor;
  .header-left {
    width: 0.64rem;
    float: left;
  }
  .header-input {
    height: 0.64rem;
    line-height: 0.64rem;
    flex: 1;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.12rem;
    text-align-last: left;
    float: left;
    color: #ccc;
    background: #fff;
    border-radius: 5px;
    i {
      font-size: 0.24rem;
    }
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    i {
      font-size: 0.24rem;
    }
  }
}
</style>
