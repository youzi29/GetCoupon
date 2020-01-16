<template>
  <div>
    <img src="../../static/img/img1_1.jpg">
    <div class="background">
      <div class="active">
        <div>活动礼包</div>
      </div>
       <!--渲染满减优惠券列表-->
      <div class="list" >
        <div class="list1" v-for="item in 1">
           <div class="left">
              <h3>627.7元</h3>
              <div>满5000元可用</div>
           </div>
           <div class="right">
              <h3>满减券</h3>
              <div>2019-10-12至2019-11-12有效</div>
              <div>此优惠券洗涤全场通用</div>
           </div>
        </div>
        <input type="text" placeholder="请输入姓名"
               @input="nameVerification"
               v-model="name"/>
        <input type="text" placeholder="请输入手机号"  v-model="mobile"/>
        <div class="identify">
           <input class="identify-input" type="text"
                  @input="idNumberVerification"
                  placeholder="验证码"  v-model="code">
           <button class="identify-btn" type="submit" @click="getCode()" v-show="show">获取验证码</button>
           <button class="identify-btn-time" type="submit" v-show="!show">{{count}}</button>
        </div>
        <button class="get" type="submit" @click="submit()">立即领取</button>
      </div>
      <!--活动规则-->
      <div class="active">
        <div>活动规则</div>
      </div>
      <div class="list" >
        <div style="height: 2.75rem;"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { add,putCoupon } from "@/api/api.js"
export default {
  name: 'index',
  data () {
    return {
     mobile:'',
      code:'',
      name:'',
      show: true,
      count:'',
      timer: null
    }
  },
  methods:{

       //验证姓名
        nameVerification(e){
              e.target.value=e.target.value.replace(/[^\u4e00-\u9fa5A-Za-z]/, '');
              this.name = e.target.value;
            },
       //验证码输入校验（只允许输入数字）
        idNumberVerification(e){
             e.target.value=e.target.value.replace(/([^0-9Xx])+/g, '');
             this.idNumber = e.target.value;
           },

       //验证码倒计时
       getCode(){

         const TIME_COUNT = 60;
          var postdata = {
            mobile: this.mobile,
            remark: "农商行领券注册"
          }

         if (!this.timer) {
               this.count = TIME_COUNT;
               this.show = false;
               this.timer = setInterval(() => {
               if (this.count > 0 && this.count <= TIME_COUNT) {
                 this.count--;
                } else {
                 this.show = true;
                 clearInterval(this.timer);
                 this.timer = null;
                  }
                 }, 500)
          }

       let data =  {
         mobile: this.mobile,
         remark: "农商行领券注册"
       }
       add(data).then(res => {
         
         if (res.data.code != 0) {
           alert(res.data.codemsg)
         }
           console.log(res);
       }).catch(err => {
       	console.log(err);
       });


     /* this.axios({
       method: "post",
       url: " https://wx.ihuanxi.cn/lib/common/getMobileCode.php",
       data: postdata
     }).then((res)=>{
       console.log(res);
     }); */
   } ,

    //提交领取优惠券
    submit(){
      var postdata = {
        mobile: this.mobile,
        code: this.code,
        name: this.name,
        city: this.city,
        type:'11-33-1-1125'
      }
      console.log(this.mobile);
      if(!this.mobile.match(/^1(\d){10}$/)){
        alert('请输入正确的手机号');
        return
      }else if( this.name == ''){
         alert('请输入姓名');
      }else if( this.code == ''){
        alert("请输入验证码")
      }
      else{
        /* this.$router.push({path:'get'}) */
        /* 发起axios请求 */
         let data = postdata
          putCoupon(postdata).then(res => {
            if(res.status == 200){
               console.log(res);
               this.$router.push({path:'get'})
            }

         }).catch(err => {
         	console.log(err);
         });
      }
    }
  },



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background{
    background: rgb(255,180,0);
    padding-bottom: 1.25rem;
    margin-top: -0.02rem;
  }
  .active{
    background: url(../../static/img/img3.png) no-repeat;
    background-size: 5.52rem 1.49rem;
    min-width: 4.12rem ;
    min-height: 1.49rem ;
    /* background-position: 2.7rem 0rem; */
    background-position: center;
    margin: 0 auto;
    text-align: center;
  }
  .active div{
    color: white;
    padding-top: .21rem;
    font-size: .43rem;
    font-weight: 700;
  }
  .list{
    background: rgb(174,33,210);
    width: 9.6rem;
    border: rgb(252,229,170) solid 0.15rem;
    border-radius: .45rem;
    margin: 0 auto;
    margin-bottom: 2.5rem;
  }
  .list1{
    background: url(../../static/img/img4.png) no-repeat;
    background-size: 9.2rem 2.99rem;
    background-position: .2rem 1rem;
    height: 4rem;
  }
   .left{
     width: 2.1rem;
     display: inline-block;
     position: relative;
     top: 1.2rem;
     left: 1.1125rem;
   }
   .left h3{ color: red; font-size: 0.45rem }
   .left div{font-size: .32rem}
   .left div{color: #ccc;}
   .right{
     left: 1.5125rem;
     text-align: left;
     width: 5.1rem;
     position: relative;
     top: 1.5rem;
     display: inline-block;
   }
   .right h3{font-size: .45rem}
   .right div{color: #CCCCCC; font-size: .32rem}
   input{
     margin: 0.625rem auto 0rem .5rem;
     width: 8.04rem ;
     height: 1rem;
     border-radius: 0.775rem;
     padding-left: 0.3125rem;
     font-size: 0.4rem;
     border: #CCCCCC solid 0px;
   }
   button{
     margin: 0.625rem auto 0.5rem .57rem;
     width: 8.14rem ;
     height: 1.1rem;
     border-radius: 0.775rem;
     padding-left: 0.3125rem;
     font-size: 0.4rem;
     border: #AAAAAA solid 0px;
     background: rgb(255,180,0);
     cursor: pointer;
   }
   .identify{
     width: 100%;

   }
   .identify-input{
     width: 5.04rem ;
     float: left;
     margin-right: 0rem;
     border-bottom-right-radius: 0rem;
     border-top-right-radius: 0rem;
   }
   .identify-btn{
     width: 3.04rem ;
     float: left;
     height: 1rem ;
     margin-left: 0rem;
     padding-left:.1rem ;
     border-bottom-left-radius: 0rem;
      border-top-left-radius: 0rem;
   }
    .identify-btn-time{
      width: 3.04rem ;
      float: left;
      height: 1rem ;
      margin-left: 0rem;
      padding-left:.1rem ;
      border-bottom-left-radius: 0rem;
      border-top-left-radius: 0rem;
      color: darkred;
      font-size: .5rem
    }
    .get{
      margin-top: .2rem;
    }
</style>
