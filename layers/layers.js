var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Tipo_Costas_1 = new ol.format.GeoJSON();
var features_Tipo_Costas_1 = format_Tipo_Costas_1.readFeatures(json_Tipo_Costas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipo_Costas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipo_Costas_1.addFeatures(features_Tipo_Costas_1);
var lyr_Tipo_Costas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipo_Costas_1, 
                style: style_Tipo_Costas_1,
                interactive: true,
                title: '<img src="styles/legend/Tipo_Costas_1.png" /> Tipo_Costas'
            });
var format_Peces_2 = new ol.format.GeoJSON();
var features_Peces_2 = format_Peces_2.readFeatures(json_Peces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peces_2.addFeatures(features_Peces_2);
var lyr_Peces_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Peces_2, 
                style: style_Peces_2,
                interactive: true,
                title: '<img src="styles/legend/Peces_2.png" /> Peces'
            });
var format_Mamiferos_3 = new ol.format.GeoJSON();
var features_Mamiferos_3 = format_Mamiferos_3.readFeatures(json_Mamiferos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mamiferos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mamiferos_3.addFeatures(features_Mamiferos_3);
var lyr_Mamiferos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mamiferos_3, 
                style: style_Mamiferos_3,
                interactive: true,
                title: '<img src="styles/legend/Mamiferos_3.png" /> Mamiferos'
            });
var format_Invertebrados_4 = new ol.format.GeoJSON();
var features_Invertebrados_4 = format_Invertebrados_4.readFeatures(json_Invertebrados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Invertebrados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Invertebrados_4.addFeatures(features_Invertebrados_4);
var lyr_Invertebrados_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Invertebrados_4, 
                style: style_Invertebrados_4,
                interactive: true,
                title: '<img src="styles/legend/Invertebrados_4.png" /> Invertebrados'
            });
var format_Habitat_Plantas_Raras_5 = new ol.format.GeoJSON();
var features_Habitat_Plantas_Raras_5 = format_Habitat_Plantas_Raras_5.readFeatures(json_Habitat_Plantas_Raras_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitat_Plantas_Raras_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habitat_Plantas_Raras_5.addFeatures(features_Habitat_Plantas_Raras_5);
var lyr_Habitat_Plantas_Raras_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Habitat_Plantas_Raras_5, 
                style: style_Habitat_Plantas_Raras_5,
                interactive: true,
                title: '<img src="styles/legend/Habitat_Plantas_Raras_5.png" /> Habitat_Plantas_Raras'
            });
var format_Aves_6 = new ol.format.GeoJSON();
var features_Aves_6 = format_Aves_6.readFeatures(json_Aves_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aves_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aves_6.addFeatures(features_Aves_6);
var lyr_Aves_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aves_6, 
                style: style_Aves_6,
                interactive: true,
                title: '<img src="styles/legend/Aves_6.png" /> Aves'
            });
var format_Usos_Playa_7 = new ol.format.GeoJSON();
var features_Usos_Playa_7 = format_Usos_Playa_7.readFeatures(json_Usos_Playa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Usos_Playa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Usos_Playa_7.addFeatures(features_Usos_Playa_7);
var lyr_Usos_Playa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Usos_Playa_7, 
                style: style_Usos_Playa_7,
                interactive: true,
                title: '<img src="styles/legend/Usos_Playa_7.png" /> Usos_Playa'
            });

lyr_EsriTopographic_0.setVisible(true);lyr_Tipo_Costas_1.setVisible(true);lyr_Peces_2.setVisible(true);lyr_Mamiferos_3.setVisible(true);lyr_Invertebrados_4.setVisible(true);lyr_Habitat_Plantas_Raras_5.setVisible(true);lyr_Aves_6.setVisible(true);lyr_Usos_Playa_7.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_Tipo_Costas_1,lyr_Peces_2,lyr_Mamiferos_3,lyr_Invertebrados_4,lyr_Habitat_Plantas_Raras_5,lyr_Aves_6,lyr_Usos_Playa_7];
lyr_Tipo_Costas_1.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', });
lyr_Peces_2.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Mamiferos_3.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Especies': 'Especies', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Invertebrados_4.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Especies': 'Especies', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Habitat_Plantas_Raras_5.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Especie': 'Especie', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Aves_6.set('fieldAliases', {'Name': 'Name', 'Especie': 'Especie', 'RAR#': 'RAR#', 'Densidad': 'Densidad', });
lyr_Usos_Playa_7.set('fieldAliases', {'Name': 'Name', 'Fuente': 'Fuente', 'Autores': 'Autores', 'Fecha': 'Fecha', 'Id': 'Id', });
lyr_Tipo_Costas_1.set('fieldImages', {'Name': '', 'Fuente': '', 'Autores': '', 'Fecha': '', });
lyr_Peces_2.set('fieldImages', {'Name': '', 'Especie': '', 'RAR#': '', 'Densidad': '', });
lyr_Mamiferos_3.set('fieldImages', {'Name': '', 'Fuente': '', 'Autores': '', 'Fecha': '', 'Especies': '', 'RAR#': '', 'Densidad': '', });
lyr_Invertebrados_4.set('fieldImages', {'Name': '', 'Fuente': '', 'Autores': '', 'Fecha': '', 'Especies': '', 'RAR#': '', 'Densidad': '', });
lyr_Habitat_Plantas_Raras_5.set('fieldImages', {'Name': '', 'Fuente': '', 'Autores': '', 'Fecha': '', 'Especie': '', 'RAR#': '', 'Densidad': '', });
lyr_Aves_6.set('fieldImages', {'Name': '', 'Especie': '', 'RAR#': '', 'Densidad': '', });
lyr_Usos_Playa_7.set('fieldImages', {'Name': 'TextEdit', 'Fuente': 'TextEdit', 'Autores': 'TextEdit', 'Fecha': 'TextEdit', 'Id': 'Range', });
lyr_Tipo_Costas_1.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', });
lyr_Peces_2.set('fieldLabels', {'Name': 'no label', 'Especie': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Mamiferos_3.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', 'Especies': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Invertebrados_4.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', 'Especies': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Habitat_Plantas_Raras_5.set('fieldLabels', {'Name': 'no label', 'Fuente': 'no label', 'Autores': 'no label', 'Fecha': 'no label', 'Especie': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Aves_6.set('fieldLabels', {'Name': 'no label', 'Especie': 'no label', 'RAR#': 'no label', 'Densidad': 'no label', });
lyr_Usos_Playa_7.set('fieldLabels', {'Name': 'inline label', 'Fuente': 'inline label', 'Autores': 'no label', 'Fecha': 'no label', 'Id': 'no label', });
lyr_Usos_Playa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});