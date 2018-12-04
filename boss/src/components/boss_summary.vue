<template>
    <div class="cont">
        <div class="title">
            <button @click="timeSwitch(index)" :class="{'active':index == activeIndex }" v-for="(item,index) in titleArr" :key="item">{{item}}</button>
        </div>
        <div class="text-box">
            <div class="item" v-for="(item,index) in textBox" :key="index">
                <div class="text">
                    <span>{{item.num}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
        <div id="funnel" :style="{width:'100%', height: '300px'}"></div>

        <div class="line-chart">
            <div class="title">
                <button @click="timeSwitch(index)" :class="{'active':index == activeIndex }" v-for="(item,index) in lineTimeArr" :key="item">{{item}}</button>
            </div>
            <div id="add-kh-chart" :style="{  height: '300px'}"></div>
        </div>
        <div class="line-chart">
            <div class="title">
                <button @click="timeSwitch(index)" :class="{'active':index == activeIndex }" v-for="(item,index) in lineTimeArr" :key="item">{{item}}</button>
            </div>
            <div id="seek-kh-chart" :style="{  height: '300px'}"></div>
        </div>
        <div class="line-chart">
            <div class="title">
                <button @click="timeSwitch(index)" :class="{'active':index == activeIndex }" v-for="(item,index) in lineTimeArr" :key="item">{{item}}</button>
            </div>
            <div id="follow-kh-chart" :style="{  height: '300px'}"></div>
        </div>
        <div class="line-chart">
            <div id="mutual-kh-chart" :style="{  height: '300px'}"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            titleArr: ['汇总', '昨日', '近7天', '近30天'],
            textBox: [
                { num: 100, text: '客户总数' },
                { num: 96, text: '跟进总数' },
                { num: 108, text: '浏览总数' },
                { num: 15, text: '客户总数' },
                { num: 50, text: '跟进总数' },
                { num: 43, text: '浏览总数' },
            ],
            lineTimeArr: ['近7天', '近15天', '近30天'],
            activeIndex: 0
        }
    },
    methods: {
        timeSwitch(index) {
            this.activeIndex = index
        },
        // 漏斗图
        funnelChart() {
            let myChart = this.$echarts.init(document.getElementById('funnel'))
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                legend: {
                    data: ['展现', '点击', '访问', '咨询', '订单']
                },
                series: [
                    {
                        name: '漏斗图',
                        type: 'funnel',
                        left: '10%',
                        top: 40,
                        //x2: 80,
                        bottom: 0,
                        width: '80%',
                        // height: {totalHeight} - y - y2,
                        // min: 0,
                        // max: 100,
                        // minSize: '0%',
                        // maxSize: '100%',
                        // sort: 'descending',
                        // gap: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: 16
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        data: [
                            { value: 60, name: '访问' },
                            { value: 40, name: '咨询' },
                            { value: 20, name: '订单' },
                            { value: 80, name: '点击' },
                            { value: 100, name: '展现' }
                        ]
                    }
                ]

            })
        },
        // 新增客户折线图
        addLineChart() {
            let myChart = this.$echarts.init(document.getElementById('add-kh-chart'))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                },
                title: {
                    text: '新增客户数',
                    x: 'center',
                    textStyle: {
                        color: '#666'
                    },
                },
                legend: {
                    // orient: 'vertical',
                    left: 'left',
                    top: '10px',
                    data: ['访问来源']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['07-15', '07-16', '07-17', '07-18', '07-19', '07-20', '07-21']
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                        show: false,
                        realtime: true,
                        start: 0,
                        end: 100
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 100
                    }
                ],

                series: [{
                    type: 'line',
                    name: '访问来源',
                    smooth: true,
                    symbolSize: 5,//拐点大小
                    itemStyle: {
                        normal: {
                            color: "#2ec7c9",
                            lineStyle: {
                                color: "#2ec7c9"//折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: [15, 932, 30, 934, 154, 100, 15, 932, 30, 934, 154, 100],
                }]
            })
        },
        // 咨询客户折线图
        seekLineChart() {
            let myChart = this.$echarts.init(document.getElementById('seek-kh-chart'))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                },
                title: {
                    text: '咨询客户数',
                    x: 'center',
                    textStyle: {
                        color: '#666'
                    },
                },
                legend: {
                    // orient: 'vertical',
                    left: 'left',
                    top: '10px',
                    data: ['访问来源']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['07-15', '07-16', '07-17', '07-18', '07-19', '07-20', '07-21', '07-22', '07-23', '07-24', '07-25', '07-26', '07-27', '07-28', '07-29', '07-30', '07-31', '08-01', '08-02', '08-03', '08-04', '08-05', '08-06', '08-07', '08-08', '08-09', '08-10', '08-11', '08-12', '08-13']
                },
                // yAxis: {
                //     type: 'value'
                // },

                // xAxis: {
                //     type: 'category',
                //     boundaryGap: false,
                //     data: date
                // },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                        show: false,
                        realtime: true,
                        start: 0,
                        end: 20
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 20
                    }
                ],

                series: [{
                    type: 'line',
                    name: '访问来源',
                    smooth: true,
                    symbolSize: 5,//拐点大小
                    itemStyle: {
                        normal: {
                            color: "#2ec7c9",
                            lineStyle: {
                                color: "#2ec7c9"//折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: [158, 242, 300, 234, 424, 110, 423, 444, 555, 634, 154, 444, 1243, 154, 100, 158, 242, 300, 234, 424, 110, 423, 444, 555, 634, 154, 444, 1243, 154, 100],
                }]
            })
        },
        // 客户跟进折线图
        followLineChart() {
            let myChart = this.$echarts.init(document.getElementById('follow-kh-chart'))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis',
                },
                title: {
                    text: '新增客户数',
                    x: 'center',
                    textStyle: {
                        color: '#666'
                    },
                },
                legend: {
                    // orient: 'vertical',
                    left: 'left',
                    top: '10px',
                    data: ['访问来源']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['07-15', '07-16', '07-17', '07-18', '07-19', '07-20', '07-21']
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [
                    {
                        show: false,
                        realtime: true,
                        start: 0,
                        end: 50
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],

                series: [{
                    type: 'line',
                    name: '访问来源',
                    smooth: true,
                    symbolSize: 5,//拐点大小
                    itemStyle: {
                        normal: {
                            color: "#2ec7c9",
                            lineStyle: {
                                color: "#2ec7c9"//折线颜色
                            }
                        }
                    },
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: [15, 932, 30, 934, 154, 100, 15, 932, 30, 934, 154, 100],
                }]
            })
        },
        // 客户与我互动柱状图
        mutualBarChart() {
            let myChart = this.$echarts.init(document.getElementById('mutual-kh-chart'))
            myChart.setOption({
                title: {
                    text: '客户与我互动',
                    x: 'center',
                    textStyle: {
                        color: '#666'
                    },
                },
                legend: {
                    // orient: 'vertical',
                    left: 'left',
                    top: '10px',
                    data: ['访问来源']
                },
                xAxis: {
                    type: 'category',
                    data: ['拨打手机', '添加印象', '拨打电话', '点赞', '保存电话', '咨询产品']
                },
                yAxis: {
                    type: 'value'
                },
                dataZoom: [
                    {
                        show: false,
                        realtime: true,
                        start: 0,
                        end: 50
                    },
                    {
                        type: 'inside',
                        realtime: true,
                        start: 0,
                        end: 50
                    }
                ],
                series: [{
                    type: 'bar',
                    name: '访问来源',
                    symbolSize: 8,//拐点大小
                    itemStyle: {
                        normal: {
                            color: "#2ec7c9",
                            lineStyle: {
                                color: "#2ec7c9"//折线颜色
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#2ec7c9'
                                }
                            }
                        }
                    },
                    data: [150, 250, 300, 120, 154, 1330],
                }]
            })
        }
    },
    mounted() {
        this.funnelChart()
        this.addLineChart()
        this.seekLineChart()
        this.followLineChart()
        this.mutualBarChart()
    },
}
</script>

<style scoped>

.title button.active {
  border: 1px solid #23c8e8;
  color: #23c8e8;
}
.cont {
  background-color: #fff;
}
.title {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  /* justify-content: space-between; */
  border-bottom: 2px solid #f5f5f5;
}
.title button {
  color: #999;
  border-radius: 10px;
  padding: 0px 12px;
}
.text-box {
  overflow: hidden;
  padding: 10px;
}
.text-box .item {
  width: 33.33%;
  padding: 10px;
  float: left;
}
.text-box .item .text {
  position: relative;
  text-align: center;
  border: 1px solid #23c8e8;
}
.text-box .item .text::before {
  position: absolute;
  content: "";
  left: -5px;
  top: -5px;
  width: 110%;
  height: 110%;
  border: 1px solid #90e3f3;
}
.text-box .item span {
  display: inline-block;
  color: #23c8e8;
  margin: 20px 0;
}
.line-chart {
  margin-top: 20px;
}
.add-kh-title {
  margin-top: 20px;
  color: #707070;
  padding: 10px;
  text-align: center;
}
</style>
