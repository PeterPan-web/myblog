<!-- 组件说明 -->
<template>
  <div id='PersonalTop'>
    <persoal>
      <div class="title">
        <h3>PeterPan-web的博客</h3>
        <h6>改变自己的未来需要自己的努力</h6>
      </div>
      <div>
       <title-item path="/home">首页</title-item>
       <title-item path="/books">资料</title-item>
       <title-item path="/about">关于</title-item>
       <title-item path="/search">搜索</title-item>
      </div>
    </persoal>
  </div>
</template>

<script>
import Persoal from "components/common/persoal/Persoal.vue";
import TitleItem from './TitleItem.vue';
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

</style>