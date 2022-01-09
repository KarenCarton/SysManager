package com.sys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sys.bean.UserModal;
import com.sys.dao.UserDao;
import com.sys.service.UserService;


@Service("userService")
public class UserServiceImpl implements UserService{
    
	@Autowired
	UserDao userDao;
	
	public UserModal getUser(UserModal u) {
		return userDao.getUser(u);
	}

	
}
