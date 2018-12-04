<template>
  <!--侧滑菜单容器-->
  <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
    <!--菜单部分-->
    <aside id="offCanvasSide" class="mui-off-canvas-right">
      <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <!-- <div class="title">侧滑导航</div>
          <div class="content">
            这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向右拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
            <span class="android-only">；4.Android手机按back键；5.Android手机按menu键
            </span>。
            <p style="margin: 10px 15px;">
              <button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
            </p>

          </div> -->
          <div class="title" style="margin-bottom: 25px;">BOSS雷达列表</div>
          <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                德玛西亚
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                C罗
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                梅西
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                内马尔
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                没对手
              </a>
            </li>
            <li class="mui-table-view-cell">
              <a class="mui-navigate-right">
                无敌
              </a>
            </li>

          </ul>
        </div>
      </div>
    </aside>
    <div class="mui-inner-wrap">
      <header class="mui-bar mui-bar-nav">
        <!-- <a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a> -->
        <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-right"></a>
        <h1 class="mui-title">销售部</h1>
      </header>
      <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
        <!-- <div class="mui-scroll">
          <div class="mui-content-padded">
            <p>这是可拖动式左滑导航示例，主页面和菜单在一个HTML文件中， 优点是支持拖动手势（跟手），缺点是不支持菜单内容在多页面的复用； 当前页面为主界面，你可以在主界面放置任何内容； 打开侧滑菜单有多种方式： 1、在当前页面向左拖动； 2、点击页面右上角的
              <span class="mui-icon mui-icon-bars"></span> 图标； 3、通过JS API触发（例如点击如下蓝色按钮体验）；
              <span class="android-only">4、Android手机按menu键；</span>
            </p>
            <p style="padding: 5px 20px;margin-bottom: 5px;">
              <button id="offCanvasShow" type="button" class="mui-btn mui-btn-primary mui-btn-block" style="padding: 5px;">
                显示侧滑菜单
              </button>
            </p>
            <p>侧滑菜单的移动动画，支持多种效果，切换如下选项体验不同动画效果：</p>

          </div>
          <form class="mui-input-group" style="margin-bottom: 15px;">
            <div class="mui-input-row mui-radio">
              <label>主界面移动、菜单不动</label>
              <input name="style" type="radio" checked="" value="main-move">
							</div>
              <div class="mui-input-row mui-radio">
                <label>主界面不动、菜单移动</label>
                <input name="style" type="radio" value="menu-move">
							</div>
                <div class="mui-input-row mui-radio mui-hidden" id="move-togger">
                  <label>整体移动</label>
                  <input name="style" type="radio" value="all-move">
							</div>
                  <div class="mui-input-row mui-radio">
                    <label>缩放式侧滑（类手机QQ）</label>
                    <input name="style" type="radio" value="main-move-scalable">
							</div>
          </form>

        </div> -->
        <div class="tab" @click="tabSwitch">
          <a @click="tabSwitch(index,item.component)" v-for="(item,index) in labelArr" :key="item.id">
            <span :class="{'active':showIndex == index}">{{item.text}}</span>
          </a>
        </div>
        <!-- <keep-alive>
          tab组件切换
          <component v-bind:is="tabView"></component>
        </keep-alive> -->
      </div>
      <!-- off-canvas backdrop -->
      <div class="mui-off-canvas-backdrop"></div>
    </div>
  </div>
</template>

<script>
// import bossSummary from './boss_summary'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      labelArr: [
        { id: '1', text: '汇总', component: 'userDetailNews' },
        { id: '2', text: '销售排行', component: 'userDetailRecord' },
        { id: '3', text: 'AI分析', component: 'userDetailFx' }
      ],
      showIndex: 0,
      // tabView: bossSummary,
    }
  },
  methods: {
    tabSwitch(index, component) {
      console.log(12345)
      this.showIndex = index
      // this.tabView = component
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  background-color: #efeff4;
}
p {
  text-indent: 22px;
}
span.mui-icon {
  font-size: 14px;
  color: #007aff;
  margin-left: -15px;
  padding-right: 10px;
}
.mui-off-canvas-right {
  color: #fff;
}
.title {
  margin: 35px 15px 10px;
}
.title + .content {
  margin: 10px 15px 35px;
  color: #bbb;
  text-indent: 1em;
  font-size: 14px;
  line-height: 24px;
}
input {
  color: #000;
}
header {
  background-color: #fff;
}
.tab {
  background-color: #fff;
  display: flex;
  margin: 10px 0;
}
.tab a {
  width: 33.33%;
  height: 0.4rem;
  color: #666666;
  line-height: 0.4rem;
  text-align: center;
  display: inline-block;
  font-size: 14px;
}
.tab a .active {
  color: #23c8e8;
  display: inline-block;
  position: relative;
}
.tab a .active::after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;
  width: 100%;
  left: 0;
  background-color: #23c8e8;
}
</style>
