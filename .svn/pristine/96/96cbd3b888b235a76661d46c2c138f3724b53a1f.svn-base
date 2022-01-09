package com.sys.common.tools;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializerProvider;
/*json解析null 为""*/
public class JsonObjcetMapper  extends ObjectMapper{
      public JsonObjcetMapper() {
    	  super();
    	  this.getSerializerProvider()
.setNullValueSerializer(new JsonSerializer<Object>() {

	@Override
	public void serialize(Object arg0, JsonGenerator arg1, SerializerProvider arg2)
			throws IOException, JsonProcessingException {
		arg1.writeString("");
		
	}
	
});    	  
      }
}
