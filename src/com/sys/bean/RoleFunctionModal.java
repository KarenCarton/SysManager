package com.sys.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
 * 角色功能关联表
 * @author cetc-zq
 *
 */
@Entity
@Table(name = "T_ROLEFUNCTION")
public class RoleFunctionModal {
	/**
	 * 主键
	 */
	@Id
	@GenericGenerator(name="idGenerator" ,strategy="uuid")
	@GeneratedValue(generator="idGenerator")
	@Column(name="ID", length = 64)
	private String id;
	/**
	 * 角色id
	 */
	@Column(name="ROLEID", length = 64)
	private String roleId;
	/**
	 * 功能id
	 */
	@Column(name="FUNCTIONID", length = 64)
	private String functionId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getFunctionId() {
		return functionId;
	}
	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}
}
