<template>
  <div class="background0">
     <div class="btn">
       <a href="https://wx.ihuanxi.cn/kd/washing/login/#/index"><img  src="../../../static/img1/btn1.png" @click="reply()"></a>
     </div>
     <div class="text">已放入换洗账号</div>
     <div class="text">请在浣洗公众号/APP内领取使用</div>
  </div>
</template>

<script>
  export default{
    name: 'get',
    data(){
      return{
      }
    },
    methods:{
      reply(){
       window.location.href = 'https://wx.ihuanxi.cn/kd/washing/local/'
      }
    }
  }
</script>

<style scoped>
  .background0{
    background-image: url(../../../static/img1/btn2.jpg) ,
                      url(../../../static/img1/btn4.jpg) ;
    background-repeat: no-repeat;
    background-size: 100% 60% , 100% 41%;
    background-position: 0 0 , 0 100%;
    width:100%;
    height: 100%;
    position: fixed;
    border: red solid 1px;
    text-align: center;
  }
  .btn img{
    width: 4.94rem;
    height: 1.42rem;
    padding-top: 110%;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px)  {
    .background0{
       background-size: 100% 50% , 100% 56%;
    }
  }
  @media only screen and (device-width: 768px) and (device-height: 1024px)  {
    .background0{
       background-size: 100% 50% , 100% 56%;
    }
    .btn img{
      width: 4.94rem;
      height: 1.42rem;
      padding-top: 70%;
    }
  }
  @media only screen and (device-width: 1024px) and (device-height: 1366px)  {
    .background0{
       background-size: 100% 50% , 100% 56%;
    }
    .btn img{
      width: 4.94rem;
      height: 1.42rem;
      padding-top: 70%;
    }
  }
  @media only screen and (device-width: 411px) and (device-height: 823px)  {
      .background0{
         background-size: 100% 55% , 100% 46%;
      }
      .btn img{
        width: 4.94rem;
        height: 1.42rem;
        padding-top: 115%;
      }
    }
  .text{
    color: rgb(255,188,119);
    margin-top: .1rem;
    font-size: .38rem;
  }
</style>
