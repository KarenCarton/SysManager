/**
 * 
 */
package com.sys.common.serDao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;

import com.sys.common.tools.Pager;
import com.sys.exception.OperException;

public interface IBaseDao {
	/**
	 * 通过Id获取实体类对象信息
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *            主键
	 * @return 实体对象
	 */
	<T> T getByUUID(Class<T> entityClass, String id) throws OperException;
	/**
	 * 通过Id获取实体类对象信息
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *            主键
	 * @return 实体对象
	 */
	<T> T getById(Class<T> entityClass, Long id) throws OperException;
	
	<T> T getById(Class<T> entityClass, String id) throws OperException;
	/**
	 * 获取实体类对象列表
	 * 
	 * @param entityClass
	 *            实体类
	 * @return 实体对象 
	 */
	<T> List<T> getAll(Class<T> entityClass) throws OperException;
	/**
	 * 获取实体类对象列表
	 * 
	 * @param entityClass
	 *            实体类
	 * @param start
	 *            起始条目
	 * @param count
	 *            返回条目数量           
	 * @return 实体对象列表
	 */
	<T> List<T> getAll(Class<T> entityClass, int start, int count) throws OperException;
	/**
	 * 删除实体对象
	 * 
	 * @param entity
	 *            实体对象         
	 */
	<T> void delete(T entity) throws OperException;
	/**
	 * 通过ID删除条目
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *           实体类主键ID
	 */
	<T> void deleteById(Class<T> entityClass, Long id) throws OperException;
	/**
	 * 通过ID删除条目
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *           实体类主键ID
	 */
	<T> void deleteByUUID(Class<T> entityClass, String id) throws OperException;
	/**
	 * 删除所有实体类对象
	 * 
	 * @param entityClass
	 *            实体类
	 */
	<T> void deleteAll(Class<T> entityClass) throws OperException;
	/**
	 * 删除集合
	 * 
	 * @param entityClass
	 *            实体类
	 */
	<T> void deleteAll(List<T> entities) throws OperException;
	/**
	 * 保存或者更新实体类对象
	 * 
	 * @param entity
	 *            实体类对象
	 */
	<T> void saveOrUpdate(T entity) throws OperException;
	<T> void update(T entity) throws OperException;
	/**
	 * 保存或者更新实体类对象集合
	 * 
	 * @param entities
	 *            实体类对象集合
	 */
	<T> void saveOrUpateAll(List<T> entities) throws OperException;
	/**
	* 执行hql语句
	* 
	* @param hql
	*           查询语句
	* @return 如果成功返回包含查询条目数量
	*/
	int executeSql(final String hql) throws OperException;
	
	/**
	 * 根据hql语句查询
	 * 
	 * @param hql
	 *           查询语句
	 * @param firstResult
	 *            起始查询位置
	 * @param maxResults
	 *            总查询数量
	 * @return 如果成功返回包含查询条目数量
	 */
	List findBySql(final String hql, final int firstResult, final int maxResults) throws OperException;
	
	long getCountBySql(final String hql) throws OperException; 
	/**
	 * 根据hql语句查询
	 * 
	 * @param hql
	 *           查询语句
	 * @return 如果成功返回包含查询条目数量
	 */
	 List findBySql(final String hql) throws OperException;
	
	void clear();

	void flush();

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
	List findByCriteria(DetachedCriteria criteria, int firstResult,
			int maxResults) throws OperException;
	/**
	 * 根据查询条件获取集合
	 * 
	 * @param criteria
	 *           查询条件
	 * @return 如果成功返回包含查询结果
	 */
	List findByCriteria(DetachedCriteria criteria) throws OperException;
	/**
	 * 根据查询条件获取集合条目数量
	 * 
	 * @param criteria
	 *           查询条件
	 * @return 如果成功返回包含查询条目数量
	 */
	long getCount(DetachedCriteria criteria)  throws OperException;

	<T> Criteria createCriteria(Class<T> entityClass);

	<T> DetachedCriteria createDetachedCriteria(Class<T> entityClass);
	
	List executesql(String sql);
	
	<T> String save(T entity) throws OperException;
	
	Pager findAsPage(DetachedCriteria detachedCriteria, int start, int count) throws OperException;
}
