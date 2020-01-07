        var image = new ol.geom.Circle({
            radius: 5,
            fill: null,
            stroke: new ol.style.Stroke({ color: 'red', width: 1 })
        });
        var styles = {
            'Point': new ol.style.Style({
                image: image
            }),
            'LineString': ol.style.Style({
                stroke: ol.style.Stroke({
                    color: 'green',
                    width: 1
                })
            }),
            'MultiLineString': ol.style.Style({
                stroke: ol.style.Stroke({
                    color: 'green',
                    width: 1
                })
            }),
            'MultiPoint': ol.style.Style({
                image: image
            }),
            'MultiPolygon': ol.style.Style({
                stroke: ol.style.Stroke({
                    color: 'yellow',
                    width: 1
                }),
                fill: ol.style.Fill({
                    color: 'rgba(255, 255, 0, 0.1)'
                })
            }),
            'Polygon': ol.style.Style({
                stroke: ol.style.Stroke({
                    color: 'blue',
                    lineDash: [4],
                    width: 3
                }),
                fill: ol.style.Fill({
                    color: 'rgba(0, 0, 255, 0.1)'
                })
            }),
            'GeometryCollection': ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'magenta',
                    width: 2
                }),
                fill: ol.style.Fill({
                    color: 'magenta'
                }),
                image: new ol.geom.Circle({
                    radius: 10,
                    fill: null,
                    stroke: new ol.style.Stroke({
                        color: 'magenta'
                    })
                })
            }),
            'Circle': ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'red',
                    width: 2
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(255,0,0,0.2)'
                })
            })
        };
        var styleFunction = function (feature) {
            return styles[feature.getGeometry().getType()];
        };