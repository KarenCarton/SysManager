var option1= {	    title : {
	        text: '预算 vs 开销（Budget vs spending）',
	        subtext: '纯属虚构'
	    },
	   
	
	    polar : [
	       {
	           indicator : [
	               { text: '销售（sales）', max: 6000},
	               { text: '管理（Administration）', max: 16000},
	               { text: '信息技术（Information Techology）', max: 30000},
	               { text: '客服（Customer Support）', max: 38000},
	               { text: '研发（Development）', max: 52000},
	               { text: '市场（Marketing）', max: 25000}
	            ]
	        }
	    ],
	    calculable : true,
	    series : [
	        {
	            name: '预算 vs 开销（Budget vs spending）',
	            type: 'radar',
	            data : [
	                {
	                    value : [4300, 10000, 28000, 35000, 50000, 19000],
	                    name : '预算分配（Allocated Budget）'
	                },
	                 {
	                    value : [5000, 14000, 28000, 31000, 42000, 21000],
	                    name : '实际开销（Actual Spending）'
	                }
	            ]
	        }
	    ]
	};	                    

var option2 = {	    title : {
	        text: '罗纳尔多 vs 舍普琴科',
	        subtext: '完全实况球员数据'
	    },
	 
	    legend: {
	        x : 'center',
	        data:['罗纳尔多','舍普琴科']
	    },
	    
	    calculable : true,
	    polar : [
	        {
	            indicator : [
	                {text : '进攻', max  : 100},
	                {text : '防守', max  : 100},
	                {text : '体能', max  : 100},
	                {text : '速度', max  : 100},
	                {text : '力量', max  : 100},
	                {text : '技巧', max  : 100}
	            ],
	            radius : 130
	        }
	    ],
	    series : [
	        {
	            name: '完全实况球员数据',
	            type: 'radar',
	            itemStyle: {
	                normal: {
	                    areaStyle: {
	                        type: 'default'
	                    }
	                }
	            },
	            data : [
	                {
	                    value : [97, 42, 88, 94, 90, 86],
	                    name : '舍普琴科'
	                },
	                {
	                    value : [97, 32, 74, 95, 88, 92],
	                    name : '罗纳尔多'
	                }
	            ]
	        }
	    ]
	};
	                    

var option3 = {
	    title : {
	        text: '多雷达图',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        x : 'center',
	        data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
	    },
	 
	    calculable : true,
	    polar : [
	        {
	            indicator : [
	                {text : '品牌', max  : 100},
	                {text : '内容', max  : 100},
	                {text : '可用性', max  : 100},
	                {text : '功能', max  : 100}
	            ],
	            center : ['25%',200],
	            radius : 80
	        },
	        {
	            indicator : [
	                {text : '外观', max  : 100},
	                {text : '拍照', max  : 100},
	                {text : '系统', max  : 100},
	                {text : '性能', max  : 100},
	                {text : '屏幕', max  : 100}
	            ],
	            radius : 80
	        },
	        {
	            indicator : (function (){
	                var res = [];
	                for (var i = 1; i <= 12; i++) {
	                    res.push({text:i+'月',max:100});
	                }
	                return res;
	            })(),
	            center : ['75%', 200],
	            radius : 80
	        }
	    ],
	    series : [
	        {
	            type: 'radar',
	             tooltip : {
	                trigger: 'item'
	            },
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data : [
	                {
	                    value : [60,73,85,40],
	                    name : '某软件'
	                }
	            ]
	        },
	        {
	            type: 'radar',
	            polarIndex : 1,
	            data : [
	                {
	                    value : [85, 90, 90, 95, 95],
	                    name : '某主食手机'
	                },
	                {
	                    value : [95, 80, 95, 90, 93],
	                    name : '某水果手机'
	                }
	            ]
	        },
	        {
	            type: 'radar',
	            polarIndex : 2,
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data : [
	                {
	                    name : '降水量',
	                    value : [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
	                },
	                {
	                    name:'蒸发量',
	                    value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
	                }
	            ]
	        }
	    ]
	};
	                    
	                    

var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
     myChart.setOption(option);
};
    relation("radar1",option1);
    relation("radar2",option2);
   relation("radar3",option3);
  