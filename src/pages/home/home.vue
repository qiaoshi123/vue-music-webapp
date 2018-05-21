<template>
  <div>
    <van-nav-bar title="MUSIC" style="background-color: orangered;color: #fff">
      <van-icon name="search" slot="right" color="#ffffff"/>
      <van-icon name="wap-nav" slot="left" color="#ffffff"/>
    </van-nav-bar>
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="(item,index) in navList" :title="item.name" :key="index">
      </van-tab>
    </van-tabs>
    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        active: 0,
        navList: [
          {name: '推荐', route: '/home/commend'},
          {name: '排行', route: '/home/rank'},
          {name: '歌手', route: '/home/singer'}
        ]
      }
    },
    mounted() {

    },
    methods: {
      onClick(index) {
        this.$router.push(this.navList[index].route)
      }
    }
  }
</script>

<style scoped>
</style>
