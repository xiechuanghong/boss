<template>
    <div class="cont">
        <div class="mc-box">
            <div class="item" style="top:.2rem;">
                <div class="text">
                    <img src="../assets/img/zuiyou.jpg" alt="">
                    <span>王小明</span>
                </div>
                <div class="num">
                    <span>420</span>
                </div>
            </div>
            <div class="item">
                <div class="text">
                    <img src="../assets/img/zuiyou.jpg" alt="">
                    <span>王小明</span>
                </div>
                <div class="num">
                    <span>420</span>
                </div>
            </div>
            <div class="item" style="top:.4rem;">
                <div class="text">
                    <img src="../assets/img/zuiyou.jpg" alt="">
                    <span>王小明</span>
                </div>
                <div class="num">
                    <span>420</span>
                </div>
            </div>
        </div>
        <img src="../assets/img/AI-pm.png" alt="" style="width:100%;display:block;">
        <div class="rank-list">
            <div class="item" v-for="(item,index) in rankListArr" :key="index">
                <!-- 销售排行列表 -->
                <div class="num">{{index+4}}</div>
                <div class="box"><img src="../assets/img/zuiyou.jpg" alt=""> <span>{{item.name}}</span></div>
                <div class="ci">{{item.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rankListArr: [
                { name: '陈二', Serial: '3', num: '170' },
                { name: '秦三', Serial: '3', num: '150' },
                { name: '李四', Serial: '3', num: '130' },
                { name: '王五', Serial: '3', num: '110' },
                { name: '赵六', Serial: '3', num: '100' },
                { name: '彭七', Serial: '3', num: '90' },
                { name: '黎八', Serial: '3', num: '60' },
                { name: '唐九', Serial: '3', num: '50' },
            ]
        }
    },
}
</script>

<style scoped>
.cont {
  padding: 10px;
  /* background-color: #fff; */
}
.mc-box {
  position: relative;
  display: flex;
}
.mc-box .item {
  text-align: center;
  width: 33.33%;
  padding: 5px;
  position: relative;
}
.mc-box .num {
  position: absolute;
  width: 100%;
  bottom: -0.1rem;
  left: 0;
}
.mc-box .num span {
  color: #fff;
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-block;
  background-color: #23c8e8;
}
.mc-box .text {
  background-color: #fff;
  -moz-box-shadow: 1px 3px 11px #333333;
  -webkit-box-shadow: 1px 3px 11px #333333;
  box-shadow: 1px 3px 11px #333333;
  border-radius: 5px;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mc-box .text img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0.1rem 0;
}

.rank-list {
  background-color: #fff;
}
.rank-list .item {
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}
.rank-list .item img {
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
  border-radius: 50%;
  margin-right: 0.1rem;
}
.rank-list .item span {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}
.rank-list .item .num {
  width: 20%;
  font-size: 18px;
  text-align: center;
}
.rank-list .item .box {
  width: 60%;
  display: flex;
  align-items: center;
}
.rank-list .item .ci {
  width: 20%;
  text-align: center;
  font-size: 18px;
  color: #23c8e8;
  font-weight: bold;
}
</style>
