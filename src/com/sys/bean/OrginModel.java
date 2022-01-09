package com.sys.bean;


import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "T_SYS_ORGAN")
public class OrginModel implements Serializable {
	
	public OrginModel() {
		super();
	}

	/**
	 * 机构ID
	 */
	@Id
	@Column(name="ORGANID", length = 128)
	private String organid;

	/**
	 *　父机构ID
	 */
	@Column(name = "ORGANPID", length = 128)
	private String organpid;
	
	/**
	 *　机构名称
	 */
	@Column(name = "ORGANNAME", length = 255)
	private String organname;
	
	/**
	 * 用户名
	 */
	@Column(name = "ORD", length = 50)
	private String ord;
	
	/**
	 *所属区域
	 */
	@Column(name = "AREA", length = 6)
	private String area;
	
	public String getOrganid() {
		return organid;
	}

	public void setOrganid(String organid) {
		this.organid = organid;
	}

	public String getOrganpid() {
		return organpid;
	}

	public void setOrganpid(String organpid) {
		this.organpid = organpid;
	}

	public String getOrganname() {
		return organname;
	}

	public void setOrganname(String organname) {
		this.organname = organname;
	}

	public String getOrd() {
		return ord;
	}

	public void setOrd(String ord) {
		this.ord = ord;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}
	
}

