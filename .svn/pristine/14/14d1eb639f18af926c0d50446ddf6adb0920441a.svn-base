package com.sys.common.service;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sys.common.serDao.IBaseDao;



@Transactional
@Service("IBaseService")
public class BaseServiceImpl implements IBaseService{

	@Autowired
    IBaseDao iBaseDao;

	public <T> boolean save(T entity) {
		try {
			iBaseDao.save(entity);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	public <T> boolean saveOrUpdate(T entity) {
		try {
			iBaseDao.saveOrUpdate(entity);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public <T> boolean delete(T entity) {
		try {
			iBaseDao.delete(entity);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public <T> boolean deleteAll(Class<T> entityClass) {
		try {
			iBaseDao.deleteAll(entityClass);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public <T> boolean deleteById(Class<T> entityClass, Long id) {
		try {
			iBaseDao.deleteById(entityClass, id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public <T> boolean deleteById(Class<T> entityClass, String id) {
		try {
			iBaseDao.deleteByUUID(entityClass, id);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	public <T> T getById(Class<T> entityClass, Long id) {
		try {
			return iBaseDao.getById(entityClass, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public <T> T getById(Class<T> entityClass, String id) {
		try {
			return iBaseDao.getByUUID(entityClass, id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public <T> List<T> getAll(Class<T> entityClass) {
		try {
			return iBaseDao.getAll(entityClass);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<T>();
	}

	public <T> long getCountByCriteria(Class<T> entityClass, List<Criterion> criterions) {
		try {
			DetachedCriteria dCriteria = iBaseDao.createDetachedCriteria(entityClass);
			if (null != criterions && criterions.size() > 0) {
				for (Criterion criterion : criterions) {
					if (null != criterion) {
						dCriteria.add(criterion);
					}
				}
			}
			
			return iBaseDao.getCount(dCriteria);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}

	public int executeSql(String hql) {
		try {
			return iBaseDao.executeSql(hql);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -1;
	}

	public long getCountBySql(String hql) {
		try {
			return iBaseDao.getCountBySql(hql);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}

	@SuppressWarnings("rawtypes")
	public List findBySql(String sql){
		try {
			return iBaseDao.findBySql(sql);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList();
	}

	@SuppressWarnings("rawtypes")
	public List findBySql(String sql, int firstResult, int maxResults) {
		try {
			return iBaseDao.findBySql(sql, firstResult, maxResults);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList();
	}

	@SuppressWarnings("unchecked")
	public <T> List<T> findByCriteria(Class<T> entityClass, List<Criterion> criterions) {
		try {
			DetachedCriteria dCriteria = iBaseDao.createDetachedCriteria(entityClass);
			if (null != criterions && criterions.size() > 0) {
				for (Criterion criterion : criterions) {
					if (null != criterion) {
						dCriteria.add(criterion);
					}
				}
			}
			return (List<T>)iBaseDao.findByCriteria(dCriteria);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<T>();
	}

	@SuppressWarnings("unchecked")
	public <T> List<T> findByCriteria(Class<T> entityClass, List<Criterion> criterions, int firstResult, int maxResults) {
		try {
			DetachedCriteria dCriteria = iBaseDao.createDetachedCriteria(entityClass);
			if (null != criterions && criterions.size() > 0) {
				for (Criterion criterion : criterions) {
					if (null != criterion) {
						dCriteria.add(criterion);
					}
				}
			}
			return (List<T>)iBaseDao.findByCriteria(dCriteria, firstResult, maxResults);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ArrayList<T>();
	}

}
