var wms_layers = [];


        var lyr_ArcStreet_0 = new ol.layer.Tile({
            'title': 'ArcStreet',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_US_Shale_1 = new ol.format.GeoJSON();
var features_US_Shale_1 = format_US_Shale_1.readFeatures(json_US_Shale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_US_Shale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_US_Shale_1.addFeatures(features_US_Shale_1);
var lyr_US_Shale_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_US_Shale_1, 
                style: style_US_Shale_1,
                popuplayertitle: 'US_Shale',
                interactive: true,
    title: 'US_Shale<br />\
    <img src="styles/legend/US_Shale_1_0.png" /> Abo-Yeso<br />\
    <img src="styles/legend/US_Shale_1_1.png" /> Antrim<br />\
    <img src="styles/legend/US_Shale_1_2.png" /> Bakken<br />\
    <img src="styles/legend/US_Shale_1_3.png" /> Barnett<br />\
    <img src="styles/legend/US_Shale_1_4.png" /> Bend<br />\
    <img src="styles/legend/US_Shale_1_5.png" /> Bone Spring<br />\
    <img src="styles/legend/US_Shale_1_6.png" /> Chattanooga<br />\
    <img src="styles/legend/US_Shale_1_7.png" /> Cody<br />\
    <img src="styles/legend/US_Shale_1_8.png" /> Conasauga<br />\
    <img src="styles/legend/US_Shale_1_9.png" /> Delaware<br />\
    <img src="styles/legend/US_Shale_1_10.png" /> Devonian (Ohio)<br />\
    <img src="styles/legend/US_Shale_1_11.png" /> Eagle Ford<br />\
    <img src="styles/legend/US_Shale_1_12.png" /> Excello-Mulky<br />\
    <img src="styles/legend/US_Shale_1_13.png" /> Fayetteville<br />\
    <img src="styles/legend/US_Shale_1_14.png" /> Floyd-Chattanooga<br />\
    <img src="styles/legend/US_Shale_1_15.png" /> Floyd-Neal<br />\
    <img src="styles/legend/US_Shale_1_16.png" /> Glorieta-Yeso<br />\
    <img src="styles/legend/US_Shale_1_17.png" /> Haynesville-Bossier<br />\
    <img src="styles/legend/US_Shale_1_18.png" /> Heath<br />\
    <img src="styles/legend/US_Shale_1_19.png" /> Hermosa<br />\
    <img src="styles/legend/US_Shale_1_20.png" /> HilliardBaxterMancos-Niobrara<br />\
    <img src="styles/legend/US_Shale_1_21.png" /> Lewis<br />\
    <img src="styles/legend/US_Shale_1_22.png" /> Mancos<br />\
    <img src="styles/legend/US_Shale_1_23.png" /> Manning Canyon<br />\
    <img src="styles/legend/US_Shale_1_24.png" /> Marcellus<br />\
    <img src="styles/legend/US_Shale_1_25.png" /> Monterey<br />\
    <img src="styles/legend/US_Shale_1_26.png" /> Monterey-Temblor<br />\
    <img src="styles/legend/US_Shale_1_27.png" /> Mowry<br />\
    <img src="styles/legend/US_Shale_1_28.png" /> New Albany<br />\
    <img src="styles/legend/US_Shale_1_29.png" /> Niobrara<br />\
    <img src="styles/legend/US_Shale_1_30.png" /> Niobrara- Mowry<br />\
    <img src="styles/legend/US_Shale_1_31.png" /> Pierre -Niobrara<br />\
    <img src="styles/legend/US_Shale_1_32.png" /> Spraberry<br />\
    <img src="styles/legend/US_Shale_1_33.png" /> Three Forks<br />\
    <img src="styles/legend/US_Shale_1_34.png" /> Tuscaloosa<br />\
    <img src="styles/legend/US_Shale_1_35.png" /> Utica<br />\
    <img src="styles/legend/US_Shale_1_36.png" /> Wolfcamp<br />\
    <img src="styles/legend/US_Shale_1_37.png" /> Wolfcamp - Midland<br />\
    <img src="styles/legend/US_Shale_1_38.png" /> Woodford<br />\
    <img src="styles/legend/US_Shale_1_39.png" /> Woodford-Caney<br />\
    <img src="styles/legend/US_Shale_1_40.png" /> <br />' });
var format_SWD_orfans_2 = new ol.format.GeoJSON();
var features_SWD_orfans_2 = format_SWD_orfans_2.readFeatures(json_SWD_orfans_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SWD_orfans_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SWD_orfans_2.addFeatures(features_SWD_orfans_2);
var lyr_SWD_orfans_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SWD_orfans_2, 
                style: style_SWD_orfans_2,
                popuplayertitle: 'SWD_orfans',
                interactive: true,
                title: '<img src="styles/legend/SWD_orfans_2.png" /> SWD_orfans'
            });

lyr_ArcStreet_0.setVisible(true);lyr_US_Shale_1.setVisible(true);lyr_SWD_orfans_2.setVisible(true);
var layersList = [lyr_ArcStreet_0,lyr_US_Shale_1,lyr_SWD_orfans_2];
lyr_US_Shale_1.set('fieldAliases', {'NAME': 'NAME', 'Area_sq_km': 'Area_sq_km', 'Area_sq_mi': 'Area_sq_mi', 'Basin': 'Basin', 'Lithology': 'Lithology', 'Shale_play': 'Shale_play', 'References': 'References', 'Source': 'Source', 'ID': 'ID', 'Age_shale': 'Age_shale', 'Age_color': 'Age_color', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SWD_orfans_2.set('fieldAliases', {'Well name': 'Well name', 'Well number': 'Well number', 'Type': 'Type', 'Type_E': 'Type_E', 'Status': 'Status', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_US_Shale_1.set('fieldImages', {'NAME': 'TextEdit', 'Area_sq_km': 'TextEdit', 'Area_sq_mi': 'TextEdit', 'Basin': 'TextEdit', 'Lithology': 'TextEdit', 'Shale_play': 'TextEdit', 'References': 'TextEdit', 'Source': 'TextEdit', 'ID': 'TextEdit', 'Age_shale': 'TextEdit', 'Age_color': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SWD_orfans_2.set('fieldImages', {'Well name': 'TextEdit', 'Well number': 'TextEdit', 'Type': 'TextEdit', 'Type_E': 'TextEdit', 'Status': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_US_Shale_1.set('fieldLabels', {'NAME': 'header label - visible with data', 'Area_sq_km': 'no label', 'Area_sq_mi': 'hidden field', 'Basin': 'no label', 'Lithology': 'no label', 'Shale_play': 'header label - visible with data', 'References': 'no label', 'Source': 'no label', 'ID': 'no label', 'Age_shale': 'no label', 'Age_color': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SWD_orfans_2.set('fieldLabels', {'Well name': 'header label - always visible', 'Well number': 'no label', 'Type': 'no label', 'Type_E': 'no label', 'Status': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_SWD_orfans_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});