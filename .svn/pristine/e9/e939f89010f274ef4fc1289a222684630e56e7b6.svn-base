package com.sys.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_SYS_SYSTEMUSER")
public class UserModal {

	public UserModal() {
		super();
	}

	public UserModal(String userid, String userName, String password, String loginName, String role) {
		super();
		this.userid = userid;
		this.userName = userName;
		this.password = password;
		this.loginName = loginName;
	}
	

	/**
	 * 用户ID
	 */
	@Id
	@Column(name = "USERID", length = 128)
	private String userid;

	/**
	 * 登录名
	 */
	@Column(name = "LOGINNAME", length = 128)
	private String loginName;
	/**
	 * 密码
	 */
	@Column(name = "PASSWORD", length = 128)
	private String password;
	/**
	 * 用户名
	 */
	@Column(name = "USERNAME", length = 128)
	private String userName;

	/**
	 * 所属机构ID
	 */
	@Column(name = "ORGANID", length = 128)
	private String orginid;

	/**
	 * 角色
	 */
	@Column(name = "ROLEIDS", length = 1000)
	private String roleids;

	/**
	 * 注册时间
	 */
	@Column(name = "REGISTERTIME")
	private String registerTime;

	/**
	 * 出生日期
	 */
	@Column(name = "BIRTHDAY")
	private String birthday;

	/**
	 * 性别
	 */
	@Column(name = "sex", length = 10)
	private String sex;

	/**
	 * 联系电话
	 */
	@Column(name = "TEL", length = 50)
	private String tel;

	/**
	 * 地址
	 */
	@Column(name = "ADDRESS", length = 500)
	private String address;

	/**
	 * 民族
	 */
	@Column(name = "NATION", length = 10)
	private String nation;

	/**
	 * 政治面貌
	 */
	@Column(name = "POLITICALSTATUS", length = 10)
	private String politicalstatus;

	/**
	 * 最高学历
	 */
	@Column(name = "HIGHESTEDUCATION", length = 10)
	private String highesteducation;

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getOrginid() {
		return orginid;
	}

	public void setOrginid(String orginid) {
		this.orginid = orginid;
	}

	public String getRoleids() {
		return roleids;
	}

	public void setRoleids(String roleids) {
		this.roleids = roleids;
	}

	public String getRegisterTime() {
		return registerTime;
	}

	public void setRegisterTime(String registerTime) {
		this.registerTime = registerTime;
	}

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public String getPoliticalstatus() {
		return politicalstatus;
	}

	public void setPoliticalstatus(String politicalstatus) {
		this.politicalstatus = politicalstatus;
	}

	public String getHighesteducation() {
		return highesteducation;
	}

	public void setHighesteducation(String highesteducation) {
		this.highesteducation = highesteducation;
	}
}
