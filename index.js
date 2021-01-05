var dom = document.getElementById('main')
var chart = echarts.init(dom)

chart.showLoading();
load_data()