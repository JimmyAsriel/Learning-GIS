GeoServer安装:
1. 接口选用的是8080，可能会有冲突
2. 没有jdk, 选的是jre。但是目前可以正常登录
3. 登录：http://localhost:8080/geoserver/web/   账号：admin   密码：geoserver

——下载shp2sdo   
       下载地址：http://www.oracle.com/technetwork/database/options/spatialandgraph/downloads/shp2sdo-158114.zip  
       如果是windows系统，就选择nt下的文件

——将shp2sdo.exe拷贝至Oracle环境变量所在的目录（bin）下。
       我的： D:\oracle\product\10.2.0\db_1\BIN
       
——新建一个文件夹（shp），将一个.shp文件放入此文件夹
       包括同名的 ：.cpg, .dbf, .prj, .shp, .shx 文件
     （例： gis_osm_landuse_a_free_1.cpg；
	gis_osm_landuse_a_free_1.dbf；
	gis_osm_landuse_a_free_1.prj；
	gis_osm_landuse_a_free_1.shp；
	gis_osm_landuse_a_free_1.shx）

——cmd（最好管理员权限运行），进入上面文件夹（shp），cd C:\shp

——输入命令  shp2sdo  shp文件名   表名  -i  id  -s  4326  -g  GEOMETRY  -d
       例： shp2sdo  shp  golandusetest  -i  id  -s  4326  -g  GEOMETRY  -d
       俩文件： 表名.ctl和表名.sql被创建，保存在shp文件夹中

       （打开.sql可以看到其是一个创建shp表及相关空间元数据的sql
          打开.ctl，可以发现数据的插入都在其中）

——命令行登陆到数据库中：sqlplus scott/scott    （连接为normal） 

——输入@.sql文件路径（例： @C:\Users\lvyy1\Desktop\shp\golandusetest.sql）  
       --创建表并注册到USER_SDO_GEOM_METADATA

——输入quit   --退出数据库

——进入文件夹    cd C:\Users\lvyy1\Desktop\shp

——通过sqlldr（即sql loader工具）将数据导入到创建的表中（利用.ctl文件）
       sqlldr scott/scott@orcl control=golandusetest.ctl   （cmd需在管理员权限下）
	
	如果报错   SQL*Loader-941:  在描述表 GOLANDUSETEST 时出错  ，
		ORA-04043: 对象 GOLANDUSETEST 不存在
	PLSQL进入数据库，复制.sql文件中的建表信息，在SQL窗口中运行。	

——再次连接到数据库，输入 execute sdo_migrate.to_current('golandusetest')
	提示：PL/SQL过程已成功完成
	
	shp文件中内容就这样保存到数据库的golandusetest表中了。打开PLSQL查看
