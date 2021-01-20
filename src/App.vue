<template>
   <div id='app'>
       <mainbox></mainbox>
      <keep-alive>
            <router-view/>
      </keep-alive> 
   </div>
 </template>

 <script>
import mainbox from 'views/Mainbox/mainbox.vue';
   export default {
     name:'app',
     components: {
          mainbox,
     },
     data () {
       return{

       }
     },
    methods:{
    // 监听窗口滚动
    isScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop == 0)
      {
        //滚动条为0
        this.navShadow = false;
      }else {
        //滚动条不为0
        this.navShadow = true;
      }
    },
  },
   }
 </script>

 <style>
 @import 'assets/css/base.css';
 </style>
