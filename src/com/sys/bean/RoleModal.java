package com.sys.bean;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.GenericGenerator;

/**
 * 角色表
 * @author cetc-zq
 *
 */
@Entity
@Table(name = "T_ROLE")
public class RoleModal {
	/**
	 * 主键
	 */
	@Id
	@GenericGenerator(name="idGenerator" ,strategy="uuid")
	@GeneratedValue(generator="idGenerator")
	@Column(name="ROLEID", length = 64)
	private String roleId;
	/**
	 * 角色名称
	 */
	@Column(name="ROLENAME", length = 100)
	private String roleName;
	/**
	 * 角色说明
	 */
	@Column(name="INFO", length = 400)
	private String info;
	
	@Transient
	private List<FunctionModal> functionList;
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public List<FunctionModal> getFunctionList() {
		return functionList;
	}
	public void setFunctionList(List<FunctionModal> functionList) {
		this.functionList = functionList;
	}
	
}
