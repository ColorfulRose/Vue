<template>
  <div>
    <el-form ref="loginForm"
             :model="loginForm"
             element-loading-text="正在登陆..."
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.8)"
             :rules="rules" class="loginContainer">
      <h3 class="logintitle">系统登录</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input type="text"  auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码" style="width: 250px;maigin-right:5px;"></el-input>
        <img :src="captchaUrl" @click = "updatecaptcha">

      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemenber">记住密码</el-checkbox>
      <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>


  export default {
    name: "Login",
    data(){
      return{
        captchaUrl:'/captcha?time='+new Date(),
        loginForm:{
          username:'admin',
          password:'admin',
          code:''
        },
        checked:true,
        rules:{
          username:[{required:true,message:'请输入用户名',trigger:'blur'}],
          password:[{required: true,message: '请输入密码',trigger:'blur'}],
          code:[{required:true,message:'请输入验证码',trigger:'blur'}]
        },
        loading:false
      }
    },
    //对应prop

    methods:{
      updatecaptcha(){
        this.captchaUrl = '/captcha?time='+new date()
      },
      submitLogin(){
        this.$router.replace('/home')
        // this.$refs.loginForm.validate((valid) => {
        //   if (valid) {
        //     this.loading= true
        //     this.postRequest('/login',this.loginForm).then(resp=>{
        //       if (resp){
        //         this.loading= false
        //         //存储用户token
        //         const tokenStr = resp.obj.tokenHead+resp.obj.token
        //         window.sessionStorage.setItem('tokenStr',tokenStr)
        //         //跳转首页
        //         this.$router.replace('/home')
        //       }
        //     })
        //   } else {
        //     this.$message.error('请输入所有字段');
        //     return false;
        //   }
        // })
      }

    }
  }
</script>

<style scoped>
.loginContainer{
  border-radius: 15px;
  background-clip: padding-box;
  margin:180px auto;
  width: 350px;
  padding: 15px 35px 15px 35px;
  background: #ffffff;
  border:1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
  .logintitle{
    maigin: 0 auto 40px auto;
    text-align: center;
  }
  .loginRemenber{
    text-align: left;
    margin:0px 0px 15px 0px;
  }
  .el-form-item__content{
    display: flex;
    align-items: center;
  }
</style>