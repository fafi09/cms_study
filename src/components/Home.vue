<template>
<div>
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(msg,index) in msgs" :key="index">{{msg}}</mt-swipe-item>
</mt-swipe>
<!-- 下有九宫格 -->
   <div class="grid">
        <ul>
             <li v-for="(module,index) in modules" :key="index">
               <router-link :to="module.route">
                  <span :class="module.className"></span>
                  <div>{{module.title}}</div>
               </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>



<script>
export default {
  name: 'Home',
  data () {
    return {
      msgs: ['english','math'],
      modules:[{
        title:'一年级',className:'back-news',route:{name:'NewsList'}
       },{
        title:'一年级',className:'back-pic',route:{name:'PhotoList',query:{categoryId:0} }
       },{
        title:'一年级',className:'back-goods',route:{name:'Home'}
       },{
        title:'留言反馈',className:'back-feed',route:{name:'Home'}
       },{
        title:'搜索咨询',className:'back-search',route:{name:'Home'}
       },{
        title:'联系我们',className:'back-callme',route:{name:'Home'}
       }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-swipe {
  width: 100%;
  height:200px;
}
.mint-swipe img {
  width: 100%;
}

 li{
    list-style: none;
    float: left;
    width: 33.333%;
    text-align: center;
}   
ul {
    margin:0;
  padding: 0;
  overflow: hidden;

} 
.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}
.back-pic {
    background-image: url(../../static/img/picShare.png);
}
.back-goods {
    background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
    background-image: url(../../static/img/feedback.png);
}
.back-search {
    background-image: url(../../static/img/search.png);
}
.back-callme {
    background-image: url(../../static/img/callme.png);
}
.back-news {
    background-image: url(../../static/img/news.png);
}
</style>
