<!-- 组件说明 -->
<template>
  <div id='PersonalTop'>
    <persoal>
      <div class="title">
        <h3>PeterPan-web的博客</h3>
        <div class="titlewords">
         <h6>改变自己的未来需要自己的努力</h6> 
        </div>
        
      </div>
      <div>
       <title-item path="/home">
       <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-ziyuan"></use>
</svg>
       <span>首页</span> 
       </title-item>
       <title-item path="/books">
       <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-ziliao"></use>
</svg>
<span>资料</span>
       </title-item>
       <title-item path="/about">
       <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-ren"></use>
</svg><span>关于</span>
       </title-item>
       <title-item path="/search">
       <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-search
"></use>
</svg><span>搜索</span>
       </title-item>
      </div>
    </persoal>
  </div>
</template>

<script>
import Persoal from "components/common/persoal/Persoal.vue";
import TitleItem from './TitleItem.vue';
import iconfont from'assets/iconjs/iconfont'
  export default {
    name:'PersonalTop',
    components: {
       Persoal,
       TitleItem,
    },
    data() {
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
.title{
  background-color: black;
  width: 100%;
  height: 110px;
  color:white;
  font-size: 15px;
  text-align: center;
  padding-top: 30px;
}
.titlewords{
margin-top: 15px;
font-size: 1px;
}
.icon{
  margin-left: 5px;
}
</style>