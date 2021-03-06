package com.sys.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sys.bean.UserModal;
import com.sys.common.service.IBaseService;
import com.sys.service.UserService;

@Controller
@RequestMapping(value="/login")
public class LoginController {
    @Autowired
	private UserService userService;
    @Autowired 
    IBaseService baseService;
    @RequestMapping(value = "login", method = RequestMethod.GET)
   	public String login(HttpServletRequest request,HttpServletResponse response){
       	return "login";
   	}
    //用户登录请求
    @RequestMapping(value="/login")
	public String hello(UserModal u,HttpSession session,HttpServletRequest request,HttpServletResponse response) {
    	UserModal user=userService.getUser(u);
    	//判断请求
		if(user!=null) {
			request.getSession().setAttribute("CURRENT_USER", user);
			return "redirect:/login/index";
		}
		request.getSession().setAttribute("CURRENT_USER", null);
		session.setAttribute("LoginInfo", "Failed");
		return "login";
	}
    
    //获取当前登录用户 跳转banner  标识设置退出或者返回按钮
    @RequestMapping(value="/getBanner")
   	public String getBanner(HttpServletRequest request) {
       	UserModal user=(UserModal) request.getSession().getAttribute("CURRENT_USER");
   		if(user!=null) {
   			request.setAttribute("CURRENT_USER", user);
   		}
   		String flag=request.getParameter("flag");
   		request.setAttribute("flag", flag);
   		String type=request.getParameter("type");
   		request.setAttribute("type", type);
   		return "/mainFrame/banner";
   	}
    //退出登录
    @RequestMapping(value="loginOut")
    public String loginOut(HttpServletRequest request,HttpServletResponse response) {
    	request.getSession().setAttribute("CURRENT_USER", null);
    	return "/login";
    }
    
    @RequestMapping(value="/index")
    public String loginData(HttpServletRequest request,HttpServletResponse response) {
    	
    	return "/mainFrame/indexFrame";
    }
    
    
  
}
