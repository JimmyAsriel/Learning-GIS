new ol.style.Style({
    image: new ol.style.Circle({
        //是否填充图层
        fill: new ol.style.Fill({
            color: 'rgba(255,0,0,0.8)'
        }),
        //描边以及描边宽度
        stroke: new ol.style.Stroke({
            color: 'rgb(255,0,0)',
            width: 15
        }),
        //半径大小
        radius: 120
    })
})