<!-- 组件说明 -->
<template>
  <div id='leftbox'>
    <div class="left-wrapper-fixed">
            <div class="user-wrapper">
              <img src="~assets/img/dog.jpg">
              <p class="user-name">PeterPan-web的博客</p>
              <p class="user-email">这是新手的第一次尝试</p>
            </div>
            <div class="menu-wrapper">
              <ul>
                <li @click="changeMenu('/home')">
                  <i class="iconfont icon-home"></i>
                  <p>首页</p>
                </li>
                <li @click="changeMenu('/books')">
                  <i class="iconfont icon-Archives"></i>
                  <p>资料</p>
                </li>
                <li @click="changeMenu('/about')">
                  <i class="iconfont icon-tag"></i>
                  <p>关于</p>
                </li>
                <li @click="changeMenu('/search')">
                  <i class="iconfont icon-search"></i>
                  <p>搜索</p>
                </li>
              </ul>
            </div>
          </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name:'leftbox',
    components: {

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
      
    //单击跳转
    changeMenu(url){
      this.$router.push(url)
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
.left-wrapper{
    flex:  0 0 200px;
    width: 200px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .left-wrapper-fixed{
    position: fixed;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }
  .main-wrapper{
    flex: 1;
    background: #f6f6f6;
    padding: 0 15px;
    
  }
  .user-wrapper{
    padding: 20px;
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
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #fff;
  }
  .user-email{
    padding-top: 4px;
    color: #c5cae9;
    font-size: 13px;
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
</style>