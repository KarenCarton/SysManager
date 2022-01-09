package com.sys.common.tools;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 查询分页信息
 * 
 * @author pan
 *
 */
public class Pager implements Serializable{
	private static final long serialVersionUID = -3889207987153033995L;
	// 起始条目数
	private int start;
	// 需要获取的条目数
	private int count;
	// 每页显示的条数
	private int number;
	// 数据库中总的数据量
	private long total;
	// 当前的页数
	private int currentPage;
	// 总页数
	private int totalPage;
	// 查询的数据
	private List<Object> datas = new ArrayList<Object>();

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public long getTotal() {
		return total;
	}

	public void setTotal(long total) {
		this.total = total;
	}

	public List<Object> getDatas() {
		return datas;
	}

	public void setDatas(List<Object> datas) {
		this.datas = datas;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}

}
