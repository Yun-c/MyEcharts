var myChart = echarts.init(document.querySelector('.map .chart'));
$.ajax({
    url: "http://localhost:8080/echarts/selectByMore?metrics_code=HY00001&metrics_level=1",
    type: "GET",
    //dataType:"json",
    data: "",
    success: function (jsonData) {

        const simplifiedArray = jsonData.data.map(item => ({
            name: item.province_name,
            value: item.metrics_value
        }));
        // console.log(simplifiedArray);
        myChart.showLoading();
        $.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', function (geoJson) {

            myChart.hideLoading();
            echarts.registerMap('china', geoJson);
            myChart.setOption(
                (option = {
                    title: {
                        text: '好医生医疗集团各省市分布',
                        left: 'center',
                        top: '10',
                        textStyle: {
                            color: '#fff',
                            fontSize: 20,
                            fontWeight: 'normal'
                        }
                    },
                    visualMap: {
                        min: 800,
                        max: 50000,
                        text: ['High', 'Low'],
                        realtime: false,
                        calculable: true,
                        inRange: {
                            color: ['lightskyblue', 'yellow', 'orangered']
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (个)'
                    },
                    series: [
                        {
                            name: 'China',
                            type: 'map',
                            map: 'china',
                            top: '20%',
                            label: {
                                show: false,
                                fontSize: 12,
                            },
                            data: simplifiedArray

                        }
                    ]
                })
            );
        });

    },
    error: function () {
        alert("获取二维码失败");
    }
});


window.addEventListener('resize', function () {
    myChart.resize();
});

