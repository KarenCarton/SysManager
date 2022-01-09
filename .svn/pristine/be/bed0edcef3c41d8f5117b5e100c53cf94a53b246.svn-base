package com.sys.common.serDao;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.ObjectRetrievalFailureException;
import org.springframework.orm.hibernate4.SessionFactoryUtils;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Repository("baseDao")
@Transactional(readOnly=false,propagation=Propagation.REQUIRED,rollbackFor=Exception.class)
public class BaseDao  {
	@Autowired
	private SessionFactory sessionFactory;
	
	public SessionFactory getSessionFactory() {
		return sessionFactory;
	}

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	public String save(Object o) {
		Session session=getSessionFactory().getCurrentSession();
		Serializable key =  session.save(o);
		return key.toString();
	}
	public void saveOrUpdate(Object o) {
		Session session=getSessionFactory().getCurrentSession();
		session.saveOrUpdate(o);
	}
	public Object getObject(Class clazz, Serializable id) {
		Session session=getSessionFactory().getCurrentSession();
		Object o=session.get(clazz, id);
		if (o == null) {
			throw new ObjectRetrievalFailureException(clazz, id);
		}
		return o;
	}
	
	/** 删除对象 */
	public void removeObject(Object obj) {
		Session session=getSessionFactory().getCurrentSession();
		session.delete(obj);
	}
	/** 删除对象 */
	public void removeObjectById(Class clazz, Serializable id) {
		Session session=getSessionFactory().getCurrentSession();
		Object o=getObject(clazz, id);
		if (o == null) {
			throw new ObjectRetrievalFailureException(clazz, id);
		}else {
			session.delete(o);
		}
	}
	
	public void execute(String sql) {
		Statement stm = null;
		Session session = sessionFactory.openSession();
		Connection con = null;
		try {
			con = SessionFactoryUtils.getDataSource(getSessionFactory()).getConnection();
			stm = con.createStatement();
			session.getTransaction().begin();
			stm.execute(sql);
			session.flush();
			session.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				stm.close();
				con.close();
				session.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
