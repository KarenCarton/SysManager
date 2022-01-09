var option1 = {
	    title : {
	        text: '某站点用户访问来源',
	        subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    calculable : true,
	    series : [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ]
	        }
	    ]
	};
	                    
var option2 = {
	    title : {
	        text: '浏览器占比变化',
	        subtext: '纯属虚构',
	        x:'right',
	        y:'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient : 'vertical',
	        x : 'left',
	        data:['Chrome','Firefox','Safari','IE9+','IE8-']
	    },
	    calculable : false,
	    series : (function (){
	        var series = [];
	        for (var i = 0; i < 30; i++) {
	            series.push({
	                name:'浏览器（数据纯属虚构）',
	                type:'pie',
	                itemStyle : {normal : {
	                    label : {show : i > 28},
	                    labelLine : {show : i > 28, length:20}
	                }},
	                radius : [i * 4 + 40, i * 4 + 43],
	                data:[
	                    {value: i * 128 + 80,  name:'Chrome'},
	                    {value: i * 64  + 160,  name:'Firefox'},
	                    {value: i * 32  + 320,  name:'Safari'},
	                    {value: i * 16  + 640,  name:'IE9+'},
	                    {value: i * 8  + 1280, name:'IE8-'}
	                ]
	            })
	        }
	        series[0].markPoint = {
	            symbol:'emptyCircle',
	            symbolSize:series[0].radius[0],
	            effect:{show:true,scaleSize:12,color:'rgba(250,225,50,0.8)',shadowBlur:10,period:30},
	            data:[{x:'50%',y:'50%'}]
	        };
	        return series;
	    })()
	};
	setTimeout(function (){
	    var _ZR = myChart.getZrender();
	    var TextShape = require('zrender/shape/Text');
	    // 补充千层饼
	    _ZR.addShape(new TextShape({
	        style : {
	            x : _ZR.getWidth() / 2,
	            y : _ZR.getHeight() / 2,
	            color: '#666',
	            text : '恶梦的过去',
	            textAlign : 'center'
	        }
	    }));
	    _ZR.addShape(new TextShape({
	        style : {
	            x : _ZR.getWidth() / 2 + 200,
	            y : _ZR.getHeight() / 2,
	            brushType:'fill',
	            color: 'orange',
	            text : '美好的未来',
	            textAlign : 'left',
	            textFont:'normal 20px 微软雅黑'
	        }
	    }));
	    _ZR.refresh();
	}, 2000);

	                    

var idx=1;
var option3 = {
	    timeline : {
	        data : [
	            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
	            { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
	            '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
	            { name:'2013-12-01', symbol:'star6', symbolSize:8 }
	        ],
	        label : {
	            formatter : function(s) {
	                return s.slice(0, 7);
	            }
	        }
	    },
	    options : [
	        {
	            title : {
	                text: '浏览器占比变化',
	                subtext: '纯属虚构'
	            },
	            tooltip : {
	                trigger: 'item',
	                formatter: "{a} <br/>{b} : {c} ({d}%)"
	            },
	            legend: {
	                data:['Chrome','Firefox','Safari','IE9+','IE8-']
	            },
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    center: ['50%', '45%'],
	                    radius: '50%',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        },
	        {
	            series : [
	                {
	                    name:'浏览器（数据纯属虚构）',
	                    type:'pie',
	                    data:[
	                        {value: idx * 128 + 80,  name:'Chrome'},
	                        {value: idx * 64  + 160,  name:'Firefox'},
	                        {value: idx * 32  + 320,  name:'Safari'},
	                        {value: idx * 16  + 640,  name:'IE9+'},
	                        {value: idx++ * 8  + 1280, name:'IE8-'}
	                    ]
	                }
	            ]
	        }
	    ]
	};
	                                
var labelTop = {
	    normal : {
	        label : {
	            show : true,
	            position : 'center',
	            formatter : '{b}',
	            textStyle: {
	                baseline : 'bottom'
	            }
	        },
	        labelLine : {
	            show : false
	        }
	    }
	};
	var labelFromatter = {
	    normal : {
	        label : {
	            formatter : function (params){
	                return 100 - params.value + '%'
	            },
	            textStyle: {
	                baseline : 'top'
	            }
	        }
	    },
	}
	var labelBottom = {
	    normal : {
	        color: '#ccc',
	        label : {
	            show : true,
	            position : 'center'
	        },
	        labelLine : {
	            show : false
	        }
	    },
	    emphasis: {
	        color: 'rgba(0,0,0,0)'
	    }
	};
	var radius = [40, 55];
	var option4 = {
	    legend: {
	        x : 'center',
	        y : 'center',
	        data:[
	            'GoogleMaps','Facebook','Youtube','Google+','Weixin',
	            'Twitter', 'Skype', 'Messenger', 'Whatsapp', 'Instagram'
	        ]
	    },
	    title : {
	        text: 'The App World',
	        subtext: 'from global web index',
	        x: 'center'
	    },
	  
	    series : [
	        {
	            type : 'pie',
	            center : ['10%', '30%'],
	            radius : radius,
	            x: '0%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:46, itemStyle : labelBottom},
	                {name:'GoogleMaps', value:54,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['30%', '30%'],
	            radius : radius,
	            x:'20%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:56, itemStyle : labelBottom},
	                {name:'Facebook', value:44,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['50%', '30%'],
	            radius : radius,
	            x:'40%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:65, itemStyle : labelBottom},
	                {name:'Youtube', value:35,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['70%', '30%'],
	            radius : radius,
	            x:'60%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:70, itemStyle : labelBottom},
	                {name:'Google+', value:30,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['90%', '30%'],
	            radius : radius,
	            x:'80%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:73, itemStyle : labelBottom},
	                {name:'Weixin', value:27,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['10%', '70%'],
	            radius : radius,
	            y: '55%',   // for funnel
	            x: '0%',    // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:78, itemStyle : labelBottom},
	                {name:'Twitter', value:22,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['30%', '70%'],
	            radius : radius,
	            y: '55%',   // for funnel
	            x:'20%',    // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:78, itemStyle : labelBottom},
	                {name:'Skype', value:22,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['50%', '70%'],
	            radius : radius,
	            y: '55%',   // for funnel
	            x:'40%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:78, itemStyle : labelBottom},
	                {name:'Messenger', value:22,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['70%', '70%'],
	            radius : radius,
	            y: '55%',   // for funnel
	            x:'60%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:83, itemStyle : labelBottom},
	                {name:'Whatsapp', value:17,itemStyle : labelTop}
	            ]
	        },
	        {
	            type : 'pie',
	            center : ['90%', '70%'],
	            radius : radius,
	            y: '55%',   // for funnel
	            x:'80%', // for funnel
	            itemStyle : labelFromatter,
	            data : [
	                {name:'other', value:89, itemStyle : labelBottom},
	                {name:'Instagram', value:11,itemStyle : labelTop}
	            ]
	        }
	    ]
	};
	                                                     
var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
}
    relation("pie1",option1);
    relation("pie2",option2);
    relation("pie3",option3);
    relation("pie4",option4);