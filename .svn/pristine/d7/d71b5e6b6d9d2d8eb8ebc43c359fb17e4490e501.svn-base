var  option1 = {
	    title : {
	        text: '某地区蒸发量和降水量',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量']
	    },
	  
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
	            markPoint : {
	                data : [
	                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
	                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	};

var option2 = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '广告',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
	            markLine : {
	                itemStyle:{
	                    normal:{
	                        lineStyle:{
	                            type: 'dashed'
	                        }
	                    }
	                },
	                data : [
	                    [{type : 'min'}, {type : 'max'}]
	                ]
	            }
	        },
	        {
	            name:'百度',
	            type:'bar',
	            barWidth : 5,
	            stack: '搜索引擎',
	            data:[620, 732, 701, 734, 1090, 1130, 1120]
	        },
	        {
	            name:'谷歌',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[120, 132, 101, 134, 290, 230, 220]
	        },
	        {
	            name:'必应',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[60, 72, 71, 74, 190, 130, 110]
	        },
	        {
	            name:'其他',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[62, 82, 91, 84, 109, 110, 120]
	        }
	    ]
	};
	                    
var option3 = {
	    title : {
	        text: 'ECharts2 vs ECharts1',
	        subtext: 'Chrome下测试数据'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:[
	            'ECharts1 - 2k数据','ECharts1 - 2w数据','ECharts1 - 20w数据','',
	            'ECharts2 - 2k数据','ECharts2 - 2w数据','ECharts2 - 20w数据'
	        ]
	    },
	    calculable : true,
	    grid: {y: 70, y2:30, x2:20},
	    xAxis : [
	        {
	            type : 'category',
	            data : ['Line','Bar','Scatter','K','Map']
	        },
	        {
	            type : 'category',
	            axisLine: {show:false},
	            axisTick: {show:false},
	            axisLabel: {show:false},
	            splitArea: {show:false},
	            splitLine: {show:false},
	            data : ['Line','Bar','Scatter','K','Map']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel:{formatter:'{value} ms'}
	        }
	    ],
	    series : [
	        {
	            name:'ECharts2 - 2k数据',
	            type:'bar',
	            itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
	            data:[40,155,95,75, 0]
	        },
	        {
	            name:'ECharts2 - 2w数据',
	            type:'bar',
	            itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
	            data:[100,200,105,100,156]
	        },
	        {
	            name:'ECharts2 - 20w数据',
	            type:'bar',
	            itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
	            data:[906,911,908,778,0]
	        },
	        {
	            name:'ECharts1 - 2k数据',
	            type:'bar',
	            xAxisIndex:1,
	            itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'\n'):'';}}}},
	            data:[96,224,164,124,0]
	        },
	        {
	            name:'ECharts1 - 2w数据',
	            type:'bar',
	            xAxisIndex:1,
	            itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
	            data:[491,2035,389,955,347]
	        },
	        {
	            name:'ECharts1 - 20w数据',
	            type:'bar',
	            xAxisIndex:1,
	            itemStyle: {normal: {color:'rgba(252,206,16,0.5)', label:{show:true,formatter:function(p){return p.value > 0 ? (p.value +'+'):'';}}}},
	            data:[3000,3000,2817,3000,0]
	        }
	    ]
	};
	                    
var option4 = {
	    title : {
	        text: '世界人口总量',
	        subtext: '数据来自网络'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['2011年', '2012年']
	    },
	   
	    calculable : true,
	    xAxis : [
	        {
	            type : 'value',
	            boundaryGap : [0, 0.01]
	        }
	    ],
	    yAxis : [
	        {
	            type : 'category',
	            data : ['巴西','印尼','美国','印度','中国','世界人口(万)']
	        }
	    ],
	    series : [
	        {
	            name:'2011年',
	            type:'bar',
	            data:[18203, 23489, 29034, 104970, 131744, 630230]
	        },
	        {
	            name:'2012年',
	            type:'bar',
	            data:[19325, 23438, 31000, 121594, 134141, 681807]
	        }
	    ]
	};                    
                             
var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
}
    relation("bar1",option1);
    relation("bar2",option2);
    relation("bar3",option3);
    relation("bar4",option4);