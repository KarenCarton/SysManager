package com.sys.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sys.bean.FunctionModal;
import com.sys.bean.RoleFunctionModal;
import com.sys.bean.RoleModal;
import com.sys.bean.RoleUserModal;
import com.sys.common.serDao.IBaseDao;
import com.sys.common.tools.TreeNodeEzui;
import com.sys.exception.OperException;
import com.sys.service.RoleFunctionService;
@Service("rfService")
public class RoleFunctionServiceImpl  implements RoleFunctionService{
   
    @Autowired
	IBaseDao iBaseDao;
    
	@Override
	public List<TreeNodeEzui> getFunctionTree() {
		String sql="select id ,pid,name from T_FUNCTION t start with pid is null connect by pid= prior id ";
		List<Object[]> funtionList=iBaseDao.executesql(sql);
		List<TreeNodeEzui> list=new ArrayList<TreeNodeEzui>();
		if(funtionList!=null) {
			for (Object[] o : funtionList) {
				TreeNodeEzui t=new TreeNodeEzui();
				t.setId(o[0].toString());
				t.setName(o[2].toString());
				t.setpId(o[1]==null ? " ":o[1].toString());
				list.add(t);
			}
		}
		return list;
	}
/*	@SuppressWarnings("unchecked")
	@Override
	public List<FunctionModal> getAllFunctions(FunctionModal function) {
		 DetachedCriteria detachedCriteria = iBaseDao.createDetachedCriteria(FunctionModal.class);
		 if(!StringUtils.isEmpty(function.getName())) {
			 detachedCriteria.add(Restrictions.eq("name", function.getName()));
		 }
	     try {
			List<FunctionModal> list = iBaseDao.findByCriteria(detachedCriteria);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}*/
	@SuppressWarnings("unchecked")
	@Override
	public List<RoleModal> getAllRoles(RoleModal role) {
		 DetachedCriteria detachedCriteria = iBaseDao.createDetachedCriteria(RoleModal.class);
		 if(!StringUtils.isEmpty(role.getRoleName())) {
			 detachedCriteria.add(Restrictions.eq("roleName", role.getRoleName()));
		 }
	     try {
			List<RoleModal> list = iBaseDao.findByCriteria(detachedCriteria);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<RoleFunctionModal> getRoleFunctionByRoleId(String roleId) {
		 DetachedCriteria detachedCriteria = iBaseDao.createDetachedCriteria(RoleFunctionModal.class);
		 if(!StringUtils.isEmpty(roleId)) {
			 detachedCriteria.add(Restrictions.eq("roleId", roleId));
			 detachedCriteria.addOrder(Order.asc("functionId"));
		 }
	     try {
			List<RoleFunctionModal> list = iBaseDao.findByCriteria(detachedCriteria);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}
	@SuppressWarnings("unchecked")
	@Override
	public List<RoleUserModal> getUserRoleByRoleId(String roleId) {
		 DetachedCriteria detachedCriteria = iBaseDao.createDetachedCriteria(RoleUserModal.class);
		 if(!StringUtils.isEmpty(roleId)) {
			 detachedCriteria.add(Restrictions.eq("roleId", roleId));
		 }
	     try {
			List<RoleUserModal> list = iBaseDao.findByCriteria(detachedCriteria);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public List<RoleUserModal> getUserRoleByUserId(String userId) {
		 DetachedCriteria detachedCriteria = iBaseDao.createDetachedCriteria(RoleUserModal.class);
		 if(!StringUtils.isEmpty(userId)) {
			 detachedCriteria.add(Restrictions.eq("userId", userId));
		 }
	     try {
			List<RoleUserModal> list = iBaseDao.findByCriteria(detachedCriteria);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public List<FunctionModal> getFunctionsByUserId(String userId) {
		String hql=" from FunctionModal where  id in (select r.functionId from RoleFunctionModal r,RoleUserModal u where  u.userId='"+userId+"' and u.roleId=r.roleId ) order by id";
        List<FunctionModal> list;
		try {
			list = iBaseDao.findBySql(hql);
			return list;
		} catch (OperException e) {
			e.printStackTrace();
		}
		return null;
	}

}
