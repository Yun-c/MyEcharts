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
        color:['#2f89cf'],
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
                axisLabel:{
                    color:"rgba(255, 255, 255, .6)",
                    fontSize:"12"
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel:{
                    color:"rgba(255, 255, 255, .6)",
                    fontSize:"12"
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
})();