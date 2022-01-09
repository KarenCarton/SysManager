package com.sys.dao;

import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.sys.bean.UserModal;
import com.sys.common.serDao.BaseDao;

@Repository("userDao")
public class UserDao extends BaseDao {

	public UserModal getUser(UserModal u) {
		String hql=" from UserModal where 1=1 ";
		if(u!=null&&(u.getLoginName()!=null&&u.getPassword()!=null)) {
			if(u.getLoginName()!=null&&u.getPassword()!=null) {
				hql+=" and loginName='"+u.getLoginName()+"' and password= '"+u.getPassword()+"'";
			}
			Session openSession = getSessionFactory().openSession();
			Query query = openSession.createQuery(hql);
			if(query.list().size()>=1) {
				UserModal user=(UserModal) query.list().get(0);
				openSession.close();
				return user;
			}else {
				return null;
			}
		}else {
			return null;
		}
	}
}
