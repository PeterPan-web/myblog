<!-- 组件说明 -->
<template>
<div id="mainbox">
    <transition name="fade">
        <aside v-if="menuStatus" class="left-wrapper">
        <div class="left-wrapper-fixed">
            <div class="user-wrapper">
              <img src="~assets/img/face.jpg">
              <p class="user-name">PeterPan-web</p>
              <p class="user-show">我的博客，欢迎你</p>
            </div>
            <div class="menu-wrapper">
              <ul>
                <li @click="changeMenu('/home')">
                  <i class="iconmove el-icon-help"></i>
                  <p>Home</p>
                </li>
                <li @click="changeMenu('/books')">
                  <i class="iconmove el-icon-s-cooperation"></i>
                  <p>Blog</p>
                </li>
                <li @click="changeMenu('/about')">
                  <i class="iconmove el-icon-view"></i>
                  <p>Me</p>
                </li>
                <li @click="changeMenu('/guestbook')">
                  <i class="iconmove el-icon-edit"></i>
                  <p>Write</p>
                </li>
              </ul>
            </div>
          </div>  
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
          <keep-alive>
            <router-view/>
      </keep-alive>  
    <div class="footer">
          <div class="copyright">
            <p>ganganLee©2018-2020 黔ICP备18012301号</p>
            <p>Power by <a href="">vue</a>  Theme <a href="">element</a></p>
          </div>
        </div>
    </div>
    
</div>
</template>

<script>
  export default {
    name:'mainbox',
    components: {
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
            
    //单击跳转
    changeMenu(url){
      this.$router.push(url)
    },
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
display: flex;
}
.left-wrapper{
    flex:  0 0 240px;
    width: 240px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .left-wrapper-fixed{
    position: fixed;
    top: 0;
    width: 240px;
    height: 100%;
    z-index: 2;
  }
  .main-wrapper{
    flex: 1;
    background: #f6f6f6;
    padding: 0 15px;
    
  }
  .user-wrapper{
    padding: 30px;
    height: 200px;
    background-image: url(~assets/img/brand.jpg);
    background-position: center;
  }
  .user-wrapper img{
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .user-name{
    padding-top:5px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
  }
  .user-show{
    padding-top: 5px;
    color: rgb(65, 195, 235);
    font-size: 14px;
  }
  .menu-wrapper{
    padding: 20px 0;
    background-color: white;
    height: 100%;
  }
  .li-active,.menu-wrapper li:hover{
    background: rgba(0,0,0,0.05);
    color: #3f51b5;
  }
  .menu-wrapper li{
    display: flex;
    padding: 0 20px;
    height: 44px;
    line-height: 44px;
    cursor: pointer;
  }
  .menu-wrapper li i{
    flex: 0 0 50px;
    width: 50px;
  }
.nav-wrapper{
    height: 56px;
    background:#e0ece4;
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
    background:#f7f2e7;
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
  .footer{
      padding: 15px;
      background: #797a7e;
      text-align: center;
      color: rgba(255,255,255,0.6);
      line-height: 1.6;
      font-size: 13px;
      margin: 0 -15px;
    }
    .footer a{
      color: inherit;
      opacity: .8;
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
  .iconmove{
    margin-top: 11px;
    font-size: 20px;
  }
</style>