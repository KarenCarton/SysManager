package com.sys.common.tools;

import java.io.File;
import java.util.ResourceBundle;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dictEditor.Constant;
import com.sys.bean.UserModal;

public class ConfigUtil {
	private static Logger logger=LoggerFactory.getLogger(ConfigUtil.class);
	private static String uploadDir = "";
	private static String templateDir="";
    
	public static UserModal getCurrentUser(HttpServletRequest request) {
		HttpSession session = request.getSession();
		UserModal user = (UserModal) session.getAttribute("CURRENT_USER");
		return user;
	}
	
	/**
	 * 获得上传路径
	 * 
	 * @return
	 */
	public static String getUploadDir() {
		if (StringUtils.isBlank(uploadDir)) {
			//ResourceBundle rb = ResourceBundle.getBundle("config");
			//uploadDir = rb.getString("file.upload.dir");
			uploadDir = Constant.getConstant("filePath");
			//uploadDir = XTService.getKeyValue("fileUploadDir");
			if (StringUtils.isBlank(uploadDir)) {
				uploadDir = File.separator + "home" + File.separator
						+ "cetc15" + File.separator + "upload";
			}
			logger.debug("文件上传路径:{}",uploadDir);
		}
		return uploadDir;
	}
	
	/**
	 * 获得上传路径
	 * 
	 * @return
	 */
	public static String getTemplateDir() {
		if (StringUtils.isBlank(templateDir)) {
			ResourceBundle rb = ResourceBundle.getBundle("config");
			templateDir = rb.getString("template.upload.dir");
			//templateDir = XTService.getKeyValue("templateUploadDir");
			if (StringUtils.isBlank(templateDir)) {
				templateDir = File.separator + "home" + File.separator
						+ "cetc15" + File.separator + "upload"+ File.separator +"template";
			}
			logger.debug("模板上传路径:{}",templateDir);
		}
		return templateDir;
	}
	
	/**
	 * 获得上传路径
	 * 
	 * @return
	 */
	public static String getFileName(String str) {
		
			ResourceBundle rb = ResourceBundle.getBundle("config");
			String	name = rb.getString(str);
			return name;

	}
}
