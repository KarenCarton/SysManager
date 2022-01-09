package com.sys.common.serDao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate4.HibernateCallback;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.mysql.jdbc.StringUtils;
import com.sys.common.tools.Pager;
import com.sys.exception.OperException;
import com.sys.exception.OperExceptionMsg;;



/**
 * 数据库基本操作实现类
 * @author her
 * @date 2018.01.01
 */
@Transactional
@Repository("iBaseDao")
public class BaseDaoImpl extends HibernateDaoSupport implements IBaseDao {

	@Resource(name = "sessionFactory")
	public void setHibernateSessionFactory(SessionFactory sessionFactory) {
		super.setSessionFactory(sessionFactory);
	}
	/**
	 * 根据查询条件获取集合
	 * 
	 * @param criteria
	 *           查询条件
	 * @param firstResult
	 *            起始查询位置
	 * @param maxResults
	 *            总查询数量
	 * @return 如果成功返回包含查询结果
	 */
	public List findByCriteria(DetachedCriteria criteria, int firstResult,
			int maxResults) throws OperException{
		if (null == criteria) {
			return new ArrayList();
		}
		try{
			if (firstResult < 0) {
				firstResult = 0;
			}
			if (maxResults <= 0) {
				maxResults = 1;
			}
			return criteria.getExecutableCriteria(currentSession())
					.setFirstResult(firstResult).setMaxResults(maxResults).list();
		}catch(Exception e){
			e.printStackTrace();
			throw new OperException (OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () );
		}

	}

	public List findByCriteria(DetachedCriteria criteria) throws OperException{
		if(null == criteria){
			return new ArrayList();
		}
		try{
			return criteria.getExecutableCriteria(currentSession()).list();
		}catch(Exception e){
			e.printStackTrace();
			throw new OperException (OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () );
		}
	}

	public long getCount(DetachedCriteria criteria) throws OperException{
		if (null == criteria) {
			return 0;
		}
		try{
			criteria.setProjection(Projections.rowCount());
			List list = this.findByCriteria(criteria, 0, 1);
			if (list.isEmpty()) {
				return 0;
			}
			return (Long)list.get(0);
		}catch(Exception e){
			e.printStackTrace();
			throw new OperException ( OperExceptionMsg.GET_DATA_COUNT_ERROR + e.getMessage () ); 
		}

	}

	public <T> T getById(Class<T> entityClass, Long id) throws OperException{
		if(null == id){
			return null;
		}
        try{
    		return getHibernateTemplate().get(entityClass, id);
        }catch(Exception e){
        	e.printStackTrace();
			throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
        }
	}
	
	public <T> T getById(Class<T> entityClass, String id) throws OperException{
		if(null == id){
			return null;
		}
        try{
    		return getHibernateTemplate().get(entityClass, id);
        }catch(Exception e){
        	e.printStackTrace();
			throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
        }
	}

	public <T> T getByUUID(Class<T> entityClass, String uuid) throws OperException{
		if (StringUtils.isEmptyOrWhitespaceOnly(uuid)) {
			return null;
		}
		try{
			return (T) createCriteria(entityClass).add(
					Restrictions.eq("id", uuid)).uniqueResult();
		}catch(Exception e){
			e.printStackTrace();
			throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
		}

	}

	public <T> List<T> getAll(Class<T> entityClass) throws OperException{
		try{
			return createCriteria(entityClass).list();
		}catch(Exception e){
			throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 

		}
	}

	public <T> List<T> getAll(Class<T> entityClass, int start, int count) throws OperException{
		if (start < 0) {
			start = 0;
		}
		if (count <= 0) {
			count = 1;
		}
		try{
			return createCriteria(entityClass).setFirstResult(start)
					.setMaxResults(count).list();
		}catch(Exception e){
			e.printStackTrace();
			throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
		}

	}

	public <T> void delete(T entity) throws OperException{
        if ( entity == null ) {
            throw new OperException (OperExceptionMsg.DELETE_DATA_NULL);
        }
        try{
    		getHibernateTemplate().delete(entity);
        }catch(Exception e){
        	e.printStackTrace();
			throw new OperException ( OperExceptionMsg.DATABASE_DELETE_ERROR + e.getMessage () ); 
        }
	}

	public <T> void deleteById(Class<T> entityClass, Long id) throws OperException{
		Object t = getById(entityClass, id);
        if ( t == null ) {
            throw new OperException (OperExceptionMsg.DELETE_DATA_NULL);
        }
		if (null != t) {
			delete(t);
		}
	}
	public <T> void deleteByUUID(Class<T> entityClass, String id) throws OperException{
		Object t = getByUUID(entityClass, id);
        if ( t == null ) {
            throw new OperException (OperExceptionMsg.DELETE_DATA_NULL);
        }
		if (null != t) {
			delete(t);
		}
	}
	public <T> void deleteAll(Class<T> entityClass) throws OperException{
		List entities = getAll(entityClass);
		if(null ==  entities){
            throw new OperException (OperExceptionMsg.DELETE_DATA_NULL);
		}
		try{
			getHibernateTemplate().deleteAll(entities);
		}catch(Exception e){
            throw new OperException (OperExceptionMsg.DATABASE_DELETE_ERROR);

		}
	}

	public <T> void saveOrUpdate(T entity) throws OperException{
        if ( entity == null ) {
            throw new OperException (OperExceptionMsg.SAVE_DATA_NULL);
        }
        try {
        	getHibernateTemplate().saveOrUpdate(entity);
        }catch ( Exception e ) {
        	e.printStackTrace();
            throw new OperException (OperExceptionMsg.DATABASE_SAVE_ERROR + e.getMessage () );
        }
	}
	
	/**
	 * 保存实体类后返回新生成的主键 （实体类需实现Serializable接口）
	 */
	public <T> String save(T entity) throws OperException{
		Serializable pKey;
        if ( entity == null ) {
            throw new OperException (OperExceptionMsg.SAVE_DATA_NULL);
        }
        try {
        	pKey = getHibernateTemplate().save(entity);
        }catch ( Exception e ) {
        	e.printStackTrace();
            throw new OperException (OperExceptionMsg.DATABASE_SAVE_ERROR + e.getMessage () );
        }
        return pKey.toString();
	}
	
	
	public <T> void update(T entity) throws OperException{
        if ( entity == null ) {
            throw new OperException (OperExceptionMsg.SAVE_DATA_NULL);
        }
        try {
        	getHibernateTemplate().update(entity);
        }catch ( Exception e ) {
        	e.printStackTrace();
            throw new OperException (OperExceptionMsg.DATABASE_SAVE_ERROR + e.getMessage () );
        }
	}

	public <T> void saveOrUpateAll(List<T> entities) throws OperException{
		if (null == entities || entities.size() <= 0) {
			 throw new OperException (OperExceptionMsg.SAVE_DATA_NULL);
		}
		try{
			for (T entity : entities) {
				getHibernateTemplate().saveOrUpdate(entity);
			}
		}catch(Exception e){
			e.printStackTrace();
			throw new  OperException (OperExceptionMsg.DATABASE_SAVE_ERROR + e.getMessage () ); 
		}
		
		
	}

	public void clear() {
		getHibernateTemplate().clear();
	}

	public void flush() {
		getHibernateTemplate().flush();
	}

	public <T> Criteria createCriteria(Class<T> entityClass) {
		return currentSession().createCriteria(entityClass);
	}

	public <T> DetachedCriteria createDetachedCriteria(Class<T> entityClass) {
		return DetachedCriteria.forClass(entityClass);
	}
	public int executeSql(final String hql) throws OperException {
		// TODO 自动生成的方法存根
		try{
			return (Integer) getHibernateTemplate().execute(new HibernateCallback() {
			   	public Object doInHibernate(final Session session) throws HibernateException {
			   			Query queryObject = session.createQuery(hql);
			   			return queryObject.executeUpdate();
			   	}
			}); 
		 }catch(Exception e){
			   throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
		 }

	}
	public List findBySql(final String hql,final int firstResult,final int maxResults) throws OperException{
		// TODO 自动生成的方法存根
		  try{
			   	return (List) getHibernateTemplate().execute(new HibernateCallback() {
			   		public Object doInHibernate(final Session session) throws HibernateException {
			   			Query queryObject = session.createQuery(hql);
			   			queryObject.setFirstResult(firstResult);
			   			queryObject.setMaxResults(maxResults);
			   			return queryObject.list();
			   		}
			   	}); 
		  }catch(Exception e){
			   throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
		  }
	}
	public long getCountBySql(String hql) throws OperException{
		// TODO 自动生成的方法存根
		try{		
			List list=this.getHibernateTemplate().find(hql);
			Long count=((Number)list.iterator().next()).longValue();
			return count;
		}
		catch(Exception e){
			throw new OperException ( OperExceptionMsg.GET_DATA_COUNT_ERROR + e.getMessage () ); 
		}
	}
	public List findBySql(final String hql) throws OperException{
		// TODO 自动生成的方法存根
		  try{
			   	return (List) getHibernateTemplate().execute(new HibernateCallback() {
			   		public Object doInHibernate(final Session session) throws HibernateException {
			   			Query queryObject = session.createQuery(hql);
			   			return queryObject.list();
			   		}
			   	}); 
		  }catch(Exception e){
			   throw new OperException ( OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () ); 
		  }
	}
	public List executesql(String sql) {
		// TODO Auto-generated method stub
		Query query = currentSession().createSQLQuery(sql);
		List datas = query.list();
		return datas;
	}
	public <T> void deleteAll(List<T> entities) throws OperException {
		if (null == entities || entities.size() <= 0) {
			 throw new OperException (OperExceptionMsg.SAVE_DATA_NULL);
		}
		try{
			for (T entity : entities) {
				delete(entity);
			}
		}catch(Exception e){
			e.printStackTrace();
			throw new  OperException (OperExceptionMsg.DATABASE_SAVE_ERROR + e.getMessage () ); 
		}
	}
	public Pager findAsPage(DetachedCriteria detachedCriteria, int start,
			int count)  throws OperException{
		Pager page = new Pager();
		if (null == detachedCriteria) {
			return page;
		}
		if (start < 0) {
			start = 0;
		}
		if (count < 0) {
			count = 0;
		}

		int number = 10;
		if (count > 0) {
			number = count;
		}
		try{
			Criteria criteria = detachedCriteria
					.getExecutableCriteria(currentSession());
			if (start > 0) {
				criteria.setFirstResult(start);
			}
			if (count > 0) {
				criteria.setMaxResults(count);
			}
			List datas = criteria.list();
			page.setDatas(datas);
			
			long total = getCount(detachedCriteria);
			if (total == 0) {
				return page;
			}

			// 计算总页数
			int totalPage = 0;
			int currentPage = 0;
			if (count == 0) {
				count = datas.size();
				number = count;
				totalPage = 1;
				currentPage = 1;
			} else {
				totalPage = (int) (total / count);
				if (totalPage * count < total) {
					totalPage += 1;
				}
				// 当前页面
				currentPage = start / number;
				if (currentPage * number <= start) {
					currentPage += 1;
				}
			}
			// 设置分页信息
			page.setStart(start);
			page.setCount(count);
			page.setTotal(total);
			page.setCurrentPage(currentPage);
			page.setTotalPage(totalPage);
			page.setNumber(number);

			return page;
		}catch(Exception e){
			throw new OperException (OperExceptionMsg.DATABASE_QUERY_ERROR + e.getMessage () );
		}
	}
	
}
