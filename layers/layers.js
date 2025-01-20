var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });var format_patok_2 = new ol.format.GeoJSON();
var features_patok_2 = format_patok_2.readFeatures(json_patok_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_patok_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_patok_2.addFeatures(features_patok_2);var lyr_patok_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_patok_2, 
                style: style_patok_2,
                title: '<img src="styles/legend/patok_2.png" /> patok'
            });var format_rumahhh_3 = new ol.format.GeoJSON();
var features_rumahhh_3 = format_rumahhh_3.readFeatures(json_rumahhh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahhh_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumahhh_3.addFeatures(features_rumahhh_3);var lyr_rumahhh_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumahhh_3, 
                style: style_rumahhh_3,
                title: '<img src="styles/legend/rumahhh_3.png" /> rumahhh'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_patok_2.setVisible(true);lyr_rumahhh_3.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_jalan_1,lyr_patok_2,lyr_rumahhh_3];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', 'foto': 'foto', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'Nama_JLN': 'Nama_JLN', 'NAMA_JNS': 'NAMA_JNS', });
lyr_patok_2.set('fieldAliases', {'id': 'id', 'rmh': 'rmh', });
lyr_rumahhh_3.set('fieldAliases', {'id': 'id', 'rumahhh': 'rumahhh', 'poto': 'poto', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', 'foto': 'Photo', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'Nama_JLN': 'TextEdit', 'NAMA_JNS': 'TextEdit', });
lyr_patok_2.set('fieldImages', {'id': 'TextEdit', 'rmh': 'TextEdit', });
lyr_rumahhh_3.set('fieldImages', {'id': 'TextEdit', 'rumahhh': 'TextEdit', 'poto': 'TextEdit', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', 'foto': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'Nama_JLN': 'no label', 'NAMA_JNS': 'no label', });
lyr_patok_2.set('fieldLabels', {'id': 'no label', 'rmh': 'no label', });
lyr_rumahhh_3.set('fieldLabels', {'id': 'no label', 'rumahhh': 'no label', 'poto': 'no label', });
lyr_rumahhh_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});