package com.sys.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
 * 角色人员关联表
 * @author cetc-zq
 *
 */
@Entity
@Table(name = "T_ROLEUSER")
public class RoleUserModal {
	/**
	 * 主键
	 */
	@Id
	@GenericGenerator(name="idGenerator" ,strategy="uuid")
	@GeneratedValue(generator="idGenerator")
	@Column(name="ID", length = 64)
	private String id;
	/**
	 * 用户id
	 */
	@Column(name="USERID", length = 64)
	private String userId;
	/**
	 * 角色id
	 */
	@Column(name="ROLEID", length = 64)
	private String roleId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	
	
}
