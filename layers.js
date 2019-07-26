var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_DEA_1 = new ol.format.GeoJSON();
var features_DEA_1 = format_DEA_1.readFeatures(json_DEA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEA_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_DEA_1.addFeatures(features_DEA_1);var lyr_DEA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEA_1, 
                style: style_DEA_1,
                title: '<img src="styles/legend/DEA_1.png" /> DEA'
            });var format_EDTEA_2 = new ol.format.GeoJSON();
var features_EDTEA_2 = format_EDTEA_2.readFeatures(json_EDTEA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDTEA_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EDTEA_2.addFeatures(features_EDTEA_2);var lyr_EDTEA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EDTEA_2, 
                style: style_EDTEA_2,
                title: '<img src="styles/legend/EDTEA_2.png" /> EDTEA'
            });var format_Ezemvelo_KZN_3 = new ol.format.GeoJSON();
var features_Ezemvelo_KZN_3 = format_Ezemvelo_KZN_3.readFeatures(json_Ezemvelo_KZN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ezemvelo_KZN_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ezemvelo_KZN_3.addFeatures(features_Ezemvelo_KZN_3);var lyr_Ezemvelo_KZN_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ezemvelo_KZN_3, 
                style: style_Ezemvelo_KZN_3,
                title: '<img src="styles/legend/Ezemvelo_KZN_3.png" /> Ezemvelo_KZN'
            });var format_IsiMangalisoMerged_4 = new ol.format.GeoJSON();
var features_IsiMangalisoMerged_4 = format_IsiMangalisoMerged_4.readFeatures(json_IsiMangalisoMerged_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IsiMangalisoMerged_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_IsiMangalisoMerged_4.addFeatures(features_IsiMangalisoMerged_4);var lyr_IsiMangalisoMerged_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsiMangalisoMerged_4, 
                style: style_IsiMangalisoMerged_4,
                title: '<img src="styles/legend/IsiMangalisoMerged_4.png" /> IsiMangaliso Merged'
            });var format_DARD_5 = new ol.format.GeoJSON();
var features_DARD_5 = format_DARD_5.readFeatures(json_DARD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DARD_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_DARD_5.addFeatures(features_DARD_5);var lyr_DARD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DARD_5, 
                style: style_DARD_5,
                title: '<img src="styles/legend/DARD_5.png" /> DARD'
            });var format_DUCT_Active_6 = new ol.format.GeoJSON();
var features_DUCT_Active_6 = format_DUCT_Active_6.readFeatures(json_DUCT_Active_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DUCT_Active_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_DUCT_Active_6.addFeatures(features_DUCT_Active_6);var lyr_DUCT_Active_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DUCT_Active_6, 
                style: style_DUCT_Active_6,
                title: '<img src="styles/legend/DUCT_Active_6.png" /> DUCT_Active'
            });var format_EFP_7 = new ol.format.GeoJSON();
var features_EFP_7 = format_EFP_7.readFeatures(json_EFP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EFP_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_EFP_7.addFeatures(features_EFP_7);var lyr_EFP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EFP_7, 
                style: style_EFP_7,
                title: '<img src="styles/legend/EFP_7.png" /> EFP'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEA_1.setVisible(true);lyr_EDTEA_2.setVisible(true);lyr_Ezemvelo_KZN_3.setVisible(true);lyr_IsiMangalisoMerged_4.setVisible(true);lyr_DARD_5.setVisible(true);lyr_DUCT_Active_6.setVisible(true);lyr_EFP_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DEA_1,lyr_EDTEA_2,lyr_Ezemvelo_KZN_3,lyr_IsiMangalisoMerged_4,lyr_DARD_5,lyr_DUCT_Active_6,lyr_EFP_7];
lyr_DEA_1.set('fieldAliases', {'Name': 'Name', });
lyr_EDTEA_2.set('fieldAliases', {'Name': 'Name', 'Project_Na': 'Project_Na', });
lyr_Ezemvelo_KZN_3.set('fieldAliases', {'Name': 'Name', });
lyr_IsiMangalisoMerged_4.set('fieldAliases', {'Agency': 'Agency', });
lyr_DARD_5.set('fieldAliases', {'Name': 'Name', });
lyr_DUCT_Active_6.set('fieldAliases', {'Name': 'Name', });
lyr_EFP_7.set('fieldAliases', {'Name': 'Name', });
lyr_DEA_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_EDTEA_2.set('fieldImages', {'Name': 'TextEdit', 'Project_Na': 'TextEdit', });
lyr_Ezemvelo_KZN_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_IsiMangalisoMerged_4.set('fieldImages', {'Agency': 'TextEdit', });
lyr_DARD_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_DUCT_Active_6.set('fieldImages', {'Name': 'TextEdit', });
lyr_EFP_7.set('fieldImages', {'Name': 'TextEdit', });
lyr_DEA_1.set('fieldLabels', {'Name': 'no label', });
lyr_EDTEA_2.set('fieldLabels', {'Name': 'no label', 'Project_Na': 'no label', });
lyr_Ezemvelo_KZN_3.set('fieldLabels', {'Name': 'no label', });
lyr_IsiMangalisoMerged_4.set('fieldLabels', {'Agency': 'no label', });
lyr_DARD_5.set('fieldLabels', {'Name': 'no label', });
lyr_DUCT_Active_6.set('fieldLabels', {'Name': 'no label', });
lyr_EFP_7.set('fieldLabels', {'Name': 'no label', });
lyr_EFP_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});