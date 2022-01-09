
var dataTableMethods={
    init: function(id,pagesize){
        var table = $('#'+id);
      
        table.find('.group-checkable').change(function () {
            var set = jQuery(this).attr("data-set");
            var checked = jQuery(this).is(":checked");
            jQuery(set).each(function () {
                if (checked) {
                    $(this).prop("checked", true);
                    $(this).parents('tr').addClass("active");
                } else {
                    $(this).prop("checked", false);
                    $(this).parents('tr').removeClass("active");
                }
            });
        });
        
        table.off('change', 'tbody tr .md-checkbox').on('change', 'tbody tr .md-checkbox', function () {
            $(this).parents('tr').toggleClass("active");
        });
        
         return  table.DataTable({
            "pageLength": pagesize,            
        });
    },
    editTable: function(id,pagesize){
         var table = $('#'+id);
         var oTable=dataTableMethods.init(id,pagesize);
        
        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        };
         // 编辑行，可发请求
        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            jqTds[1].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[1] + '">';
            jqTds[2].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[2] + '">';
            jqTds[3].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[3] + '">';
            jqTds[4].innerHTML = '<a class="edit label label-sm label-success" href="">保存</a><a class="cancel label label-sm label-danger" href="">取消</a>';
            // jqTds[5].innerHTML = '';
        }
         // 保存行，须发请求
        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit label label-sm label-success" href="">编辑</a><a class="delete label label-sm label-danger" href="">删除</a>', nRow, 4, false);
            oTable.fnDraw();
        }
        // 取消编辑行
        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate('<a class="edit label label-sm label-success" href="">编辑</a>', nRow, 4, false);
            oTable.fnDraw();
        }
        var nEditing = null;
        var nNew = false;
        // 删除按钮
        table.off('click', '.delete').on('click', '.delete', function (e) {
            e.preventDefault();

            if (confirm("确定删除此行 ?") == false) {
                return;
            }

            var nRow = $(this).parents('tr')[0];
            oTable.fnDeleteRow(nRow);
            alert("已删除!");
        });
       // 取消按钮
        table.off('click', '.cancel').on('click', '.cancel', function (e) {
            e.preventDefault();
            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nEditing = null;
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });
       // 编辑按钮
        table.off('click', '.edit').on('click', '.edit', function (e) {
            e.preventDefault();
            nNew = false;
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "保存") {
                saveRow(oTable, nEditing);
                nEditing = null;
                alert("已更新!");
            } else {
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    },
    /**
     * 初始化子表格
     * @params
     * columns: 自定义表头
     * data:子表数据
     * selector:选中的父表中的tr
     * trsel:父表的所有tr的selector
     * */
    iniChildTable: function(columns, data, selector, trsel){
      var row = parentTable.row($(selector));
      if(row.child.isShown()){
        row.child.hide();
        $(trsel).each(function(i,x){
          parentTable.row($(x)).child.hide();
          $(x).removeClass("shown");
        })
      }else{
        $(trsel).each(function(i,x){
          parentTable.row($(x)).child.hide();
          $(x).removeClass("shown");
        })
        var html = "<table id='childTable_"+row.index()+"'><table>";
        row.child(html).show();
        $('#childTable_'+row.index()).DataTable({
          "dom":"<'sub-table't>",
          "paginate":false,
          "searching":false,
          "bFilter":false,
          "autoWidth":true,
          "info":false,
          "bSort":false,
          "paging":false,
          "columns":columns,
          "data":data
        });
        $(selector).addClass("shown");
      }
    }
};
