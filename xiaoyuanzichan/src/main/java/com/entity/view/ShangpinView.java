package com.entity.view;

import com.entity.ShangpinEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

/**
 * 校园资产
 * 后端返回视图实体辅助类
 * （通常后端关联的表或者自定义的字段需要返回使用）
 */
@TableName("shangpin")
public class ShangpinView extends ShangpinEntity implements Serializable {
    private static final long serialVersionUID = 1L;

		/**
		* 资产类型的值
		*/
		private String shangpinValue;
		/**
		* 存放地点的值
		*/
		private String didianValue;



	public ShangpinView() {

	}

	public ShangpinView(ShangpinEntity shangpinEntity) {
		try {
			BeanUtils.copyProperties(this, shangpinEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



			/**
			* 获取： 资产类型的值
			*/
			public String getShangpinValue() {
				return shangpinValue;
			}
			/**
			* 设置： 资产类型的值
			*/
			public void setShangpinValue(String shangpinValue) {
				this.shangpinValue = shangpinValue;
			}
			/**
			* 获取： 存放地点的值
			*/
			public String getDidianValue() {
				return didianValue;
			}
			/**
			* 设置： 存放地点的值
			*/
			public void setDidianValue(String didianValue) {
				this.didianValue = didianValue;
			}











}
