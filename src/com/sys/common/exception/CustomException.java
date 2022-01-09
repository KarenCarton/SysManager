package com.sys.common.exception;
/**
 * 自定义异常处理
 * @author cetc-zq
 *
 */
public class CustomException extends Exception {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 7162115959708624932L;
	//异常信息
	public String exceptionMsg;
	
	public CustomException(String exceptionMsg){
		super(exceptionMsg);
		this.exceptionMsg = exceptionMsg;
	}

	public String getExceptionMsg() {
		return exceptionMsg;
	}

	public void setExceptionMsg(String exceptionMsg) {
		this.exceptionMsg = exceptionMsg;
	}

}

