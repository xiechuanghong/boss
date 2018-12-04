<template>
    <!--侧滑菜单容器-->
    <div id="offCanvasWrapper" class="mui-off-canvas-wrap">
        <!--菜单部分-->
        <aside id="offCanvasSide" class="mui-off-canvas-right">
            <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <div class="title" style="margin-bottom: 25px;">BOSS雷达列表</div>
                    <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">
                                王思聪
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
                                扶我起来
                            </a>
                        </li>
                        <li class="mui-table-view-cell">
                            <a class="mui-navigate-right">
                                我还能敲
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <div class="mui-inner-wrap">
            <!-- <div class=""> -->
            <header class="mui-bar mui-bar-nav">
                <!-- <a class="mui-action-back mui-icon mui-icon-back mui-pull-left"></a> -->
                <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-right"></a>
                <h1 class="mui-title">销售部</h1>
            </header>
            <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
                <div class="tab">
                    <a @click="tabSwitch(index,item.component)" v-for="(item,index) in labelArr" :key="item.id">
                        <span :class="{'active':showIndex == index}">{{item.text}}</span>
                    </a>
                </div>
                <keep-alive>
                    <!-- tab组件切换 -->
                    <component v-bind:is="tabView"></component>
                </keep-alive>
            </div>
            <div class="mui-off-canvas-backdrop"></div>
        </div>
    </div>

</template>

<script>
import bossSummary from './boss_summary'
import bossSaleRank from './boss_sale_rank'
import bossAnalyse from './boss_analyse'
export default {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            labelArr: [
                { id: '1', text: '汇总', component: 'bossSummary' },
                { id: '2', text: '销售排行', component: 'bossSaleRank' },
                { id: '3', text: 'AI分析', component: 'bossAnalyse' }
            ],
            showIndex: 0,
            tabView: bossSummary,
        }
    },
    components: {
        bossSummary,
        bossSaleRank,
        bossAnalyse
    },
    methods: {
        tabSwitch(index, component) {
            console.log(component)
            this.showIndex = index
            this.tabView = component
        },
    },
}
</script>

<style scoped>
.mui-off-canvas-wrap {
  /* overflow: scroll; */
}
.mui-inner-wrap .mui-scroll-wrapper {
  overflow: scroll;
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
  position: relative;
  z-index: 113;
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

span.mui-icon {
  font-size: 14px;
  color: #007aff;
  margin-left: -15px;
  padding-right: 10px;
}
.mui-off-canvas-right {
  color: #fff;
}
.mui-scroll-wrapper .title {
  margin: 35px 15px 10px;
}
.mui-scroll-wrapper .title + .content {
  margin: 10px 15px 35px;
  color: #bbb;
  text-indent: 1em;
  font-size: 14px;
  line-height: 24px;
}
</style>
