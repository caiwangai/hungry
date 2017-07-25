<template>
  <div id="app">
      <v-header></v-header>
      <div class="tab">
        <div class="tab">
           <div class="tab-item">
            <router-link to="/goods" >商品</router-link> -->
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
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header'
export default{
  components:{
    'v-header':header
  }
}
</script>
<style lang="stylus">
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
            color rgb(77,85,93)
            &.active
               color red
               


    
</style>
