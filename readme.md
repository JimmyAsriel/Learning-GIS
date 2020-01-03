#### 快速开始

------

快速添加依赖，OpenLayers

```javascript
npm install
```

注：因为没有添加例如Parcel的打包工具和大多数示例本身就是一个入口，代码的引用仍然需要手动添加。

#### 开发环境

------

VScode

插件：LiveServer

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