#### Source类使用的逻辑

Source总的几个数据来源是ol.interaction.Drew进行互动式的绘制的，另一个是来自以业务数据可视化增加的Vector图层，另一个就是相对静态的Feature图层。

这意味着一个Map容器中总是存在一个Layer，并且Feature(点线多边形)作为其中一个可操作的最小粒度的可视化对象。其中，Layer可以接受多种类型的Source，不局限于向量Vector类型的数据源。

其中，feature是可以单独的设定style的。实际上，这就是开发中动画效果的操作对象。

##### VectorSource和Feature的关系

Feature是接近开发者眼中的面向对象中的活动对象实体的，而VectorSource更多的是一个静态的数据类型概念，它的形式是JSON数据来源。

#### Feature 和 Layer 的区别

------

Feature 是具有几何特征和其他属性特征的地理要素的矢量对象，类似于矢量文件格式 (如 geojson) 中的要素。

要素可以使用 setstyle 单独设置样式;否则, 他们将使用他们向量层的样式。

请注意，在这个要素对象上，属性特征被设置为 [module:ol/Object](https://openlayers.org/en/latest/apidoc/module-ol_Object.html) 属性, 因此它们是可见的, 并且具有 get/set 访问函数。

通常, 一个要素具有单个几何属性。您可以使用 setGeometry 方法设置几何图形, 也可以使用 getGeometry 获取它。可以使用属性特征在一个要素上存储多个几何图形。默认情况下, 用于渲染的几何图形由属性名称 geometry 标识。如果要使用另一个几何属性进行渲染, 请使用 setGeometryName 方法更改与要素的几何关联的属性特征。



### Layer:

> 如果我们有两个透明的玻璃板，一个板子上用绿色的线描述一个地方的自行车路线，而另一个板子用蓝色的板子来描述汽车可以行驶的路线，那么当我们将两个玻璃板放在城市地图上，我们就知道这做城市那些地方可以骑自行车，那些地方可以行驶汽车
>
> 那么这两个玻璃板我们就可以认为是Map上的Layer，也就是图层的概念。

### 区别：

 feature（要素），即地图上的几何对象，包括点（Point），线（LineString）,多边形（Polygon），圆（Circle），通过ol.interaction.Drew 绘制。

layer（图层），就像是含有点、线、面、文字、图片的玻璃板。



#### Vector Layer的特点

这本质上是一个Layer概念。它约束了数据类型。

在栅格图片里，你所能看到就是你所能得到的信息，在你的地图上添加卫星图片能够看到很多的建筑物，但是建筑物的很多属性信息你是看不到的，如楼层结构、年代、使用年限等，但是矢量图层能够提供更多的信息。
在矢量图层中，能够显示建筑物的几何形状和附加信息，如房主、面积、方位等等。在栅格图层上添加矢量图层很简单，还可以在指定位置创建要素。我们可以通过鼠标的点击、停旋在要素上查看要素的属性信息，空间信息等。