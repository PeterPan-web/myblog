<template>
  <div id='app'>
    <div class="Personalbox">
      <personaltop class="leftbox"></personaltop>
     <persoal class="leftbox">
     </persoal>
    </div>
    <div class="Personalright">
     <router-view/>  
    </div>
   
  </div>
</template>

<script>
 import Home from 'views/home/Home.vue';
 import Persoal from 'components/common/persoal/Persoal.vue';
 import Personaltop from 'components/content/PersonalTop.vue';
  export default {
    name:'app',
    components: {
         Home,
         Persoal,
         Personaltop,
    },
    data () {
        
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
@import 'assets/css/base.css';
#app{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #EEEEEE;
}
.Personalbox{
  width: 400px;
  height: 100%;
  padding-left:120px;
}
.leftbox{
  margin-bottom: 20px;
}
.Personalright{
flex: 1;
}

</style>
