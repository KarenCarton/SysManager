package com.sys.exception;
/**
 * �Զ����쳣
 * @author her
 *
 */
public class OperException extends Exception {
  private Object detail;

  public OperException(String msg)
  {
    super(msg);
    this.detail = null;
  }

  public OperException(String msg, Object detail)
  {
    super(msg);
    this.detail = detail;
  }

  public Object getDetail()
  {
    return detail;
  }
  
  /**
   * 
   */
  public String getMessage()
  {
      String message = super.getMessage();
      if (detail!=null) {
          if (detail instanceof java.lang.Exception) {
              message += ": "+((java.lang.Exception)detail).getMessage();
          }
          else {
              message += ": "+detail.toString();
          }
      }

      return message;
  }
}