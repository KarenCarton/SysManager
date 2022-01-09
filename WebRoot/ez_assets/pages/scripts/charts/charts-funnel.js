var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
     
};

var option1 = {
	    title : {
	        text: '漏斗图',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    legend: {
	        data : ['展现','点击','访问','咨询','订单']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            x: '10%',
	            y: 60,
	            //x2: 80,
	            y2: 60,
	            width: '80%',
	            // height: {totalHeight} - y - y2,
	            min: 0,
	            max: 100,
	            minSize: '0%',
	            maxSize: '100%',
	            sort : 'descending', // 'ascending', 'descending'
	            gap : 10,
	            itemStyle: {
	                normal: {
	                    // color: 各异,
	                    borderColor: '#fff',
	                    borderWidth: 1,
	                    label: {
	                        show: true,
	                        position: 'inside'
	                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                    },
	                    labelLine: {
	                        show: false,
	                        length: 10,
	                        lineStyle: {
	                            // color: 各异,
	                            width: 1,
	                            type: 'solid'
	                        }
	                    }
	                },
	                emphasis: {
	                    // color: 各异,
	                    borderColor: 'red',
	                    borderWidth: 5,
	                    label: {
	                        show: true,
	                        formatter: '{b}:{c}%',
	                        textStyle:{
	                            fontSize:20
	                        }
	                    },
	                    labelLine: {
	                        show: true
	                    }
	                }
	            },
	            data:[
	                {value:60, name:'访问'},
	                {value:40, name:'咨询'},
	                {value:20, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        }
	    ]
	};
	                    
var option2 = {
	    color : [
	             'rgba(255, 69, 0, 0.5)',
	             'rgba(255, 150, 0, 0.5)',
	             'rgba(255, 200, 0, 0.5)',
	             'rgba(155, 200, 50, 0.5)',
	             'rgba(55, 200, 100, 0.5)'
	         ],
	         title : {
	             text: '漏斗图',
	             subtext: '纯属虚构'
	         },
	         tooltip : {
	             trigger: 'item',
	             formatter: "{a} <br/>{b} : {c}%"
	         },
	         legend: {
	             data : ['展现','点击','访问','咨询','订单']
	         },
	         calculable : true,
	         series : [
	             {
	                 name:'预期',
	                 type:'funnel',
	                 x: '10%',
	                 width: '80%',
	                 itemStyle: {
	                     normal: {
	                         label: {
	                             formatter: '{b}预期'
	                         },
	                         labelLine: {
	                             show : false
	                         }
	                     },
	                     emphasis: {
	                         label: {
	                             position:'inside',
	                             formatter: '{b}预期 : {c}%'
	                         }
	                     }
	                 },
	                 data:[
	                     {value:60, name:'访问'},
	                     {value:40, name:'咨询'},
	                     {value:20, name:'订单'},
	                     {value:80, name:'点击'},
	                     {value:100, name:'展现'}
	                 ]
	             },
	             {
	                 name:'实际',
	                 type:'funnel',
	                 x: '10%',
	                 width: '80%',
	                 maxSize: '80%',
	                 itemStyle: {
	                     normal: {
	                         borderColor: '#fff',
	                         borderWidth: 2,
	                         label: {
	                             position: 'inside',
	                             formatter: '{c}%',
	                             textStyle: {
	                                 color: '#fff'
	                             }
	                         }
	                     },
	                     emphasis: {
	                         label: {
	                             position:'inside',
	                             formatter: '{b}实际 : {c}%'
	                         }
	                     }
	                 },
	                 data:[
	                     {value:30, name:'访问'},
	                     {value:10, name:'咨询'},
	                     {value:5, name:'订单'},
	                     {value:50, name:'点击'},
	                     {value:80, name:'展现'}
	                 ]
	             }
	         ]
	     };
	                         
var option3 = {
	    title : {
	        text: '漏斗图',
	        subtext: '纯属虚构',
	        x: 'left',
	        y: 'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data : ['展现','点击','访问','咨询','订单']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'5%',
	            y:'50%',
	            data:[
	                {value:60, name:'访问'},
	                {value:30, name:'咨询'},
	                {value:10, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        },
	        {
	            name:'金字塔',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x: '5%',
	            y: '5%',
	            sort : 'ascending',
	            data:[
	                {value:60, name:'访问'},
	                {value:30, name:'咨询'},
	                {value:10, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        },
	        {
	            name:'漏斗图',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'55%',
	            y: '5%',
	            itemStyle: {
	                normal: {
	                    // color: 各异,
	                    label: {
	                        position: 'left'
	                    }
	                }
	            },
	            data:[
	                {value:60, name:'访问'},
	                {value:30, name:'咨询'},
	                {value:10, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        },
	        {
	            name:'金字塔',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'55%',
	            y:'50%',
	            sort : 'ascending',
	            itemStyle: {
	                normal: {
	                    // color: 各异,
	                    label: {
	                        position: 'left'
	                    }
	                }
	            },
	            data:[
	                {value:60, name:'访问'},
	                {value:30, name:'咨询'},
	                {value:10, name:'订单'},
	                {value:80, name:'点击'},
	                {value:100, name:'展现'}
	            ]
	        }
	    ]
	};
	                    
var option4 = {
	    title : {
	        text: '漏斗图(对比)',
	        subtext: '纯属虚构',
	        x: 'left',
	        y: 'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    legend: {
	        orient: 'vertical',
	        x: 'left',
	        data : ['产品A','产品B','产品C','产品D','产品E']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'5%',
	            y:'50%',
	            funnelAlign: 'right',
	            
	            center: ['25%', '25%'],  // for pie
	            
	            data:[
	                {value:60, name:'产品C'},
	                {value:30, name:'产品D'},
	                {value:10, name:'产品E'},
	                {value:80, name:'产品B'},
	                {value:100, name:'产品A'}
	            ]
	        },
	        {
	            name:'金字塔',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x: '5%',
	            y: '5%',
	            sort : 'ascending',
	            funnelAlign: 'right',
	            
	            center: ['25%', '75%'],  // for pie
	            
	            data:[
	                {value:60, name:'产品C'},
	                {value:30, name:'产品D'},
	                {value:10, name:'产品E'},
	                {value:80, name:'产品B'},
	                {value:100, name:'产品A'}
	            ]
	        },
	        {
	            name:'漏斗图',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'55%',
	            y: '5%',
	            funnelAlign: 'left',
	            
	            center: ['75%', '25%'],  // for pie
	            
	            data:[
	                {value:60, name:'产品C'},
	                {value:30, name:'产品D'},
	                {value:10, name:'产品E'},
	                {value:80, name:'产品B'},
	                {value:100, name:'产品A'}
	            ]
	        },
	        {
	            name:'金字塔',
	            type:'funnel',
	            width: '40%',
	            height: '45%',
	            x:'55%',
	            y:'50%',
	            sort : 'ascending',
	            funnelAlign: 'left',
	            
	            center: ['75%', '75%'],  // for pie
	            
	            data:[
	                {value:60, name:'产品C'},
	                {value:30, name:'产品D'},
	                {value:10, name:'产品E'},
	                {value:80, name:'产品B'},
	                {value:100, name:'产品A'}
	            ]
	        }
	    ]
	};
	                    
    relation("funnel1",option1);
    relation("funnel2",option2);
    relation("funnel3",option3);
    relation("funnel4",option4);