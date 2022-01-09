var myChart1 = echarts.init(document.getElementById('other1'));
var option1 = {
	    title : {
	        text: '动态数据',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['最新成交价', '预购队列']
	    },
	    dataZoom : {
	        show : false,
	        start : 0,
	        end : 100
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : true,
	            data : (function (){
	                var now = new Date();
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
	                    now = new Date(now - 2000);
	                }
	                return res;
	            })()
	        },
	        {
	            type : 'category',
	            boundaryGap : true,
	            data : (function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push(len + 1);
	                }
	                return res;
	            })()
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale: true,
	            name : '价格',
	            boundaryGap: [0.2, 0.2]
	        },
	        {
	            type : 'value',
	            scale: true,
	            name : '预购量',
	            boundaryGap: [0.2, 0.2]
	        }
	    ],
	    series : [
	        {
	            name:'预购队列',
	            type:'bar',
	            xAxisIndex: 1,
	            yAxisIndex: 1,
	            data:(function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push(Math.round(Math.random() * 1000));
	                }
	                return res;
	            })()
	        },
	        {
	            name:'最新成交价',
	            type:'line',
	            data:(function (){
	                var res = [];
	                var len = 10;
	                while (len--) {
	                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
	                }
	                return res;
	            })()
	        }
	    ]
	};
	var lastData1 = 11;
	var axisData1;
	var timeTicket1;
	clearInterval(timeTicket1);
	timeTicket1 = setInterval(function (){
	    lastData1 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
	    lastData1 = lastData1.toFixed(1) - 0;
	    axisData1 = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
	    
	    // 动态数据接口 addData
	    myChart1.addData([
	        [
	            0,        // 系列索引
	            Math.round(Math.random() * 1000), // 新增数据
	            true,     // 新增数据是否从队列头部插入
	            false     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	        ],
	        [
	            1,        // 系列索引
	            lastData1, // 新增数据
	            false,    // 新增数据是否从队列头部插入
	            false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	            axisData1  // 坐标轴标签
	        ]
	    ]);
	}, 2100);
	
 myChart1.setOption(option1);

 var myChart2 = echarts.init(document.getElementById('other2'));
 var option2 = {
 	    title : {
 	        text: '动态数据',
 	        subtext: '纯属虚构'
 	    },
 	    tooltip : {
 	        trigger: 'axis'
 	    },
 	    legend: {
 	        data:['上证指数', '随机数据']
 	    },
 	    dataZoom : {
 	        show : true,
 	        realtime: true,
 	        start : 50,
 	        end : 100
 	    },
 	    xAxis : [
 	        {
 	            type : 'category',
 	            boundaryGap : true,
 	            data : [
 	                "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
 	                "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
 	                "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
 	                "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
 	                "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
 	                "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
 	                "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
 	                "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
 	                "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
 	                "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
 	                "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
 	                "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
 	                "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
 	                "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
 	                "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
 	                "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
 	                "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
 	                "2013/6/6", "2013/6/7", "2013/6/13"
 	            ]
 	        },
 	        {
 	            type : 'value',
 	            max:100,
 	            scale: true
 	        }
 	    ],
 	    yAxis : [
 	        {
 	            type : 'value',
 	            scale:true,
 	            splitNumber: 5,
 	            boundaryGap: [0.05, 0.05]
 	        },
 	        {
 	            type : 'value',
 	            splitNumber: 5,
 	            scale: true
 	        }
 	    ],
 	    series : [
 	        {
 	            name:'上证指数',
 	            type:'k',
 	            data:[ // 开盘，收盘，最低，最高
 	                [2320.26,2302.6,2287.3,2362.94],
 	                [2300,2291.3,2288.26,2308.38],
 	                [2295.35,2346.5,2295.35,2346.92],
 	                [2347.22,2358.98,2337.35,2363.8],
 	                [2360.75,2382.48,2347.89,2383.76],
 	                [2383.43,2385.42,2371.23,2391.82],
 	                [2377.41,2419.02,2369.57,2421.15],
 	                [2425.92,2428.15,2417.58,2440.38],
 	                [2411,2433.13,2403.3,2437.42],
 	                [2432.68,2434.48,2427.7,2441.73],
 	                [2430.69,2418.53,2394.22,2433.89],
 	                [2416.62,2432.4,2414.4,2443.03],
 	                [2441.91,2421.56,2415.43,2444.8],
 	                [2420.26,2382.91,2373.53,2427.07],
 	                [2383.49,2397.18,2370.61,2397.94],
 	                [2378.82,2325.95,2309.17,2378.82],
 	                [2322.94,2314.16,2308.76,2330.88],
 	                [2320.62,2325.82,2315.01,2338.78],
 	                [2313.74,2293.34,2289.89,2340.71],
 	                [2297.77,2313.22,2292.03,2324.63],
 	                [2322.32,2365.59,2308.92,2366.16],
 	                [2364.54,2359.51,2330.86,2369.65],
 	                [2332.08,2273.4,2259.25,2333.54],
 	                [2274.81,2326.31,2270.1,2328.14],
 	                [2333.61,2347.18,2321.6,2351.44],
 	                [2340.44,2324.29,2304.27,2352.02],
 	                [2326.42,2318.61,2314.59,2333.67],
 	                [2314.68,2310.59,2296.58,2320.96],
 	                [2309.16,2286.6,2264.83,2333.29],
 	                [2282.17,2263.97,2253.25,2286.33],
 	                [2255.77,2270.28,2253.31,2276.22],
 	                [2269.31,2278.4,2250,2312.08],
 	                [2267.29,2240.02,2239.21,2276.05],
 	                [2244.26,2257.43,2232.02,2261.31],
 	                [2257.74,2317.37,2257.42,2317.86],
 	                [2318.21,2324.24,2311.6,2330.81],
 	                [2321.4,2328.28,2314.97,2332],
 	                [2334.74,2326.72,2319.91,2344.89],
 	                [2318.58,2297.67,2281.12,2319.99],
 	                [2299.38,2301.26,2289,2323.48],
 	                [2273.55,2236.3,2232.91,2273.55],
 	                [2238.49,2236.62,2228.81,2246.87],
 	                [2229.46,2234.4,2227.31,2243.95],
 	                [2234.9,2227.74,2220.44,2253.42],
 	                [2232.69,2225.29,2217.25,2241.34],
 	                [2196.24,2211.59,2180.67,2212.59],
 	                [2215.47,2225.77,2215.47,2234.73],
 	                [2224.93,2226.13,2212.56,2233.04],
 	                [2236.98,2219.55,2217.26,2242.48],
 	                [2218.09,2206.78,2204.44,2226.26],
 	                [2199.91,2181.94,2.39,2204.99],
 	                [2169.63,2194.85,2165.78,2196.43],
 	                [2195.03,2193.8,2178.47,2197.51],
 	                [2181.82,2197.6,2175.44,2206.03],
 	                [2201.12,2244.64,2200.58,2250.11],
 	                [2236.4,2242.17,2232.26,2245.12],
 	                [2242.62,2184.54,2182.81,2242.62],
 	                [2187.35,2218.32,2184.11,2226.12],
 	                [2213.19,2199.31,2191.85,2224.63],
 	                [2203.89,2.91,2173.86,2210.58],
 	                [2170.78,2174.12,2161.14,2179.65],
 	                [2179.05,2205.5,2179.05,2222.81],
 	                [2212.5,2231.17,2212.5,2236.07],
 	                [2227.86,2235.57,2219.44,2240.26],
 	                [2242.39,2246.3,2235.42,2255.21],
 	                [2246.96,2232.97,2221.38,2247.86],
 	                [2228.82,2246.83,2225.81,2247.67],
 	                [2247.68,2241.92,2231.36,2250.85],
 	                [2238.9,2217.01,2205.87,2239.93],
 	                [2217.09,2224.8,2213.58,2225.19],
 	                [2221.34,2251.81,2210.77,2252.87],
 	                [2249.81,2282.87,2248.41,2288.09],
 	                [2286.33,2299.99,2281.9,2309.39],
 	                [2297.11,2305.11,2290.12,2305.3],
 	                [2303.75,2302.4,2292.43,2314.18],
 	                [2293.81,2275.67,2274.1,2304.95],
 	                [2281.45,2288.53,2270.25,2292.59],
 	                [2286.66,2293.08,2283.94,2301.7],
 	                [2293.4,2321.32,2281.47,2322.1],
 	                [2323.54,2324.02,2321.17,2334.33],
 	                [2316.25,2317.75,2310.49,2325.72],
 	                [2320.74,2300.59,2299.37,2325.53],
 	                [2300.21,2299.25,2294.11,2313.43],
 	                [2297.1,2272.42,2264.76,2297.1],
 	                [2270.71,2270.93,2260.87,2276.86],
 	                [2264.43,2242.11,2240.07,2266.69],
 	                [2242.26,2210.9,2205.07,2250.63],
 	                [2190.1,2148.35,2126.22,2190.1]
 	            ]
 	        },
 	        {
 	            name:'随机数据',
 	            type:'scatter',
 	            xAxisIndex: 1,
 	            yAxisIndex: 1,
 	            symbolSize: function (value){
 	                return Math.round(value[2] / 4);
 	            },
 	            data: (function () {
 	                var d = [];
 	                var len = 100;
 	                while (len--) {
 	                    d.push([
 	                        (Math.random()*100).toFixed(2) - 0,
 	                        (Math.random()*100).toFixed(2) - 0,
 	                        (Math.random()*100).toFixed(2) - 0
 	                    ]);
 	                }
 	                return d;
 	            })()
 	        }
 	    ]
 	};
 	var lastIndex2 = 0;
 	var timeTicket2;
 	var len = option2.series[0].data.length;
 	clearInterval(timeTicket2);
 	timeTicket2 = setInterval(function (){
 	    // 动态数据接口 addData
 	    lastIndex2 += 1;
 	    myChart2.addData([
 	        [
 	            0,        // 系列索引
 	            option2.series[0].data[lastIndex2%len], // 新增数据
 	            false,     // 新增数据是否从队列头部插入
 	            false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
 	            option2.xAxis[0].data[lastIndex2%len]
 	        ],
 	        [
 	            1,        // 系列索引
 	            [
 	                (Math.random()*100).toFixed(2) - 0,
 	                (Math.random()*100).toFixed(2) - 0,
 	                (Math.random()*100).toFixed(2) - 0
 	            ], // 新增数据
 	            false,    // 新增数据是否从队列头部插入
 	            false    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
 	        ]
 	    ]);
 	}, 2000);
 	                              	                                    
  myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('other3'));
var option3 = {
	    title : {
	        text: '动态数据',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'item'
	    },
	    legend: {
	        data:['随机数据1','随机数据2','随机数据3','随机数据4','随机数据5']
	    },
	    polar : [
	        {
	            indicator : [
	                { text : '指标一' },
	                { text : '指标二' },
	                { text : '指标三' },
	                { text : '指标四' },
	                { text : '指标五' }
	            ],
	            center : [document.getElementById('other3').offsetWidth - 250, 225],
	            radius : 100
	        }
	    ],
	    calculable : false,
	    series : [
	        {
	            name:'pie',
	            type:'pie',
	            radius : [0, 110],
	            center: [250, 225],
	            data: (function (){
	                var res = [];
	                var len = 0;
	                while (len++ < 5) {
	                    res.push({
	                        name: '随机数据' + len,
	                        value: Math.round(Math.random()*10)
	                    });
	                }
	                return res;
	            })()
	        },
	        {
	            name: 'radar',
	            type: 'radar',
	            itemStyle: {normal: {areaStyle: {type: 'default'}}},
	            data: (function (){
	                var res = [];
	                var len = 0;
	                while (len++ < 3) {
	                    res.push({
	                        name: 'data' + len,
	                        value: [
	                            Math.round(Math.random()*100),
	                            Math.round(Math.random()*100),
	                            Math.round(Math.random()*100),
	                            Math.round(Math.random()*100),
	                            Math.round(Math.random()*100)
	                        ]
	                    });
	                }
	                return res;
	            })()
	        }
	    ]
	};
	var lastIndex3 = 5;
	var axisData;
	var timeTicket3;
	clearInterval(timeTicket3);
	timeTicket3 = setInterval(function (){
	    lastIndex3 += 1;
	    // 动态数据接口 addData
	    myChart3.addData([
	        [
	            0,        // 系列索引
	            {         // 新增数据
	                name: '随机数据' + lastIndex3,
	                value: Math.round(Math.random()*10)
	            }, 
	            false,     // 新增数据是否从队列头部插入
	            false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	            '随机数据' + lastIndex3
	        ],
	        [
	            1,        // 系列索引
	            {         // 新增数据
	                name: 'data' + lastIndex3,
	                value: [
	                    Math.round(Math.random()*100),
	                    Math.round(Math.random()*100),
	                    Math.round(Math.random()*100),
	                    Math.round(Math.random()*100),
	                    Math.round(Math.random()*100)
	                ]
	            }, 
	            false,     // 新增数据是否从队列头部插入
	            false      // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
	        ]
	    ]);
	}, 2000);
                          	                                    
myChart3.setOption(option3);
 
                    
var myChart4 = echarts.init(document.getElementById('other4'));
var option4 = {
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
	        start : 40,
	        end : 60
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : true,
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
	                    list.push(Math.round(Math.random()* 30) + 30);
	                }
	                return list;
	            }()
	        },
	        {
	            name:'最低',
	            type:'bar',
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
	var ecConfig = echarts.config;
	function eConsole(param) {
	    var mes = '【' + param.type + '】';
	    if (typeof param.seriesIndex != 'undefined') {
	        mes += '  seriesIndex : ' + param.seriesIndex;
	        mes += '  dataIndex : ' + param.dataIndex;
	    }
	    if (param.type == 'hover') {
	        document.getElementById('hover-console').innerHTML = 'Event Console : ' + mes;
	    }
	    else {
	        document.getElementById('console').innerHTML = mes;
	    }
	    console.log(param);
	}
	/*
	// -------全局通用
	REFRESH: 'refresh',
	RESTORE: 'restore',
	RESIZE: 'resize',
	CLICK: 'click',
	DBLCLICK: 'dblclick',
	HOVER: 'hover',
	MOUSEOUT: 'mouseout',
	// -------业务交互逻辑
	DATA_CHANGED: 'dataChanged',
	DATA_ZOOM: 'dataZoom',
	DATA_RANGE: 'dataRange',
	DATA_RANGE_HOVERLINK: 'dataRangeHoverLink',
	LEGEND_SELECTED: 'legendSelected',
	LEGEND_HOVERLINK: 'legendHoverLink',
	MAP_SELECTED: 'mapSelected',
	PIE_SELECTED: 'pieSelected',
	MAGIC_TYPE_CHANGED: 'magicTypeChanged',
	DATA_VIEW_CHANGED: 'dataViewChanged',
	TIMELINE_CHANGED: 'timelineChanged',
	MAP_ROAM: 'mapRoam',
	*/
	myChart4.on(ecConfig.EVENT.CLICK, eConsole);
	myChart4.on(ecConfig.EVENT.DBLCLICK, eConsole);
	//myChart4.on(ecConfig.EVENT.HOVER, eConsole);
	myChart4.on(ecConfig.EVENT.DATA_ZOOM, eConsole);
	myChart4.on(ecConfig.EVENT.LEGEND_SELECTED, eConsole);
	myChart4.on(ecConfig.EVENT.MAGIC_TYPE_CHANGED, eConsole);
	myChart4.on(ecConfig.EVENT.DATA_VIEW_CHANGED, eConsole);
	                                           	                                    
    myChart4.setOption(option4);
	                            