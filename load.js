function load_data() {
    $.getJSON('data/data.json', (data) => {
        options = {
            title: [{
                text: '',
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                    fontSize: 100
                }
            }, {
                text: '中国魔方比赛参赛人次变化史',
                subtext: '数据来源：世界魔方协会',
                sublink: 'https://worldcubeassociation.org/'
            }],
            visualMap: {
                max: 1000,
                calculable: true,
            },
            tooltip: {
            },

            grid: [{
                left: '2%',
                width: '20%',
                height: '30%',
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
            series: [
                {
                    id: 0,
                    type: 'bar',
                    name: '累计参赛人次',
                    label: {
                        show: true,
                        position: 'right',
                        valueAnimation: true
                    }
                }, {
                    type: 'map',
                    name: '累计参赛人次',
                    map: 'china'
                }],
            options: data.map(item => {
                return {
                    series: [{
                        data: item.data.map(item => [item.value, item.name, item.value])
                    }, {
                        data: item.data
                    }],
                    title: {
                        text: item.date,
                        textAlign: 'center',
                        left: '20%',
                        top: '75%',
                        textStyle: {
                            fontSize: 60
                        }
                    },
                    yAxis: {
                        max: Math.min(item.data.length - 1, 6),
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
            }
        }
        chart.hideLoading()
        chart.setOption(options)
    })
}