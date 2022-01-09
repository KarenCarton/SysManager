package com.sys.common.tools;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class GetMD5 {
	/**
	 * MD5加密
	 * 
	 * @param str
	 * @return
	 * @throws NoSuchAlgorithmException
	 */
	public static String getMD5(String str) throws Exception {
		if (str == null || str.length() == 0) {
			return "null";
		}
		str += "6223920FB";// 密钥
		StringBuffer hexString = new StringBuffer();
		MessageDigest md = MessageDigest.getInstance("MD5");
		md.update(str.getBytes());
		byte[] hash = md.digest();

		for (int i = 0; i < hash.length; i++) {
			if ((0xff & hash[i]) < 0x10) {
				hexString.append("0" + Integer.toHexString((0xFF & hash[i])));
			} else {
				hexString.append(Integer.toHexString(0xFF & hash[i]));
			}
		}
		return hexString.toString().toUpperCase();
	}

}
