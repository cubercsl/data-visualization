regionMap = {
    "上海": "华东", "云南": "西南", "内蒙古": "华北", "北京": "华北",
    "台湾": "港澳台", "吉林": "东北", "四川": "西南", "天津": "华北",
    "宁夏": "西北", "安徽": "华东", "山东": "华东", "山西": "华北",
    "广东": "华南", "广西": "华南", "新疆": "西北", "江苏": "华东",
    "江西": "华中", "河北": "华北", "河南": "华中", "浙江": "华东",
    "海南": "华南", "湖北": "华中", "湖南": "华中", "澳门": "港澳台",
    "甘肃": "西北", "福建": "华东", "西藏": "西南", "贵州": "西南",
    "辽宁": "东北", "重庆": "西南", "陕西": "西北", "青海": "西北",
    "香港": "港澳台", "黑龙江": "东北"
}

function load_data() {
    $.getJSON('data/data.json', (data) => {
        options = {
            title: [{}, {
                text: '中国魔方比赛参赛人次变化史',
                subtext: '数据来源：世界魔方协会',
                sublink: 'https://worldcubeassociation.org/',
                right: '10%',
                top: '2%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 60,
                }
            }],
            visualMap: [
                {
                    type: 'piecewise',
                    categories: [
                        '华东', '华南', '华中', '华北',
                        '西北', '西南', '东北', '港澳台'
                    ],
                    seriesIndex: 0,
                    show: true,
                    left:'1%',
                    bottom: '40%',
                    inRange: {
                        color: [
                            "#ff9b6a", "#f1b8f1", "#d9b8f1", "#f1ccb8",
                            "#f1f1b8", "#b8f1ed", "#b8f1cc", "#e7dbca"
                        ]
                    },
                    textStyle: {color: '#737373'}
                }, {
                    type: 'continuous',
                    max: 8000,
                    calculable: true,
                    seriesIndex: 1,
                    inRange: {
                        color: [
                            "#87CEFA","#191970"
                        ]
                    }
                }],
            tooltip: {
            },
            grid: [{
                left: '2%',
                width: '25%',
                height: '60%',
                containLabel: true
            }],
            xAxis: {
                type: 'value',
                max: 'dataMax',
            },
            yAxis: {
                type: 'category',
                inverse: true
            },
            series: [{
                id: 0,
                type: 'bar',
                name: '累计参赛人次',
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                },
            }, {
                type: 'map',
                name: '累计参赛人次',
                map: 'china',
                left: '30%'
            }],
            options: data.map(item => {
                var year = item.date.split('-')[0]
                var month = item.date.split('-')[1]
                return {
                    series: [{
                        data: item.data.map(item => [item.value, item.name, regionMap[item.name]])
                    }, {
                        data: item.data
                    }],
                    title: {
                        text: year + '年' + month + '月',
                        textAlign: 'center',
                        left: '20%',
                        top: '75%',
                        textStyle: {
                            fontSize: 60
                        }
                    },
                    yAxis: {
                        max: Math.max(2, Math.min(item.data.length - 1, 9)),
                        data: item.data.sort((a, b) => b.value - a.value).map(item => item.name)
                    }
                }
            }),
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 1000,
                loop: false,
                left: '10%',
                right: '10%',
                data: data.map(item => item.date),
            },
        }
        console.log(options)
        chart.hideLoading()
        chart.setOption(options)
    })
}