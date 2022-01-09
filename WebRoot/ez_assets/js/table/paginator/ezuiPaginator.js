!function ($) {
    "use strict";
    var BootstrapPaginator = function (element, options) {
        this.init(element, options)
    }, old = null;
    BootstrapPaginator.prototype = {
        init: function (element, options) {
            this.$element = $(element);
            var version = options && options.bootstrapMajorVersion ? options.bootstrapMajorVersion : $.fn.bootstrapPaginator.defaults.bootstrapMajorVersion, id = this.$element.attr("id");
            if (2 === version && !this.$element.is("div"))throw"in Bootstrap version 2 the pagination must be a div element. Or if you are using Bootstrap pagination 3. Please specify it in bootstrapMajorVersion in the option";
            if (version > 2 && !this.$element.is("ul"))throw"in Bootstrap version 3 the pagination root item must be an ul element.";
            this.currentPage = 1, this.lastPage = 1, this.setOptions(options), this.initialized = !0
        }, setOptions: function (options) {
            this.options = $.extend({}, this.options || $.fn.bootstrapPaginator.defaults, options), this.totalPages = parseInt(this.options.totalPages, 10), this.numberOfPages = parseInt(this.options.numberOfPages, 10), options && "undefined" != typeof options.currentPage && this.setCurrentPage(options.currentPage), this.listen(), this.render(), this.initialized || this.lastPage === this.currentPage || this.$element.trigger("page-changed", [this.lastPage, this.currentPage])
        }, listen: function () {
            this.$element.off("page-clicked"), this.$element.off("page-changed"), "function" == typeof this.options.onPageClicked && this.$element.bind("page-clicked", this.options.onPageClicked), "function" == typeof this.options.onPageChanged && this.$element.on("page-changed", this.options.onPageChanged), this.$element.bind("page-clicked", this.onPageClicked)
        }, destroy: function () {
            this.$element.off("page-clicked"), this.$element.off("page-changed"), this.$element.removeData("bootstrapPaginator"), this.$element.empty()
        }, show: function (page) {
            this.setCurrentPage(page), this.render(), this.lastPage !== this.currentPage && this.$element.trigger("page-changed", [this.lastPage, this.currentPage])
        }, showNext: function () {
            var pages = this.getPages();
            pages.next && this.show(pages.next)
        }, showPrevious: function () {
            var pages = this.getPages();
            pages.prev && this.show(pages.prev)
        }, showFirst: function () {
            var pages = this.getPages();
            pages.first && this.show(pages.first)
        }, showLast: function () {
            var pages = this.getPages();
            pages.last && this.show(pages.last)
        }, onPageItemClicked: function (event) {
            var type = event.data.type, page = event.data.page;
            this.$element.trigger("page-clicked", [event, type, page])
        }, onPageClicked: function (event, originalEvent, type, page) {
            var currentTarget = $(event.currentTarget);
            switch (type) {
                case"first":
                currentTarget.bootstrapPaginator("showFirst");
                break;
                case"prev":
                currentTarget.bootstrapPaginator("showPrevious");
                break;
                case"next":
                currentTarget.bootstrapPaginator("showNext");
                break;
                case"last":
                currentTarget.bootstrapPaginator("showLast");
                break;
                case"page":
                currentTarget.bootstrapPaginator("show", page)
            }
        }, render: function () {
            var containerClass = this.getValueFromOption(this.options.containerClass, this.$element), size = this.options.size || "normal", alignment = this.options.alignment || "left", pages = this.getPages(), listContainer = 2 === this.options.bootstrapMajorVersion ? $("<ul></ul>") : this.$element, listContainerClass = 2 === this.options.bootstrapMajorVersion ? this.getValueFromOption(this.options.listContainerClass, listContainer) : null, first = null, prev = null, next = null, last = null, p = null, i = 0;
            switch (this.$element.prop("class", ""), this.$element.addClass("pagination"), size.toLowerCase()) {
                case"large":
                case"small":
                case"mini":
                this.$element.addClass($.fn.bootstrapPaginator.sizeArray[this.options.bootstrapMajorVersion][size.toLowerCase()])
            }
            if (2 === this.options.bootstrapMajorVersion)switch (alignment.toLowerCase()) {
                case"center":
                this.$element.addClass("pagination-centered");
                break;
                case"right":
                this.$element.addClass("pagination-right")
            }
            for (this.$element.addClass(containerClass), this.$element.empty(), 2 === this.options.bootstrapMajorVersion && (this.$element.append(listContainer), listContainer.addClass(listContainerClass)), this.pageRef = [],pages.last > 4 && pages.first && (first = this.buildPageItem("first", pages.first), first && listContainer.append(first)), pages.prev && (prev = this.buildPageItem("prev", pages.prev), prev && listContainer.append(prev)), i = 0; i < pages.length; i += 1)p = this.buildPageItem("page", pages[i]), p && listContainer.append(p);
                pages.next && (next = this.buildPageItem("next", pages.next), next && listContainer.append(next)), pages.last > 4 && pages.last && (last = this.buildPageItem("last", pages.last), last && listContainer.append(last))
            //统计数量显示
            var pageS = this.options.pageSize;
            var total = this.options.totalRows;
            
            var currentS = pageS * (this.currentPage - 1) + 1;
            var currentE = pageS * this.currentPage > total ?total:pageS * this.currentPage;
            if(undefined == total  || total==NaN || total=="" || total==null || total=="null"){
              currentS = 0;
              currentE = 0;
              total = 0;
            }
            if(currentE== undefined || currentE==NaN || currentE=="" || currentE==null || currentE=="null"){
              currentE=0;
            }
            if(currentS== undefined || currentS==NaN || currentS=="" || currentS==null || currentS=="null"){
              currentS=0;
            }
            var statisticHtml = "当前&nbsp;"+currentS+"&nbsp;-&nbsp;"+currentE+"&nbsp;条数据&nbsp;&nbsp;共&nbsp;"+total+"&nbsp;条数据";
            if(!this.$element.closest("div").hasClass("paging_bootstrap_full_number")){
              var x = 1;
              this.$element.before("<div class='col-md-5' style='padding-top:14px;'><div class='dataTables_info' role='status' aria-live='polite' style='text-align:left;'></div></div>");
              this.$element.before("<div class='col-md-7 dataTables_paginate paging_bootstrap_full_number' style='text-align:right;'></div>");
              this.$element.prev("div").append(this.$element);
              if(this.options.statistic){
            	/*
                if(0 == total){
                  $(".dataTables_info").empty().html("暂无数据");
                }else{
                  $(".dataTables_info").empty().html(statisticHtml);
                }
                */
                // 2019.10.17 gjz 修复页面内多个分页组件互相影响问题
                if(0 == total){
                	this.$element.parent().parent().find(".dataTables_info").empty().html("暂无数据");
                }else{
                	this.$element.parent().parent().find(".dataTables_info").empty().html(statisticHtml);
                }
              }
            }else{
              if(this.options.statistic){
            	/*
                if(0 == total){
                  $(".dataTables_info").empty().html("暂无数据");
                }else{
                  $(".dataTables_info").empty().html(statisticHtml);
                }
                */
                // 2019.10.17 gjz 修复页面内多个分页组件互相影响问题
            	if(0 == total){
            		this.$element.parent().parent().find(".dataTables_info").empty().html("暂无数据");
                }else{
                	this.$element.parent().parent().find(".dataTables_info").empty().html(statisticHtml);
                }
              }
            }
        }, buildPageItem: function (type, page) {
            var itemContainer = $("<li></li>"), itemContent = $("<a></a>"), text = "", title = "", itemContainerClass = this.options.itemContainerClass(type, page, this.currentPage), itemContentClass = this.getValueFromOption(this.options.itemContentClass, type, page, this.currentPage), tooltipOpts = null;
            switch (type) {
                case"first":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage))return;
                text = this.options.itemTexts(type, page, this.currentPage), title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
                case"last":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage))return;
                text = this.options.itemTexts(type, page, this.currentPage), title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
                case"prev":
                //if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage))return;
                text = this.options.itemTexts(type, page, this.currentPage), title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
                case"next":
                //if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage))return;
                text = this.options.itemTexts(type, page, this.currentPage), title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
                case"page":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage))return;
                text = this.options.itemTexts(type, page, this.currentPage), title = this.options.tooltipTitles(type, page, this.currentPage)
            }
            return itemContainer.addClass(itemContainerClass).append(itemContent), itemContent.addClass(itemContentClass).html(text).on("click", null, {
                type: type,
                page: page
            }, $.proxy(this.onPageItemClicked, this)), this.options.pageUrl && itemContent.attr("href", this.getValueFromOption(this.options.pageUrl, type, page, this.currentPage)), this.options.useBootstrapTooltip ? (tooltipOpts = $.extend({}, this.options.bootstrapTooltipOptions, {title: title}), itemContent.tooltip(tooltipOpts)) : itemContent.attr("title", title), itemContainer
        }, setCurrentPage: function (page) {
            if (page > this.totalPages || 1 > page)throw"Page out of range";
            this.lastPage = this.currentPage, this.currentPage = parseInt(page, 10)
        }, getPages: function () {
            var totalPages = this.totalPages, pageStart = 0 === this.currentPage % this.numberOfPages ? (parseInt(this.currentPage / this.numberOfPages, 10) - 1) * this.numberOfPages + 1 : parseInt(this.currentPage / this.numberOfPages, 10) * this.numberOfPages + 1, output = [], i = 0, counter = 0;
            for (pageStart = 1 > pageStart ? 1 : pageStart, i = pageStart, counter = 0; counter < this.numberOfPages && totalPages >= i; i += 1, counter += 1)output.push(i);
                return output.first = 1, output.prev = this.currentPage > 1 ? this.currentPage - 1 : 1, output.next = this.currentPage < totalPages ? this.currentPage + 1 : totalPages, output.last = totalPages, output.current = this.currentPage, output.total = totalPages, output.numberOfPages = this.options.numberOfPages, output
        }, getValueFromOption: function (value) {
            var output = null, args = Array.prototype.slice.call(arguments, 1);
            return output = "function" == typeof value ? value.apply(this, args) : value
        }
    }, old = $.fn.bootstrapPaginator, $.fn.bootstrapPaginator = function (option) {
        var args = arguments, result = null;
        return $(this).each(function (index, item) {
            var $this = $(item), data = $this.data("bootstrapPaginator"), options = "object" != typeof option ? null : option;
            if (!data)return data = new BootstrapPaginator(this, options), $this = $(data.$element), $this.data("bootstrapPaginator", data), void 0;
            if ("string" == typeof option) {
                if (!data[option])throw"Method " + option + " does not exist";
                result = data[option].apply(data, Array.prototype.slice.call(args, 1))
            } else result = data.setOptions(option)
        }), result
    }, $.fn.bootstrapPaginator.sizeArray = {
        2: {
            large: "pagination-large",
            small: "pagination-small",
            mini: "pagination-mini"
        }, 3: {large: "pagination-lg", small: "pagination-sm", mini: ""}
    }, $.fn.bootstrapPaginator.defaults = {
        containerClass: "",
        size: "normal",
        alignment: "left",
        bootstrapMajorVersion: 3,
        listContainerClass: "",
        itemContainerClass: function (type, page, current) {
          var showClass = page === current ? "active" : ""
          if(("prev"==type || "first"==type || "next"==type || "last"==type) && "active" == showClass)return ""
          return showClass
        },
        itemContentClass: function (type, page, current) {
            return ""
        },
        currentPage: 1,
        numberOfPages: 5,
        totalPages: 1,
        pageUrl: function (type, page, current) {
            return null
        },
        onPageClicked: null,
        onPageChanged: null,
        useBootstrapTooltip: !1,
        shouldShowPage: function (type, page, current) {
            var result = !0;
            switch (type) {
                case"first":
                result = 1 !== current;
                break;
                case"prev":
                result = 1 !== current;
                break;
                case"next":
                result = current !== this.totalPages;
                break;
                case"last":
                result = current !== this.totalPages;
                break;
                case"page":
                result = !0
            }
            return result
        },
        itemTexts: function (type, page, current) {
            switch (type) {
                case"first":
                return "<i class='fa fa-angle-double-left'></i>";
                case"prev":
                return "<i class='fa fa-angle-left'></i>";
                case"next":
                return "<i class='fa fa-angle-right'></i>";
                case"last":
                return "<i class='fa fa-angle-double-right'></i>";
                case"page":
                return page
            }
        },
        tooltipTitles: function (type, page, current) {
            switch (type) {
                case"first":
                return "首页";
                case"prev":
                return "前一页";
                case"next":
                return "下一页";
                case"last":
                return "尾页";
                case"page":
                return page === current ? "当前是第" + page +'页': "前往第" + page+'页'
            }
        },
        bootstrapTooltipOptions: {animation: !0, html: !0, placement: "top", selector: !1, title: "", container: !1}
    }, $.fn.bootstrapPaginator.Constructor = BootstrapPaginator
}(window.jQuery);


//ezuiPaginator
;(function(window,document,$){
    var ezPaginator = function(el,options){
        this.$el = $(el);
        this.defaults = {
            pageNo:this.$el.data('pageno') || 1, //1
            pageNoName:this.$el.data('pagenoname') || 'pageNo', //pageNo
            pageSize:this.$el.data('pagesize') || 10, //10
            pageSizeName:this.$el.data('pagesizename') || 'pageSize', // pageSize
            totalName:this.$el.data('totalname') || 'totalRows',
            statistic:this.$el.data('statistic') || false,
            totalRows:0,
            type:'GET',
            params:{},
            url:'',
            handleFunc:undefined,
            failFunc:function(){
              console.log("分页组件生成失败");
            }
        };
        this.options = $.extend({},this.defaults,options);
    }
    ezPaginator.prototype = {
        validateOptions:function(){
          
          if( this.options['pageSize'] < 1){
                console.log(option + '必须大于1');
                return false;
           }
           if( this.options['pageNo'] < 0){
                console.log(option + '必须大于等于0');
                return false;
           }
            for(var option in this.options){
                option = option || '';
                if(option === ''){
                    console.log(option + '不可为空，请赋值');
                    return false;
                }
            }
            return true;
        },

        initial:function(){
            var initialFlag = true;
            var query = {};
            if(this.validateOptions() === false){
                console.log('初始化参数设置错误，请重新设置');
                return false;
            }
            var initialUrl = this.options.url + 
                            '?' + this.options.pageNoName + '=' + this.options.pageNo +
                            '&' + this.options.pageSizeName + '=' + this.options.pageSize;
            if(this.options.type === 'GET'){
                //如果是GET请求，需要将查询参数放在url后
                for(var param in this.options.params){
                    initialUrl += '&' + param + '=' + this.options.params[param];
                }
                
            }else{
              query = this.options.params || {};
            }
            var that = this;
            $.ajax({
                    url:initialUrl,
                    type:this.options.type,
                    async:false,
                    dataType:'json',
                    data:query,
                }).done(function(data){
                     var totalRows = data[that.options.totalName];
                     that.options.totalRows = totalRows;
                      totalRows = totalRows < 1 ? 1 : totalRows;
                      that.options.totalPages = Math.ceil(totalRows/that.options.pageSize);
                      that.options['handleFunc'](data);
                }).fail(function(data){
                    initialFlag = false;
                    that.options['failFunc'](data);
                    console.log('数据总量为0,无需渲染分页组件');
                    return initialFlag;
                });
            return initialFlag;
        },
        build:function(options){
          options.pageSize = this.options.pageSize;
          options.statistic = this.options.statistic;
          options.totalRows = this.options.totalRows;
          return this.$el.bootstrapPaginator(options);
        }
    }
    $.fn.ezPaginator = function(options){
        var ezpaginator = new ezPaginator(this,options);
        var flag = ezpaginator.initial();
        if(flag === false){
          return;
        }
        var options = $.extend({},{
            currentPage:ezpaginator.options.pageNo,
            totalPages: ezpaginator.options.totalPages,
            pageUrl: function(type, page, current){
                var clickUrl = ezpaginator.options.url + 
                            '?' + ezpaginator.options.pageNoName + '=' + page +
                            '&' + ezpaginator.options.pageSizeName + '=' + ezpaginator.options.pageSize;
            if(ezpaginator.options.type === 'GET'){
                //如果是GET请求，需要将查询参数放在url后
                for(var param in ezpaginator.options.params){
                    clickUrl += '&' + param + '=' + ezpaginator.options.params[param];
                }
                
            }
            return clickUrl;
        },
        onPageClicked: function (event, originalEvent, type, page) {
            originalEvent.preventDefault();
            originalEvent.stopPropagation();
            if(ezpaginator.options.type === 'GET'){
                //$.get(originalEvent.target.href,function(data){
              $.get(originalEvent.currentTarget.href,function(data){
                    ezpaginator.options['handleFunc'](data);
                },'json');
            }else{
                //$.post(originalEvent.target.href,ezpaginator.options.params,function(data){
              $.post(originalEvent.currentTarget.href,ezpaginator.options.params,function(data){
                    ezpaginator.options['handleFunc'](data);
                },'json');
            }
        }
        },options);
        return ezpaginator.build(options);
    }
})(window,document,jQuery);

// 分页表格固定表头的滚动条

;(function(window,document,$){
	var tableScrolls = [];
    var tableScroll = function(ele,options){
        this.ele = $(ele);
        this.options = $.extend({}, this.defaults, options);
        this.defaults = {
        	theadHeight : 0,// table thead 高度
        	tbodyHeight : 0,// table tbody 高度
        	tbodyWidth : 0,// table tbody 宽度
        	tbodyScrollHeight : 0,// table tbody 滚动高度（tbody的实际高度）
        	tbodyScrollBarHeight : 0,// 滚动条内部高度
        };
        this.tableScrolls = tableScrolls;// 记录添加的结点
    }

	tableScroll.prototype = {
		init:function(initOptions){
			var theadNode = this.ele.find('thead');
			var tbodyNode = this.ele.find('tbody');

			if(tbodyNode == null || tbodyNode.length > 0){
				this.theadHeight = $(theadNode[0]).height();
				this.tbodyHeight = $(tbodyNode[0]).height();
				this.tbodyWidth =  $(tbodyNode[0]).width();
				this.scrollHeight = tbodyNode[0].scrollHeight;
			}
			if(this.tbodyHeight > 0){
				this.tbodyScrollBarHeight = this.tbodyHeight / (this.scrollHeight * 1.0 / this.tbodyHeight);
			}
			var className = '';
			if(this.options.className){
				className = this.options.className;
			}
			var isShow = ' visibility: hidden; ';
			if(this.scrollHeight > this.tbodyHeight){
				isShow = ' visibility: visible; ';
			}
			var html = '<div class="fixed-thead-scroll outline-scroll ' + className + '" style="height:' + this.tbodyHeight + 'px; top:' + this.theadHeight + 'px; ' + isShow + '">'
							+ '<div class="inline-scroll" style="height:' + this.tbodyScrollBarHeight + 'px;"></div>'
						+ '</div>';
			this.ele.parent().css('position', 'relative');
			// 如果存在上一次渲染滚动条则删除
			if(this.ele.prev().hasClass("fixed-thead-scroll")){
				this.ele.prev().remove();
			}
			tbodyNode.scrollTop(0);// 翻页重设tbody的滚动距离
			this.ele.before(html);
			this.initEvent();
		},

		// 滚动回调处理
		scrollWheelCallback:function(e){
			var tableNode = $(e.target).closest('.fixed-thead');
			if(tableNode.length == 0){
				var scrollNode = $(e.target).closest('.fixed-thead-scroll');
				if(scrollNode.length > 0){
					tableNode = scrollNode.next();
				}
			}
			if(tableNode.length > 0){
				var scrollNode = tableNode.prev();
				if(scrollNode != null && scrollNode.length > 0){
					// 阻止默认处理
					if(e.preventDefault){
						e.preventDefault();
					}else{
						e.returnValue = false;
					}
					// 判断滚动方向
					var isScrollUp = false;
					if(e.wheelDelta > 0){
						isScrollUp = true;// chrome up
					}else if(e.deltaY < 0){
						isScrollUp = true;// firefox up
					}else{
						// down
					}
					var outlineHeight = scrollNode.height();
					var inlineScrollNode = scrollNode.find('.inline-scroll');
					var inlineHeight = inlineScrollNode.height();
					var minMt = 0;
					var maxMt = outlineHeight - inlineHeight;
					var mt = Number($(inlineScrollNode).css('margin-top').replace('px', ''));
					var offsetY = 10;
					var moveY = isScrollUp ? mt - offsetY : mt + offsetY;
					// 拖动范围处理
					if(moveY < minMt){
						moveY = minMt;
					}else if(moveY > maxMt){
						moveY = maxMt;
					}
					// 设置滚动条高度
					$(inlineScrollNode).css('margin-top', moveY);
					// 设置滚动
					var scrollHeight = tableNode.find(' > tbody')[0].scrollHeight;
					var scrollTop = scrollHeight * (moveY / outlineHeight);
					tableNode.find(' > tbody').scrollTop(scrollTop);
					return false;
				}
			}
		},

		initEvent:function(){
			var obj = this;
			var scrollNode = $(obj.ele).prev();
			if(scrollNode != null && scrollNode.length > 0){
				// 每次鼠标进入滚动条面板就重新添加拖动监听
				$(scrollNode).off('mouseenter').on('mouseenter', function(e){
					if(e.target.className.indexOf('inline-scroll') >= 0 || e.target.className.indexOf('outline-scroll') >= 0){
						$.fn.tableScroll().initScroll();
					}
				});
				var support = "onwheel" in document.createElement('div') ? "wheel" : (document.onmousewheel != undefined ? "mousewheel" : "DOMMouseScroll");
				// document.removeEventListener(support, this.scrollWheelCallback);
				// document.addEventListener(support, this.scrollWheelCallback, {capture : false, passive : false, once : false});
				window.removeEventListener(support, this.scrollWheelCallback);
				window.addEventListener(support, this.scrollWheelCallback, {capture : false, passive : false, once : false});
				document.removeEventListener('wheel', this.scrollWheelCallback);
				document.addEventListener('wheel', this.scrollWheelCallback, {capture : false, passive : false, once : false});

				try{
					if(this.tableScrolls.indexOf(this.ele[0]) < 0){
						// 防止重复添加观察者记录已添加观察者的节点
						this.tableScrolls.push(this.ele[0]);
						// 监听tbody的大小改变或子节点数量变化
						var obser = new MutationObserver(function(mutations, obser){
							if(mutations != null){
								console.info('resize "fixed-thead" node');
								var tbodyNode = mutations[0].target;
								$.fn.tableScroll().updateScroll(tbodyNode);
							}
						});
						var obserOpt = {
							attributes : true,// 监听当前节点的属性变化
							childList : true,// 监听子节点的数量变化
							attributeFilter : ['style']// 监听的节点属性
						}
						obser.observe(this.ele.find('tbody')[0], obserOpt);// 添加新的观察者监听
					}
				}catch(e){
					console.error(e);
				}
			}
		},

		// 初始化滚动条
		initScroll:function(){
			document.onmousedown = function(e){
				this.isScroll = false;
				if(e.buttons == 1 && e.target.className.indexOf('inline-scroll') >= 0){
					this.mt = Number($(e.target).css('margin-top').replace('px', ''));
					this.ele = e.target;
					this.clientY = e.clientY;
					this.isScroll = true;
					e.preventDefault();
				}
			}

			document.onmousemove = function(e){
				if(this.isScroll){
					var outlineHeight = $(this.ele.parentNode).height();
					var inlineHeight = $(this.ele).height();
					var minMt = 0;
					var maxMt = outlineHeight - inlineHeight;
					var moveY = e.clientY - this.clientY + this.mt;
					if(!isNaN(moveY)){
						// 拖动范围处理
						if(moveY < minMt){
							moveY = minMt;
						}else if(moveY > maxMt){
							moveY = maxMt;
						}
						// 设置滚动条高度
						$(this.ele).css('margin-top', moveY);
						// 设置滚动
						var scrollHeight = $(this.ele).closest('.fixed-thead-scroll').next().find(' > tbody')[0].scrollHeight;
						var scrollTop = scrollHeight * (moveY / outlineHeight);
						$(this.ele).closest('.fixed-thead-scroll').next().find(' > tbody').scrollTop(scrollTop);
					}
					e.preventDefault();
				}
			}
			
			document.onmouseup = function(e){
				this.isScroll = false;
				document.onmousedown = null;
				document.onmousemove = null;
				document.onmouseup = null;
			}
		},

		// 更新滚动条(更新绑定的tbody的dom对象， 是否滚动到顶部)
		updateScroll:function(tbodyNode){
			var tableNode = $(tbodyNode).closest('.fixed-thead');
			var scrollNode = tableNode.prev();
			if(tbodyNode != null){
				this.tbodyHeight = $(tbodyNode).height();
				this.scrollHeight = tbodyNode.scrollHeight;
			}
			if(this.tbodyHeight > 0){
				this.tbodyScrollBarHeight = this.tbodyHeight / (this.scrollHeight * 1.0 / this.tbodyHeight);
			}
			// 重设滚动条外层高度和内层高度
			scrollNode.height(this.tbodyHeight);
			var inlineScrollNode = scrollNode.find('.inline-scroll');
			inlineScrollNode.height(this.tbodyScrollBarHeight);
			// 重设滚动高度
			var scrollTop = tbodyNode.scrollTop * 1.0 / this.scrollHeight * this.tbodyHeight;
			inlineScrollNode.css('margin-top', scrollTop);
			// 检测高度差切换显隐
			if(this.scrollHeight > this.tbodyHeight){
				scrollNode.css('visibility', 'visible');
			}else{
				scrollNode.css('visibility', 'hidden');
			}
		},
	}

	$.fn.tableScroll = function(options){
		return new tableScroll(this.get(0), options);
	}
})(window,document,jQuery);
