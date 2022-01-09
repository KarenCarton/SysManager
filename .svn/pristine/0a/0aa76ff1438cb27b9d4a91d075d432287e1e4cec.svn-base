package com.sys.common.tools;

import java.beans.PropertyDescriptor;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.apache.commons.io.FileUtils;
import org.apache.tomcat.util.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.util.StringUtils;


public final class JavaUtil {
	private static final Logger logger = LoggerFactory.getLogger(JavaUtil.class);
	public static int parseToInt(String value) {
		if (StringUtils.isEmpty(value)) {
			return 0;
		}
		try {
			return Integer.parseInt(value);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		return 0;
	}

	public static long parseToLong(String value) {
		if (StringUtils.isEmpty(value)) {
			return 0;
		}
		try {
			return Long.parseLong(value);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		return 0;
	}

	public static List<Integer> parseToInt(List<String> values) {
		List<Integer> ints = new ArrayList<Integer>();
		if (null == values || values.isEmpty()) {
			return ints;
		}
		for (String value : values) {
			ints.add(parseToInt(value));
		}
		return ints;
	}

	public static List<Long> parseToLong(List<String> values) {
		List<Long> longs = new ArrayList<Long>();
		if (null == values || values.isEmpty()) {
			return longs;
		}
		for (String value : values) {
			longs.add(parseToLong(value));
		}
		return longs;
	}

	/**
	 * 格式化时间，时间样式为yyyy-MM-dd HH:mm:ss
	 * 
	 * @param date
	 *            时间
	 * @return 返回格式化后的时间串
	 */
	public static String formatTime(Date date) {
		if (null == date) {
			return "";
		}

		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String dateString = formatter.format(date);
		return dateString;
	}

	public static String formatTime(Date date, String dateFormat) {
		if (null == date || StringUtils.isEmpty(dateFormat)) {
			return "";
		}
		SimpleDateFormat formatter = new SimpleDateFormat(dateFormat);
		String dateString = formatter.format(date);
		return dateString;
	}

	private static long toSeconds(long date) {
		return date / 1000L;
	}

	private static long toMinutes(long date) {
		return toSeconds(date) / 60L;
	}

	private static long toHours(long date) {
		return toMinutes(date) / 60L;
	}

	private static long toDays(long date) {
		return toHours(date) / 24L;
	}

	private static long toMonths(long date) {
		return toDays(date) / 30L;
	}

	public static long toYears(long date) {
		return toMonths(date) / 365L;
	}

	public static long compareCurrentAsYear(Date date) {
		if (null == date) {
			return 0;
		}
		long delta = (new Date().getTime()) - date.getTime();
		return JavaUtil.toYears(delta);
	}

	/**
	 * 比较版本号,版本号形如00.00.00.00
	 * @param ver1
	 * @param ver2
	 * @return ver1大于ver2:-1 ver1等于ver2:0 ver1小于ver2:1
	 */
	public static int compareVersion(String ver1,String ver2){
		String[] strs1=ver1.split("\\.");
		String[] strs2=ver2.split("\\.");
		// 优先以长度作为判定标准
		if (strs1.length != strs2.length) {
			return strs1.length - strs2.length;
		}
		// 依次判断各子部分
		for (int i = 0; i < strs1.length; i++) {
			if (strs1[i].length() != strs2[i].length()) {
				return strs1[i].length() - strs2[i].length();
			}
			int result = strs1[i].compareTo(strs2[i]);
			if (result != 0)
				return result;
		}
		return 0;
	}
	
	/**
	 * 將文本转换为日期
	 * 
	 * @param dateString
	 *            日期文本
	 * @param format
	 *            日期文本对应的格式，如果没有指定，那么默认为"yyyy-MM-dd"
	 * @return 如果成功返回日期对象，否则返回null
	 */
	public static Date parseTextToDate(String dateString, String format) {
		if (StringUtils.isEmpty(dateString)) {
			return null;
		}
		if (StringUtils.isEmpty(format)) {
			format = "yyyy-MM-dd";
		}
		SimpleDateFormat sdf = new SimpleDateFormat(format);
		try {
			return sdf.parse(dateString);
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
		return null;
	}

	/**
	 * 对象转数组
	 * 
	 * @param obj
	 * @return
	 */
	public static byte[] toByteArray(Object obj) {
		byte[] bytes = null;
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		try {
			ObjectOutputStream oos = new ObjectOutputStream(bos);
			oos.writeObject(obj);
			oos.flush();
			bytes = bos.toByteArray();
			oos.close();
			bos.close();
		} catch (Exception ex) {
			logger.error(ex.getMessage(), ex);
		}
		return bytes;
	}

	/**
	 * 数组转对象
	 * 
	 * @param bytes
	 * @return
	 */
	public static Object toObject(byte[] bytes) {
		Object obj = null;
		try {
			ByteArrayInputStream bis = new ByteArrayInputStream(bytes);
			ObjectInputStream ois = new ObjectInputStream(bis);
			obj = ois.readObject();
			ois.close();
			bis.close();
		} catch (IOException ex) {
			ex.printStackTrace();
		} catch (ClassNotFoundException ex) {
			ex.printStackTrace();
		}
		return obj;
	}

	/**
	 * 检测邮箱地址是否合法
	 * 
	 * @param email
	 *            邮箱地址
	 * @return true合法 false不合法
	 */
	public static boolean isEmail(String email) {
		if (null == email || "".equals(email))
			return false;
		// Pattern p = Pattern.compile("\\w+@(\\w+.)+[a-z]{2,3}"); //简单匹配
		Pattern p = Pattern
				.compile("\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*");// 复杂匹配
		Matcher m = p.matcher(email);
		return m.matches();
	}

	public static boolean isPhone(String phone) {
		if (StringUtils.isEmpty(phone)) {
			return false;
		}
		String regExp = "^[1]([3-9][0-9]{1})[0-9]{8}$";
		Pattern p = Pattern.compile(regExp);

		Matcher m = p.matcher(phone);
		return m.matches();
	}

	public static boolean isBasicType(Object obj) {
		boolean result = false;
		if (null == obj) {
			return result;
		}
		if ((obj instanceof String) || (obj instanceof Integer)
				|| (obj instanceof Long) || (obj instanceof Byte)
				|| (obj instanceof Short) || (obj instanceof Float)
				|| (obj instanceof Double) || (obj instanceof Character)
				|| (obj instanceof Boolean)) {
			result = true;
		}
		return result;
	}
	
	public static String parseFileSize(String size){
		String result="";
		Long byteNum=Long.valueOf(size);
		if(byteNum!=null){
			DecimalFormat df=new DecimalFormat("##0.0");
			if(byteNum<0){
				return result;
			}else if(byteNum>=0&&byteNum<1024){
				result=byteNum+"byte";
			}else if(byteNum<1024*1024){
				double temp=byteNum/1024.00;
				result=df.format(temp)+"Kb";
			}else if(byteNum<1024*1024*1024){
				double temp=byteNum/(1024.00*1024.00);
				result=df.format(temp)+"Mb";
			}
		}
		return result;
	}
	/**
	 * 创建批量导出的临时文件夹
	 * @param directoryPath
	 * @param files
	 */
	public static void createTmpDirectory(String directoryPath,List<String> files){
		File file = new File(directoryPath);
		if(!file.exists()){
			file.mkdirs();
		}
		if(files != null && files.size() > 0){
			for(String s : files){
			File f = new File(s);
			if(f.exists()){
				try {
					FileUtils.copyFileToDirectory(f, file);
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}
			}
			File[] fs = file.listFiles();
			if(fs != null && fs.length > 0){
				for(File f : fs){
					String name = f.getName();
					String newName = directoryPath + File.separator + name.substring(name.indexOf("_")+1,name.length());
					renameFile(f.getAbsolutePath(), newName);
				}
			}
			
		}
		
	}
	/**
	 * 压缩整个临时文件夹，文件夹内只有mpk包 不包含其他文件夹 不做递归处理 
	 * 因为使用的是java自带的zip工具，不支持中文
	 * @param directoryPath
	 * @param fileList  需要压缩的文件夹
	 * @return
	 */
	public static boolean zipDirectory(String directoryPath,Map<String,String> fileMap){
		 File destFile = new File(directoryPath);
		 if(destFile.exists()){
			 destFile.delete();
		 }
		 try {
			destFile.createNewFile();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			logger.error("无法创建压缩文件");
		}
		 BufferedOutputStream bos = null;
		 ZipOutputStream out = null;
		try {
			bos = new BufferedOutputStream(new FileOutputStream(destFile));
			 out = new ZipOutputStream(bos);
			 for(Entry<String, String> entry : fileMap.entrySet()){
				 String filePath = entry.getValue();
				 String fileName = entry.getKey();
				 File file = new File(filePath);
				 if(!file.exists()){
					 continue;
				 }
				 ZipEntry zipEntry = new ZipEntry(fileName);
				 out.putNextEntry(zipEntry);
				 BufferedInputStream in = new BufferedInputStream(new FileInputStream(file));
				 byte[] b = new byte[1024];
				 while(in.read(b, 0, 1024) != -1){
					 out.write(b,0,1024);
				 }
				 in.close();
				 out.closeEntry();
				 
			 }
			 out.flush();
			 out.close();
			 bos.close();
		} catch (FileNotFoundException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}finally{
			if(out != null){
				 try {
					out.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}

			}
			if(bos != null){
				try {
					bos.close();
				} catch (IOException e) {
					// TODO 自动生成的 catch 块
					e.printStackTrace();
				}
			}
		}
		
		 
		
		 return true;
	}
	
	
	
	
	
	
	
	/**
	 * 将产生的临时文件删除
	 * @param path
	 */
	public static void deleteTmpFolder(String path){
		File file = new File(path);
		if(file.exists()){
			File[] files  = file.listFiles();
			if(files != null && files.length > 0){
				for(File f : files){
					f.delete();
				}
			}
			file.delete();
		}
	}
	public static void deleteTmpFile(String path){
		File file = new File(path);
		if(file.exists()){
			file.delete();
		}
	}
	private static void renameFile(String oldFile,String newFile){
		File oFile = new File(oldFile);
		File nFile = new File(newFile);
		if(oFile.exists() && !nFile.exists()){
			oFile.renameTo(nFile);
		}
	}
	/**
	 * 获得vo里的空的属性
	 * @param source
	 * @return
	 */
	public static String[] getNullPropertyNames(Object source){
		final BeanWrapper src = new BeanWrapperImpl(source);
		PropertyDescriptor[] pds = src.getPropertyDescriptors();
		Set<String> emptyNames = new HashSet<String>();
		for(PropertyDescriptor pd : pds){
			Object srcValue = src.getPropertyValue(pd.getName());
			if(srcValue == null){
				emptyNames.add(pd.getName());
			}
		}
		String[] result = new String[emptyNames.size()];
		return emptyNames.toArray(result);
	}
	/**
	 * 从url处下载文件 如果filePath已经存在了 则不下载
	 * @param filePath
	 * @param url
	 */
	public static void downloadFileFromRemote(String filePath,String url){
		File file = new File(filePath);
		File parent = file.getParentFile();
		if(!parent.exists()){
			parent.mkdirs();
		}
		if(!file.exists()){
			URL mpkUrl = null;
			BufferedInputStream bis = null;
			HttpURLConnection connection = null;
			BufferedOutputStream bos = null;
			try {
				mpkUrl = new URL(url);
				 connection = (HttpURLConnection)mpkUrl.openConnection();
				//超时时间是5秒
				connection.setConnectTimeout(5*1000);
				 bis = new BufferedInputStream(connection.getInputStream());
				byte[] buffer = new byte[8192];
				 bos = new BufferedOutputStream(new FileOutputStream(file));
				 int c = 0;
				while( (c = bis.read(buffer)) != -1){
					bos.write(buffer,0,c);
					bos.flush();
				}
				
			}  catch (Exception e) {
				// TODO Auto-generated catch block
				try {
					throw new InterruptedException();
				} catch (InterruptedException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				e.printStackTrace();
			}finally{
				if(bis != null){
					try {
						bis.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

				}
				if(bos != null){
					try {
						bos.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

				}
				
				connection.disconnect();
			}
			
		}
	}
	
	public static  String getUUID(){
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
	public static String encodeUrlSafeBase64(String source){
		if(source == null){
			return null;
		}
		Base64 base64 = new Base64();
		try {
			byte[] buf = base64.encode(source.getBytes("UTF-8"));
			String s = new String(buf);
			s = s.replaceAll("\\+","-");
			s = s.replaceAll("/","_");
			s = s.replaceAll("=","");
			return s;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	public static String decodeUrlSafeBase64(final String result){
		Base64 base64 = new Base64();
		if(result == null){
			return null;
		}
		String copy = result;
		copy = copy.replaceAll("-","+");
		copy = copy.replaceAll("_","/");
		int mod = copy.length() % 4;
		if(mod > 0){
			copy += "====".substring(mod);
		}
		try {
			byte[] buf = base64.decode(copy.getBytes("UTF-8"));
			String s = new String(buf);
			return s;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
		
	}
	public static boolean isUrlReachable(String urlString){
		URL url;
		boolean result = false;
		try {
			url = new URL(urlString);
			URLConnection connection = url.openConnection();
			connection.setConnectTimeout(50000);
			connection.connect();
			result = true;
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}
	
	
	public static String dateJianHours(Date date, double hours) {
		long rightTime = (long) (date.getTime() - hours * 60 * 60 * 1000);
		SimpleDateFormat sdDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String newtime = sdDateFormat.format(rightTime);
		return newtime;
	}

	public static Date formateTimeFromStr(String strdate) {
		try {
			Date date;
			SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			date = formatter.parse(strdate);
			return date;
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static int BUFFER_SIZE = 4096;
	public static void ioCopy(InputStream input, OutputStream output, long size) throws IOException {
   	byte[] buffer = new byte[BUFFER_SIZE];
       while (true) {
       	int length = (int) Math.min(BUFFER_SIZE, size);
       	if (length <= 0) break;
       	int read = input.read(buffer, 0, length);
       	size = size - read;
       	output.write(buffer, 0, read);
       }
	}
}
