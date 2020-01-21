Openlayers 矢量图层是在地图上展示数据，允许实时与数据交互，用户可以上传数据通过空间数据文件，如KML、GeoJSON文件，用户不仅可以在地图上展示自己的数据，还可以指定数据的外观。

一、Vector Layer的特点
在栅格图片里，你所能看到就是你所能得到的信息，在你的地图上添加卫星图片能够看到很多的建筑物，但是建筑物的很多属性信息你是看不到的，如楼层结构、年代、使用年限等，但是矢量图层能够提供更多的信息。
在矢量图层中，能够显示建筑物的几何形状和附加信息，如房主、面积、方位等等。在栅格图层上添加矢量图层很简单，还可以在指定位置创建要素。我们可以通过鼠标的点击、停旋在要素上查看要素的属性信息，空间信息等。

1.矢量图层应用在客户端
与矢量图层的交互过程仅仅在客户端上，当你浏览地图时，*矢量图层没有向服务器发送请求去获得改图的更多信息，一旦你获得初始化的数据，数据会在浏览器中建立缓存，你不用重复提交相同请求。*
多数情况下，矢量数据是加载到客户端的，用户与矢量图层的交互也是实时进行的。然而，这就导致矢量图层的处理速度依赖于客户端的浏览器和电脑配置，这对用户的使用也是有一点的限制。虽然除了 Internet Explorer浏览器之外的其他浏览器都能很好的处理用户请求，但限制还是存在的。
由于浏览器的限制，矢量图层上的大量要素的操作速度会缓慢下来。没有一个准确的要素数量，但是要素数量达到数百个时在大队数电脑上操作速度都会慢下来。这个问题也有很多解决办法，如删去不需要的要素。

2.广泛用途
*在矢量图层上，能够展现各种几何对象，像点、线、面、矩形、标记等*，能够通过**绘制线、面来测量距离和面积**。还可以在地图上绘制图形，然后按相应格式导出数据，这些数据能够被其他项目中采用。

二 Vector Layer的工作原理
1.图层的渲染
前面论述中，我们知道矢量图层不用栅格图片，其他图层都是采用HTML的img标签显示图片，在img标签中也仅仅只显示栅格数据，因此在矢量图层中我们不能像其他图层一样采用img标签，相反，我们需要一个矢量图像渲染器，前面讲过，矢量图层不仅仅是张图片，还包含很多附加信息，比如数据的坐标系等。
在OpenLayers中提供三种方法来渲染矢量图层：SVG、Canvas、VML；

###### SVG

矢量图层默认渲染方式就是SVG，SVG是Scalable Vector Graphics的首字母缩写，除了Internet Explorer之外的浏览器都支持SVG。

###### Canvas

采用canvas HTML标签，利用canvas渲染器会有点慢，因为事实上矢量通过canvas标签转换成栅格，只适用于在某种情况下。

###### VML

Internet Explorer不遵从网络标准，还不支持SVG和canvas，幸运的是，OpenLayers采用一种类似于SVG的，Microsoft制定的渲染器VML，但SVG比VML要快，所以只有在Internet Explorer浏览器上才选用VML。
三、实例
1.从创建一个WMS图层开始，

```javascript
var wms_layer = new OpenLayers.Layer.WMS(
'OpenLayers WMS','http://vmap0.tiles.osgeo.org/wms/vmap0',{layers:'basic'},{}
);
```

2 创建矢量图层，采用默认的投影，

```javascript
var vector_layer=new OpenLayers.Layer.Vector('Basic Vector Layer');
```

3.在地图上添加图层

```javascript
map.addLayers([wms_layer,vector_layer]);//此时矢量图层没有加载任何数据，我们需要controls加载数据
```

4.添加EditingToolbar类对象，该对象可以在矢量图层上添加点绘制多边形，

```javascript
map.addControl(new OpenLayers.Controls.Control.EditingToolbar(vector_layer));//这时可以在地图上添加点线面。
```

5.保存绘制信息导出空间数据文件
在地图上绘制的点线面在地图刷新以后就会消失，我们怎么才能抓取这些信息并保存下来呢，我们需要连接 features数组，
map.layers[1].features[x];这样获取了要素，将他保存到文件中。
