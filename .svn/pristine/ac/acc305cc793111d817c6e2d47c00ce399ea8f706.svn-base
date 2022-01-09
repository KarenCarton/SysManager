package com.sys.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

/**
   *  功能表
 * @author cetc-zq
 *
 */
@Entity
@Table(name = "T_FUNCTION")
public class FunctionModal {
	/**
	 * 主键
	 */
	@Id
	@GenericGenerator(name="idGenerator" ,strategy="uuid")
	@GeneratedValue(generator="idGenerator")
	@Column(name="ID", length = 64)
	private String id;
	/**
	 * 功能名称
	 */
	@Column(name="NAME", length = 200)
	private String name;
	/**
	 * 父功能
	 */
	@Column(name="PID", length = 64)
	private String pid;
	/**
	 * 链接
	 */
	@Column(name="LINK", length = 200)
	private String link;
	/**
	 * 说明
	 */
	@Column(name="INFO", length = 400)
	private String info;
	/**
	 * 图标
	 */
	@Column(name="ICON", length = 200)
	private String icon;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPid() {
		return pid;
	}
	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	
	
}
