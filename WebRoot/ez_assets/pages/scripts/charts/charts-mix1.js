var myChart1 = echarts.init(document.getElementById('mix1'));
var option1 =  {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    legend: {
	        data:['蒸发量','降水量','平均温度']
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            name : '水量',
	            axisLabel : {
	                formatter: '{value} ml'
	            }
	        },
	        {
	            type : 'value',
	            name : '温度',
	            axisLabel : {
	                formatter: '{value} °C'
	            }
	        }
	    ],
	    series : [

	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'平均温度',
	            type:'line',
	            yAxisIndex: 1,
	            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        }
	    ]
	};
	                    
myChart1.setOption(option1);


var option2 = {
	    title :{
	        text : '销售数据',
	        subtext : '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis',
	        formatter: function (params){
	            return params[0].name + ' : '
	                   + (params[2].value - params[1].value > 0 ? '+' : '-') 
	                   + params[0].value + '<br/>'
	                   + params[2].seriesName + ' : ' + params[2].value + '<br/>'
	                   + params[3].seriesName + ' : ' + params[3].value + '<br/>'
	        }
	    },
    
	    legend: {
	        data:['本周', '上周'],
	        selectedMode:false
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            min : 200,
	            max : 450
	        }
	    ],
	    series : [
	        {
	            name:'本周',
	            type:'line',
	            data:[400, 374, 251, 300, 420, 400, 440]
	        },
	        {
	            name:'上周',
	            type:'line',
	            symbol:'none',
	            itemStyle:{
	                normal:{
	                  lineStyle: {
	                    width:1,
	                    type:'dashed'
	                  }
	                }
	            },
	            data:[320, 332, 301, 334, 360, 330, 350]
	        },
	        {
	            name:'上周2',
	            type:'bar',
	            stack: '1',
	            barWidth: 6,
	            itemStyle:{
	                normal:{
	                    color:'rgba(0,0,0,0)'
	                },
	                emphasis:{
	                    color:'rgba(0,0,0,0)'
	                }
	            },
	            data:[320, 332, 251, 300, 360, 330, 350]
	        },
	        {
	            name:'变化',
	            type:'bar',
	            stack: '1',
	            data:[
	              80, 42, 
	              {value : 50, itemStyle:{ normal:{color:'red'}}},
	              {value : 34, itemStyle:{ normal:{color:'red'}}}, 
	              60, 70, 90
	            ]
	        }
	    ]
	};
	                    

var option3 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    calculable : true,
	    legend: {
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
	    },
	    xAxis : [
	        {
	            type : 'category',
	            splitLine : {show : false},
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            position: 'right'
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
	            tooltip : {trigger: 'item'},
	            stack: '广告',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            tooltip : {trigger: 'item'},
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            tooltip : {trigger: 'item'},
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            data:[862, 1018, 964, 1026, 1679, 1600, 1570]
	        },

	        {
	            name:'搜索引擎细分',
	            type:'pie',
	            tooltip : {
	                trigger: 'item',
	                formatter: '{a} <br/>{b} : {c} ({d}%)'
	            },
	            center: [160,130],
	            radius : [0, 50],
	            itemStyle :{
	                normal : {
	                    labelLine : {
	                        length : 20
	                    }
	                }
	            },
	            data:[
	                {value:1048, name:'百度'},
	                {value:251, name:'谷歌'},
	                {value:147, name:'必应'},
	                {value:102, name:'其他'}
	            ]
	        }
	    ]
	};
	                    
var option4 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    
	    dataRange: {
	        min: 0,
	        max: 100,
	        orient: 'horizontal',
	        y: 'top',
	        //text:['高','低'],           // 文本，默认为数值文本
	        color:['lightgreen','yellow'],
	        splitNumber: 5
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : function (){
	                var list = [];
	                for (var i = 1; i <= 30; i++) {
	                    list.push('2013-03-' + i);
	                }
	                return list;
	            }()
	        },
	        {
	            type : 'value',
	            scale : true,
	            splitNumber: 29,
	            axisLabel: {show:false},
	            splitLine: {show:false}
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        },
	        {
	            type : 'value'
	        }
	    ],
	    animation: false,
	    series : [
	        {
	            name:'散点',
	            type:'scatter',
	            tooltip : {
	                trigger: 'item',
	                formatter : function (params) {
	                    return '2013-03-' + params.value[0] + '<br/>'
	                           + params.seriesName + ' : ' 
	                           + params.value[1] + ', ' 
	                           + params.value[2]; 
	                }
	            },
	            yAxisIndex:1,
	            xAxisIndex:1,
	            symbol: 'circle',
	            symbolSize: function (value){
	                return Math.round(value[2]/10);
	            },
	            data: (function () {
	                var d = [];
	                var len = 200;
	                var value;
	                while (len--) {
	                    d.push([
	                        Math.round(Math.random()*29) + 1,
	                        (Math.random()*30).toFixed(2) - 0,
	                        (Math.random()*100).toFixed(2) - 0
	                    ]);
	                }
	                return d;
	            })()
	        },
	        {
	            name:'折线',
	            type:'line',
	            data:function (){
	                var list = [];
	                for (var i = 1; i <= 30; i++) {
	                    list.push(Math.round(Math.random()* 30));
	                }
	                return list;
	            }()
	        }
	    ]
	};
	                    
var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
    myChart.setOption(option);
};
 
    relation("mix2",option2);
    relation("mix3",option3);
    relation("mix4",option4);