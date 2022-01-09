var option1 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量','最低气温','最高气温']
	    },
	    xAxis : [
	        {
	            type : 'category',
	            position: 'bottom',
	            boundaryGap: true,
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {
	                    color: 'green',
	                    type: 'solid',
	                    width: 2
	                }
	            },
	            axisTick : {    // 轴标记
	                show:true,
	                length: 10,
	                lineStyle: {
	                    color: 'red',
	                    type: 'solid',
	                    width: 2
	                }
	            },
	            axisLabel : {
	                show:true,
	                interval: 'auto',    // {number}
	                rotate: 45,
	                margin: 8,
	                formatter: '{value}月',
	                textStyle: {
	                    color: 'blue',
	                    fontFamily: 'sans-serif',
	                    fontSize: 15,
	                    fontStyle: 'italic',
	                    fontWeight: 'bold'
	                }
	            },
	            splitLine : {
	                show:true,
	                lineStyle: {
	                    color: '#483d8b',
	                    type: 'dashed',
	                    width: 1
	                }
	            },
	            splitArea : {
	                show: true,
	                areaStyle:{
	                    color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
	                }
	            },
	            data : [
	                '1','2','3','4','5',
	                {
	                    value:'6',
	                    textStyle: {
	                        color: 'red',
	                        fontSize: 30,
	                        fontStyle: 'normal',
	                        fontWeight: 'bold'
	                    }
	                },
	                '7','8','9','10','11','12'
	            ]
	        },
	        {
	            type : 'category',
	            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            position: 'left',
	            //min: 0,
	            //max: 300,
	            //splitNumber: 5,
	            boundaryGap: [0,0.1],
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {
	                    color: 'red',
	                    type: 'dashed',
	                    width: 2
	                }
	            },
	            axisTick : {    // 轴标记
	                show:true,
	                length: 10,
	                lineStyle: {
	                    color: 'green',
	                    type: 'solid',
	                    width: 2
	                }
	            },
	            axisLabel : {
	                show:true,
	                interval: 'auto',    // {number}
	                rotate: -45,
	                margin: 18,
	                formatter: '{value} ml',    // Template formatter!
	                textStyle: {
	                    color: '#1e90ff',
	                    fontFamily: 'verdana',
	                    fontSize: 10,
	                    fontStyle: 'normal',
	                    fontWeight: 'bold'
	                }
	            },
	            splitLine : {
	                show:true,
	                lineStyle: {
	                    color: '#483d8b',
	                    type: 'dotted',
	                    width: 2
	                }
	            },
	            splitArea : {
	                show: true,
	                areaStyle:{
	                    color:['rgba(205,92,92,0.3)','rgba(255,215,0,0.3)']
	                }
	            }
	        },
	        {
	            type : 'value',
	            splitNumber: 10,
	            axisLabel : {
	                formatter: function (value) {
	                    // Function formatter
	                    return value + ' °C'
	                }
	            },
	            splitLine : {
	                show: false
	            }
	        }
	    ],
	    series : [
	        {
	            name: '蒸发量',
	            type: 'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	        },
	        {
	            name: '降水量',
	            type: 'bar',
	            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
	        },
	        {
	            name:'最低气温',
	            type: 'line',
	            yAxisIndex: 1,
	            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	        },
	        {
	            name:'最高气温',
	            type: 'line',
	            xAxisIndex: 1,
	            yAxisIndex: 1,
	            data: [12.0, 12.2, 13.3, 14.5, 16.3, 18.2, 28.3, 33.4, 31.0, 24.5, 18.0, 16.2]
	        }
	    ]
	};
	  
var option2 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['最高','最低']
	    },
	    calculable : true,
	    dataZoom : {
	        show : true,
	        realtime : true,
	        start : 20,
	        end : 80
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
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'最高',
	            type:'line',
	            data:function (){
	                var list = [];
	                for (var i = 1; i <= 30; i++) {
	                    list.push(Math.round(Math.random()* 30));
	                }
	                return list;
	            }()
	        },
	        {
	            name:'最低',
	            type:'line',
	            data:function (){
	                var list = [];
	                for (var i = 1; i <= 30; i++) {
	                    list.push(Math.round(Math.random()* 10));
	                }
	                return list;
	            }()
	        }
	    ]
	};	                    
	                    
var option3 = {
	    tooltip : {         // Option config. Can be overwrited by series or data
	        trigger: 'axis',
	        //show: true,   //default true
	        showDelay: 0,
	        hideDelay: 50,
	        transitionDuration:0,
	        backgroundColor : 'rgba(255,0,255,0.7)',
	        borderColor : '#f50',
	        borderRadius : 8,
	        borderWidth: 2,
	        padding: 10,    // [5, 10, 15, 20]
	        position : function(p) {
	            // 位置回调
	            // console.log && console.log(p);
	            return [p[0] + 10, p[1] - 10];
	        },
	        textStyle : {
	            color: 'yellow',
	            decoration: 'none',
	            fontFamily: 'Verdana, sans-serif',
	            fontSize: 15,
	            fontStyle: 'italic',
	            fontWeight: 'bold'
	        },
	        formatter: function (params,ticket,callback) {
	            console.log(params);
	            var res = 'Function formatter : <br/>' + params[0].name;
	            for (var i = 0, l = params.length; i < l; i++) {
	                res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
	            }
	            setTimeout(function (){
	                // 仅为了模拟异步回调
	                callback(ticket, res);
	            }, 1000);
	            return 'loading';
	        }
	        //formatter: "Template formatter: <br/>{b}<br/>{a}:{c}<br/>{a1}:{c1}"
	    },
	    calculable : true,
	    xAxis : {
	        data : ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    yAxis : {
	        type : 'value'
	    },
	    series : [
	        {
	            name:'坐标轴触发1',
	            type:'bar',
	            data:[
	                {value:320, extra:'Hello~'},
	                332, 301, 334, 390, 330, 320
	            ]
	        },
	        {
	            name:'坐标轴触发2',
	            type:'bar',
	            data:[862, 1018, 964, 1026, 1679, 1600, 157]
	        },
	        {
	            name:'数据项触发1',
	            type:'bar',
	            tooltip : {             // Series config.
	                trigger: 'item',
	                backgroundColor: 'black',
	                position : [0, 0],
	                formatter: "Series formatter: <br/>{a}<br/>{b}:{c}"
	            },
	            stack: '数据项',
	            data:[
	                120, 132,
	                {
	                    value: 301,
	                    itemStyle: {normal: {color: 'red'}},
	                    tooltip : {     // Data config.
	                        backgroundColor: 'blue',
	                        formatter: "Data formatter: <br/>{a}<br/>{b}:{c}"
	                    }
	                },
	                134, 90,
	                {
	                    value: 230,
	                    tooltip: {show: false}
	                },
	                210
	            ]
	        },
	        {
	            name:'数据项触发2',
	            type:'bar',
	            tooltip : {
	                show : false,
	                trigger: 'item'
	            },
	            stack: '数据项',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        }
	    ]
	};
	                    
var option4 = {
	    tooltip : {
	        trigger: 'axis'
	    },
	    dataZoom : {
	        show : true,
	        realtime : true,
	        //orient: 'vertical',   // 'horizontal'
	        //x: 0,
	        y: 36,
	        //width: 400,
	        height: 20,
	        //backgroundColor: 'rgba(221,160,221,0.5)',
	        //dataBackgroundColor: 'rgba(138,43,226,0.5)',
	        //fillerColor: 'rgba(38,143,26,0.6)',
	        //handleColor: 'rgba(128,43,16,0.8)',
	        //xAxisIndex:[],
	        //yAxisIndex:[],
	        start : 40,
	        end : 60
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : function (){
	                var list = [];
	                var n = 0;
	                while (n++ < 150) {
	                    list.push(n);
	                }
	                return list;
	            }()
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'dz',
	            type:'line',
	            data:function (){
	                var list = [];
	                for (var i = 1; i <= 150; i++) {
	                    list.push(Math.round(Math.random()* 30));
	                }
	                return list;
	            }()
	        }
	    ],
	    calculable:false
	};
	                    

var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
};
    relation("mix31",option1);
    relation("mix32",option2);
    relation("mix33",option3);
    relation("mix34",option4);