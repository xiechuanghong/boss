<template>
    <div class="cont">
        <div class="ACE">
            <div class="box">
                <img src="../assets/img/AI-one.png" alt="">
                <p>李小萌</p>
                <p>客户测试</p>
                <div id="radar1" class="radar" :style="{ width:'100%',height: '200px'}"></div>
            </div>
        </div>
        <div class="t-h">
            <div class="box" style="margin-right:2%">
                <img src="../assets/img/AI-one.png" alt="">
                <p>李小萌</p>
                <p style="margin:0;">客户测试</p>
                <div id="radar2" class="radar" :style="{ width:'100%',height: '150px'}"></div>
            </div>
            <div class="box">
                <img src="../assets/img/AI-one.png" alt="">
                <p>李小萌</p>
                <p style="margin:0;">客户测试</p>
                <div id="radar3" class="radar" :style="{ width:'100%',height: '150px'}"></div>
            </div>
        </div>
        <div class="rank-list">
            <div class="item" v-for="(item,index) in rankListArr" :key="index">
                <!-- 销售排行列表 -->
                <div class="num">{{index+4}}</div>
                <div class="box"><img src="../assets/img/zuiyou.jpg" alt=""> <span>{{item.name}}</span></div>
                <div :id="'radarD'+(index)" class="radar" :style="{ width:'20%', height: '.6rem'}"></div>
                <!-- <div class="ci">{{item.num}}</div> -->
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
    methods: {
        radarChartA(id) {
            // console.log(document.getElementsByClassName('radar1'))
            let myChart = this.$echarts.init(document.getElementById(id))
            myChart.setOption({
                // title: {
                //     text: '多雷达图'
                // },
                tooltip: {
                    trigger: 'axis'
                },
                // legend: {
                //     x: 'left',
                //     data: ['某软件']
                // },
                radar: [
                    {
                        indicator: [
                            { text: '官网推广度', max: 100 },
                            { text: '产品推广度', max: 100 },
                            { text: '客户互动值', max: 100 },
                            { text: '获客能力值', max: 100 },
                            { text: '销售主动性', max: 100 },
                            { text: '个人魅力值', max: 100 },
                        ],
                        // center: ['25%', '40%'],
                        radius: 60,
                        name: {
                            textStyle: {
                                color: '#72ACD1'
                            },
                            // fontSize:8
                        },
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        // symbol: 'none',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                },
                                color: "#23C8E8",

                            }
                        },
                        data: [
                            {
                                value: [60, 73, 85, 40, 50, 32],
                                name: '某软件'
                            }
                        ]
                    },
                ]

            })
        },
        radarChartB(id) {
            let myChart = this.$echarts.init(document.getElementById(id))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                radar: [
                    {
                        indicator: [
                            { text: '官网推广度', max: 100 },
                            { text: '产品推广度', max: 100 },
                            { text: '客户互动值', max: 100 },
                            { text: '获客能力值', max: 100 },
                            { text: '销售主动性', max: 100 },
                            { text: '个人魅力值', max: 100 },
                        ],
                        // center: ['50%', '40%'],
                        radius: 30,
                        name: {
                            textStyle: {
                                color: '#72ACD1'
                            },
                            fontSize: 8,
                            fontWeight: 'bold'
                        },
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        // symbol: 'none',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                },
                                color: "#23C8E8",

                            }
                        },
                        data: [
                            {
                                value: [20, 43, 52, 37, 48, 28],
                                name: '某软件'
                            }
                        ]
                    },
                ]

            })
        },
        radarChartC(id) {
            let myChart = this.$echarts.init(document.getElementById(id))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                radar: [
                    {
                        indicator: [
                            { text: '官网推广度', max: 100 },
                            { text: '产品推广度', max: 100 },
                            { text: '客户互动值', max: 100 },
                            { text: '获客能力值', max: 100 },
                            { text: '销售主动性', max: 100 },
                            { text: '个人魅力值', max: 100 },
                        ],
                        // center: ['50%', '50%'],
                        radius: 30,
                        name: {
                            textStyle: {
                                color: '#72ACD1'
                            },
                            fontSize: 8,
                            fontWeight: 'bold'
                        },
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        // symbol: 'none',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                },
                                color: "#23C8E8",

                            }
                        },
                        data: [
                            {
                                value: [40, 13, 55, 40, 50, 62],
                                name: '某软件'
                            }
                        ]
                    },
                ]

            })
        },
        radarChartD(id) {
            let myChart = this.$echarts.init(document.getElementById(id))
            myChart.setOption({
                tooltip: {
                    trigger: 'axis'
                },
                radar: [
                    {
                        indicator: [
                            { text: '官网推广度', max: 100 },
                            { text: '产品推广度', max: 100 },
                            { text: '客户互动值', max: 100 },
                            { text: '获客能力值', max: 100 },
                            { text: '销售主动性', max: 100 },
                            { text: '个人魅力值', max: 100 },
                        ],
                        // center: ['50%', '50%'],
                        radius: 30,
                        name: {
                            textStyle: {
                                color: '#72ACD1'
                            },
                            fontSize: 8,
                            fontWeight: 'bold'
                        },
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        // symbol: 'none',
                        itemStyle: {
                            normal: {
                                areaStyle: {
                                    type: 'default'
                                },
                                color: "blue",

                            }
                        },
                        data: [
                            {
                                value: [parseInt(100*Math.random()), parseInt(100*Math.random()), parseInt(100*Math.random()), parseInt(100*Math.random()), parseInt(100*Math.random()), parseInt(100*Math.random())],
                                name: '某软件'
                            }
                        ]
                    },
                ]

            })
        },
    },
    mounted() {
        this.radarChartA('radar1')
        this.radarChartB('radar2')
        this.radarChartC('radar3')
        // this.radarChartD('radar4')
        for (let i = 0; i < this.rankListArr.length; i++) {
            this.radarChartD('radarD' + i)
        }
    },
}
</script>

<style scoped>
.cont {
  /* background-color: #fff; */
}
.ACE {
  margin-top: 0.2rem;
  padding: 10px;
}
.ACE .box,.t-h .box {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 3px 3px 6px #b5b5b5;
  text-align: center;
}
.ACE .box img,.t-h .box img {
  width: 95%;
}

.t-h {
  /* clear: both; */
  /* overflow: hidden; */
  display: flex;
}
.t-h .box {
  width: 48%;
  float: left;
  border-radius: 8px;
  box-shadow: 3px 3px 6px #b5b5b5;
}

.rank-list {
    margin-top: 20px;
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
