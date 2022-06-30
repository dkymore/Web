<template>
  <div>
    <div class="conta">
      <!-- 顶部搜索框 -->
      <div class="top">
        <div class="tl">
          <img class="logo" src="~@/assets/img/淘宝.png" />
          <div class="ss">
            <div class="wz">
              <div class="wz2">寻找宝贝店铺</div>
            </div>
            <div class="wz3">搜索</div>
          </div>
        </div>
        <img src="~@/assets/img/签到.png" class="qd" />
      </div>
      <!-- 滚动图 -->
      <el-scrollbar style="margin-top:100px;">
      <scroll-div class="lb" scroll-x>
        <div style="width: 300px; display: flex">
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/1.webp" />
              <div class="mwz">天猫新品</div>
              <img class="mlogo" src="~@/assets/img/6.webp" />
              <div class="mwz">淘宝吃货</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/2.webp" />
              <div class="mwz">今日爆款</div>
              <img class="mlogo" src="~@/assets/img/7.webp" />
              <div class="mwz">省钱卡</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/3.webp" />
              <div class="mwz">天猫国际</div>
              <img class="mlogo" src="~@/assets/img/8.webp" />
              <div class="mwz">领淘金币</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/4.webp" />
              <div class="mwz">飞猪旅行</div>
              <img class="mlogo" src="~@/assets/img/9.webp" />
              <div class="mwz">阿里拍卖</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/5.webp" />
              <div class="mwz">天猫超市</div>
              <img class="mlogo" src="~@/assets/img/10.webp" />
              <div class="mwz">分类</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/11.webp" />
              <div class="mwz">冬奥公益</div>
              <img class="mlogo" src="~@/assets/img/12.webp" />
              <div class="mwz">闲鱼</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/13.webp" />
              <div class="mwz">淘票票</div>
              <img class="mlogo" src="~@/assets/img/14.webp" />
              <div class="mwz">土货鲜食</div>
            </div>
          </div>
          <div class="m">
            <div>
              <img class="mlogo" src="~@/assets/img/15.webp" />
              <div class="mwz">天猫好房</div>
              <img class="mlogo" src="~@/assets/img/16.webp" />
              <div class="mwz">天猫汽车</div>
            </div>
          </div>
        </div>
      </scroll-div>
      </el-scrollbar>
      <!-- 广告 -->
      <div style="display: flex">
        <div class="ad">
          <div class="adw">聚划算</div>
          <div class="adm">品牌折扣</div>
          <img class="adr" src="~@/assets/img/裙子.webp" />
          <img class="adl" src="~@/assets/img/nn.webp" />
        </div>
        <div class="ad2">
          <div class="adw">天天特卖</div>
          <div class="adm">1元秒杀</div>
          <img class="adr" src="~@/assets/img/盒子.webp" />
          <img class="adl" src="~@/assets/img/麻花.webp" />
        </div>
      </div>
      <div style="display: flex">
        <div class="ad3">
          <div class="adw">有好货</div>
          <div class="adk">好口碑</div>
          <img class="adr" src="~@/assets/img/包.webp" />
          <img class="adl" src="~@/assets/img/车.webp" />
        </div>
        <div class="ad4">
          <div class="adw">每日好店</div>
          <div class="adm4">特色</div>
          <img class="adr" src="~@/assets/img/钙片.webp" />
          <img class="adl" src="~@/assets/img/包包.webp" />
        </div>
      </div>
      <!-- 商品 -->
      <div class="shop">
        <div style="display: flex">
          <swiper
            style="
              height: 250px;
              width: 171px;
              border-radius: 10px;
              overflow-y: hidden;
            "
            autoplay
            indicator-active-color="#FF5000"
            indicator-dots
          >
            <swiper-item>
              <img class="l" src="~@/assets/img/lb1.webp" />
            </swiper-item>
            <swiper-item>
              <img class="l" src="~@/assets/img/lb2.webp" />
            </swiper-item>
            <swiper-item>
              <img class="l" src="~@/assets/img/lb3.webp" />
            </swiper-item>
            <swiper-item>
              <img class="l" src="~@/assets/img/lb4.webp" />
            </swiper-item>
          </swiper>
          <div
            style="
              width: 171px;
              margin: 0px 0px 5px 5px;
              background-color: rgb(255, 255, 255);
              border-radius: 10px;
            "
          >
            <img class="sp" src="~@/assets/img/shop.webp" />
            <div class="p2">
              外贸精品 纯亚麻浪漫 法式奢华蕾丝花边单人枕套 头
            </div>
            <div class="p2b">
              <div class="p2bj">¥ 39.9</div>
              <div class="p2bw">300+人已购买</div>
            </div>
          </div>
        </div>
        <div class="shopbox">
          <img class="sp" src="~@/assets/img/pot.webp" />
          <div class="p2">韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同</div>
          <div class="p2b">
            <div class="p2bj">¥ 18.9</div>
            <div class="p2bw">300+人已购买</div>
          </div>
        </div>
        <div class="shopbox">
          <img class="sp" src="~@/assets/img/s1.webp" />
          <div class="p2">乐美雅小玻璃茶叶罐玻璃瓶透明带盖食品级密封罐</div>
          <div class="p2b">
            <div class="p2bj">¥ 11.9</div>
            <div class="p2bw">700+人已购买</div>
          </div>
        </div>
        <div class="shopbox">
          <img class="sp" src="~@/assets/img/pot.webp" />
          <div class="p2">韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同</div>
          <div class="p2b">
            <div class="p2bj">¥ 18.9</div>
            <div class="p2bw">300+人已购买</div>
          </div>
        </div>
        <div class="shopbox">
          <img class="sp" src="~@/assets/img/pot.webp" />
          <div class="p2">韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同</div>
          <div class="p2b">
            <div class="p2bj">¥ 18.9</div>
            <div class="p2bw">300+人已购买</div>
          </div>
        </div>
        <div class="shopbox">
          <img class="sp" src="~@/assets/img/pot.webp" />
          <div class="p2">韩国拉面锅网红金色煮面泡面锅泡面小食堂韩剧同</div>
          <div class="p2b">
            <div class="p2bj">¥ 18.9</div>
            <div class="p2bw">300+人已购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.conta {
  width: 94%;
  margin: auto;
}
.top {
  position: fixed;
  top: 60px;
  display: flex;
  height: 0.004px;
  width: 100%;
  padding-bottom: 52px;
  background-color: #f4f4f4;
  z-index: 101;
}
.tl {
  display: flex;
}
.logo {
  width: 59px;
  height: 22px;
  margin-top: 15px;
}
.ss {
  position: relative;
  display: flex;
  left: 15px;
  height: 36px;
  width: 230px;
  border-radius: 53px;
  margin-top: 7.5px;
  background-color: #fff;
  border-color: rgb(255, 80, 0);
  border-width: 2px;
  border-style: solid;
}
.wz {
  display: flex;
  height: 100%;
  align-items: center;
}
.wz2 {
  position: relative;
  top: 3px;
  left: 10px;
  margin: 10px 10px 16px;
  height: 20px;
  font-size: 15px;
  color: rgb(102, 102, 102);
}
.wz3 {
  position: absolute;
  text-align: center;
  color: #fff;
  line-height: 30px;
  right: 2px;
  top: 2px;
  height: 32px;
  width: 64px;
  border-radius: 16px;
  background-image: linear-gradient(
    to right,
    rgb(255, 141, 14),
    rgb(255, 80, 0)
  );
}
.qd {
  position: relative;
  top: 3px;
  right: -11px;
  height: 33px;
  width: 33px;
  margin-left: 13px;
  margin-top: 7px;
}
.lb {
  position: relative;
  /* display: inline-block; */
  width: 100%;
  overflow: hidden;
  height: 146px;
  background-color: #ffffff;
  border-radius: 10px;
}
.g {
  width: auto;
}
.m {
  display: flex;
  float: left;
  text-align: center;
  /* background-color: red; */
}
.mlogo {
  display: block;
  margin-top: 2px;
  margin-left: 7px;
  width: 61px;
  height: 50px;
}
.mwz {
  font-size: 13px;
}
.ad {
  display: flex;
  position: relative;
  top: 66px;
  width: 50%;
  height: 92px;
  background-color: #fdfffd;
  border-top-left-radius: 20px;
}
.adw {
  height: 21px;
  font-size: 11px;
  font-weight: 700;
  line-height: 22px;
  padding-left: 6px;
}
.adm {
  display: flex;
  width: 48px;
  height: 14px;
  background-color: rgb(255, 66, 0);
  align-items: center;
  border-radius: 2px;
  font-size: 12px;
  line-height: 14px;
  margin-left: 3px;
  padding-left: 3px;
  padding-right: 3px;
  color: rgb(255, 255, 255);
  position: relative;
  left: 0px;
  top: 5px;
}
.adr {
  position: relative;
  right: 0;
  top: 10px;

  width: 68px;
  height: 76px;
}
.adl {
  position: absolute;
  left: 15px;
  bottom: 5px;
  width: 70px;
  height: 67px;
}
.adk {
  display: flex;
  width: 40px;
  height: 14px;
  background-color: #0090ea;
  align-items: center;
  border-radius: 2px;
  font-size: 12px;
  line-height: 14px;
  margin-left: 3px;
  padding-left: 3px;
  padding-right: 3px;
  color: rgb(255, 255, 255);
  position: relative;
  left: 0px;
  top: 5px;
}
.ad2 {
  display: flex;
  position: relative;
  top: 66px;
  width: 50%;
  height: 92px;
  background-color: #fdfffd;
  border-top-right-radius: 20px;
  margin-left: 1px;
}
.ad3 {
  display: flex;
  position: relative;
  top: 66px;
  width: 50%;
  height: 92px;
  background-color: #fdfffd;
  border-bottom-left-radius: 20px;
  margin-top: 1px;
}
.ad4 {
  display: flex;
  position: relative;
  top: 66px;
  width: 50%;
  height: 92px;
  background-color: #fdfffd;
  border-bottom-right-radius: 20px;
  margin-top: 1px;
  margin-left: 1px;
}
.adm4 {
  display: flex;
  width: 24px;
  height: 14px;
  background-color: rgb(255, 151, 17);
  align-items: center;
  border-radius: 2px;
  font-size: 12px;
  line-height: 14px;
  margin-left: 3px;
  padding-left: 3px;
  padding-right: 3px;
  color: rgb(255, 255, 255);
  position: relative;
  left: 0px;
  top: 5px;
}
.shop {
  margin-top: 75px;
  overflow: hidden;
  /* background-color: pink; */
}
.l {
  width: 100%;
  height: 250px;
}
.shopbox {
  float: left;
  height: 260px;
  width: 171px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  margin: 5px 5px 5px 0px;
}
.sp {
  width: 171px;
  height: 171px;
}
.p2 {
  font-size: 13px;
  text-align: center;
}
.p2b {
  display: flex;
  width: 152px;
  height: 20px;
  margin-top: 11px;
}
.p2bj {
  position: relative;
  left: 5px;
  font-size: 14px;
  line-height: 16px;
  color: rgb(255, 85, 0);
}
.p2bw {
  position: relative;
  left: 10px;
  color: rgb(153, 153, 153);
  font-size: 12px;
}
.demo2 {
  position: fixed;
  left: 50%;
  bottom: 15px;
  height: 35px;
  width: 100px;
  background-color: #029eb9;
  border-radius: 20px;
  text-align: center;
  margin-left: -50px;
  line-height: 35px;
  color: #fff;
  font-weight: 400;
}
</style>


















<!-- <template>
    <div id="Main">
        <div class="Header">
            <img src="~@/assets/img/淘宝.png" style="width:100px;height:50px">
            <div class="searchBar">
            
                <div class="link-wrapper">
                    <span class="placeholder text">寻找宝贝店铺</span>
                    <span class="search-btn"><span class="text">搜索</span></span>
                </div>
            </div>
        </div>
        <div class="buttonGroup">
            <div>
                <div><img src="~@/assets/img/1.webp">天猫新品</div>
                <div><img src="~@/assets/img/1.webp">天猫新品</div>
            </div>
        </div>
        <div class="switcher">
            <el-carousel trigger="click" height="150px">
                <el-carousel-item v-for="item in 4" :key="item">
                   <img :src="`https://api-acgimg.iloli.ink/?t_${item}`" style="object-fit:cover">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="Goods">
            <div v-for="good in goods" :key="good.name">
                <el-card>
                    <img
                        :src="good.src"
                        style="width:100%;display:block;"
                    />
                    <div style="padding: 14px">
                    <span>{{ good.name }}</span>
                    <span>{{ good.price }}</span>
                    <el-button text class="button">买！</el-button>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){return{
        goods:[
            {name:"",src:''}
        ]
    }}
}
</script>

<style lang="scss" scoped>
#Main{
    margin-top: 60px;
    .Header{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-around;
        align-items: stretch;

        .searchBar{
            margin: 0px 30px;
            
            width: 100%;
            border: 2px solid #ff5000;
            border-radius: 30px;
            background-color: #fff;
            text-align: center;
            line-height: 50px;
            height: 50px;
            
            .link-wrapper{
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-end;
                align-items: stretch;
                align-content: center;
                .search-btn{
                    width: 100px;
                    /* height: 50px; */
                    border-radius: 30px;
                    background: #ff5000;
                }
            }
           
        }
    }
}

.text {
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #666666;
    font-size: 0.14rem;
    font-family: PingFangSC-Regular;
    letter-spacing: 0;
}
</style> -->