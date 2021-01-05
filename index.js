var dom = document.getElementById('main')
var chart = echarts.init(dom)

var options = {
    baseOption: {
        title: {
            text: '中国魔方比赛参赛人次史'
        },
        visualMap: {
            max: 1000,
            calculable: true,
        },
        tooltip: {
        },
        series: [{
            type: 'map',
            name: '累计参赛人次',
            map: 'china',
        }],

    }
}
chart.setOption(options)

load_data()