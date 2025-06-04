// 柱状图模块一
(function () {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        color: ['#2f89cf'],
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255, 255, 255, .6)",
                    fontSize: "12"
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .1)',
                        width: 1
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .1)',
                        width: 1
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
// 柱状图模块二
(function () {
    var colorList = [
        '#1089E7',
        '#F57474',
        '#56D0E3',
        '#F8B448',
        '#8B78F6',
        '#58D9F9',
        '#F57474'
    ];
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    //2.指定配置和数据
    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
            // containLabel: true  图表大小不包含刻度
        },
        xAxis: {
            show: false,
        },
        yAxis: [{
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
            inverse: true, // 反转y轴
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: '12'
            }
        },
        {
            type: 'category',
            show: true,
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            inverse: true, // 反转y轴
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: '12'
            }
        },],
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [90, 79, 80, 93, 50, 70],

                itemStyle: {
                    barBorderRadius: 10,
                    color: function (params) {
                        // params 传入的参数是柱子对象
                        return colorList[params.dataIndex];
                    }
                },
                barCategoryGap: 50, // 柱子之间的间距
                barWidth: 10, // 柱子的宽度
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                    color: '#fff',
                },
                yAxisIndex: 0 // 设置y轴索引
            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100, 100],
                barCategoryGap: 50, // 柱子之间的间距
                barWidth: 15, // 柱子的宽度
                yAxisIndex: 1, // 设置y轴索引
                itemStyle: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15
                },
            }

        ]
    };
    //3.使用配置和数据
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });

})();
// 折线图模块一
(function () {
    var yearData = [
        {
            year: '2024',
            data: [[110, 122, 100, 114, 140, 200, 190]
                , [220, 182, 191, 234, 290, 330, 310]]
        },
        {
            year: '2025',
            data: [[220, 182, 191, 234, 290, 330, 310]
                , [120, 132, 101, 134, 90, 230, 210]]
        }
    ]
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.line .chart'));
    //2.指定配置和数据
    option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 图例位置
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示网格
            borderColor: '#012f4a', // 网格边框颜色
            containLabel: true //  整体大小包含标签
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true // 刻度线对齐标签
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)', // x轴文字颜色
                fontSize: '12' // x轴文字大小
            },
            axisLine: {
                show: false // 不显示x轴线
            },
            boundaryGap: false // 不显示x轴两端的空白
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 不显示y轴刻度线
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, .6)', // y轴文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // y轴网格线颜色
                }
            },
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                smooth: true, // 平滑曲线
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                smooth: true, // 平滑曲线
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]

    };
    //3.使用配置和数据
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });

    //5.点击切换折线图和柱状图
    $('.line h2').on('click', 'a', function () {
        // alert(1);
        //1.点击a之后，根据当前索引好找到相关数据
        // console.log(yearData[$(this).index()]);
        option.series[0].data = yearData[$(this).index()].data[0];
        option.series[1].data = yearData[$(this).index()].data[1];
        myChart.setOption(option);
    });
})();
// 折线图模块二
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.line2 .chart'));
    //2.指定配置和数据
    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Email', 'Union Ads'],
            top: '0%',
            textStyle: {
                color: '#4c9bfd', // 图例文字颜色
                fontSize: '12' // 图例文字大小
            },
        },
        grid: {
            left: '10%',
            top: '30%',
            right: '10%',
            bottom: '10 %',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)', // x轴文字颜色
                    fontSize: '12' // x轴文字大小
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .2)' // x轴线颜色
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false // 不显示y轴刻度线
                },
                axisLabel: {
                    color: 'rgba(255, 255, 255, .6)', // y轴文字颜色
                    fontSize: '12' // y轴文字大小
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .1)' // y轴线颜色
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, .1)' // y轴网格线颜色
                    }
                }
            },
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(1, 132, 213, 0.9)' }, // 渐变起始颜色
                        { offset: 0.8, color: 'rgba(1, 132, 213, 0.1)' }, // 渐变结束颜色 
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)' // 阴影颜色
                },
                lineStyle: {
                    width: 2,
                    color: '#0184d5' // 折线颜色
                },
                symbol: 'circle', // 折线点的形状
                symbolSize: 8, // 折线点的大小
                showSymbol: false, // 不显示折线点
                itemStyle: {
                    color: '#0184d5', // 折线点的颜色
                    borderColor: 'rgba(221, 220, 107, .1)', // 折线点的边框颜色
                    borderWidth: 12 // 折线点的边框宽度
                },
                smooth: true, // 平滑曲线
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 216, 135, 0.5)' }, // 渐变起始颜色
                        { offset: 0.8, color: 'rgba(0, 216, 135, 0.1)' }, // 渐变结束颜色 
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)' // 阴影颜色
                },
                lineStyle: {
                    width: 2,
                    color: '#00d887' // 折线颜色
                },
                symbol: 'circle', // 折线点的形状
                symbolSize: 8, // 折线点的大小
                showSymbol: false, // 不显示折线点
                itemStyle: {
                    color: '#00d887', // 折线点的颜色
                    borderColor: 'rgba(221, 220, 107, .1)', // 折线点的边框颜色
                    borderWidth: 12 // 折线点的边框宽度
                },
                smooth: true, // 平滑曲线
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },

        ]
    };
    //3.使用配置和数据
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();
// 饼图模块一
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pie .chart'));
    //2.指定配置和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff'],
        legend: {
            bottom: '5%',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: '12'
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: 'bold',
                        position: 'center',
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: '0岁以下' },
                    { value: 4, name: '20-29岁' },
                    { value: 2, name: '30-39岁' },
                    { value: 2, name: '40-49岁' },
                    { value: 1, name: '50岁以上' }
                ]
            }
        ]
    };
    //3.使用配置和数据
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });


})();
// 饼图模块二
(function () {
    //1.实例化对象
    var myChart = echarts.init(document.querySelector('.pie2 .chart'));
    //2.指定配置和数据
    option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
                    bottom: '0%',
                    itemHeight: 8,
                    itemWidth: 8,
                    textStyle: {
                        color: 'rgba(255, 255, 255, .5)',
                        fontSize: '12'
                    }
                },

        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                label: {
                    fontSize: 10,
                },
                labelLine: {
                    length: 6,
                    length2: 8,
                    lineStyle: {
                        width: 1
                    }
                },
                data: [
                    { value: 20, name: '北京' },
                    { value: 26, name: '天津' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '浙江' },
                    { value: 20, name: '云南' },
                    { value: 25, name: '四川' },
                    { value: 30, name: '河北' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };
    //3.使用配置和数据
    myChart.setOption(option);
    //4.让图表跟随屏幕自适应
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();