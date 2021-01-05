function load_data() {
    $.getJSON('data/data.json', (data) => {
        options.options = data.map(item => {
            return {
                series: {
                    data: item.data
                },
                title: {
                    subtext: item.date
                }
            }
        })
        options.timeline =  {
            axisType: 'category',
            autoPlay: true,
            data: data.map(item => item.date),
            playInterval: 5,
            loop: false,
            left: '10%',
            right: '10%'
        }
        chart.setOption(options)
    })
}