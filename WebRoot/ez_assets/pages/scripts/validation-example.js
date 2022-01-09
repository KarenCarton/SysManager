$('#form_sample_1').ezValidator();
function validate(ele){
	var valid = $(ele).closest('form').valid();
	alert(valid);
}
$('#form_sample_2').ezValidator({
	submitHandler: function (form) {
                   
				form.submit();
                   
    }
});
$('#form_sample_3').ezValidator();
$.validator.addMethod('formula',function(value,element,param){
	return value == eval(param);
},'请正确输入数学公式计算后的结果');
 

$('#form_sample_4').ezValidator({
	rules:{
		remoteUserName:{
			required:true,
			maxlength:10,
			minlength:5,
			remote:{
				url:'http://192.168.18.72:8070/ezUI/services/remoteValidation',
				type:'POST',
				data:{
					remoteUserName:function(){
						return $('#remoteUserName').val();
					}
				}
			}
		}
	},
	messages:{
		remoteUserName:{
			required:'用户名不能为空',
			maxlength:'用户名最长为10个字符',
			minlength:'用户名最短为5个字符',
			remote:'用户名已经被注册'
		}
	}
});