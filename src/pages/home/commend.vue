<template>
  <div>
    <div class="demo-swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banners" :key="index">
          <img v-lazy="item.picUrl"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="van-doc-demo-block">
    <van-row gutter="20">
      <van-col span="8">1</van-col>
      <van-col span="8">2</van-col>
      <van-col span="8">3</van-col>
      <van-col span="8">1</van-col>
      <van-col span="8">2</van-col>
      <van-col span="8">3</van-col>
    </van-row>
  </div>
  </div>
</template>

<script>
  import fetch from "../../utils/fetch";
  export default {
    name: "commend",
    data() {
      return {
        banners: []
      }
    },
    methods: {
      /**
       *获取banner
       */
      getBanner() {
        let params = {
          method: 'get',
          path: 'banner',
        };
        fetch(params).then(res => {
          if (res.code == 200) {
            this.banners = res.banners;
            console.log(this.banners)
          } else {
            this.$toast.fail('获取banner失败')
          }
        }).catch(err => {
          this.$toast.fail('获取banner请求错误');
          throw  err;
        })
      }
    },
    created() {
      this.getBanner();
    }


  }
</script>

<style scoped>
  .demo-swipe .van-swipe img {
    width: 100%;
    height: 180px;
    display: block;
    box-sizing: border-box;
    background-color: #fff;
    pointer-events: none;
  }
  .van-doc-demo-block{
    padding: 0 10px;
  }
</style>
