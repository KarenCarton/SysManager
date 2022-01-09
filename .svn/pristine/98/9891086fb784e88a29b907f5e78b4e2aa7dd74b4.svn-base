package com.sys.common.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

/**
 * 全局异常处理
 * @author cetc-zq
 *
 */
public class CustomExceptionResolver  implements HandlerExceptionResolver {

	/**
	 * 解析异常
	 * @param ex 系统 抛出的异常
	 */
	public ModelAndView resolveException(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex) {

		//解析出异常类型
		CustomException customException = null;
		if (ex.getMessage() == null) {
			if (ex != null && (ex.getClass() != null || ex.getCause() != null)) {
				customException = new CustomException(ex.getClass().getName()+ex.getCause());
			}else {
				customException = new CustomException("未知异常<br/>");
			} 
		}else {
			customException = new CustomException(ex.getMessage());
		}
       
			
		ModelAndView modelAndView = new ModelAndView();		
		//将错误信息传到页面
		modelAndView.addObject("exceptionMsg", customException.getExceptionMsg());		
		//指向错误页面
		modelAndView.setViewName("err");
		
		return modelAndView;
	}

}
