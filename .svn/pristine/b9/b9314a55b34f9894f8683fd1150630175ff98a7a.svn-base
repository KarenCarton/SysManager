/**
 * EzuiSimpleTable
 * 
 **/
(function(window, document, $) {

    var EzuiSimpleTable = function(el, options) {
        this.$el = $(el);
        this.$parent = this.$el.parent();
        this.template = this.$el.prop('outerHTML');
        this.containerId = '';
        //额外需要的属性
        this.innerEleId = 1;
        /*分页相关 begin*/
        this.paginator = {
            show: true,
            pageNoName: '',
            pageNo: '',
            pageSizeName: '',
            pageSize: '',
            totalName: '',
            dataKey: 'rows',
            url: '',
            extraParams: (options.paginator && options.paginator.extraParams) || {},
            type: 'GET',
            pk: '',
            paginatorId: '',
            totalRows: 0,
            statistic: false,
            sorting:"asc",
            sortingTarget:'',
        }
        //外部方法
        this.methods = {};
        /*分页相关 end*/
        this.sorting = {};
        /**
         * 和checkbox有关的属性
         * 支持分页选择
         * 
         **/

        //选中的id 使用set来保存
        //是否显示checkbox
        this.checkbox = true;
        //thead里的checkbox 全选操作
        this.checkboxAllId;
        //按照页码存储
        this.selectedIds  = {};
        //checkbox需要根据哪个字段进行初始化
        this.checkboxKey ;
        this.nextSeq  = 1;


        //data
        this.data = [];



        //一些常量
        this.toolbarBtnClass = 'btn btn-sm top-btn-color';
        this.seqNumber = '序号';
        this.checkboxWidth = 'width:4%;';
        this.seqWidth = 'width:4%;';
        this.jsSingleCheckbox = 'js-single-checkbox';
    }
    EzuiSimpleTable.prototype = {
        validateOption: function() {

            return true;
        },
        initial: function() {
            if (this.validateOption() === false) {
                throw '初始化属性错误，请重新初始化。';
            }
            return true;
        },
        //useful
        initialData: function() {
            this._clearContent();
            this._clearPaginator();
            var initialUrl = this.paginator.url;
            if(initialUrl.indexOf('?') == -1){
              initialUrl = initialUrl + 
              '?' + this.paginator.pageNoName + '=' + this.paginator.pageNo +
              '&' + this.paginator.pageSizeName + '=' + this.paginator.pageSize;
            }else{
              initialUrl = initialUrl +
              '&' + this.paginator.pageNoName + '=' + this.paginator.pageNo +
              '&' + this.paginator.pageSizeName + '=' + this.paginator.pageSize;
            }
                
            for (var param in this.paginator.extraParams) {
                initialUrl += '&' + param + '=' + this.paginator.extraParams[param];
            }
            if(null != this.paginator.target && undefined != this.paginator.target &&  "" != this.paginator.target ){
              initialUrl = initialUrl + '&sorting='+this.paginator.target+'&strategy='+this.paginator.sorting;
            }
            var that = this;
            $.ajax({
                url: initialUrl,
                type: this.paginator.type,
                async: false,
                dataType: 'json',
            }).done(function(data) {
            	
                var totalRows = data[that.paginator.totalName] || 0;
                if(0 == totalRows){
                  that.paginator.totalPages = 1;
                }else{
                  that.paginator.totalPages = Math.ceil(totalRows / that.paginator.pageSize);
                }
                that.paginator.totalRows = totalRows;
                that._renderData(data);
                //渲染分页插件
                that._buildPaginator();
            }).fail(function(data) {
                console.log('获取数据失败 请确认url有效');
            });
            if(this.checkbox === true){
                this._initialCheckBoxEvent();
            }
            //that._initialSortByEvent();
        },
        _initialSortByEvent:function(){
          var that = this;
          $("th[sortby=true]").click(function(){
            var sortinghtml = '';
            var title = '';
            var sortingCurrentAsc = true;
            if($(this.children).hasClass("fa-sort-desc")){
              sortingCurrentAsc = false;
            }
            $("th[sortby=true]").each(function(i, x){
              title = $(x).text();
              sortinghtml = title+'<i class="fa fa-sort-asc" style="margin-left:10px;color:#7c7c7c;opacity:0.5;"></i>';
              $(x).empty().append(sortinghtml);
            });
            title = $(this).text();
            if(sortingCurrentAsc){
              sortinghtml = title+'<i class="fa fa-sort-desc" style="margin-left:10px;"></i>';
              that.paginator.sorting = "desc";
            }else{
              sortinghtml = title+'<i class="fa fa-sort-asc" style="margin-left:10px;"></i>';
              that.paginator.sorting = "asc";
            }
            $(this).empty().html(sortinghtml);
            that.paginator.target = $(this).attr("key");
            that.initialData();
            //数据重新初始化
          });
        },
        //useful 初始化checkbox所有事件
        _initialCheckBoxEvent:function(){
            var clazz = '.'+this.jsSingleCheckbox;
            var that = this;
            $(document).off('click',clazz).on('click',clazz,function(){
                    var value = $(this).attr('value');
                    if($(this).prop('checked') === true){
                        that._addSelectedId(value);
                    }else{
                        that._delSelectedId(value);
                    }
            });
            var id = '#'+this.checkboxAllId;
        $(document).off('click',id).on('click',id,function(){
                var $this = $(this);
                var checkAll = $this.prop('checked');
                if(!checkAll){
                    var pageIds = that.selectedIds[that.paginator.pageNo];
                    var deepPageIds = pageIds.slice(0);
                    deepPageIds.forEach(function(x,i){
                     that._delSelectedId(x);
                     })
                }else{
                    $(clazz).each(function(i,x){
                        var value = $(x).attr('value');
                        that._addSelectedId(value);
                    })
                }
            });
        },
        _restoreCheckBoxStatus:function(){
             var pageNo = this.paginator.pageNo;
             var pageIds = this.selectedIds[pageNo];
             var that = this;
             //先取消掉全选的状态
            $('#'+this.checkboxAllId).prop('checked',false);
             if(pageIds !== undefined){
                pageIds.forEach(function(x,i){
                     that._addSelectedId(x);
                })
             }
        },
        _addSelectedId:function(id){
            var pageNo = this.paginator.pageNo;
            var pageIds = this.selectedIds[pageNo];
            if(pageIds === undefined){
                pageIds = [];
                pageIds.push(id);
                this.selectedIds[pageNo] = pageIds;
            }else{
                if(pageIds.indexOf(id) === -1){
                    pageIds.push(id);
                }
            }
            var $checkbox = $('#'+this.containerId+' .'+this.jsSingleCheckbox + '[value='+id+']');
            if($checkbox.prop('checked') === false){
                $checkbox.prop('checked',true);
            }
            var $checkAll = $('#'+this.checkboxAllId);
            var checkAllStatus = $checkAll.prop('checked');
            if(pageIds.length === this.paginator.pageSize && checkAllStatus === false){
                $checkAll.prop('checked',true);
            }
            /* 
             * else if(pageIds.length !== this.paginator.pageSize && checkAllStatus === true){
                    $checkAll.prop('checked',false);
            }*/
        },
        _delSelectedId:function(id){
            var pageNo = this.paginator.pageNo;
            var pageIds = this.selectedIds[pageNo];
            if(pageIds !== undefined){
                var index = pageIds.indexOf(id);
                if(index !== -1){
                    pageIds.splice(index,1);
                }
            }
            var $checkbox = $('#'+this.containerId+' .'+this.jsSingleCheckbox + '[value='+id+']');
            if($checkbox.prop('checked') === true){
                $checkbox.prop('checked',false);
            }
            if($('#'+this.checkboxAllId).prop('checked') === true){
                $('#'+this.checkboxAllId).prop('checked',false);
            }
        },
        //useful
        getSelectedIds: function() {
            var array = [];
            for(var item in this.selectedIds){
                array = array.concat(this.selectedIds[item]);
            }
            return  array;
        },
        addItem:function(item){
            var data = {};
            data[this.paginator.datakey] = [item];
            this._renderData(data,this.nextSeq);

        },
        deleteItem:function(pk){
            var id ;
            if(typeof pk === 'object'){
                id = pk[this.paginator.pk]; 
            }else{
                id = pk;
            }
            var $tr = this._findItem(id);
            $tr.remove();

        },
        updateItem:function(item){
            var id = item[this.paginator.pk]; 
            var $tr  = this._findItem(id);
            $tr.find('td[data-type=name]').each(function(i,x){
                var nameKey = $(x).attr('data-namekey');
                var value = item[nameKey];
                if(value !== undefined){
                     $(x).text(value);
                }
               
            });
            $tr.attr('data-item',JSON.stringify(item));
        },
        _findItem:function(pk){
            return $('#'+this.containerId+' table tr input[value='+pk+']').closest('tr');
        },
        getSelected: function() {
            var array = [];
            for(var selectedId in this.selectedIds){
            	var item = $('#'+this.containerId+' table tr input[value='+this.selectedIds[selectedId]+']').closest('tr').data('item');
                array = array.concat(item);
            }
            return  array;
        },
        select:function(pk){
            var item = $('#'+this.containerId+' table tr input[value='+pk+']').closest('tr').data('item');
            return (item);
        },
        //useful
        _clearContent: function() {
            $('#' + this.containerId).find('tbody tr').remove();
            
        },
        _clearPaginator:function(){
        	//$('#'+this.paginator.paginatorId).parent().remove();
          $('#'+this.paginator.paginatorId).closest(".row").remove();
        },
        /**
        *  assignIndex 表示是单独插入的一条数据的序号 目前仅用于addItem方法
        **/
        _renderData: function(data,assignIndex) {
            var $table = this.$el.find('ezui-table');
            var that = this;
            var checkedId = [];
            $(data[this.paginator.dataKey]).each(function(index, item) {
                var itemId = that._getNextId('tr');
                
                var itemHtml = '<tr  id="' + itemId +'">';
                if(that.checkbox === true){
                   itemHtml += that._render_ITEM_EZUICHECKBOX(item);
                   if(item[that.checkboxKey] === true || item[that.checkboxKey] === 'true'){
                     checkedId.push( item[that.paginator.pk]);
                   }
                }
                if(assignIndex != undefined){
                    index = assignIndex;
                    itemHtml += that._render_ITEM_SEQ_NUMBER(0,index);
                }else{
                    itemHtml += that._render_ITEM_SEQ_NUMBER(index);
                }
                
                $table.children().each(function(i, x) {
                    var tagName = x.tagName;
                    tagName = tagName.replace(/\-/g, '');
                    var func = 'that.' + '_render' + '_ITEM_' + tagName;
                    itemHtml += eval(func).call(that, x, item, index);
                })
                itemHtml += '</tr>';
                $('#' + that.containerId).find('tbody').append(itemHtml);
                that._findItem(item[that.paginator.pk]).data('item',item);
            });
            if(checkedId.length > 0){
                for(var i = 0; i < checkedId.length;i++){
                    that._addSelectedId(checkedId[i]);
                }
            }
        },
        //useful
        _render_ITEM_EZUICHECKBOX: function(item) {
            var pv = item[this.paginator.pk];
            var id = this._getNextId('checkbox');
            var clazz = 'md-check '+this.jsSingleCheckbox;
            var html = '<td style="' + this.checkboxWidth + '" class="words-center">' +
                '<div class="md-checkbox">' +
                '<input type="checkbox" id="' + id + '" class="'+clazz+'" value="' + pv + '">' +
                '<label for="' + id + '">' +
                '<span class="inc"></span>' +
                '<span class="check"></span>' +
                '<span class="box"></span> </label>' +
                '</div>' +
                '</td>';
            return html;
        },
        //useful
        _render_ITEM_SEQ_NUMBER: function(computeIndex,assignIndex) {
            var seq = 0;
            if(assignIndex != undefined){
                seq = assignIndex;

            }else{
                 var pageNo = this.paginator.pageNo;
                 pageNo = pageNo < 1 ? 0 : (pageNo - 1);
                 seq = pageNo * this.paginator.pageSize + computeIndex + 1;
                
            }
            var html = '<td style="' + this.seqWidth + '" class="words-center">' + seq + '</td>';
                        this.nextSeq = ++seq;

            return html;
        },
        //useful
        _render_ITEM_EZUITH: function(ele, item, index) {
            var $ele = $(ele);
            var type = $ele.attr('type');
            var clazz = $ele.attr('class');
            //var width = $ele.attr('width') || 'auto';
            var width = $ele.attr('width');
            var styleWidth = '';
            if(null != width && undefined != width){
              styleWidth = 'width:' + width + ';';
            }
            var pv = item[this.paginator.pk];
            var html = '';
            var that = this;
            if (type === 'text') {
                var nameKey = $ele.attr('key');
                var name = item[nameKey] || "";
                html = '<td class="' + clazz + '" style="' + styleWidth + '" data-type="name" data-namekey="'+nameKey+'">' + name + '</td>';
            } else if (type === 'operation') {
                html += '<td>';
                $ele.children().each(function(i, x) {
                    var $x = $(x);
                    var type = $x.attr('type');
                    var clazz = $x.attr('class');
                    var iconClazz = $x.attr('icon-class');
                    var handler = $x.attr('handler');
                    var method = that.methods[handler];
                    var label = $x.attr('label');
                    var id = that._getNextId('btn');
                    var bindEle = '#' + id;
                    if (type === 'btn') {
                        html += '<button class="' + that.toolbarBtnClass + '" id="' + id + '">' + label + '</button>';
                    } else if (type === 'a-btn') {
                        var innerHtml = '&nbsp;<i class="' + iconClazz + '"></i>&nbsp;';
                        html += '<a class="' + clazz + '" title="' + label + '" id="' + id + '">' + innerHtml + '</a>';
                    }
                    if (handler && method != undefined) {
                        $(document).off('click', bindEle).on('click', bindEle, {pv:pv,item:item}, function(e) {
                        	method(e.data.pv,e.data.item);
                        });
                    } else {
                        console.log('no suitable method');
                    }
                })
                html += '</td>';
            }
            return html;
        },

        //useful
        _renderEZUITOOLBAR: function(ele) {
            var html = '<div class="col-lg-12 operation-line">';
            var childHtml = '';
            var that = this;
            $(ele).children().each(function(i, x) {
                var tagName = x.tagName;
                tagName = tagName.replace(/\-/g, '');
                var func = 'that.' + '_render' + tagName;
                childHtml += eval(func).call(that, x);
            })
            html += childHtml;
            html += '</div>';
            return html;
        },
        //useful
        _renderEZUITOOLBARBTN: function(ele) {
            var $ele = $(ele);
            var iconClazz = $ele.attr('icon-class');
            var id = $ele.attr('id');
            var label = $ele.attr('label');
            var handler = $ele.attr('handler');
            var innerHtml = '<i class="' + iconClazz + '"></i> &nbsp;' + label;
            var html = '<button class="' + this.toolbarBtnClass + '" id="' + id + '">' + innerHtml + '</button>';
            //添加分隔符
            html += this._renderEZUISEPERATOR();
            var bindEle = '#' + id;
            var selectedIds = this.getSelectedIds();
            var method = this.methods[handler];
            if (handler && method != undefined) {
                $(document).off('click', bindEle).on('click', bindEle, selectedIds, function(e) {
                    method(e.data);
                });
            } else {
                console.log('no suitable method');
            }
            return html;
        },
        //useful
        _renderEZUISEPERATOR: function() {
            var html = '<span class="septal-line">|</span>';
            return html;
        },
        //useful
        _renderEZUITABLE: function(ele) {
            var $ele = $(ele);
            var paginator = $ele.attr('paginator');
            var position = $ele.attr('paginator-position');
            var checkbox = $ele.attr('checkbox');
            var url = $ele.attr('url');
            var pageNoName = $ele.attr('pagenoname');
            var pageNo = parseInt($ele.attr('pageno'));
            var pageSizeName = $ele.attr('pagesizename');
            var pageSize = parseInt($ele.attr('pagesize'));
            var totalName = $ele.attr('totalname');
            var dataKey = $ele.attr('datakey');
            var pk = $ele.attr('pk');
            var checkboxKey = $ele.attr('checkboxKey');
            var statistic=$ele.attr('statistic');
            
            this.paginator.show = paginator === 'true';
            this.paginator.pageNoName = pageNoName;
            this.paginator.pageNo = pageNo;
            this.paginator.pageSizeName = pageSizeName;
            this.paginator.pageSize = pageSize;
            this.paginator.totalName = totalName;
            this.paginator.datakey = dataKey;
            this.paginator.url = url;
            this.paginator.pk = pk;
            this.checkboxKey = checkboxKey;
            this.paginator.statistic = statistic;

            this.checkbox = checkbox === 'true';

            var html = '<div class="col-lg-12 table-scrollable"><table class="table table-striped table-bordered table-advance table-hover tablewrap">';
            html += '<thead><tr>';
            var that = this;
            var childHtml = '';
            if (this.checkbox === true) {
                //渲染thead里的checkbox
                var checkboxId = this._getNextId('checkbox');
                childHtml += '<th style="' + that.checkboxWidth + '">' +
                    '<div class="md-checkbox">' +
                    '<input type="checkbox" id="' + checkboxId + '" class="md-check">' +
                    '<label for="' + checkboxId + '">' +
                    '<span class="inc"></span>' +
                    '<span class="check"></span>' +
                    '<span class="box"></span> </label>' +
                    '</div>' +
                    '</th>';
                this.checkboxAllId = checkboxId;
            }
            childHtml += '<th style="' + that.seqWidth + '">' + this.seqNumber + '</th>';
            $(ele).children().each(function(i, x) {
                var tagName = x.tagName;
                tagName = tagName.replace(/\-/g, '');
                var func = 'that.' + '_render' + tagName;
                childHtml += eval(func).call(that, x);
            })
            html += childHtml;
            html += '</tr></thead>';
            html += '<tbody></tbody>';
            html += '</table></div>';
            return html;

        },
        _renderEZUITH: function(ele) {
            var $ele = $(ele);
            var clazz = $ele.attr('class');
            var key = $ele.attr('key');
            var cursor = '';
            //var width = $ele.attr('width') || 'auto';
            var width = $ele.attr('width');
            var styleWidth = '';
            if(null != width && undefined != width){
              styleWidth = 'width:' + width + ';';
            }
            var label = $ele.attr('label');
            var sortby="false";
            if($ele.attr('sortby')=="true"){
              label = label+'<i class="fa fa-sort-asc" style="margin-left:10px;color:#7c7c7c;opacity:0.5;"></i>';
              sortby = "true";
              cursor = "cursor:pointer;";
            }
            var html = '<th class="' + clazz + '" style="' + styleWidth + ';'+cursor+'" sortby="'+sortby+'" key="'+ key +'">' + label + '</th>';
            return html;
        },


        // useful
        _evil: function(func) {
            var Fn = Function;
            return new Fn('return' + func)();
        },
       
        //useful
        renderTemplate: function() {
            var eles = this.$el.children();

            var id = this.$el.attr('id');
            this.containerId = id;
            var templateHtml = '<div class="row margin-0" id="' + id + '">';
            var that = this;

            $(eles).each(function(i, x) {
                var tagName = x.tagName;
                tagName = tagName.replace(/\-/g, '');
                var func = 'that.' + '_render' + tagName;
                //使用eval将字符串转成函数 如果后续混淆或者工程化出现问题，可以使用下面的_evil代替试试
                templateHtml += eval(func).call(that, x);
            });
            templateHtml += '</div>';
            var prev = this.$el.prev();
            if (prev.length === 0) {
                this.$parent.prepend(templateHtml);
            } else {
                prev.after(templateHtml);
            }
            this.$el.remove();
            //保存datagrid实例
            $('#' + id).data('ez-table', this);
        },
        //useful
        _renderEZUIPAGINATOR: function() {
            var position = this.paginator.position || 'center';
            var paginatorId = this._getNextId('ul');
            var html = '<div class="row">'
            html = html + '<div class="dataTables_paginate paging_bootstrap_number" style="text-align:' + position + ';"><ul  id="' + paginatorId + '"></ul></div>';
            html = html + '</div>'
            this.paginator.paginatorId = paginatorId;
            return html;
        },
        _buildPaginator: function() {
            $('#' + this.paginator.paginatorId).remove();
            var paginatorHtml = this._renderEZUIPAGINATOR();
            $('#'+this.containerId).append(paginatorHtml);
            // paginator options
            var that = this;
            var options = {
                currentPage: that.paginator.pageNo,
                totalPages: that.paginator.totalPages,
                statistic:that.paginator.statistic,
                pageSize:that.paginator.pageSize,
                totalRows:that.paginator.totalRows,
                pageUrl: function(type, page, current) {
                    var clickUrl = that.paginator.url +
                        '?' + that.paginator.pageNoName + '=' + page +
                        '&' + that.paginator.pageSizeName + '=' + that.paginator.pageSize;
                    for (var param in that.paginator.extraParams) {
                        clickUrl += '&' + param + '=' + that.paginator.extraParams[param];
                    }
                    return clickUrl;
                },
                onPageClicked: function(event, originalEvent, type, page) {
                    originalEvent.preventDefault();
                    originalEvent.stopPropagation();
                    $.get(originalEvent.currentTarget.href, function(data) {
                        that.paginator.pageNo = page;
                        that._clearContent();
                        that._renderData(data);
                        //恢复checkbox选中状态
                        that. _restoreCheckBoxStatus();

                    }, 'json');

                }
            };
            var $ul = $('#' + this.paginator.paginatorId);
            var old = $ul.data('bootstrapPaginator');
            if (old) {
                old.destroy();
            }
            $ul.bootstrapPaginator(options);
        },
        //useful
        _getNextId: function(eleTag) {
            return this.$el.attr('id') + '-' + eleTag + '-' + this.innerEleId++;
        }
    }
    $.fn.ezuiSimpleTable = function(options) {
        var datagrid = $(this.selector).data('ez-table');
        if (datagrid) {
            return datagrid;
        }
        datagrid = new EzuiSimpleTable(this, options);
        datagrid.methods = options.methods;
        datagrid.sorting = options.sorting;
        var flag = datagrid.initial();
        if (flag === false) {
            return;
        }
        datagrid.renderTemplate();
        datagrid.initialData();
        datagrid._initialSortByEvent();
        return datagrid;
    }
    $.fn.ezuiSimpleTable.prototype.Constructor=EzuiSimpleTable;
})(window, document, jQuery);