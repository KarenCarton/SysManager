var myChart = echarts.init(document.getElementById('mix1'));
//original
var data = [30, 20, 54, 21, 90, 30, 10];
var gap = 0;
var total = 0;
var maxIndex;
var dataArray = (function(){
    var max = Math.max.apply(Math, data);
    var min = Math.min.apply(Math, data);
    gap = Math.round((max - min));
    var nd = [{value:data[0] + gap,symbol:'none'}];
    for (var i = 0, l = data.length; i < l; i++) {
        if (data[i] == max) {
            maxIndex = i;
        }
        total += data[i];
        nd.push(data[i] + gap);
    }
    nd.push({value:data[data.length - 1] + gap,symbol:'none'});
    return nd;
})();

var option1 = {
    backgroundColor:'#fff',
    title : {
        text: '某楼盘销售情况(比例显示有问题)',
        subtext: '纯属虚构 折线饼图交互混搭实例',
        x: 'center'
    },
    legend: {
        data:['销量', '占比'],
        x: 'left',
        orient: 'vertical',
        selectedMode: false
    },
    tooltip : {
        trigger: 'item',
        formatter: function(params){
            if (params.seriesName == '占比') {
                return '总量 : ' + total + '<br/>'
                       + params.name + ' : ' + params.value + '<br/>'
                       + '占比 : ' +  params.percent + '%';
            }
            else if (params.name != '占位'){
                update(params);
                return params.seriesName + '<br/>'
                       + params.name + ' : ' + params.value;
            }
        },
        axisPointer: {
            type: 'none'
        }
    },
    grid:{
        backgroundColor:'#ccc',
        borderWidth:0
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            show : false,
            data : ['占位','周一','周二','周三','周四','周五','周六','周日','占位']
        }
    ],
    yAxis : [
        {
            type : 'value',
            boundaryGap:[0,0.5],
            show : false
        }
    ],
    animation: false,
    series : [
        {
            name:'销量',
            type:'line',
            symbol: 'emptyCircle',
            symbolSize: 6,
            showAllSymbol:true,
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: dataArray
        },
        {
            name:'遮罩',
            type:'pie',
            clickable:false,
            tooltip: {show:false},
            radius : [100, 180],
            itemStyle: {
                normal: {color: '#fff',label:{show:false},labelLine:{show:false}},
                emphasis: {color:'rgba(0,0,0,0)'}
            },
            data:[
              {value:100, name:'直接访问'}
            ]
        },
        {
            name:'占比',
            type:'pie',
            clickable: false,
            clockWise: true,
            radius : [110, 125],
            data:[
              {
                  itemStyle: {normal: {
                      label:{
                          position:'inside',
                          formatter: '\n{b} : {c}\n\n( {d}% )',
                          textStyle: {
                              fontSize: 15,
                              baseline: 'top',
                              color: '#1e90ff'
                          }
                      },
                      labelLine:{show:false}
                  }}
              },
              {
                  name:'其他',
                  tooltip: {show:false},
                  itemStyle: {normal: {color: '#fff',label:{show:false},labelLine:{show:false}}}
              }
            ]
        }
    ]
};
function changePieSeries(params) {
    var curData = params.value - gap;
    option1.series[2].startAngle = -90 + (curData / total * 360) / 2;
    option1.series[2].data[0].name = params.name;
    option1.series[2].data[0].value = curData;
    option1.series[2].data[1].value = total - curData;
    
    for (var i = 1, l = option1.series[0].data.length - 1; i < l; i++) {
        if (option1.series[0].data[i].symbol) {
            option1.series[0].data[i].symbol = 'emptyCircle';
            option1.series[0].data[i].symbolSize = 6;
        }
    }
    option1.series[0].data[params.dataIndex] = {
        name : params.name,
        value : params.value,
        symbol: 'emptyDiamond',
        symbolSize: 10
    }
}
function update(params){
    changePieSeries(params);
    option1.animation = true;
    myChart.setOption(option1);
}
changePieSeries({
    name : option1.xAxis[0].data[maxIndex + 1],
    value : option1.series[0].data[maxIndex + 1],
    dataIndex: maxIndex + 1
});
                    
     myChart.setOption(option1); 

var option2 = {
	    title : {
	        text: '2013年上半年上证指数'
	    },
	    tooltip : {
	        trigger: 'axis',
	        formatter: function (params) {
	            var res = params[0].name;
	            for (var i = params.length - 1; i >= 0; i--) {
	                if (params[i].value instanceof Array) {
	                    res += '<br/>' + params[i].seriesName;
	                    res += '<br/>  开盘 : ' + params[i].value[0] + '  最高 : ' + params[i].value[3];
	                    res += '<br/>  收盘 : ' + params[i].value[1] + '  最低 : ' + params[i].value[2];
	                }
	                else {
	                    res += '<br/>' + params[i].seriesName;
	                    res += ' : ' + params[i].value;
	                }
	            }
	            return res;
	        }
	    },
	    legend: {
	        data:['上证指数','成交金额(万)']
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
	            axisTick: {onGap:false},
	            splitLine: {show:false},
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
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            scale:true,
	            splitNumber: 5,
	            boundaryGap: [0.01, 0.01]
	        },
	        {
	            type : 'value',
	            scale:true,
	            splitNumber: 5,
	            boundaryGap: [0.05, 0.05],
	            axisLabel: {
	                formatter: function (v) {
	                    return Math.round(v/10000) + ' 万'
	                }
	            }
	        }
	    ],
	    series : [
	        {
	            name:'成交金额(万)',
	            type:'line',
	            yAxisIndex: 1,
	            symbol: 'none',
	            data:[
	                13560434, 8026738.5, 11691637, 12491697, 12485603, 
	                11620504, 12555496, 15253370, 12709611, 10458354, 
	                10933507, 9896523, 10365702, 10633095, 9722230, 
	                12662783, 8757982, 7764234, 10591719, 8826293, 
	                11591827, 11153111, 14304651, 11672120, 12536480, 
	                12608589, 8843860, 7391994.5, 10063709, 7768895.5, 
	                6921859, 10157810, 8148617.5, 7551207, 11397426, 
	                10478607, 8595132, 8541862, 9181132, 8570842, 
	                10759351, 7335819, 6699753.5, 7759666.5, 6880135.5, 
	                7366616.5, 7313504, 7109021.5, 6213270, 5619688, 
	                5816217.5, 6695584.5, 5998655.5, 6188812.5, 9538301,
	                8224500, 8221751.5, 7897721, 8448324, 6525151, 
	                5987761, 7831570, 8162560.5, 7904092, 8139084.5, 
	                9116529, 8128014, 7919148, 7566047, 6665826.5, 
	                10225527, 11124881, 12884353, 11302521, 11529046, 
	                11105205, 9202153, 9992016, 12035250, 11431155, 
	                10354677, 10070399, 9164861, 9237718, 7114268, 
	                7526158.5, 8105835, 7971452.5
	            ],
	            markPoint : {
	                symbol: 'emptyPin',
	                itemStyle : {
	                    normal : {
	                        color:'#1e90ff',
	                        label : {
	                            show:true,
	                            position:'top',
	                            formatter: function (param) {
	                                return Math.round(param.value/10000) + ' 万'
	                            }
	                        }
	                    }
	                },
	                data : [
	                    {type : 'max', name: '最大值', symbolSize:5},
	                    {type : 'min', name: '最小值', symbolSize:5}
	                ]
	            },
	            markLine : {
	                symbol : 'none',
	                itemStyle : {
	                    normal : {
	                        color:'#1e90ff',
	                        label : {
	                            show:true,
	                            formatter: function (param) {
	                                return Math.round(param.value/10000) + ' 万'
	                            }
	                        }
	                    }
	                },
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
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
    //relation("mix1",option1);
    relation("mix2",option2);
    relation("mix3",option3);
    relation("mix4",option4);