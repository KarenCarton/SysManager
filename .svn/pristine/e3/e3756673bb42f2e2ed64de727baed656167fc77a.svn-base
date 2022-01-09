var myChart = echarts.init(document.getElementById('force2'));
var nodes = [];
var links = [];
var constMaxDepth = 4;
var constMaxChildren = 3;
var constMinChildren = 2;
var constMaxRadius = 10;
var constMinRadius = 2;
var mainDom = document.getElementById('force2');

function rangeRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function createRandomNode(depth) {
    var x = mainDom.clientWidth / 2 + (.5 - Math.random()) * 200;
    var y = (mainDom.clientHeight - 20) * depth / (constMaxDepth + 1) + 20;
    var node = {
        name : 'NODE_' + nodes.length,
        value : rangeRandom(constMinRadius, constMaxRadius),
        // Custom properties
        id : nodes.length,
        depth : depth,
        initial : [x, y],
        fixY : true,
        category : depth === constMaxDepth ? 0 : 1
    };
    nodes.push(node);

    return node;
}

function forceMockThreeData() {
    var depth = 0;
    var rootNode = createRandomNode(0);
    rootNode.name = 'ROOT';
    rootNode.category = 2;

    function mock(parentNode, depth) {
        var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));
        
        for (var i = 0; i < nChildren; i++) {
            var childNode = createRandomNode(depth);
            links.push({
                source : parentNode.id,
                target : childNode.id,
                weight : 1 
            });
            if (depth < constMaxDepth) {
                mock(childNode, depth + 1);
            }
        }
    }

    mock(rootNode, 1);
}

forceMockThreeData();

var option2 = {
    title : {
        text: 'Force',
        subtext: 'Force-directed tree',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    legend: {
        x: 'left',
        data:['叶子节点','非叶子节点', '根节点']
    },
    series : [
        {
            type:'force',
            name : "Force tree",
            ribbonType: false,
            categories : [
                {
                    name: '叶子节点',
                    itemStyle: {
                        normal: {
                            color : '#ff7f50'
                        }
                    }
                },
                {
                    name: '非叶子节点',
                    itemStyle: {
                        normal: {
                            color : '#6f57bc'
                        }
                    }
                },
                {
                    name: '根节点',
                    itemStyle: {
                        normal: {
                            color : '#af0000'
                        }
                    }
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    nodeStyle : {
                        brushType : 'both',
                        strokeColor : 'rgba(255,215,0,0.6)',
                        lineWidth : 1
                    }
                }
            },
            minRadius : constMinRadius,
            maxRadius : constMaxRadius,
            nodes : nodes,
            links : links
        }
    ]
};

  myChart.setOption(option2);
  

var myChart = echarts.init(document.getElementById('force1'));
var option1 = {
    title : {
        text: '人物关系：乔布斯',
        subtext: '数据来自人立方',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    legend: {
        x: 'left',
        data:['家人','朋友']
    },
    series : [
        {
            type:'force',
            name : "人物关系",
            ribbonType: false,
            categories : [
                {
                    name: '人物'
                },
                {
                    name: '家人'
                },
                {
                    name:'朋友'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1
                    },
                    linkStyle: {
                        type: 'curve'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[
                {category:0, name: '乔布斯', value : 10, label: '乔布斯\n（主要）'},
                {category:1, name: '丽萨-乔布斯',value : 2},
                {category:1, name: '保罗-乔布斯',value : 3},
                {category:1, name: '克拉拉-乔布斯',value : 3},
                {category:1, name: '劳伦-鲍威尔',value : 7},
                {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
                {category:2, name: '奥巴马',value : 8},
                {category:2, name: '比尔-盖茨',value : 9},
                {category:2, name: '乔纳森-艾夫',value : 4},
                {category:2, name: '蒂姆-库克',value : 4},
                {category:2, name: '龙-韦恩',value : 1},
            ],
            links : [
                {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
                {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
                {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
                {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
                {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
                {source : '奥巴马', target : '乔布斯', weight : 1},
                {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
                {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
                {source : '蒂姆-库克', target : '乔布斯', weight : 1},
                {source : '龙-韦恩', target : '乔布斯', weight : 1},
                {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
                {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
                {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
                {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
                {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
                {source : '比尔-盖茨', target : '奥巴马', weight : 6},
                {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
                {source : '蒂姆-库克', target : '奥巴马', weight : 1}
            ]
        }
    ]
};
var ecConfig = echarts.config;
function focus(param) {
    var data = param.data;
    var links = option1.series[0].links;
    var nodes = option1.series[0].nodes;
    if (
        data.source !== undefined
        && data.target !== undefined
    ) { //点击的是边
        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
    } else { // 点击的是点
        console.log("选中了" + data.name + '(' + data.value + ')');
    }
}
myChart.on(ecConfig.EVENT.CLICK, focus);

myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
    console.log(myChart.chart.force.getPosition());
});

myChart.setOption(option1);
                   


var option3 = {
	    title : {
	        text: '人物关系：乔布斯',
	        subtext: '数据来自人立方',
	        x:'right',
	        y:'bottom'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: '{a} : {b}'
	    },
	    legend: {
	        x: 'left',
	        data:['家人','朋友']
	    },
	    series : [
	        {
	            type:'force',
	            name : "人物关系",
	            ribbonType: false,
	            categories : [
	                {
	                    name: '人物'
	                },
	                {
	                    name: '家人',
	                    symbol: 'diamond'
	                },
	                {
	                    name:'朋友'
	                }
	            ],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: true,
	                        textStyle: {
	                            color: '#333'
	                        }
	                    },
	                    nodeStyle : {
	                        brushType : 'both',
	                        borderColor : 'rgba(255,215,0,0.4)',
	                        borderWidth : 1
	                    }
	                },
	                emphasis: {
	                    label: {
	                        show: false
	                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
	                    },
	                    nodeStyle : {
	                        //r: 30
	                    },
	                    linkStyle : {}
	                }
	            },
	            minRadius : 15,
	            maxRadius : 25,
	            gravity: 1.1,
	            scaling: 1.2,
	            draggable: false,
	            linkSymbol: 'arrow',
	            steps: 10,
	            coolDown: 0.9,
	            //preventOverlap: true,
	            nodes:[
	                {
	                    category:0, name: '乔布斯', value : 10,
	                    symbol: 'image://http://www.damndigital.com/wp-content/uploads/2010/12/steve-jobs.jpg',
	                    symbolSize: [60, 35],
	                    draggable: true,
	                    itemStyle: {
	                        normal: {
	                            label: {
	                                position: 'right',
	                                textStyle: {
	                                    color: 'black'
	                                }
	                            }
	                        }
	                    }
	                },
	                {category:1, name: '丽萨-乔布斯',value : 2},
	                {category:1, name: '保罗-乔布斯',value : 3},
	                {category:1, name: '克拉拉-乔布斯',value : 3},
	                {category:1, name: '劳伦-鲍威尔',value : 7},
	                {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
	                {category:2, name: '奥巴马',value : 8},
	                {category:2, name: '比尔-盖茨',value : 9},
	                {category:2, name: '乔纳森-艾夫',value : 4},
	                {category:2, name: '蒂姆-库克',value : 4},
	                {category:2, name: '龙-韦恩',value : 1},
	            ],
	            links : [
	                {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿', itemStyle: {
	                    normal: {
	                        width: 1.5,
	                        color: 'red'
	                    }
	                }},
	                {source : '乔布斯', target : '丽萨-乔布斯', weight : 1, name: '父亲', itemStyle: {
	                    normal: { color: 'red' }
	                }},
	                {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
	                {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
	                {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
	                {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
	                {source : '奥巴马', target : '乔布斯', weight : 1},
	                {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
	                {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
	                {source : '蒂姆-库克', target : '乔布斯', weight : 1},
	                {source : '龙-韦恩', target : '乔布斯', weight : 1},
	                {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
	                {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
	                {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
	                {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
	                {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
	                {source : '比尔-盖茨', target : '奥巴马', weight : 6},
	                {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
	                {source : '蒂姆-库克', target : '奥巴马', weight : 1}
	            ]
	        }
	    ]
	};
	var ecConfig = echarts.config;
	function focus(param) {
	    var data = param.data;
	    var links = option3.series[0].links;
	    var nodes = option3series[0].nodes;
	    if (
	        data.source != null
	        && data.target != null
	    ) { //点击的是边
	        var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
	        var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
	        console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
	    } else { // 点击的是点
	        console.log("选中了" + data.name + '(' + data.value + ')');
	    }
	}
	myChart.on(ecConfig.EVENT.CLICK, focus)

	myChart.on(ecConfig.EVENT.FORCE_LAYOUT_END, function () {
	    console.log(myChart.chart.force.getPosition());
	});

	
var nodes = [];
var links = [];
var constMaxDepth = 2;
var constMaxChildren = 7;
var constMinChildren = 4;
var constMaxRadius = 10;
var constMinRadius = 2;

function rangeRandom(min, max) {
    return Math.random() * (max - min) + min;
}

function createRandomNode(depth) {
    var node = {
        name : 'NODE_' + nodes.length,
        value : rangeRandom(constMinRadius, constMaxRadius),
        // Custom properties
        id : nodes.length,
        depth : depth,
        category : depth === constMaxDepth ? 0 : 1
    };
    nodes.push(node);

    return node;
}

function forceMockThreeData() {
    var depth = 0;
    var rootNode = {
        name : 'ROOT',
        value : rangeRandom(constMinRadius, constMaxRadius),
        // Custom properties
        id : 0,
        depth : 0,
        category : 2
    };
    nodes.push(rootNode);
    function mock(parentNode, depth) {
        var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));
        
        for (var i = 0; i < nChildren; i++) {
            var childNode = createRandomNode(depth);
            links.push({
                source : parentNode.id,
                target : childNode.id,
                weight : 1 
            });
            if (depth < constMaxDepth) {
                mock(childNode, depth + 1);
            }
        }
    }

    mock(rootNode, 0);
}

forceMockThreeData();

var option4 = {
    title : {
        text: 'Force',
        subtext: 'Force-directed tree',
        x:'right',
        y:'bottom'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    
    legend: {
        x: 'left',
        data:['叶子节点','非叶子节点', '根节点']
    },
    series : [
        {
            type:'force',
            name : "Force tree",
            ribbonType: false,
            categories : [
                {
                    name: '叶子节点'
                },
                {
                    name: '非叶子节点'
                },
                {
                    name: '根节点'
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.6)',
                        borderWidth : 1
                    }
                }
            },
            minRadius : constMinRadius,
            maxRadius : constMaxRadius,
            coolDown: 0.995,
            steps: 10,
            nodes : nodes,
            links : links,
            steps: 1
        }
    ]
};


var relation=function(idname,option){
    var myChart = echarts.init(document.getElementById(idname));
    myChart.setOption(option);  };
    relation("force1",option1);
    relation("force3",option3);
    relation("force4",option4);