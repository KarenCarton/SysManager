var option1 = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	   
	    calculable : true,
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[320, 302, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[150, 212, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            stack: '总量',
	            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
	            data:[820, 832, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};
	                    
var option2= {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['利润', '支出', '收入']
	    },

	    calculable : true,
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            axisTick : {show: false},
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    series : [
	        {
	            name:'利润',
	            type:'bar',
	            itemStyle : { normal: {label : {show: true, position: 'inside'}}},
	            data:[200, 170, 240, 244, 200, 220, 210]
	        },
	        {
	            name:'收入',
	            type:'bar',
	            stack: '总量',
	            barWidth : 5,
	            itemStyle: {normal: {
	                label : {show: true}
	            }},
	            data:[320, 302, 341, 374, 390, 450, 420]
	        },
	        {
	            name:'支出',
	            type:'bar',
	            stack: '总量',
	            itemStyle: {normal: {
	                label : {show: true, position: 'left'}
	            }},
	            data:[-120, -132, -101, -134, -190, -230, -210]
	        }
	    ]
	};
	                                        
var option3 = {
    title: {
        x: 'center',
        text: 'ECharts例子个数统计',
        subtext: 'Rainbow bar example',
        link: 'http://echarts.baidu.com/doc/example.html'
    },
    tooltip: {
        trigger: 'item'
    },

    calculable: true,
    grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['Line', 'Bar', 'Scatter', 'K', 'Pie', 'Radar', 'Chord', 'Force', 'Map', 'Gauge', 'Funnel']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: 'ECharts例子个数统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [12,21,10,4,12,5,6,5,25,23,7],
            markPoint: {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0)',
                    formatter: function(params){
                        return '<img src="' 
                                + params.data.symbol.replace('image://', '')
                                + '"/>';
                    }
                },
                data: [
                    {xAxis:0, y: 350, name:'Line', symbolSize:20, symbol: 'image://../asset/ico/折线图.png'},
                    {xAxis:1, y: 350, name:'Bar', symbolSize:20, symbol: 'image://../asset/ico/柱状图.png'},
                    {xAxis:2, y: 350, name:'Scatter', symbolSize:20, symbol: 'image://../asset/ico/散点图.png'},
                    {xAxis:3, y: 350, name:'K', symbolSize:20, symbol: 'image://../asset/ico/K线图.png'},
                    {xAxis:4, y: 350, name:'Pie', symbolSize:20, symbol: 'image://../asset/ico/饼状图.png'},
                    {xAxis:5, y: 350, name:'Radar', symbolSize:20, symbol: 'image://../asset/ico/雷达图.png'},
                    {xAxis:6, y: 350, name:'Chord', symbolSize:20, symbol: 'image://../asset/ico/和弦图.png'},
                    {xAxis:7, y: 350, name:'Force', symbolSize:20, symbol: 'image://../asset/ico/力导向图.png'},
                    {xAxis:8, y: 350, name:'Map', symbolSize:20, symbol: 'image://../asset/ico/地图.png'},
                    {xAxis:9, y: 350, name:'Gauge', symbolSize:20, symbol: 'image://../asset/ico/仪表盘.png'},
                    {xAxis:10, y: 350, name:'Funnel', symbolSize:20, symbol: 'image://../asset/ico/漏斗图.png'},
                ]
            }
        }
    ]
};
                       
var option4 = {
	    title : {
	        text: '双数值柱形图',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis',
	        axisPointer:{
	            show: true,
	            type : 'cross',
	            lineStyle: {
	                type : 'dashed',
	                width : 1
	            }
	        },
	        formatter : function (params) {
	            return params.seriesName + ' : [ '
	                   + params.value[0] + ', ' 
	                   + params.value[1] + ' ]';
	        }
	    },
	    legend: {
	        data:['数据1','数据2']
	    },
	   
	    calculable : true,
	    xAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLine: {
	                lineStyle: {
	                    color: '#dc143c'
	                }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'数据1',
	            type:'bar',
	            data:[
	                [1.5, 10], [5, 7], [8, 8], [12, 6], [11, 12], [16, 9], [14, 6], [17, 4], [19, 9]
	            ],
	            markPoint : {
	                data : [
	                    // 纵轴，默认
	                    {type : 'max', name: '最大值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'top'}}}},
	                    {type : 'min', name: '最小值',symbol: 'emptyCircle', itemStyle:{normal:{color:'#dc143c',label:{position:'bottom'}}}},
	                    // 横轴
	                    {type : 'max', name: '最大值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'right'}}}},
	                    {type : 'min', name: '最小值', valueIndex: 0, symbol: 'emptyCircle', itemStyle:{normal:{color:'#1e90ff',label:{position:'left'}}}}
	                ]
	            },
	            markLine : {
	                data : [
	                    // 纵轴，默认
	                    {type : 'max', name: '最大值', itemStyle:{normal:{color:'#dc143c'}}},
	                    {type : 'min', name: '最小值', itemStyle:{normal:{color:'#dc143c'}}},
	                    {type : 'average', name : '平均值', itemStyle:{normal:{color:'#dc143c'}}},
	                    // 横轴
	                    {type : 'max', name: '最大值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
	                    {type : 'min', name: '最小值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}},
	                    {type : 'average', name : '平均值', valueIndex: 0, itemStyle:{normal:{color:'#1e90ff'}}}
	                ]
	            }
	        },
	        {
	            name:'数据2',
	            type:'bar',
	            barHeight:10,
	            data:[
	                [1, 2], [2, 3], [4, 4], [7, 5], [11, 11], [18, 15]
	            ]
	        }
	    ]
	};

var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
}
    relation("bar21",option1);
    relation("bar22",option2);
    relation("bar23",option3);
    relation("bar24",option4);