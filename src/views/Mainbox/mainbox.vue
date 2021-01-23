<!-- 组件说明 -->
<template>
<div id="mainbox">
    <transition name="fade">
        <aside v-if="menuStatus" class="left-wrapper">
          <leftbox></leftbox>
        </aside>
    </transition>
    <div class='main-wrapper'>
          <div class="nav-wrapper" :class="{'nav-shadow':navShadow}" >
            <i class="iconfont" :class="{'icon-close move-right' :menuStatus, 'icon-menu move-left':!menuStatus}" @click="asideStatus()"></i>
            <i class="iconfont icon-share"></i>
            <i class="iconfont icon-search search-i" :class="{'search-opacity':searchStatus}" @click="searchStatus = !searchStatus"></i>
            <div class="search-wrapper" :class="searchStatus?'width-amplify':'width-narrow'">
              <input type="text" placeholder="输入感兴趣的关键字">
            </div>
          </div>
    </div>
</div>
</template>

<script>
import leftbox from 'views/Leftbox/leftbox.vue';
  export default {
    name:'mainbox',
    components: {
          leftbox
    },
    data () {
      return {
//导航栏是否显示阴影
      navShadow   :false,
      //左边菜单栏是否显示
      menuStatus  :true,
      //搜索框是否显示
      searchStatus:false,
      //当前选中菜单
      active      :'home'
      };
    },
    props: {

    },
    computed: {

    },
    methods: {
    //切换左边菜单栏显示状态
    asideStatus(){
      this.menuStatus = !this.menuStatus;
      let self = this;
      if(this.menuStatus)
      {
        let interval = setInterval(function () {
          self.navPadding +=1;
          if(self.navPadding >= 240)
          {
            self.navPadding = 240;
            clearInterval(interval);
          }
        },0.5)
      }else {
        let interval = setInterval(function () {
          self.navPadding -= 1;
          if(self.navPadding <= 0)
          {
            self.navPadding = 0;
            clearInterval(interval);
          }
        },1)
      }
    },
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
#mainbox{
position: relative;
}
.nav-wrapper{
    height: 56px;
    background: #3f51b5;
    color: #fff;
    line-height: 56px;
    position: fixed;
    top: 0;
    z-index: 1;
    left: 0;
    width: 100%;
  }
  .nav-shadow{
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .nav-wrapper i {
    display: inline-block;
    width: 56px;
    text-align: center;
    position: relative;
  }
  .nav-wrapper i:nth-child(1){
    float: left;
  }
  .nav-wrapper i:nth-child(2),.nav-wrapper i:nth-child(3){
    float: right;
  }
  header{
    padding: 100px 15px 48px 100px;
    height: 200px;
    color: #fff;
    background: #3f51b5;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
    margin: 0 -15px;
  }
  header h1{
    line-height: 48px;
    font-size: 36px;
    font-weight: 500;
  }
  header h5{
    font-size: 16px;
    margin-top: 5px;
    font-weight: 300;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter, .fade-leave-to {
    margin-left: -240px;
  }

  .width-fade-enter-active, .width-fade-leave-active {
    transition: all .5s ease;
  }
  .width-fade-enter, .width-fade-leave-to {
    width: 330px;
  }

  .move-right{
    animation:moveRight 0.5s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  .move-left{
    animation:moveLeft 0.5s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  @keyframes moveLeft
  {
    from {left:240px;}
    to {left:0px;}
  }
  @keyframes moveRight
  {
    from {left:0px;}
    to {left:240px;}
  }

  .width-amplify{
    animation:amplify 0.3s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  .width-narrow{
    animation:narrow 0.3s ease;
    animation-iteration-count:1;
    animation-fill-mode:forwards;
  }
  @keyframes amplify
  {
    from {width:0px;}
    to {width:330px;}
  }
  @keyframes narrow
  {
    from {width:330px;}
    to {width:0px;}
  }
  .search-wrapper{
    width: 330px;
    height: 40px;
    position: absolute;
    color: #fff;
    border-bottom: 2px solid #fff;
    right: 56px;
    top: 8px;
    font-size: 0px;
  }
  .search-wrapper input{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: none;
    border: none;
    font-size: 14px;
    color: #fff;
    margin-right: 56px;
  }
  ::-webkit-input-placeholder {
    color: rgba(255,255,255,0.7);
    font-size: 14px;
  }
  input{outline:none}
  .search-i{
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
  .search-opacity{
    opacity: 0.6;
  }
</style>