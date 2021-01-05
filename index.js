var dom = document.getElementById('main')
var chart = echarts.init(dom)

var data = [
    // TODO
];

var options = {


    timeline: {
        axisType: 'time',
        autoPlay: true,
        data: data.map(item => item.date),
        playInterval: 200,
        loop: false,
        left: '10%',
        right: '10%'
    },
    baseOption: {
        title: {
            text: '中国魔方比赛参赛人次史'
        },
        visualMap: {
            max: 1000,
            calculable: true,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        series: [{
            type: 'map',
            name: '累计参ß赛人次',
            map: 'china',
        }],

    },
    options: data.map(item => {
        return {
            series: {
                data: item.data
            },
            title: {
                subtext: item.date
            }
        }
    })


}

chart.setOption(options)