<!-- 组件说明 -->
<template>
  <div>
<header></header>
    <div class="index-wrapper">
        <div class="blog-wrapper">
          <h3 class="blog-title">欢迎来到我的博客，网站建设中暂无更多内容 :)</h3>
        </div>
    </div>
    <homeshow></homeshow>
  </div>
</template>
<script>
import Homeshow from 'components/content/homeshow.vue';
  export default {
    name:'Home',
    components: {
        Homeshow

    },
    data 
        () {
      return {

      };
    },
    props: {

    },
    computed: {

    },
    methods: {

    },
    created(){

    },
    mounted(){

    },
    activated(){

    },
    destroyed(){

    },
  }
</script>
<style>
.index-wrapper{
    max-width: 960px;
    margin: 30px auto 40px;
  }
  .blog-wrapper{
    margin-bottom: 30px;
    padding: 12px 12px 0;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(151,151,151,0.58);
  }
</style>