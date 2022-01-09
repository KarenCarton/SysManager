package com.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sys.common.service.IBaseService;
import com.sys.service.UserService;
/**
 * 用户控制
 * @author cetc-zq
 *
 */

@Controller
@RequestMapping(value="/user")
public class UserController {
	    @Autowired
		private UserService userService;
	    
	    @Autowired
	    private IBaseService ibaseService;
	    

}
