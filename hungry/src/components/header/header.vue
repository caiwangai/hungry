<template>
     <div class="header">
        <div class="avatar">
        <img width="64" height="64" v-bind:src="seller.avatar" />
      </div>
     </div>
</template>
<script>
    export default{
         props:{
             seller:{
                 
             }
         }
    }
</script>
<style lang="stylus">

</style>


