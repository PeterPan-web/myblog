<!-- 组件说明 -->
<template>
  <div>
    <header>
      <div class="explain">
      </div>
    </header>
    <div class="index-wrapper">
      <div class="blog-wrapper" >
          <div class="blog-time">{{nowDate}}{{nowWeek}}{{nowTime}}</div>
          <div class="blog-content">
              <el-input
                type="text"
                placeholder="你叫啥？"
                v-model="blog.autor"
                maxlength="10"
                show-word-limit
              >
              </el-input>
                <div style="margin: 20px 0;"></div>
              <el-input
                type="textarea"
                placeholder="想说点啥？"
                v-model="blog.content"
                maxlength="100"
                show-word-limit
              >
              </el-input>
            </div>
          <div class="blog-tag">
              <el-button type="success" round  @click="open">提交</el-button>
          </div>
        </div>
        <div class="blog-wrapper blog-color"  v-for="item in getblogs" :key="item.id">
          <p class="blog-time">{{item.nowDate}}{{item.nowWeek}}{{item.nowTime}}</p>
          <div class="blog-content">
          发布人：{{item.autor}}
          </div>
          <div class="blog-content">
          内容{{item.content}}
          </div>
        </div>
    </div> 
  </div>
</template>
<script>
import{get,post} from'network/request'
  export default {
    name:'Guestbook',
    components:{ 
    },
    data () {
      return {
        nowDate: "",  // 当前日期
        nowTime: "",  // 当前时间
        nowWeek: "",   // 当前星期
        id:this.$route.params.id,
        blog:{
          nowDate: "",
          nowTime: "",
          nowWeek: "",
          autor: '',
          content: '',
        },
        getblogs:[]
    }
    },
    props: {

    },
    computed: {

    },
    methods: {
      //时间获取
      dealWithTime(data) { // 获取当前时间
        let formatDateTime;
        let Y = data.getFullYear();
        let M = data.getMonth() + 1;
        let D = data.getDate();
        let H = data.getHours();
        let Min = data.getMinutes();
        let S = data.getSeconds();
        let W = data.getDay();
        H = H < 10 &63? "0" + H : H;
        Min = Min < 10 &63? "0" + Min : Min;
        S = S < 10 &63? "0" + S : S;
        switch (W) {
          case 0:
          W = "日";
          break;
          case 1:
          W = "一";
          break;
          case 2:
          W = "二";
          break;
          case 3:
          W = "三";
          break;
          case 4:
          W = "四";
          break;
          case 5:
          W = "五";
          break;
          case 6:
          W = "六";
          break;
          default:
          break;
   }
   this.nowDate = Y + "年" + M + "月" + D + "日 ";
   this.nowWeek = "周" + W ; 
   this.nowTime = H + ":" + Min + ":" + S;
  },
      //提交按钮的点击
      open() {
        if(this.text==''||this.textarea==''){
          this.$alert('不说啥怎么能留言', {
          confirmButtonText: '好的',
        })
        }else{
        this.$alert('提交成功咯', {
          confirmButtonText: 'ok',
        }),
        this.blog.nowDate=this.nowDate
        this.blog.nowTime=this.nowTime
        this.blog.nowWeek=this.nowWeek
        post('/gusts.json',this.blog),
        this.getdata()
        }
      },
      getdata(){
          get('/gusts.json').then((data)=>{
            return data.data
          }).then((data)=>{
            let revblogs=[]
            for(let key in data){
              revblogs.push(data[key])
              this.getblogs=revblogs.reverse()
            }
          })
          }
    },
    created(){
        this.getdata()
    },
    mounted(){
       // 页面加载完后显示当前时间
          this.dealWithTime(new Date())
          // 定时刷新时间
          this.timer = setInterval(()=> {
            this.dealWithTime(new Date()) // 修改数据date
          }, 500)
          
        }, 
        destroyed() {
          if (this.timer) { // 注意在vue实例销毁前，清除我们的定时器
          clearInterval(this.timer);
          }
        },
        
    activated(){

    }
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
  .blog-color{
	background-image: -webkit-linear-gradient(left, #147B96, #E6D205 25%, #147B96 50%, #E6D205 75%, #147B96);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 200% 100%;
    animation:  maskedAnimation 4s infinite linear;
    font-size: 18px;
}
 
@keyframes maskedAnimation {
	0% {
    background-position: 0 0;
	}
	100% {
	    background-position: -100% 0;
	}
}
  .blog-time{
    line-height: 24px;
    margin: 0 0 10px;
    font-size: 13px;
    font-weight: bold;
    color: #727272;
    overflow: hidden;
  }
  .blog-content{
    word-break: break-all;
    padding-bottom: 20px;
    line-height: 1.8;
  }
  .blog-more{
    display: inline-block;
    padding: 0 6px;
    font-weight: 500;
    color: #3f51b5 !important;
    border: none !important;
    border-radius: 3px;
  }
  .blog-tag{
    position: relative;
    margin: 0 -12px;
    padding: 12px 20px 8px;
    border-top: 1px solid #ddd;
  }

</style>