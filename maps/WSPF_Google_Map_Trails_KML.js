function kmlPlClick(pm) {
   if (geoXml.docs[0].placemarks[pm].polyline.getMap()) {
      google.maps.event.trigger(geoXmlDoc.placemarks[pm].polyline,"click");
   } else {
      geoXmlDoc.placemarks[pm].polyline.setMap(map);
      google.maps.event.trigger(geoXmlDoc.placemarks[pm].polyline,"click");
   }
}
function kmlShowPlacemark(pm) {map.fitBounds(geoXmlDoc.placemarks[pm].polyline.bounds)};
   
   for (var i=0;i<geoXmlDoc.placemarks.length;i++) {
     var placemark = geoXmlDoc.placemarks[i];
     if (i == pm) {
       if (placemark.polygon) placemark.polygon.setMap(map);
       if (placemark.polyline) placemark.polyline.setMap(map);
       if (placemark.marker) placemark.marker.setMap(map);
     } else {
       if (placemark.polygon) placemark.polygon.setMap(null);
       if (placemark.polyline) placemark.polyline.setMap(null);
       if (placemark.marker) placemark.marker.setMap(null);
     }
   }


function kmlColor (kmlIn) {
  var kmlColor = {};
  if (kmlIn) {
   aa = kmlIn.substr(0,2);
   bb = kmlIn.substr(2,2);
   gg = kmlIn.substr(4,2);
   rr = kmlIn.substr(6,2);
   kmlColor.color = "#" + rr + gg + bb;
   kmlColor.opacity = parseInt(aa,16)/256;

  } else {
   // defaults
   kmlColor.color = randomColor();
   kmlColor.opacity = 0.45;
  }
  return kmlColor;
}

function randomColor(){ 
  var color="#";
  var colorNum = Math.random()*8388607.0;  // 8388607 = Math.pow(2,23)-1
  var colorStr = colorNum.toString(16);
  color += colorStr.substring(0,colorStr.indexOf('.'));
  return color;
};

var highlightOptions = {fillColor: "#FFFF00", strokeColor: "#000000", fillOpacity: 0.9, strokeWidth: 10};
var highlightLineOptions = {strokeColor: "#FFFF00", strokeWidth: 10};
function kmlHighlightPoly(pm) {
   for (var i=0;i<geoXmlDoc.placemarks.length;i++) {
     var placemark = geoXmlDoc.placemarks[i];
     if (i == pm) {
       if (placemark.polygon) placemark.polygon.setOptions(highlightOptions);
       if (placemark.polyline) placemark.polyline.setOptions(highlightLineOptions);
     } else {
       if (placemark.polygon) placemark.polygon.setOptions(placemark.polygon.normalStyle);
       if (placemark.polyline) placemark.polyline.setOptions(placemark.polyline.normalStyle);
     }
   }
}
function kmlUnHighlightPoly(pm) {
   for (var i=0;i<geoXmlDoc.placemarks.length;i++) {
     if (i == pm) {
       var placemark = geoXmlDoc.placemarks[i];
       if (placemark.polygon) placemark.polygon.setOptions(placemark.polygon.normalStyle);
       if (placemark.polyline) placemark.polyline.setOptions(placemark.polyline.normalStyle);
     }
   }
}


function showAll() {
   map.fitBounds(geoXmlDoc.bounds);
   for (var i=0;i<geoXmlDoc.placemarks.length;i++) {
     var placemark = geoXmlDoc.placemarks[i];
     if (placemark.polygon) placemark.polygon.setMap(map);
     if (placemark.polyline) placemark.polyline.setMap(map);
     if (placemark.marker) placemark.marker.setMap(map);
   }
}

function highlightPoly(poly, polynum) {
  //    poly.setOptions({fillColor: "#0000FF", strokeColor: "#0000FF", fillOpacity: 0.3}) ;
  google.maps.event.addListener(poly,"mouseover",function() {
    var rowElem = document.getElementById('row'+polynum);
    if (rowElem) rowElem.style.backgroundColor = "#FFFA5E";
    if (geoXmlDoc.placemarks[polynum].polygon) {
      poly.setOptions(highlightOptions);
    } else if (geoXmlDoc.placemarks[polynum].polyline) {
      poly.setOptions(highlightLineOptions);
    }
  });
  google.maps.event.addListener(poly,"mouseout",function() {
    var rowElem = document.getElementById('row'+polynum);
    if (rowElem) rowElem.style.backgroundColor = "#FFFFFF";
    poly.setOptions(poly.normalStyle);
  });
}  

function useTheData(doc){
  var currentBounds = map.getBounds();
  if (!currentBounds) currentBounds=new google.maps.LatLngBounds();
  // Geodata handling goes here, using JSON properties of the doc object
  geoXmlDoc = doc[0];
  for (var i = 0; i < geoXmlDoc.placemarks.length; i++) {
    // console.log(doc[0].markers[i].title);
    var placemark = geoXmlDoc.placemarks[i];
      if (currentBounds.intersects(placemark.polyline.bounds)) {
      
      }
      var kmlStrokeColor = kmlColor(placemark.style.color);
      var normalStyle = {
          strokeColor: kmlStrokeColor.color,
          strokeWeight: placemark.style.width,
          strokeOpacity: kmlStrokeColor.opacity
          };
      placemark.polyline.normalStyle = normalStyle;

      highlightPoly(placemark.polyline, i);
    }

/*    doc[0].markers[i].setVisible(false); */

};
            

   function hide_kml(){

            geoXml.hideDocument();  

   }

   function unhide_kml(){

            geoXml.showDocument();  

   }
function reload_kml(){
   geoXml.hideDocument();
   delete geoXml;
   geoXml = new geoXML3.parser({
                    map: map,
                    singleInfoWindow: true,
                    afterParse: useTheData
   });
   geoXml.parse(filename); 

}
   function load_kmlLayer() {
     kmlLayer = new google.maps.KmlLayer(filename);
     google.maps.event.addListener(kmlLayer, "status_changed", function() {
       document.getElementById('kmlstatus').innerHTML = "Kml Status:"+kmlLayer.getStatus();
     });
     kmlLayer.setMap(map);
   }
   function hide_kmlLayer() {
     kmlLayer.setMap(null);
   }
   function show_kmlLayer() {
     kmlLayer.setMap(map);
   }	