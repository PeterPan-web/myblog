<!-- 组件说明 -->
<template>
  <div id='Titleitem' @click="pathchange">
    <div class="items">
     <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Titleitem',
    components: {

    },
    data () {
      return {

      };
    },
    props: {
      path:String
    },
    computed: {
     
    },
    methods: {
pathchange(){
  this.$router.push(this.path)
}
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
.items{
  margin:20px 0 20px 0;
  text-align: center;
  font-size: 15px;
  cursor: pointer;
}
</style>