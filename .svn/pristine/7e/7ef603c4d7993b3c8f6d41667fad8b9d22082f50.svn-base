var myChart1 = echarts.init(document.getElementById('map1'));
var effect = {
	    show: true,
	    //scaleSize: require('zrender/tool/env').canvasSupported ? 1 : 2,
	    period: 30,          // 运动周期，无单位，值越大越慢
	    color: '#fff',
	    shadowColor: 'rgba(220,220,220,0.4)',
	    shadowBlur : 5 
	};
	function itemStyle(idx) {
	    return {
	        normal: {
	            color:'#fff',
	            borderWidth:1,
	            borderColor:['rgba(30,144,255,1)','lime'][idx],
	            lineStyle: {
	            //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
	            //shadowBlur: 10,
	            //shadowOffsetX: 0,
	            //shadowOffsetY: 0,
	                type: 'solid'
	            }
	        }
	    };
	};
	var option1 = {

	    backgroundColor: '#1b1b1b',
	    color: ['rgba(30,144,255,1)','lime'],
	    title : {
	        text: '中国铁路运输主干线',
	        subtext:'数据来自维基百科',
	        sublink: 'http://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E9%93%81%E8%B7%AF%E8%BF%90%E8%BE%93',
	        x:'center',
	        textStyle : {
	            color: '#fff'
	        }
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: '{b}'
	    },
	    legend: {
	        orient: 'vertical',
	        x:'left',
	        selectedMode:'single',
	        data:['八纵通道', '八横通道'],
	        textStyle : {
	            color: '#fff'
	        }
	    },
	    series : [
	        {
	            name: '八纵通道',
	            type: 'map',
	            roam: true,
	            hoverable: false,
	            mapType: 'china',
	            itemStyle:{
	                normal:{
	                    borderColor:'rgba(100,149,237,1)',
	                    borderWidth:0.5,
	                    areaStyle:{
	                        color: '#1b1b1b'
	                    }
	                }
	            },
	            data:[],
	            markLine : {
	                symbol: ['circle', 'circle'],  
	                symbolSize : 1,
	                effect : effect,
	                itemStyle : itemStyle(0),
	                smooth:true,
	                data : [
	                    [{name:'北京'}, {name:'哈尔滨'}],
	                    [{name:'哈尔滨'}, {name:'满洲里'}],
	                    
	                    [{name:'沈阳'}, {name:'大连'}],
	                    [{name:'大连'}, {name:'烟台'}],
	                    [{name:'烟台'}, {name:'青岛'}],
	                    [{name:'青岛'}, {name:'淮安'}],
	                    [{name:'淮安'}, {name:'上海'}],
	                    [{name:'上海'}, {name:'杭州'}],
	                    [{name:'杭州'}, {name:'宁波'}],
	                    [{name:'宁波'}, {name:'温州'}],
	                    [{name:'温州'}, {name:'福州'}],
	                    [{name:'福州'}, {name:'厦门'}],
	                    [{name:'厦门'}, {name:'广州'}],
	                    [{name:'广州'}, {name:'湛江'}],
	                    
	                    [{name:'北京'}, {name:'天津'}],
	                    [{name:'天津'}, {name:'济南'}],
	                    [{name:'济南'}, {name:'南京'}],
	                    [{name:'南京'}, {name:'上海'}],
	                    
	                    [{name:'北京'}, {name:'南昌'}],
	                    [{name:'南昌'}, {name:'深圳'}],
	                    [{name:'深圳'}, {name:'九龙红磡'}],
	                    
	                    [{name:'北京'}, {name:'郑州'}],
	                    [{name:'郑州'}, {name:'武汉'}],
	                    [{name:'武汉'}, {name:'广州'}],
	                    
	                    [{name:'大同'}, {name:'太原'}],
	                    [{name:'太原'}, {name:'焦作'}],
	                    [{name:'焦作'}, {name:'洛阳'}],
	                    [{name:'洛阳'}, {name:'柳州'}],
	                    [{name:'柳州'}, {name:'湛江'}],
	                    
	                    [{name:'包头'}, {name:'西安'}],
	                    [{name:'西安'}, {name:'重庆'}],
	                    [{name:'重庆'}, {name:'贵阳'}],
	                    [{name:'贵阳'}, {name:'柳州'}],
	                    [{name:'柳州'}, {name:'南宁'}],
	                    
	                    [{name:'兰州'}, {name:'成都'}],
	                    [{name:'成都'}, {name:'昆明'}]
	                ]
	            }
	        },
	        {
	            name: '八横通道',
	            type: 'map',
	            mapType: 'china',
	            itedmStyle:{
	                normal:{
	                    borderColor:'rgba(100,149,237,1)',
	                    borderWidth:0.5,
	                    areaStyle:{
	                        color: '#1b1b1b'
	                    }
	                }
	            },
	            data:[],
	            markLine : {
	                symbol: ['circle', 'circle'],  
	                symbolSize : 1,
	                effect : effect,
	                itemStyle : itemStyle(1),
	                smooth:true,
	                data : [
	                    [{name:'北京'}, {name:'兰州'}],
	                    [{name:'兰州'}, {name:'拉萨'}],
	                    
	                    [{name:'大同'}, {name:'秦皇岛'}],
	                    
	                    [{name:'神木'}, {name:'黄骅'}],
	                    
	                    [{name:'太原'}, {name:'德州'}],
	                    [{name:'德州'}, {name:'龙口'}],
	                    [{name:'龙口'}, {name:'烟台'}],
	                    
	                    [{name:'太原'}, {name:'德州'}],
	                    [{name:'德州'}, {name:'济南'}],
	                    [{name:'济南'}, {name:'青岛'}],
	                    
	                    [{name:'长治'}, {name:'邯郸'}],
	                    [{name:'邯郸'}, {name:'济南'}],
	                    [{name:'济南'}, {name:'青岛'}],
	                    
	                    [{name:'瓦塘'}, {name:'临汾'}],
	                    [{name:'临汾'}, {name:'长治'}],
	                    [{name:'长治'}, {name:'汤阴'}],
	                    [{name:'汤阴'}, {name:'台前'}],
	                    [{name:'台前'}, {name:'兖州'}],
	                    [{name:'兖州'}, {name:'日照'}],
	                    
	                    [{name:'侯马'}, {name:'月山'}],
	                    [{name:'月山'}, {name:'新乡'}],
	                    [{name:'新乡'}, {name:'兖州'}],
	                    [{name:'兖州'}, {name:'日照'}],
	                    
	                    [{name:'连云港'}, {name:'郑州'}],
	                    [{name:'郑州'}, {name:'兰州'}],
	                    [{name:'兰州'}, {name:'乌鲁木齐'}],
	                    [{name:'乌鲁木齐'}, {name:'阿拉山口'}],
	                    
	                    [{name:'西安'}, {name:'南阳'}],
	                    [{name:'南阳'}, {name:'信阳'}],
	                    [{name:'信阳'}, {name:'合肥'}],
	                    [{name:'合肥'}, {name:'南京'}],
	                    [{name:'南京'}, {name:'启东'}],
	                    
	                    [{name:'重庆'}, {name:'武汉'}],
	                    [{name:'武汉'}, {name:'九江'}],
	                    [{name:'九江'}, {name:'铜陵'}],
	                    [{name:'铜陵'}, {name:'南京'}],
	                    [{name:'南京'}, {name:'上海'}],
	                    
	                    [{name:'上海'}, {name:'怀化'}],
	                    [{name:'怀化'}, {name:'重庆'}],
	                    [{name:'重庆'}, {name:'成都'}],
	                    [{name:'成都'}, {name:'贵阳'}],
	                    [{name:'贵阳'}, {name:'昆明'}],
	                    
	                    [{name:'昆明'}, {name:'南宁'}],
	                    [{name:'南宁'}, {name:'黎塘'}],
	                    [{name:'黎塘'}, {name:'湛江'}]
	                ]
	            },
	            geoCoord: {
	                '阿拉山口':[82.5757,45.1706],
	                '包头':[109.8403,40.6574],
	                '北京':[116.4075,39.9040],
	                '成都':[104.0665,30.5723],
	                '大连':[121.6147,38.9140],
	                '大同':[113.3001,40.0768],
	                '德州':[116.3575,37.4341],
	                '福州':[119.2965,26.0745],
	                '广州':[113.2644,23.1292],
	                '贵阳':[106.6302,26.6477],
	                '哈尔滨':[126.5363,45.8023],
	                '邯郸':[114.5391,36.6256],
	                '杭州':[120.1551,30.2741],
	                '合肥':[117.2272,31.8206],
	                '侯马':[111.3720,35.6191],
	                '怀化':[109.9985,27.5550],
	                '淮安':[119.0153,33.6104],
	                '黄骅':[117.3300,38.3714],
	                '济南':[117.1205,36.6510],
	                '焦作':[113.2418,35.2159],
	                '九江':[116.0019,29.7051],
	                '九龙红磡':[114.1870,22.3076],
	                '昆明':[102.8329,24.8801],
	                '拉萨':[91.1409,29.6456],
	                '兰州':[103.8343,36.0611],
	                '黎塘':[109.1363,23.2066],
	                '连云港':[119.2216,34.5967],
	                '临汾':[111.5190,36.0880],
	                '柳州':[109.4160,24.3255],
	                '龙口':[120.4778,37.6461],
	                '洛阳':[112.4540,34.6197],
	                '满洲里':[117.3787,49.5978],
	                '南昌':[115.8581,28.6832],
	                '南京':[118.7969,32.0603],
	                '南宁':[108.3661,22.8172],
	                '南阳':[112.5283,32.9908],
	                '宁波':[121.5440,29.8683],
	                '启东':[121.6574,31.8082],
	                '秦皇岛':[119.6005,39.9354],
	                '青岛':[120.3826,36.0671],
	                '日照':[119.5269,35.4164],
	                '厦门':[118.0894,24.4798],
	                '上海':[121.4737,31.2304],
	                '深圳':[114.0579,22.5431],
	                '神木':[110.4871,38.8610],
	                '沈阳':[123.4315,41.8057],
	                '台前':[115.8717,35.9701],
	                '太原':[112.5489,37.8706],
	                '汤阴':[114.3572,35.9218],
	                '天津':[117.2010,39.0842],
	                '铜陵':[117.8121,30.9454],
	                '瓦塘':[109.7600,23.3161],
	                '温州':[120.6994,27.9943],
	                '乌鲁木齐':[87.6168,43.8256],
	                '武汉':[114.3054,30.5931],
	                '西安':[108.9402,34.3416],
	                '新乡':[113.9268,35.3030],
	                '信阳':[114.0913,32.1470],
	                '烟台':[121.4479,37.4638],
	                '兖州':[116.7838,35.5531],
	                '月山':[113.0550,35.2104],
	                '湛江':[110.3594,21.2707],
	                '长治':[113.1163,36.1954],
	                '郑州':[113.6254,34.7466],
	                '重庆':[106.5516,29.5630]
	            }
	        }
	    ]
	};
myChart1.setOption(option1);  


var myChart2 = echarts.init(document.getElementById('map2'));
var placeList=[
                 {name:'海门', geoCoord:[121.15, 31.89]},
                 {name:'鄂尔多斯', geoCoord:[109.781327, 39.608266]},
                 {name:'招远', geoCoord:[120.38, 37.35]},
                 {name:'舟山', geoCoord:[122.207216, 29.985295]},
                 {name:'齐齐哈尔', geoCoord:[123.97, 47.33]},
                 {name:'盐城', geoCoord:[120.13, 33.38]},
                 {name:'赤峰', geoCoord:[118.87, 42.28]},
                 {name:'青岛', geoCoord:[120.33, 36.07]},
                 {name:'乳山', geoCoord:[121.52, 36.89]},
                 {name:'金昌', geoCoord:[102.188043, 38.520089]},
                 {name:'泉州', geoCoord:[118.58, 24.93]},
                 {name:'莱西', geoCoord:[120.53, 36.86]},
                 {name:'日照', geoCoord:[119.46, 35.42]},
                 {name:'胶南', geoCoord:[119.97, 35.88]},
                 {name:'南通', geoCoord:[121.05, 32.08]},
                 {name:'拉萨', geoCoord:[91.11, 29.97]},
                 {name:'云浮', geoCoord:[112.02, 22.93]},
                 {name:'梅州', geoCoord:[116.1, 24.55]},
                 {name:'文登', geoCoord:[122.05, 37.2]},
                 {name:'上海', geoCoord:[121.48, 31.22]},
                 {name:'攀枝花', geoCoord:[101.718637, 26.582347]},
                 {name:'威海', geoCoord:[122.1, 37.5]},
                 {name:'承德', geoCoord:[117.93, 40.97]},
                 {name:'厦门', geoCoord:[118.1, 24.46]},
                 {name:'汕尾', geoCoord:[115.375279, 22.786211]},
                 {name:'潮州', geoCoord:[116.63, 23.68]},
                 {name:'丹东', geoCoord:[124.37, 40.13]},
                 {name:'太仓', geoCoord:[121.1, 31.45]},
                 {name:'曲靖', geoCoord:[103.79, 25.51]},
                 {name:'烟台', geoCoord:[121.39, 37.52]},
                 {name:'福州', geoCoord:[119.3, 26.08]},
                 {name:'瓦房店', geoCoord:[121.979603, 39.627114]},
                 {name:'即墨', geoCoord:[120.45, 36.38]},
                 {name:'抚顺', geoCoord:[123.97, 41.97]},
                 {name:'玉溪', geoCoord:[102.52, 24.35]},
                 {name:'张家口', geoCoord:[114.87, 40.82]},
                 {name:'阳泉', geoCoord:[113.57, 37.85]},
                 {name:'莱州', geoCoord:[119.942327, 37.017]},
                 {name:'湖州', geoCoord:[120.1, 30.86]},
                 {name:'汕头', geoCoord:[116.69, 23.39]},
                 {name:'昆山', geoCoord:[120.95, 31.39]},
                 {name:'宁波', geoCoord:[121.56, 29.86]},
                 {name:'湛江', geoCoord:[110.359377, 21.270708]},
                 {name:'揭阳', geoCoord:[116.35, 23.55]},
                 {name:'荣成', geoCoord:[122.41, 37.16]},
                 {name:'连云港', geoCoord:[119.16, 34.59]},
                 {name:'葫芦岛', geoCoord:[120.836932, 40.711052]},
                 {name:'常熟', geoCoord:[120.74, 31.64]},
                 {name:'东莞', geoCoord:[113.75, 23.04]},
                 {name:'河源', geoCoord:[114.68, 23.73]},
                 {name:'淮安', geoCoord:[119.15, 33.5]},
                 {name:'泰州', geoCoord:[119.9, 32.49]},
                 {name:'南宁', geoCoord:[108.33, 22.84]},
                 {name:'营口', geoCoord:[122.18, 40.65]},
                 {name:'惠州', geoCoord:[114.4, 23.09]},
                 {name:'江阴', geoCoord:[120.26, 31.91]},
                 {name:'蓬莱', geoCoord:[120.75, 37.8]},
                 {name:'韶关', geoCoord:[113.62, 24.84]},
                 {name:'嘉峪关', geoCoord:[98.289152, 39.77313]},
                 {name:'广州', geoCoord:[113.23, 23.16]},
                 {name:'延安', geoCoord:[109.47, 36.6]},
                 {name:'太原', geoCoord:[112.53, 37.87]},
                 {name:'清远', geoCoord:[113.01, 23.7]},
                 {name:'中山', geoCoord:[113.38, 22.52]},
                 {name:'昆明', geoCoord:[102.73, 25.04]},
                 {name:'寿光', geoCoord:[118.73, 36.86]},
                 {name:'盘锦', geoCoord:[122.070714, 41.119997]},
                 {name:'长治', geoCoord:[113.08, 36.18]},
                 {name:'深圳', geoCoord:[114.07, 22.62]},
                 {name:'珠海', geoCoord:[113.52, 22.3]},
                 {name:'宿迁', geoCoord:[118.3, 33.96]},
                 {name:'咸阳', geoCoord:[108.72, 34.36]},
                 {name:'铜川', geoCoord:[109.11, 35.09]},
                 {name:'平度', geoCoord:[119.97, 36.77]},
                 {name:'佛山', geoCoord:[113.11, 23.05]},
                 {name:'海口', geoCoord:[110.35, 20.02]},
                 {name:'江门', geoCoord:[113.06, 22.61]},
                 {name:'章丘', geoCoord:[117.53, 36.72]},
                 {name:'肇庆', geoCoord:[112.44, 23.05]},
                 {name:'大连', geoCoord:[121.62, 38.92]},
                 {name:'临汾', geoCoord:[111.5, 36.08]},
                 {name:'吴江', geoCoord:[120.63, 31.16]},
                 {name:'石嘴山', geoCoord:[106.39, 39.04]},
                 {name:'沈阳', geoCoord:[123.38, 41.8]},
                 {name:'苏州', geoCoord:[120.62, 31.32]},
                 {name:'茂名', geoCoord:[110.88, 21.68]},
                 {name:'嘉兴', geoCoord:[120.76, 30.77]},
                 {name:'长春', geoCoord:[125.35, 43.88]},
                 {name:'胶州', geoCoord:[120.03336, 36.264622]},
                 {name:'银川', geoCoord:[106.27, 38.47]},
                 {name:'张家港', geoCoord:[120.555821, 31.875428]},
                 {name:'三门峡', geoCoord:[111.19, 34.76]},
                 {name:'锦州', geoCoord:[121.15, 41.13]},
                 {name:'南昌', geoCoord:[115.89, 28.68]},
                 {name:'柳州', geoCoord:[109.4, 24.33]},
                 {name:'三亚', geoCoord:[109.511909, 18.252847]},
                 {name:'自贡', geoCoord:[104.778442, 29.33903]},
                 {name:'吉林', geoCoord:[126.57, 43.87]},
                 {name:'阳江', geoCoord:[111.95, 21.85]},
                 {name:'泸州', geoCoord:[105.39, 28.91]},
                 {name:'西宁', geoCoord:[101.74, 36.56]},
                 {name:'宜宾', geoCoord:[104.56, 29.77]},
                 {name:'呼和浩特', geoCoord:[111.65, 40.82]},
                 {name:'成都', geoCoord:[104.06, 30.67]},
                 {name:'大同', geoCoord:[113.3, 40.12]},
                 {name:'镇江', geoCoord:[119.44, 32.2]},
                 {name:'桂林', geoCoord:[110.28, 25.29]},
                 {name:'张家界', geoCoord:[110.479191, 29.117096]},
                 {name:'宜兴', geoCoord:[119.82, 31.36]},
                 {name:'北海', geoCoord:[109.12, 21.49]},
                 {name:'西安', geoCoord:[108.95, 34.27]},
                 {name:'金坛', geoCoord:[119.56, 31.74]},
                 {name:'东营', geoCoord:[118.49, 37.46]},
                 {name:'牡丹江', geoCoord:[129.58, 44.6]},
                 {name:'遵义', geoCoord:[106.9, 27.7]},
                 {name:'绍兴', geoCoord:[120.58, 30.01]},
                 {name:'扬州', geoCoord:[119.42, 32.39]},
                 {name:'常州', geoCoord:[119.95, 31.79]},
                 {name:'潍坊', geoCoord:[119.1, 36.62]},
                 {name:'重庆', geoCoord:[106.54, 29.59]},
                 {name:'台州', geoCoord:[121.420757, 28.656386]},
                 {name:'南京', geoCoord:[118.78, 32.04]},
                 {name:'滨州', geoCoord:[118.03, 37.36]},
                 {name:'贵阳', geoCoord:[106.71, 26.57]},
                 {name:'无锡', geoCoord:[120.29, 31.59]},
                 {name:'本溪', geoCoord:[123.73, 41.3]},
                 {name:'克拉玛依', geoCoord:[84.77, 45.59]},
                 {name:'渭南', geoCoord:[109.5, 34.52]},
                 {name:'马鞍山', geoCoord:[118.48, 31.56]},
                 {name:'宝鸡', geoCoord:[107.15, 34.38]},
                 {name:'焦作', geoCoord:[113.21, 35.24]},
                 {name:'句容', geoCoord:[119.16, 31.95]},
                 {name:'北京', geoCoord:[116.46, 39.92]},
                 {name:'徐州', geoCoord:[117.2, 34.26]},
                 {name:'衡水', geoCoord:[115.72, 37.72]},
                 {name:'包头', geoCoord:[110, 40.58]},
                 {name:'绵阳', geoCoord:[104.73, 31.48]},
                 {name:'乌鲁木齐', geoCoord:[87.68, 43.77]},
                 {name:'枣庄', geoCoord:[117.57, 34.86]},
                 {name:'杭州', geoCoord:[120.19, 30.26]},
                 {name:'淄博', geoCoord:[118.05, 36.78]},
                 {name:'鞍山', geoCoord:[122.85, 41.12]},
                 {name:'溧阳', geoCoord:[119.48, 31.43]},
                 {name:'库尔勒', geoCoord:[86.06, 41.68]},
                 {name:'安阳', geoCoord:[114.35, 36.1]},
                 {name:'开封', geoCoord:[114.35, 34.79]},
                 {name:'济南', geoCoord:[117, 36.65]},
                 {name:'德阳', geoCoord:[104.37, 31.13]},
                 {name:'温州', geoCoord:[120.65, 28.01]},
                 {name:'九江', geoCoord:[115.97, 29.71]},
                 {name:'邯郸', geoCoord:[114.47, 36.6]},
                 {name:'临安', geoCoord:[119.72, 30.23]},
                 {name:'兰州', geoCoord:[103.73, 36.03]},
                 {name:'沧州', geoCoord:[116.83, 38.33]},
                 {name:'临沂', geoCoord:[118.35, 35.05]},
                 {name:'南充', geoCoord:[106.110698, 30.837793]},
                 {name:'天津', geoCoord:[117.2, 39.13]},
                 {name:'富阳', geoCoord:[119.95, 30.07]},
                 {name:'泰安', geoCoord:[117.13, 36.18]},
                 {name:'诸暨', geoCoord:[120.23, 29.71]},
                 {name:'郑州', geoCoord:[113.65, 34.76]},
                 {name:'哈尔滨', geoCoord:[126.63, 45.75]},
                 {name:'聊城', geoCoord:[115.97, 36.45]},
                 {name:'芜湖', geoCoord:[118.38, 31.33]},
                 {name:'唐山', geoCoord:[118.02, 39.63]},
                 {name:'平顶山', geoCoord:[113.29, 33.75]},
                 {name:'邢台', geoCoord:[114.48, 37.05]},
                 {name:'德州', geoCoord:[116.29, 37.45]},
                 {name:'济宁', geoCoord:[116.59, 35.38]},
                 {name:'荆州', geoCoord:[112.239741, 30.335165]},
                 {name:'宜昌', geoCoord:[111.3, 30.7]},
                 {name:'义乌', geoCoord:[120.06, 29.32]},
                 {name:'丽水', geoCoord:[119.92, 28.45]},
                 {name:'洛阳', geoCoord:[112.44, 34.7]},
                 {name:'秦皇岛', geoCoord:[119.57, 39.95]},
                 {name:'株洲', geoCoord:[113.16, 27.83]},
                 {name:'石家庄', geoCoord:[114.48, 38.03]},
                 {name:'莱芜', geoCoord:[117.67, 36.19]},
                 {name:'常德', geoCoord:[111.69, 29.05]},
                 {name:'保定', geoCoord:[115.48, 38.85]},
                 {name:'湘潭', geoCoord:[112.91, 27.87]},
                 {name:'金华', geoCoord:[119.64, 29.12]},
                 {name:'岳阳', geoCoord:[113.09, 29.37]},
                 {name:'长沙', geoCoord:[113, 28.21]},
                 {name:'衢州', geoCoord:[118.88, 28.97]},
                 {name:'廊坊', geoCoord:[116.7, 39.53]},
                 {name:'菏泽', geoCoord:[115.480656, 35.23375]},
                 {name:'合肥', geoCoord:[117.27, 31.86]},
                 {name:'武汉', geoCoord:[114.31, 30.52]},
                 {name:'大庆', geoCoord:[125.03, 46.58]}
             ]
var option2 = {
                 backgroundColor: '#1b1b1b',
                 color: [
                     'rgba(255, 255, 255, 0.8)',
                     'rgba(14, 241, 242, 0.8)',
                     'rgba(37, 140, 249, 0.8)'
                 ],
                 title : {
                     text: '大规模MarkPoint特效',
                     subtext: '纯属虚构',
                     x:'center',
                     textStyle : {
                         color: '#fff'
                     }
                 },
                 legend: {
                     orient: 'vertical',
                     x:'left',
                     data:['强','中','弱'],
                     textStyle : {
                         color: '#fff'
                     }
                 },
                 series : [
                     {
                         name: '弱',
                         type: 'map',
                         mapType: 'china',
                         itemStyle:{
                             normal:{
                                 borderColor:'rgba(100,149,237,1)',
                                 borderWidth:1.5,
                                 areaStyle:{
                                     color: '#1b1b1b'
                                 }
                             }
                         },
                         data : [],
                         markPoint : {
                             symbolSize: 2,
                             large: true,
                             effect : {
                                 show: true
                             },
                             data : (function(){
                                 var data = [];
                                 var len = 3000;
                                 var geoCoord
                                 while(len--) {
                                     geoCoord = placeList[len % placeList.length].geoCoord;
                                     data.push({
                                         name : placeList[len % placeList.length].name + len,
                                         value : 10,
                                         geoCoord : [
                                             geoCoord[0] + Math.random() * 5 - 2.5,
                                             geoCoord[1] + Math.random() * 3 - 1.5
                                         ]
                                     })
                                 }
                                 return data;
                             })()
                         }
                     },
                     {
                         name: '中',
                         type: 'map',
                         mapType: 'china',
                         data : [],
                         markPoint : {
                             symbolSize: 3,
                             large: true,
                             effect : {
                                 show: true
                             },
                             data : (function(){
                                 var data = [];
                                 var len = 1000;
                                 var geoCoord
                                 while(len--) {
                                     geoCoord = placeList[len % placeList.length].geoCoord;
                                     data.push({
                                         name : placeList[len % placeList.length].name + len,
                                         value : 50,
                                         geoCoord : [
                                             geoCoord[0] + Math.random() * 5 - 2.5,
                                             geoCoord[1] + Math.random() * 3 - 1.5
                                         ]
                                     })
                                 }
                                 return data;
                             })()
                         }
                     },
                     {
                         name: '强',
                         type: 'map',
                         mapType: 'china',
                         hoverable: false,
                         roam:true,
                         data : [],
                         markPoint : {
                             symbol : 'diamond',
                             symbolSize: 6,
                             large: true,
                             effect : {
                                 show: true
                             },
                             data : (function(){
                                 var data = [];
                                 var len = placeList.length;
                                 while(len--) {
                                     data.push({
                                         name : placeList[len].name,
                                         value : 90,
                                         geoCoord : placeList[len].geoCoord
                                     })
                                 }
                                 return data;
                             })()
                         }
                     }
                 ]
             };
myChart2.setOption(option2);   
              

