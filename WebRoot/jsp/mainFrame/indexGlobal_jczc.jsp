<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String contextPath = (String)request.getContextPath();
    request.setAttribute("contextPath",contextPath);
	%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>战役筹划</title>
<script src="<%=contextPath %>/jsp/js/baseJs.js" type="text/javascript"></script>
<style type="text/css">
@import url("<%=contextPath %>/css/lhzz.css");
@import url("<%=contextPath %>/css/table.css");

.table tr td {
	background-color: #40A7E9;
	background-color: #5f7084;
	color: white;
	border-bottom:1px solid #adc3d7 !important;
	border-top:none !important;
}

.table tr th {
	color: wheat;
}

.table td>img {
	width: 20px;
}

.table tbody {
	display: block;
	max-height: 221px;
	width: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
}

.table thead, tbody tr {
	display: table;
	width: 100%;
	table-layout: fixed;
}

.table thead {
	width: -webkit-calc(100% - 0.4em);
	width: -moz-calc(100%);
}

#jh_table>tbody>tr:hover>td, #jh_table>tbody>tr.selTr>td{
	background: rgb(146, 155, 167);
	cursor: pointer;
}
#jh_table td, #zzxdbj_table td {
	font-size: 15px;
}
#jh_table td:first-child, #jh_table th:first-child, #zzxdbj_table td:first-child, #zzxdbj_table th:first-child {
	width: 30px;
    padding: 0;
}
#jh_table td:nth-child(2), #jh_table th:nth-child(2), #zzxdbj_table td:nth-child(2), #zzxdbj_table th:nth-child(2) {
	width: 200px;
    padding: 0;
}
#jh_table td:nth-child(3), #jh_table th:nth-child(3) {
	width: 70px;
    padding: 0;
}
#jh_table td:last-child, #jh_table th:last-child {
	width: 200px;
    padding: 0;
}
#zzxdbj_table td:nth-child(3), #zzxdbj_table th:nth-child(3) {
	width: 40px;
    padding: 0;
}
#zzxdbj_table td:nth-child(3) span {
    color: #ff2e2e;
}
#zzxdbj_table td:nth-child(4), #zzxdbj_table th:nth-child(4), #zzxdbj_table td:nth-child(5), #zzxdbj_table th:nth-child(5) {
	width: 100px;
    padding: 0;
}
.tubiaoDiv h3{
	font-size: 20px;
}
.tubiaoDiv a img{
	width: 120px;
    margin: 5px;
}
#tooltip{
	position:absolute;
	border:1px solid #333;
	background:#f7f5d1;
	padding:1px;
	color:#333;
	display:none;
}

.col-md-4 .tubiaoDiv img {
    height: 75px;
    cursor: pointer;
    margin: 8px;
}
.col-md-2 .tubiaoDiv img {
    height: 58px;
    cursor: pointer;
    margin: 2px;
}
</style>
<script type="text/javascript">
	var contextPath = '<%=contextPath%>';
	var jhid = "";
	function onWindowSize() {
		var parentheight = document.documentElement.clientHeight;
		$('.zyheight').height(parentheight * 0.34 + 'px');
		$('.dkheight').height(parentheight * 0.32 - 32 + 'px');
	}
	$(function() {
			window.onresize = onWindowSize;
			onWindowSize();
			//右下角图标
			$(".tubiaoDiv img").mouseover(function(){
				let src = $(this).attr("src").split(".");
				srcNew = src.join("_o.");
				$(this).attr("src", srcNew);
			}).mouseout(function(){
				let src = $(this).attr("src").split("_o.");
				srcNew = src.join(".");
				$(this).attr("src", srcNew);
			});
			
	})
	
	function selTr(obj){
		$("#jh_table>tbody>tr").removeClass("selTr");
		$(obj).addClass("selTr");
		jhid = $(obj).data("id");
	}
	
	function goPage(url) {
		if (url == "yhgl") {//用户管理
			url = "jsp/yhgl/yhgl.jsp";
		}else{
		    return false;
		}
		location.href = "<%=contextPath %>/" + url;
	}
</script>
</head>
<body>
	<div class="row" style="height: calc(35vh);">
		<div class="col-md-6">
			<div class="bigbox box-primary portlet light contentheight zyheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-tasks"></i>&nbsp;&nbsp;作战想定训练导调管理
						</span>
					</div>
					<a class="bt" href="javascript:goPage('zycggl');"><span>作业空间</span></a>
					<a class="bt six" href="javascript:goPage('xljh');"><span>训练计划管理</span></a>
				</div>
				<div>
					<table class="table" id="jh_table">
						<thead><tr>
							<th>序号</th>
							<th>训练科目</th>
							<th>作业负责人</th>
							<th>作战想定</th>
						</tr></thead>
						<tbody></tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="bigbox box-primary portlet light contentheight zyheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-flag"></i>&nbsp;&nbsp;军事力量管理
						</span>
					</div>
					<a class="bt six" href="javascript:goPage('zzsjgl');"><span>军事力量管理</span></a>
				</div>
				<div style="position:relative;height:18.8%; width:100%">
					<table class="table">
						<thead><tr>
							<th>国家</th>
							<th>陆军</th>
							<th>海军</th>
							<th>空军</th>
							<th>火箭军</th>
							<th>战支</th>
							<th>联勤</th>
						</tr></thead>
						<tbody>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/China32.png"></td>
								<td>521</td>
								<td>115</td>
								<td>512</td>
								<td>194</td>
								<td>156</td>
								<td>134</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/American32.png"></td>
								<td>208</td>
								<td>95</td>
								<td>137</td>
								<td>152</td>
								<td>111</td>
								<td>208</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/Russia32.png"></td>
								<td>267</td>
								<td>72</td>
								<td>371</td>
								<td>142</td>
								<td>181</td>
								<td>105</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/India32.png"></td>
								<td>353</td>
								<td>85</td>
								<td>257</td>
								<td>120</td>
								<td>62</td>
								<td>81</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/Vietnam32.png"></td>
								<td>411</td>
								<td>103</td>
								<td>369</td>
								<td>0</td>
								<td>83</td>
								<td>34</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/japan32.png"></td>
								<td>192</td>
								<td>61</td>
								<td>122</td>
								<td>194</td>
								<td>56</td>
								<td>34</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/Korea32.png"></td>
								<td>156</td>
								<td>134</td>
								<td>131</td>
								<td>95</td>
								<td>94</td>
								<td>86</td>
							</tr>
							<tr>
								<td><img alt="" src="<%=contextPath%>/img/North-Korea32.png"></td>
								<td>69</td>
								<td>125</td>
								<td>122</td>
								<td>0</td>
								<td>66</td>
								<td>42</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	<div class="row" style="height: calc(35vh);">
		<div class="col-md-6">
			<div class="bigbox box-primary portlet light contentheight zyheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-edit"></i>&nbsp;&nbsp;作战想定管理
						</span>
					</div>
					<a class="bt six" href="javascript:goPage('zyxdbj');"><span>作战想定编辑</span></a>
				</div>
				<div style="position:relative;height:18.8%; width:100%">
					<table class="table" id="zzxdbj_table">
						<thead><tr>
							<th>序号</th>
							<th>战役名称</th>
							<th>状态</th>
							<th>开始时间</th>
							<th>结束时间</th>
						</tr></thead>
						<tbody></tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="bigbox box-primary portlet light contentheight zyheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-database"></i>&nbsp;&nbsp;武器装备型号管理
						</span>
					</div>
					<a class="bt eight" href="javascript:goPage('zbxh');"><span>武器装备型号管理</span></a>
				</div>
				<div id="jsllzt" style="height: 248px;width: 99%;overflow: auto;"></div>
			</div>
		</div>
	</div>
	<div class="row" style="height: calc(30vh);">
		<div class="col-md-6">
			<div class="bigbox box-primary portlet light contentheight dkheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-book"></i>&nbsp;&nbsp;作战想定训练档案管理
						</span>
					</div>
				</div>
				<div id="xdzytjPie" style="height: 199px;width: 100%;float: left;overflow: auto;"></div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="bigbox box-primary portlet light contentheight dkheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-wrench"></i>&nbsp;&nbsp;基础支撑
						</span>
					</div>
				</div>
				<div style="height: 84%;width: 50%;float: left;display: flex;">
					<div style="display: table;margin: auto;position: relative;">
						<div class="tubiaoDiv"><img onclick="goPage('tsfx');" alt="" src="indexButton/zctszx.png"></div>
						<div class="tubiaoDiv"><img onclick="goPage('ytbh');" alt="" src="indexButton/ytbh.png"></div>
					</div>
				</div>
				<div style="height: 84%;width: 50%;float: right;display: flex;">
					<div style="display: table;margin: auto;position: relative;right: 5%;">
						<div class="tubiaoDiv"><img alt="" src="indexButton/jdzlgl.png"></div>
						<div class="tubiaoDiv"><img onclick="goPage('tea_ws');" alt="" src="indexButton/jywsgl.png"></div>
					</div>
				</div>
				<!-- <div style="height: 84%;width: 100%;display: flex;overflow: auto;justify-content: center;align-items: center;">
						<div class="tubiaoDiv"><a href="javascript:goPage('tsfx');" title="战场态势展现">
							<img alt="" src="img/xdxldk.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="javascript:goPage('ytbh');" title="要图标绘">
							<img alt="" src="img/ytbh.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="#" title="军用文书管理">
							<img alt="" src="img/wdgl.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="#" title="经典战例管理">
							<img alt="" src="img/zygl.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="javascript:goPage('yhgl');" title="用户管理">
							<img alt="" src="img/yhgl.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="#" title="系统安全配置管理">
							<img alt="" src="img/xtaqpz.png">
					    </a></div>
					    <div class="tubiaoDiv"><a href="#" title="数据库维护管理">
							<img alt="" src="img/shujuweihu.png">
					    </a></div>
				</div> -->
			</div>
		</div>
		<div class="col-md-2">
			<div class="bigbox box-primary portlet light contentheight dkheight">
				<div class="portlet-title">
					<div class="caption">
						<span class="caption-subject font-blue sbold ">
							<i class="fa fa-wrench"></i>&nbsp;&nbsp;系统运维管理
						</span>
					</div>
				</div>
				<div style="height: 84%;width: 100%;display: flex;">
					<div style="display: table;margin: auto;">
						<div class="tubiaoDiv"><img onclick="goPage('yhgl');" alt="" src="indexButton/yhgl.png"></div>
						<div class="tubiaoDiv"><img alt="" src="indexButton/xtaqpzgl.png"></div>
						<div class="tubiaoDiv"><img alt="" src="indexButton/sjwh.png"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</body>
<script type="text/javascript">
	var myChart = echarts.init(document.getElementById('xdzytjPie'));
	var option = {
		grid : { //网格
			left : '1%', //图形在main里的大小
			bottom : '1%',
			right : '1%',
			top : '1%',
			containLabel : true,
		},
		/* color:[
					'#327bfa','#B3C35F','#17d8a1','#2D96CF','#49CED2','#2D96CF','#49CED2','#A5DC86','#2A7DFF','#0fc5f3','#f4c907','#7a3ceb','#AACCF9'
		], */
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b} ({d}%)"
		},
		legend : {
			textStyle : {
				color : '#ffffff',
				fontSize : "14",
				fontFamily : "仿宋",
				fontWeight : "bolder"
			},
			itemGap : 15,
			orient : 'vertical',
			x : '18%', //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
			y : '8%',
			data : [ '平面上陆:20', '垂直上陆:10', '海上输送:20', '火力支援:20', '海上掩护:10', '空中掩护:10' ]
		},
		calculable : true,
		color : [ "#DEBF70", /* "#0D8ECF", */ "#00cbb1", "#568e87", "#91C7AE", "#C3D0B3", /* "#61A0A8", */ "#D48265" ],
		series : [
			{
				name : '任务类型',
				type : 'pie',
				radius : [ '0%', '80%' ],
				center : [ '68%', '50%' ],
				itemStyle : {
					normal : {
						label : {
							show : true,
							position : 'outer',
							formatter : '{d}%',
							fontSize : 12,
							color : 'white',
						}
					}
				},
				data : [
					{
						value : 20,
						name : '平面上陆:20'
					},
					{
						value : 10,
						name : '垂直上陆:10'
					},
					{
						value : 20,
						name : '海上输送:20'
					},
					{
						value : 20,
						name : '火力支援:20'
					},
					{
						value : 10,
						name : '海上掩护:10'
					},
					{
						value : 10,
						name : '空中掩护:10'
					}
				]
			}
		]
	};
	myChart.setOption(option);

	var optionPie;
	var itemStyle = {
		normal : {
			barBorderRadius : [ 5, 5, 0, 0 ],
		},
	};
	var datas1 = [ [ 210, 130, 223, 95, 127, 92, 88, 65 ], [ 130, 90, 162, 86, 45, 107, 56, 75 ], [ 110, 95, 96, 0, 8, 19, 82, 15 ], [ 162, 78, 143, 78, 88, 91, 52, 5 ], [ 331, 265, 276, 117, 108, 97, 82, 75 ], [ 110, 75, 86, 73, 88, 19, 12, 5 ] ];
	var names1 = [ '导弹', '飞机', '军舰', '坦克', '潜艇', '雷达' ];
	$(function() {
		var main = echarts.init(document.getElementById('jsllzt'));
		charts();
		for (var i = 0; i < 6; i++) {
			optionPie.series[i].data = datas1[i];
			optionPie.series[i].type = "bar";
			optionPie.series[i].barWidth = 8;
			optionPie.series[i].name = names1[i];
			optionPie.series[i].itemStyle = itemStyle;
		}
		main.setOption(optionPie);

	})

	function charts() {
		optionPie = { //饼图的option
			title : {
				text : '主战武器',
				padding : [ '5', '10', '5', '10' ],
				textStyle : {
					color : '#FFFFFF',
					fontSize : 14,
				},
			},
			tooltip : {
				trigger : 'axis',
				axisPointer : {
					type : 'shadow',
					shadowStyle : {
						color : 'rgba(150,150,150,0.3)',
						width : 'auto',
						type : 'default'
					}
				}
			},
			legend : {
				textStyle : {
					color : '#ffffff'
				},
				x : '25%', //水平安放位置，默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
				y : '0%',
				orient : 'horizontal', //布局方式，默认为水平布局，可选为：'horizontal' | 'vertical'
				data : [ '导弹', '飞机', '军舰', '坦克', '潜艇', '雷达' ], //图例内容数组，数组项通常为{string}，每一项代表一个系列的name，默认布局到达边缘会自动分行（列），。 
			},
			grid : {
				left : '10%',
				bottom : '12%',
				top : '12%',
				right : '3%',
			},
			xAxis : {
				axisLine : {
					lineStyle : {
						color : 'white',
					},
				},
				type : 'category', //坐标轴类型，横轴默认为类目型'category'，纵轴默认为数值型'value'
				data : [ '中国', '美国', '俄罗斯', '印度', '越南', '日本', '韩国', '朝鲜' ],
				boundaryGap : true, //针对类目型	类目起始和结束两端空白策略，见下图，默认为true留空，false则顶头
			},

			yAxis : {
				axisLine : {
					lineStyle : {
						color : 'white',
					},
				},
				type : 'value',
				splitLine : {
					show : true,
					lineStyle : {
						color : '#061D46',
						width : 1,
						type : 'dashed',
					}
				}
			},
			color : [ "#DEBF70", /* "#0D8ECF", */ "#00cbb1", "#568e87", "#91C7AE", "#C3D0B3", /* "#61A0A8", */ "#D48265" ],
			series : [
				{}, {}, {}, {}, {}, {}
			]
		};

	}
</script>
</html>