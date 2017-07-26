<template>
  <div id="app">
      <v-header :seller="seller"></v-header>
      
        <div class="tab">
           <div class="tab-item">
            <router-link to="/goods" >商品</router-link>
            <!-- <a v-link="{ path: '/goods'}">商品</a> -->
             </div>
           <div class="tab-item">
             <router-link to="/ratings" >评论</router-link>
             </div>
            <div class="tab-item">
              <!-- <a v-link="{path:'/seller'}">商家</a> -->
              <router-link to="/seller" >商家</router-link>
              </div>
        </div>
     
      <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'

export default{
  components:{
    'v-header':header
  },
  data(){
      return {
         seller:{}
       }
         },
 created(){
        this.$http.get("/api/seller").then((respons)=>{
        console.log(respons.body.data);
        this.seller=respons.body.data;
             })
         }
}
</script>
<style lang="stylus">
 @import "./common/stylus/index.styl"
  // @import "./common/stylus/minxin.styl"
#app
  .tab
    display:flex
    width :100%
    height: 40px
    line-height: 40px
    .tab-item
         flex :4
         text-align center
         &>a
            display block
            font-size 14px
            border-1px(blue)
            // border-bottom  1px solid red
            color rgb(77,85,93)
            &.active
               color red
               


    
</style>
