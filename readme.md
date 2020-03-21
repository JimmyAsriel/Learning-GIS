#### 项目结构

------

GIS整个Web应用的开发使用了Oracle数据库，GeoServer，以及单独的业务数据后端接口。该项目描述了前端展示和交互的Openlayers以及GeoServer配置开发的过程。

该项目使用Nodejs为中间层。

```
\.gitignore
\.vscode	--开发工具VScode的配置文件
\dist		--Parcel编译结果
\Document	--GISAPI文档，业务，背景知识
	\快速开始	--OP使用用例
	\接口说明
	\数据采集分析	--可视化项目的数据来源
	\服务搭建	--GeoServer搭建
\index.html	--前端入口
\index.js	--前端入口
\node_modules
\package-lock.json
\package.json
\readme.md
\业务场景	--OP开发的GIS示例
\工程进度表.md
```

注：前端入口意指Parcel用以打包的引用入口。这意味着Parcel即用来处理编译import关键词的工具。

#### 快速开始

------

快速添加依赖，OpenLayers，Parcel。

```javascript
npm install
```

~~注：因为没有添加例如Parcel的打包工具和大多数示例本身就是一个入口，代码的引用仍然需要手动添加。~~

Now to run your application, enter

```
npm run start
```

To create a production bundle of your application, simply type

```
npm run build
```

#### 开发环境

------

VScode 编辑器

​	插件：LiveServer

包管理工具是npm

打包工具Parcel

> 需要注意的是，Parcel的打包编译流程需要配置package.json。

#### TroubleShooting

------

###### 关于跨域错误

LiveServer一款集成微服务器。某些示例本身需要访问本机的离线文件，会导致跨域报错，无法正常加载页面。当然，利用NodeJS也可以提供一个简易的HTTP服务器，但是这需要一定的额外代码：

新建Run.js作为NodeJS入口文件，并有以下内容（并未测试该方法）

```javascript
function detail(response, query_param) {
    fs.readFile('./需要打开的文件.html', 'utf-8', function (err, data) {//读取内容
        if (err) throw err;
        response.setHeader('content-type', 'text/html;charset=utf-8');
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(data);
        response.end();
    });
}
```

也有第二种方法：

启动Web服务器后通过访问服务的方式查看网页，将项目置于

```
XAMPP\htdocs\
```

目录下， 再通过浏览器访问即可。