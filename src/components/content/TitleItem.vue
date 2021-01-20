<!-- 组件说明 -->
<template>
  <div id='Titleitem' @click="pathchange"  :class="{active:isActive}">
    <div class="items" >
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
     isActive(){
        return this.$route.path.indexOf(this.path)!==-1
     }
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
#Titleitem{
  border-radius: 30px;
  margin-top: 17px;
}
.items{
  text-align: center;
  font-size: 15px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  border-radius: 30px;
  box-shadow: 0 1px 1px white;
}
.active{
  background-color: #44B783;
}
</style>