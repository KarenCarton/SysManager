package com.sys.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 角色功能权限设置
 * @author cetc-zq
 *
 */
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sys.bean.FunctionModal;
import com.sys.bean.RoleFunctionModal;
import com.sys.bean.RoleModal;
import com.sys.bean.RoleUserModal;
import com.sys.common.service.IBaseService;
import com.sys.common.tools.TreeNodeEzui;
import com.sys.service.RoleFunctionService;
@Controller
@RequestMapping(value="/rf")
public class RoleFunctionController {
		@Autowired
        RoleFunctionService rfService;
		@Autowired
		IBaseService baseService;
		
		/*查询菜单树*/
		@ResponseBody
		@RequestMapping(value = "getFunctionTree", method = RequestMethod.GET)
		public List<TreeNodeEzui> getFunctionTree(){
			List<TreeNodeEzui> tree=rfService.getFunctionTree();
			return tree;
		}
		/*查询所有的功能菜单
	    @ResponseBody
	    @RequestMapping(value = "getAllFunctions", method = RequestMethod.POST)
		public List<FunctionModal> getAllFunctions(FunctionModal function,HttpServletRequest request,HttpServletResponse response){
	    	List<FunctionModal> functionList=rfService.getAllFunctions(function);
	    	return functionList;
		}*/
	    /*新增修改菜单功能*/
	    @ResponseBody
		@RequestMapping(value = "saveOrUpdateFunction", method = RequestMethod.POST)
		public Map<String, Object> saveOrUpdateFunction(FunctionModal function){
			Map<String, Object> map = new HashMap<String, Object>();
			if(function!=null){
				baseService.saveOrUpdate(function);
				map.put("state", true);
				map.put("msg", "添加成功");
			}else{
				map.put("state", false);
				map.put("msg", "参数错误");
			}
			return map;
		}
	    
	    /*查询所有的角色*/
	    @ResponseBody
	    @RequestMapping(value = "getAllRoles", method = RequestMethod.POST)
		public List<RoleModal> getAllRoles(RoleModal role,HttpServletRequest request,HttpServletResponse response){
	    	List<RoleModal> roleList=rfService.getAllRoles(role);
	    	return roleList;
		}
	    /*新增修改角色*/
	    @ResponseBody
  		@RequestMapping(value = "saveOrUpdateRole", method = RequestMethod.POST)
  		public Map<String, Object> saveOrUpdateRole(RoleModal role){
  			Map<String, Object> map = new HashMap<String, Object>();
  			if(role!=null){
  				baseService.saveOrUpdate(role);
  				map.put("state", true);
  				map.put("msg", "添加成功");
  			}else{
  				map.put("state", false);
  				map.put("msg", "参数错误");
  			}
  			return map;
  		}
	    /*验证角色关联用户*/
	    @ResponseBody
	    @RequestMapping(value = "getUserRoleByRoleId", method = RequestMethod.POST)
		public List<RoleUserModal> getUserRoleByRoleId(String roleId,HttpServletRequest request,HttpServletResponse response){
	    	List<RoleUserModal> list=rfService.getUserRoleByRoleId(roleId);
	    	return list;
		}
	    /*查询用户的角色*/
	    @ResponseBody
	    @RequestMapping(value = "getUserRoleByUserId", method = RequestMethod.POST)
		public List<RoleModal> getUserRoleByUserId(String userId,HttpServletRequest request,HttpServletResponse response){
			List<RoleUserModal> list=rfService.getUserRoleByUserId(userId);
			List<RoleModal> rlist=new ArrayList<RoleModal>();
			for (RoleUserModal roleUserModal : list) {
				RoleModal obj = baseService.getById(RoleModal.class, roleUserModal.getRoleId());
				List<RoleFunctionModal> rflist=rfService.getRoleFunctionByRoleId(roleUserModal.getRoleId());
				List<FunctionModal> functionList=new ArrayList<FunctionModal>();
				for (RoleFunctionModal roleFunctionModal : rflist) {
					FunctionModal f=baseService.getById(FunctionModal.class, roleFunctionModal.getFunctionId());
					functionList.add(f);
				}
				obj.setFunctionList(functionList);
				rlist.add(obj);
			}
			
	    	return rlist;
		}
	    
	    /*查询用户的角色关联的功能*/
	    @ResponseBody
	    @RequestMapping(value = "getFunctionsByUserId", method = RequestMethod.POST)
		public List<FunctionModal> getFunctionsByUserId(String userId,HttpServletRequest request,HttpServletResponse response){
	    	List<FunctionModal> functionList=rfService.getFunctionsByUserId(userId);
	    	return functionList;
		}
	    
	    /*角色分配功能*/
	    @ResponseBody
  		@RequestMapping(value = "addRoleFunction", method = RequestMethod.POST)
  		public Map<String, Object> addRoleFunction(String roleId,String functionIds){
  			Map<String, Object> map = new HashMap<String, Object>();
  			if(!StringUtils.isEmpty(functionIds)){
  				//先删除角色相关的功能
  				List<RoleFunctionModal> list=rfService.getRoleFunctionByRoleId(roleId);
  				for (RoleFunctionModal roleFunctionModal : list) {
					baseService.delete(roleFunctionModal);
				}
  				String[] ids=functionIds.split(",");
  				for (String id : ids) {
					RoleFunctionModal rf=new RoleFunctionModal();
					rf.setRoleId(roleId);
					rf.setFunctionId(id);
					baseService.saveOrUpdate(rf);
				}
  				map.put("state", true);
  				map.put("msg", "添加成功");
  			}else{
  				map.put("state", false);
  				map.put("msg", "参数错误");
  			}
  			return map;
  		}
	    /*用户分配角色*/
	    @ResponseBody
  		@RequestMapping(value = "addRoleUser", method = RequestMethod.POST)
  		public Map<String, Object> addRoleUser(String roleIds,String userIds){
  			Map<String, Object> map = new HashMap<String, Object>();
  			if(!StringUtils.isEmpty(userIds)) {
  				String[] rids=userIds.split(",");
  				for (String userId : rids) {
  					if(!StringUtils.isEmpty(roleIds)){
  						//先删除用户相关的角色
  						List<RoleUserModal> list=rfService.getUserRoleByUserId(userId);
  						for (RoleUserModal roleUserModal : list) {
  							baseService.delete(roleUserModal);
  						}
  						String[] ids=roleIds.split(",");
  						for (String roleId : ids) {
  							RoleUserModal ru=new RoleUserModal();
  							ru.setRoleId(roleId);
  							ru.setUserId(userId);
  							baseService.saveOrUpdate(ru);
  						}
  						map.put("state", true);
  						map.put("msg", "添加成功");
  					}else{
  						map.put("state", false);
  						map.put("msg", "参数错误");
  					}
				}
  			}
  			return map;
  		}
	    
	    /*获取角色详情*/
	    @ResponseBody
  		@RequestMapping(value = "getRoleById", method = RequestMethod.POST)
  		public RoleModal getRoleById(HttpServletRequest request, Model model,@RequestParam("id") String id) {
	    	RoleModal obj = baseService.getById(RoleModal.class, id);
	    	List<RoleFunctionModal> list=rfService.getRoleFunctionByRoleId(id);
	    	List<FunctionModal> functionList=new ArrayList<FunctionModal>();
	    	for (RoleFunctionModal roleFunctionModal : list) {
				FunctionModal f=baseService.getById(FunctionModal.class, roleFunctionModal.getFunctionId());
				functionList.add(f);
			}
	    	obj.setFunctionList(functionList);
	    	return  obj;
	    }
	    
}
