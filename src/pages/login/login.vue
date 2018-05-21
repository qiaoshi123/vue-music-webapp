<template>
    <div class="login-container">
      <div class="login-wrap">
        <van-cell-group>
          <van-field
            v-model="phone"
            icon="clear"
            left-icon="phone"
            placeholder="手机号"
            @click-icon="phone = ''"
          />

          <van-field
            v-model="password"
            type="password"
            left-icon="check"
            placeholder="密码"
          />
        </van-cell-group>
        <div class="login-btn">
          <van-button bottom-action size="large" @click="handleLogin">登录</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import fetch from '@/utils/fetch.js'
  export default {
    name: "login",
    data() {
      return {
        phone: '',
        password: ''
      };
    },
    mounted() {
      document.getElementsByTagName('html')[0].className = 'full'
      document.getElementsByTagName('body')[0].className = 'full'
    },
    beforeDestroy() {
      document.getElementsByTagName('html')[0].className = ''
      document.getElementsByTagName('body')[0].className = ''
    },
    created(){
      console.log(this.$store.state.control);
      console.log(this.$data)
    },
    methods:{
      handleLogin(){
        let params = {
          data:{...this.$data},
          method:'get',
          path:'login'
        };
        fetch(params).then(res=>{
         if(res.code == 200){
           this.$store.state.userInfo = res.profile;
           this.$router.push('/home')
         }else{
          this.$toast('登录失败，请重试')
         }
        }).catch(err=>{
          this.$toast.fail('登录请求错误～');
          throw  err;
        })

      }
    }

  }
</script>

<style>
  .full {
    height: 100%;
  }

  .login-container {
    position: relative;
    height: 100%;
  }

  .login-wrap {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .login-btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 1.5rem;
  }

</style>
