package com.sys.common.service;

import java.util.List;

import org.hibernate.criterion.Criterion;



public interface IBaseService {
	<T> boolean save(T entity);
	/**
	 * 保存或者更新实体类对象
	 * 
	 * @param entity
	 *            实体类对象
	 */
	<T> boolean saveOrUpdate(T entity);
	/**
	 * 通过ID删除条目
	 * 
	 * @param entityClass
	 *            实体类
	 */
	<T> boolean delete(T entity);
	/**
	 * 删除所有实体类对象
	 * 
	 * @param entityClass
	 *            实体类
	 */
	<T> boolean deleteAll(Class<T> entityClass);
	/**
	 * 通过ID删除条目
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *           实体类主键ID
	 */
	<T> boolean deleteById(Class<T> entityClass, Long id);
	<T> boolean deleteById(Class<T> entityClass, String id);
	
	/**
	 * 通过Id获取实体类对象信息
	 * 
	 * @param entityClass
	 *            实体类
	 * @param id
	 *            主键
	 * @return 实体对象
	 */
	<T> T getById(Class<T> entityClass, Long id);
	<T> T getById(Class<T> entityClass, String id);
	/**
	 * 获取实体类对象列表
	 * 
	 * @param entityClass
	 *            实体类
	 * @return 实体对象
	 */
	<T> List<T> getAll(Class<T> entityClass);
	
	<T> long getCountByCriteria(Class<T> entityClass, List<Criterion> criterions);
	int executeSql(final String hql);
	long getCountBySql(final String hql);

	@SuppressWarnings("rawtypes")
	List findBySql(String hql);
	@SuppressWarnings("rawtypes")
	List findBySql(String hql, int firstResult, int maxResults);

	<T> List<T> findByCriteria(Class<T> entityClass, List<Criterion> criterions);
	<T> List<T> findByCriteria(Class<T> entityClass, List<Criterion> criterions, int firstResult, int maxResults);
	
}
