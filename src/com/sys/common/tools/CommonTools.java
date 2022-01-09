package com.sys.common.tools;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Reader;
import java.sql.Clob;
import java.sql.SQLException;

public class CommonTools {
	public static String getStr(String str,int start,int end) {
		String befStr = str.substring(start,end);
		String aftStr = str.substring(end);
		int len = aftStr.length();
		int aa = Integer.parseInt(aftStr)+1;
		String cen = "";
		for (int i = 0; i < len; i++) {
			if (aa<Math.pow(10, i)) {
				cen = cen+"0";
			}
		}
		str = befStr+cen+aa;
		return str;
	}
	//获取最大id  beginNum--前几位不是数字
	public static String getMaxIdStr(String id,int beginNum) {
		int len = id.length();
		String befStr = id.substring(0,beginNum);
		String aftStr = id.substring(beginNum,len);
		len = len - beginNum;
		int aa = Integer.parseInt(aftStr)+1;
		String cen = ""+aa;
		for (int i = 0; i < 10000; i++) {
			if (cen.length() == len) break;
			cen = "0" + cen;
		}
		String str = befStr+cen;
		return str;
	}
	
	/**
	 * 类型转换
	 * clob to string
	 */
	public static String clobToString(Clob clob){
		String clobStr = "";
		Reader is = null;
		try {
			if(clob != null) {
				is = clob.getCharacterStream();
				BufferedReader br = new BufferedReader(is);
				String s = null; 
				s = br.readLine();
				StringBuffer sb= new StringBuffer();
				while (s!=null) {
					sb.append(s);
					s = br.readLine();
				}
				clobStr = sb.toString();
			}
		}catch (IOException e) {
			e.printStackTrace();
		}catch (SQLException e) {
			e.printStackTrace();
		}
		return clobStr;
	}
}
