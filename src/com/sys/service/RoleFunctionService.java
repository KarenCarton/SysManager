package com.sys.service;

import java.util.List;

import com.sys.bean.FunctionModal;
import com.sys.bean.RoleFunctionModal;
import com.sys.bean.RoleModal;
import com.sys.bean.RoleUserModal;
import com.sys.common.tools.TreeNodeEzui;

public interface RoleFunctionService {

	List<TreeNodeEzui> getFunctionTree();

	List<RoleModal> getAllRoles(RoleModal role);

	List<RoleFunctionModal> getRoleFunctionByRoleId(String roleId);

	List<RoleUserModal> getUserRoleByRoleId(String roleId);

	List<RoleUserModal> getUserRoleByUserId(String userId);

	List<FunctionModal> getFunctionsByUserId(String userId);


}
