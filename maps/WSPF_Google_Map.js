//////////////////////////////////////////////
///LABEL MARKERS//////////////////////////////
//////////////////////////////////////////////

function setupMarkers() 
	{
      mgr = new MarkerManager(map);
      
	  google.maps.event.addListener(mgr, 'loaded', function()
	  {	
	    var caped_northhead_loc = new google.maps.LatLng(46.297503,-124.062533);
		var caped_mckenzie_loc = new google.maps.LatLng(46.283438,-124.077894);
		var caped_caped_loc =  new google.maps.LatLng(46.274433,-124.066412);
		var deceptionpass_cornet_loc = new google.maps.LatLng(48.395444,-122.638384);
		var deceptionpass_bowman_loc = new google.maps.LatLng(48.414403,-122.654139);
		var deceptionpass_rosario_loc = new google.maps.LatLng(48.417324,-122.664545);
		var deceptionpass_westpoint_loc = new google.maps.LatLng(48.402728,-122.664713);
		var deceptionpass_deceptionisland_loc = new google.maps.LatLng(48.407725,-122.670587);
		var deceptionpass_benure_loc = new google.maps.LatLng(48.403894,-122.627737);
		var deceptionpass_gooserock_loc = new google.maps.LatLng(48.402193,-122.637734);
		var ftflagler_pg_loc= new google.maps.LatLng(48.096599,-122.693595);
		var stedward_seminary_loc = new google.maps.LatLng(47.733287,-122.257243);
		var stedward_playground_loc = new google.maps.LatLng(47.731689,-122.256060);
		var stedward_grotto_loc = new google.maps.LatLng(47.7311116030162,-122.25890262633);
		var olallie_loc = new google.maps.LatLng(47.437112,-121.652377);
		var olallie_twinfall_loc = new google.maps.LatLng(47.445613,-121.698426);
		var olallie_cedarbutte_loc = new google.maps.LatLng(47.433063,-121.741318);
		var hopeislandskagit_langbay_loc = new google.maps.LatLng(48.401663,-122.570608);
		var sunlakes_umatilla_loc = new google.maps.LatLng(47.598537,-119.360625);
		var sunlakes_deeplake_loc = new google.maps.LatLng(47.587640,-119.330491);
		var sunlakes_delany_loc = new google.maps.LatLng(47.590416,-119.360352);
		var sunlakes_dayuse_loc = new google.maps.LatLng(47.588445,-119.391950);
		var sunlakes_resort_loc = new google.maps.LatLng(47.591882,-119.397358);
		var sunlakes_interpretive_loc = new google.maps.LatLng(47.606488,-119.364690);
			
	    var caped_northhead_marker= new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"North Head"}),position:caped_northhead_loc,map:map});
		var caped_mckenzie_marker= new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"McKenzie Head"}),position:caped_mckenzie_loc,map:map});
		var caped_caped_marker= new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Cape Disappointment"}),position:caped_caped_loc,map:map});
		var deceptionpass_benure_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Ben Ure Island"}),position:deceptionpass_benure_loc,map:map});
		var deceptionpass_cornet_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Cornet Bay ELC"}),position:deceptionpass_cornet_loc,map:map});
		var deceptionpass_bowman_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLEBR,{color:"00ff00",text:"Bowman Bay"}),position:deceptionpass_bowman_loc,map:map});
		var deceptionpass_rosario_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Rosario Beach"}),position:deceptionpass_rosario_loc,map:map});
		var deceptionpass_westpoint_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"West Point,North Beach"}),position:deceptionpass_westpoint_loc,map:map});
		var deceptionpass_deceptionisland_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Deception Island"}),position:deceptionpass_deceptionisland_loc,map:map});
		var deceptionpass_gooserock_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLE,{color:"00ff00",text:"Goose Rock"}),position:deceptionpass_gooserock_loc,map:map});		
		var ftflagler_paradeground_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Parade Ground"}),position:ftflagler_pg_loc,map:map});
		var stedward_seminary_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Grand Dining Hall",fore:"000000"}),position:stedward_seminary_loc,map:map});		
		var stedward_playground_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLEBR,{color:"00ff00",text:"Playground",fore:"000000"}),position:stedward_playground_loc,map:map});		
		var stedward_grotto_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLEBL,{color:"00ff00",text:"The Grotto",fore:"000000"}),position:stedward_grotto_loc,map:map});		
		var olallie_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Olallie State Park",fore:"000000"}),position:olallie_loc,map:map});		
		var olallie_twinfall_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Twin Falls",fore:"000000"}),position:olallie_twinfall_loc,map:map});		
		var olallie_cedarbutte_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Cedar Butte",fore:"000000"}),position:olallie_cedarbutte_loc,map:map});
		var hopeislandskagit_langbay_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Lang Bay",fore:"000000"}),position:hopeislandskagit_langbay_loc,map:map});
		var sunlakes_umatilla_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Umatilla Rock Area",fore:"000000"}),position:sunlakes_umatilla_loc,map:map});
		var sunlakes_deeplake_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Deep Lake",fore:"000000"}),position:sunlakes_deeplake_loc,map:map});
		var sunlakes_delany_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Delany Springs",fore:"000000"}),position:sunlakes_delany_loc,map:map});
		var sunlakes_dayuse_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Day Use Area",fore:"000000"}),position:sunlakes_dayuse_loc,map:map});
		var sunlakes_resort_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"00ff00",text:"Sun Lakes Resort",fore:"000000"}),position:sunlakes_resort_loc,map:map});
		var sunlakes_interpretive_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETL,{color:"00ff00",text:"Dry Falls Interpretive Center",fore:"000000"}),position:sunlakes_interpretive_loc,map:map});

		mgr.addMarker(caped_northhead_marker,13,14);
		mgr.addMarker(caped_mckenzie_marker,13,14);
		mgr.addMarker(caped_caped_marker,13,14);
		mgr.addMarker(deceptionpass_cornet_marker,13,14);
		mgr.addMarker(deceptionpass_bowman_marker,13,15);		
		mgr.addMarker(deceptionpass_rosario_marker,13,15);		
		mgr.addMarker(deceptionpass_westpoint_marker,13,15);
		mgr.addMarker(deceptionpass_deceptionisland_marker,13,18);
		mgr.addMarker(deceptionpass_benure_marker,13,17);
		mgr.addMarker(deceptionpass_gooserock_marker,13,17);
		mgr.addMarker(ftflagler_paradeground_marker,13,15);
		mgr.addMarker(stedward_seminary_marker,16,18);
		mgr.addMarker(stedward_playground_marker,16,18);
		mgr.addMarker(stedward_grotto_marker,16,19);
		mgr.addMarker(olallie_marker,16,19);
		mgr.addMarker(olallie_twinfall_marker,16,19);
		mgr.addMarker(olallie_cedarbutte_marker,16,19);				
		mgr.addMarker(hopeislandskagit_langbay_marker,15,19);
		mgr.addMarker(sunlakes_umatilla_marker,15,19);
		mgr.addMarker(sunlakes_deeplake_marker,15,19);		
		mgr.addMarker(sunlakes_delany_marker,15,19);
		mgr.addMarker(sunlakes_dayuse_marker,15,19);
		mgr.addMarker(sunlakes_resort_marker,15,19);
		mgr.addMarker(sunlakes_interpretive_marker,15,19);
		mgr.refresh(); 
		
		google.maps.event.addListener(caped_mckenzie_marker,"click",function(){caped_mckenzie();});
		google.maps.event.addListener(caped_northhead_marker,"click",function(){caped_northhead();});
		google.maps.event.addListener(caped_caped_marker,"click",function(){caped_caped();});				
		google.maps.event.addListener(deceptionpass_cornet_marker,"click",function(){deceptionpass_cornetelc();});
		google.maps.event.addListener(deceptionpass_bowman_marker,"click",function(){deceptionpass_bowman();});
		google.maps.event.addListener(deceptionpass_rosario_marker,"click",function(){deceptionpass_rosario();});
		google.maps.event.addListener(deceptionpass_westpoint_marker,"click",function(){deceptionpass_westpoint();});
		google.maps.event.addListener(deceptionpass_deceptionisland_marker,"click",function(){deceptionpass_deception_island();});
		//google.maps.event.addListener(deceptionpass_benure_marker,"click",function(){window.open(toursrc+"Deception_Pass/dpass_ben_ure_island.html","_parent")});
		google.maps.event.addListener(deceptionpass_benure_marker,"click",function(){deceptionpass_benure();});
		google.maps.event.addListener(deceptionpass_gooserock_marker,"click",function(){deceptionpass_gooserock();});
		google.maps.event.addListener(ftflagler_paradeground_marker,"click",function(){ftflagler_parade();});
		google.maps.event.addListener(stedward_seminary_marker,"click",function(){stedward_seminary();mgr.refresh();});
		google.maps.event.addListener(olallie_marker,"click",function(){olallie_park();mgr.refresh();});
		google.maps.event.addListener(olallie_twinfall_marker,"click",function(){olallie_twinfall();mgr.refresh();});
		google.maps.event.addListener(olallie_cedarbutte_marker,"click",function(){olallie_cedarbutte();mgr.refresh();});
		google.maps.event.addListener(hopeislandskagit_langbay_marker,"click",function(){hopeislandskagit_langbay();mgr.refresh();});
/*		
		google.maps.event.addListener(sunlakes_umatilla_marker,"click",function(){sunlakes_umatilla();mgr.refresh()});
		google.maps.event.addListener(sunlakes_deeplake_marker,"click",function(){sunlakes_deeplake();mgr.refresh()});
		google.maps.event.addListener(sunlakes_delany_marker,"click",function(){sunlakes_delany();mgr.refresh()});
		google.maps.event.addListener(sunlakes_dayuse_marker,"click",function(){sunlakes_dayuse();mgr.refresh()});
		google.maps.event.addListener(sunlakes_resort_marker,"click",function(){sunlakes_resort();mgr.refresh()});
		google.maps.event.addListener(sunlakes_interpretive_marker,"click",function(){sunlakes_interpretive();mgr.refresh()});
*/



      	});  		
		mgr.refresh(); 

	 	}
	function setupMarkers2() 
			{
	      mgr = new MarkerManager(map);
      
	  google.maps.event.addListener(mgr, 'loaded', function()
	  {	
	  	var olallie_ironhorse1_loc = new google.maps.LatLng(47.433285,-121.749841);
	  	var olallie_ironhorse2_loc = new google.maps.LatLng(47.441806,-121.686704);
	  	var olallie_ironhorse3_loc = new google.maps.LatLng(47.437480,-121.663910);
	  	var olallie_ironhorse4_loc = new google.maps.LatLng(47.433211,-121.658281);
		var olallie_ironhorse1_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"ff00ff",text:"Iron Horse Trail"}),position:olallie_ironhorse1_loc,map:map});
		var olallie_ironhorse2_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"ff00ff",text:"Iron Horse Trail"}),position:olallie_ironhorse2_loc,map:map});
		var olallie_ironhorse3_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"ff00ff",text:"Iron Horse Trail"}),position:olallie_ironhorse3_loc,map:map});
		var olallie_ironhorse4_marker = new StyledMarker({styleIcon:new StyledIcon(StyledIconTypes.BUBBLETR,{color:"ff00ff",text:"Iron Horse Trail"}),position:olallie_ironhorse4_loc,map:map});
		mgr.addMarker(olallie_ironhorse1_marker,16,17);
		mgr.addMarker(olallie_ironhorse2_marker,16,17);
		mgr.addMarker(olallie_ironhorse3_marker,16,17);
		mgr.addMarker(olallie_ironhorse4_marker,16,17);
	  
	  });
	  mgr.refresh();
	  }
		
//end setupMarkers	
//////////////////////////////////////////////
///ICONS//////////////////////////////
var assetsrc = "https://p8.secure.hostingprod.com/@www.fortflagler.net/ssl/";

pan='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/pan_icon.png"/> <br/>Panorama</td>';
psphere='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/icon_photosphere.png"/> <br/>Panorama</td>';
panoramio='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/icon_panoramio.png"/><br/>Image</td>';
img='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/camicon.png"/><br/>Image</td>';
tour='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/tour_icon.png"/> <br/>Virtual Tour Page<;/td>';
vid='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/video_icon.png"/><br/>Slideshow</td>';
cluster='<td valign="top" width="150px"><img src="'+iconsrc+'WSPF_Google_Map_Icon_Files/m1x.png"/><br/>Multiple Items</td>';
//////////////////////////////////////////////

function defaultmap(){
	document.getElementById("map_canvas").style.width="100%";
	document.getElementById("map_canvas").style.height="800px";
	document.getElementById("map_table").style.width="100%";
	document.getElementById("map_table").style.height="800px";		
}


function defaultpage(){
	document.getElementById("map_canvas").style.width="100%";
	document.getElementById("map_canvas").style.height="800px";
	document.getElementById("map_table").style.width="100%px";
	document.getElementById("map_table").style.height="800px";		

	document.getElementById("viewdiv").style.display="none";

	document.getElementById("side_bar").style.display="none";	
	document.getElementById("side_bar2").style.display="none";	
	document.getElementById("side_bar3").style.display="none";	

	document.getElementById("intro").style.display="none";
	document.getElementById("batteries").style.display="none";
	document.getElementById("retreat").style.display="none";
	document.getElementById("vacation").style.display="none";
	document.getElementById("trails").style.display="none";
	document.getElementById("pg").style.display="none";	

	document.getElementById("showalltrail").style.display="none";	

	document.getElementById("iconbar").innerHTML='';
	document.getElementById("iconbar").style.display="none";

	document.getElementById("iconbar2").innerHTML='';
	document.getElementById("iconbar2").style.display="none";

	document.getElementById("iconlist").innerHTML='';
	document.getElementById("iconlist").style.display="none";

	//Flagler_Retreat_Hoskins.setMap(null);
	//Flagler_Retreat_Wilson.setMap(null);
	//Flagler_Retreat_Richmond.setMap(null);

	google.maps.event.trigger(map, 'resize');     
	}
		
function tourpage()
	{
		//initialize();
		//	query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 500");		
		//	query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' LIMIT 500");
		//	google.maps.event.trigger(map, 'resize');     
		//	query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes'");
		//	query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 1000");		
		document.getElementById("buttons").style.display="none";
		document.getElementById("intro").style.display="none";
		document.getElementById("map_table").style.height="600px";
		document.getElementById("map_canvas").style.width="100%";
		document.getElementById("map_canvas").style.height="800px";
	}
function alltourassets()
	{
		initialize();
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 500");		
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' LIMIT 500");
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 1000");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 1500");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 2000");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+" WHERE Tour_Asset = 'yes' OFFSET 2500");		
			
		document.getElementById("buttons").style.display="none";
		document.getElementById("intro").style.display="none";
		document.getElementById("map_table").style.height="800px";
		document.getElementById("map_canvas").style.width="100%";
		document.getElementById("map_canvas").style.height="800px";
		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

	}
	function allassets()
	{
		initialize();
			query4markers("select * from "+tableID+" OFFSET 500");		
			query4markers("select * from "+tableID+" LIMIT 500");
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+"");
			query4markers("select * from "+tableID+" OFFSET 1000");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+"");
			query4markers("select * from "+tableID+" OFFSET 1500");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+"");
			query4markers("select * from "+tableID+" OFFSET 2000");		
			google.maps.event.trigger(map, 'resize');     
			query4markers("select * from "+tableID+"");
			query4markers("select * from "+tableID+" OFFSET 2500");		
			query4markers("select * from "+tableID+"");
			query4markers("select * from "+tableID+" OFFSET 3000");		
			
		document.getElementById("buttons").style.display="none";
		document.getElementById("intro").style.display="none";
		document.getElementById("map_table").style.height="550px";
		document.getElementById("map_canvas").style.width="100%";
		document.getElementById("map_canvas").style.height="800px";
		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////CAPE DISAPPOINTMENT/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
 		function caped(){
		map.setCenter(new google.maps.LatLng(46.287973,-124.067279));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(14);
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Deception Pass State Park</span>';
		document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		setupMarkers();
		
		function ParkKML(){				
				   var  filename = kmlsrc+"cape_disappointment_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML();		
		
		};
		

	function caped_mckenzie(){
	    query4markers("select * from "+tableID+" where Park_Name = 'Cape Disappointment State Park' {AND Tour_Asset='yes'} ORDER BY Title");		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);		
		map.setCenter(new google.maps.LatLng(46.2845,-124.064264));
		map.setZoom(17);
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Deception Pass State Park</span>';
		document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'		};
		
	function caped_northhead(){
	    query4markers("select * from "+tableID+" where Park_Name = 'Cape Disappointment State Park' {AND Tour_Asset='yes'} ORDER BY Title");		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(new google.maps.LatLng(46.2994,-124.075305));
		map.setZoom(17);
		//BellsTrail.setMap(map);	
		//NorthHeadLHTrail.setMap(map);	
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Deception Pass State Park</span>';
		document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'	};
	
	function caped_caped(){
	    query4markers("select * from "+tableID+" where Park_Name = 'Cape Disappointment State Park' {AND Tour_Asset='yes'} ORDER BY Title");				
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(new google.maps.LatLng(46.277396,-124.051856));
		map.setZoom(17);
		//CapeDWaikikiTrail.setMap(map);	
		//CapeDLHTrail.setMap(map);
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Deception Pass State Park</span>';
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////DECEPTION PASS/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
		
function deceptionpass()
	{
		function ParkKML1(){				
				   var  filename = kmlsrc+"deception_pass1_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		function ParkKML2(){				
				   var  filename = kmlsrc+"deception_pass2_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		function ParkKML(){				
				   var  filename = kmlsrc+"deception_pass_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }

	ParkKML1();
	ParkKML2();
	ParkKML();

	query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}{AND Keywords LIKE 'location'}");
	setupMarkers();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		map.setCenter(new google.maps.LatLng( 48.426293,-122.686348));
		map.setZoom(13);
		
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Deception Pass State Park</span>';
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'	
	defaultmap();
	google.maps.event.trigger(map, 'resize');
	//hidetrails();

	};
	
	function deceptionpass_all()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		google.maps.event.trigger(map, 'resize'); 
		};
	function deceptionpass_none()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = ''");	
		setupMarkers();
		google.maps.event.trigger(map, 'resize'); 
		};
	
	function deceptionpass_benure()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		map.setCenter(new google.maps.LatLng(48.401750,-122.626538));
		map.setZoom(16);
		google.maps.event.trigger(map,'resize');

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_ben_ure_island.html" target="_parent">View the tour page. </a></span>';
		
		defaultmap();
		google.maps.event.trigger(map, 'resize'); 
		};

	function deceptionpass_bowman()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);	
		map.setCenter(new google.maps.LatLng(48.412993,-122.652905));
		map.setZoom(15);
		google.maps.event.trigger(map,'resize');

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_bowman_bay.html" target="_parent">View the tour page. </a></span>';
		
		

		document.getElementById("iconbar").innerHTML=pan+img+tour+vid+cluster
	defaultmap();
		google.maps.event.trigger(map, 'resize'); 		
		};

	function deceptionpass_cornetelc()
		{
		setupMarkers();
		
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		map.setCenter(new google.maps.LatLng(48.394873,-122.638985));
		map.setZoom(18);
		DPass_GooseRock_Trail.setMap(map);
		google.maps.event.trigger(map, 'resize')
		
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'		
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_cornet_bay_elc.html" target="_parent">View the tour page. </a></span>';
		
		document.getElementById("map_canvas").style.width="640px";
		document.getElementById("map_canvas").style.height="500px";
		document.getElementById("map_table").style.width="650px";
		document.getElementById("map_table").style.height="550px";
		
		google.maps.event.trigger(map, 'resize'); 
		};
	
	function deceptionpass_gooserock()
		{
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_goose_rock.html" target="_parent">View the tour page. </a></span>';
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'		
		document.getElementById("map_canvas").style.width="655px";
		document.getElementById("map_canvas").style.height="500px";
		document.getElementById("map_table").style.width="655px";
		document.getElementById("map_table").style.height="550px";
//		document.getElementById("map_table2").style.width="655px";

		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		map.setCenter(new google.maps.LatLng(48.402193,-122.637734));
		map.setZoom(15);
		google.maps.event.trigger(map,'resize');
		};

	function deceptionpass_deception_island()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		map.setCenter(new google.maps.LatLng(48.407725,-122.670587));
		map.setZoom(17);
		google.maps.event.trigger(map,'resize');

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_goose_rock.html" target="_parent">View the tour page. </a></span>';
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		document.getElementById("map_canvas").style.width="640px";
		document.getElementById("map_canvas").style.height="500px";
		document.getElementById("map_table").style.width="650px";
		document.getElementById("map_table").style.height="550px";
		
		google.maps.event.trigger(map, 'resize'); 
		};

	function deceptionpass_rosario()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(new google.maps.LatLng(48.417002,-122.663716));
		map.setZoom(17);
		google.maps.event.trigger(map,'resize');
		
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_rosario_beach.html" target="_parent">View the tour page. </a></span>';
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'		
		document.getElementById("map_canvas").style.width="640px";
		document.getElementById("map_canvas").style.height="500px";
		document.getElementById("map_table").style.width="650px";
		document.getElementById("map_table").style.height="550px";
		
		google.maps.event.trigger(map, 'resize'); 
		};
	
	function deceptionpass_westpoint(){
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Deception Pass State Park'{AND Tour_Asset='yes'}");	
		setupMarkers();
		infobox.close();
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(new google.maps.LatLng(48.396960,-122.654679));
		map.setZoom(15);
		google.maps.event.trigger(map,'resize');

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Deception_Pass/dpass_west_point.html" target="_parent">View the tour page. </a></span>';
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
		document.getElementById("map_canvas").style.width="640px";
		document.getElementById("map_canvas").style.height="500px";
		document.getElementById("map_table").style.width="650px";
		document.getElementById("map_table").style.height="550px";		

		google.maps.event.trigger(map, 'resize'); 		
		};
	
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////FORT CASEY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ftcasey()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Fort Casey State Park'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(48.159557, -122.678202));
	function ParkKML(){				
				   var  filename = kmlsrc+"fort_casey_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Casey_New/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////ANDERSON LAKE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function andersonlake()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Anderson Lake'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(48.012601, -122.801709));
	function ParkKML(){				
				   var  filename = kmlsrc+"anderson_lake_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: 15,
						//zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Casey_New/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////MOUNT SPOKANE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function mtspokane()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Mount Spokane'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.917797, -117.110888));
	function ParkKML(){				
				   var  filename = kmlsrc+"mount_spokane_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Casey_New/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	};
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////FORT COLUMBIA/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ftcolumbia()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Fort Columbia State Park'{AND Tour_Asset='yes'}");
	map.setCenter(new google.maps.LatLng(46.252496, -123.920149));
	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setZoom(17);

	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Columbia_New/index.html" target="_parent">View the park tour page. </a></span>';

		defaultmap();
	};
	
function ftcolumbia_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		document.getElementById("iconbar2").style.display="none";
		ftcolumbia();
		};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////FORT EBEY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
//
function ftebey()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Fort Ebey State Park' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(48.22338,-122.7569));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(16);

		function ParkKML(){				
			var  filename = kmlsrc+"fort_ebey_park.kml";
		    	    infowindow = new google.maps.InfoWindow({});
					geoXml = new geoXML3.parser({
					map: map,
			        infoWindow: infowindow,
			        singleInfoWindow: true,
					zoom: myGeoXml3Zoom,
			        afterParse: useTheData
					});
				 geoXml.parse(filename);
			            }

	ParkKML(); 	
	map.setZoom(16);						
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<table><tr>'+pan+img+'</tr></table>'
	document.getElementById("side_bar").style.display="block";
	document.getElementById("trails").style.display="block";

	defaultmap();
		};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////FORT FLAGLER/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ftflagler()
		{
		map.setCenter(new google.maps.LatLng(48.093177,-122.707183));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(14);
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Fort Flagler State Park'{AND Tour_Asset='yes'}");			
				function ParkKML(){				
				   var  filename = kmlsrc+"ftflagler_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		
		defaultmap();
		ParkKML();
		setupMarkers();
		
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Flagler_New/index.html" target="_parent">View the park tour page. </a></span>';
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("buttons").style.display="block";
		document.getElementById("buttons").innerHTML='\
        <input type="button" class="homebutton" onClick="initialize();choose_map()"/>\
        <input type="button" class="batbutton" onClick="initialize();query_battery()"/>\
        <input type="button" class="vacbutton" onClick="initialize();query_vacation()"/>\
        <input type="button" class="retbutton" onClick="initialize();query_retreat()"/>\
        <input type="button" class="trailbutton" onClick="initialize();query_trail()"/></td>\
				';
		document.getElementById("intro").style.display="none";
		document.getElementById("intro").innerHTML='\
		 Fort Flagler State Park is located on the north end of Marrowstone Island, approximately 2 hours northwest of Seattle, WA.\
          Fort Flagler was one of three forts (Flagler, Casey and Worden) which formed a <a href=# onclick="HDPS()">"Triangle of Fire"</a> defense protecting\
          Admiralty Inlet, the entance to Puget Sound.  Construction of the fort began in 1899, and when completed the defenses included\
          8 heavy gun batteries, 1 mortar battery, and support structures.  Additionally, the Parade Ground was surrounded by troop and officer\
          housing, hospital, recreational and support buildings. <br/>\
          Today, Fort Flagler offers numerous opportunities for recreation including camping, hiking/biking trails, coastal beaches, vacation housing, and a museum. <br/>\
          The historic gun batteries are all open to the public and seasonal tours are available to learn more of the parks history.<br>\
          <input id="HDPS" style="display:none" type="button" value="close" onClick="initialize();update0()"/>'

		document.getElementById("retreat").innerHTML='\
		  <div id="retreat" style="display:none"> The Fort Flagler Retreat Center is comprised of 11 buildings divided into  3 "camps".  These historic World War II era buildings have been wonderfully maintained and\
          and offer facilities for groups of 20 to 250.  Each camp includes full commercial-grade kitchens, dormitories and recreational areas.  Located on the Grand Parade Ground\
          overlooking Admiralty Inlet, the Retreat Center offers easy access to all of Fort Flaglers historic and recreational areas. <br>\
          <table align="center"><tr>\
              <td align="center"><img src="../Image_Files/Retreat_Hoskins_sm.jpg" width="200px" height="150px"><br>\
                Camp Hoskins</td>\
              <td align="center"><img src="../Image_Files/Retreat_Richmond_sm.jpg" width="200px" height="150px"><br>\
                Camp Richmond</td>\
              <td align="center"><img src="../Image_Files/Retreat_Wilson_sm.jpg" width="200px" height="150px"><br>\
                Camp Wilson</td></tr>\
          </table>';
		
		document.getElementById("vacation").innerHTML='\
         Fort Flagler has 5 Vacation House rentals available for park visitors. The NCO Quarters duplex, Hospital Stewards House and Engineers House buildings are original \
          fort buildings that date back to 1900.  Waterway House was originally an administration building built in World War II.  All these houses have been lovingly maintained\
          and offer comfortable accomodations for your weekend getaway.  Located on the Grand Parade ground, the rentals are within easy walking distance of historic sites, beaches\
          and trailheads.';

		document.getElementById("trails").innerHTML='\
  		        <div id="trails" style="display:none"> There are over 10 miles of trails within Fort Flagler State Park.  Most are retired service roads from the days when this was an active Coastal Defense fort, and thus are \
          accessible for visitors on foot or mountain-bike.  Wilderness Trail and Bankhead Trail parallel Flagler Campground Road, and are not best suited for bicycles.  The trails\
          form a network through the park, offering loop hikes of varying lengths and connecting most historic sites, Parade Ground and Campground facilities. </div></td>';

		document.getElementById("batteries").innerHTML='\
		'		
		
		//document.getElementById("parkmapembed").innerHTML='<iframe src="'+parkmapurl+'" width="700px" height="1200px" scrolling="0" frameborder="no"></iframe>'
	};

 	function ftflagler_parade()
	 	{
 	 document.getElementById("map_canvas").style.width="500px";	
	 document.getElementById("map_canvas").style.height="700px";			 
	 google.maps.event.trigger(map, 'resize'); 
	map.setMapTypeId(google.maps.MapTypeId.HYBRID); 
	 map.setCenter(new google.maps.LatLng(48.096599,-122.693595));
	 map.setZoom(16);
	 query4markers("select * from "+tableID+" where Keywords CONTAINS %'PG'% ORDER BY Title");
 	 document.getElementById("side_bar").style.display="block";	
	 document.getElementById("side_bar2").style.display="none";
	 document.getElementById("map_canvas").style.display="block";
	 document.getElementById("viewdiv").style.display="none";
	 document.getElementById("intro").style.display="none";
	 document.getElementById("batteries").style.display="none";
	 document.getElementById("retreat").style.display="none";
	 document.getElementById("vacation").style.display="none";
	 document.getElementById("trails").style.display="none";
	 document.getElementById("pg").style.display="block";
	 document.getElementById("showalltrail").style.display="none";
	 document.getElementById("iconlist").innerHTML='';
	 document.getElementById("iconbar").innerHTML='\
	 	<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/camicon.png">Image\
		<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/pan_icon.png">Panorama\
		<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/icon_lodging.png">Building Tour';
	Flagler_Retreat_Hoskins.setMap(null);
	Flagler_Retreat_Wilson.setMap(null);
	Flagler_Retreat_Richmond.setMap(null);
	}	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////FORT SIMCOE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ftsimcoe()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Fort Simcoe State Park' {AND Tour_Asset='yes'} ORDER BY Title");
			map.setCenter(new google.maps.LatLng(46.342337,-120.838901));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(19);

		function ParkKML(){				
				   var  filename = kmlsrc+"fort_simcoe_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }	
		//ParkKML(); 							
		function ParkKML2(){				
				   var  filename = kmlsrc+"fort_simcoe_zoom.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }	
		ParkKML2(); 							
											
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/WSPF/Fort_Simcoe_New/index.html" target="_parent">View the park tour page. </a></span>';

		defaultmap();
		};
		
function ftsimcoe_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		ftsimcoe();
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////FORT WORDEN/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ftworden()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Fort Worden State Park'{AND Tour_Asset='YES'}");
	map.setCenter(new google.maps.LatLng(48.139557, -122.765745));
	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setZoom(15);

	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://wspf.org/virtual-tours/FtWorden-State_Park.html" target="_blank">View the park tour page. </a></span>';

		defaultmap();
	};
	
function ftworden_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		document.getElementById("iconbar2").style.display="none";
		ftworden();
		};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////HOPE ISLAND-MASON/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function hopeislandmason()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Hope Island (Mason)'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.18689, -122.929366));
	function ParkKML(){				
				   var  filename = kmlsrc+"hope_island_mason_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Mason/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////CAMA BEACH/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function camabeach()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Cama Beach'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(48.141754,-122.513216));
	function ParkKML(){				
				   var  filename = kmlsrc+"cama_beach_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////GRIFFITHS-PRIDAY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function griffiths_priday()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Griffiths-Priday'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.12562,-124.181816));
	function ParkKML(){				
				   var  filename = kmlsrc+"griffiths_priday_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////IKE KINSWA/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ike_kinswa()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Ike Kinswa'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.546111,-122.526483));
	function ParkKML(){				
				   var  filename = kmlsrc+"ike_kinswa_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////JACKSON COURTHOUSE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function jackson_courthouse()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Jackson Courthouse State Park'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.541739,-122.821905));
	function ParkKML(){				
				   var  filename = kmlsrc+"jackson_courthouse_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////LAKE SYLVIA/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function lake_sylvia()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Lake Sylvia'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.000211,-123.590533));
	function ParkKML(){				
				   var  filename = kmlsrc+"lake_sylvia_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////MATILDA JACKSON/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function matilda_jackson()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Matilda Jackson'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.548678,-122.824546));
	function ParkKML(){				
				   var  filename = kmlsrc+"matilda_jackson_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////MILLERSYLVANIA/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function millersylvania()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Millersylvania'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.914865,-122.912661));
	function ParkKML(){				
				   var  filename = kmlsrc+"millersylvania_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////OCEAN CITY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ocean_city()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Ocean City'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.033178,-124.164208));
	function ParkKML(){				
				   var  filename = kmlsrc+"ocean_city_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////POTLATCH/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function potlatch()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Potlatch'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.361263,-123.159316));
	function ParkKML(){				
				   var  filename = kmlsrc+"potlatch_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////RAINBOW FALLS/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function rainbow_falls()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Rainbow Falls'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.629898,-123.232749));
	function ParkKML(){				
				   var  filename = kmlsrc+"rainbow_falls_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////RIVERSIDE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function riverside()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Riverside'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.695716,-117.495114));
	function ParkKML(){				
				   var  filename = kmlsrc+"riverside_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SCHAFER/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function schafer()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Schafer'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.098132,-123.465521));
	function ParkKML(){				
				   var  filename = kmlsrc+"schafer_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////STEPTOE BATTLEFIELD/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function steptoe_battlefield()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Steptoe Battlefield'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.228552,-117.3651));
	function ParkKML(){				
				   var  filename = kmlsrc+"steptoe_battlefield_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////TOLMIE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function tolmie()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Tolmie'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.119059,-122.776597));
	function ParkKML(){				
				   var  filename = kmlsrc+"tolmie_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////WESTPORT LIGHT/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function westport_light()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Westport Light'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(46.891811,-124.122062));
	function ParkKML(){				
				   var  filename = kmlsrc+"westport_light_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////PACIFIC BEACH/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function pacific_beach()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Pacific Beach'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.205562,-124.204923));
	function ParkKML(){				
				   var  filename = kmlsrc+"pacific_beach_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////STEPTOE BUTTE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function steptoe_butte()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Steptoe Butte'");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(47.032423,-117.296614));
	function ParkKML(){				
				   var  filename = kmlsrc+"steptoe_butte_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};																			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////HOPE ISLAND-SKAGIT/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function hopeislandskagit()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Hope Island (Skagit)'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(48.398721, -122.566463));
	function ParkKML(){				
				   var  filename = kmlsrc+"hope_island_skagit_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+psphere+panoramio+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="none";
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	setupMarkers();
	};

function hopeislandskagit_langbay()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Hope Island (Skagit)'{AND Tour_Asset='yes'}");
	var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setCenter(new google.maps.LatLng(48.40032,-122.571875));
	map.setZoom(18);
	//function ParkKML(){				
	//			   var  filename = kmlsrc+"hope_island_skagit_park.kml";
	//	                infowindow = new google.maps.InfoWindow({});
	//					geoXml = new geoXML3.parser({
	//					map: map,
	//			        infoWindow: infowindow,
	//			        singleInfoWindow: true,
	//					zoom: myGeoXml3Zoom,
	//			        afterParse: useTheData
	//			         });
	//			        geoXml.parse(filename);
	//		            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+vid+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;"><img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/><a href="http://www.fortflagler.net/ssl/Hope_Island_Skagit/index.html" target="_parent">View the park tour page. </a></span>';
	defaultmap();
	ParkKML();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////IRON HORSE WEST/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function ironhorsew()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Iron Horse'{AND Tour_Asset='yes'}");
	map.setCenter(new google.maps.LatLng(47.434169,-121.749181));
	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setZoom(15);

	function ParkKML(){				
				   var  filename = kmlsrc+"iron_horse_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	function ParkKML2(){				
				   var  filename = kmlsrc+"iron_horse_mileage.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	ParkKML();
	ParkKML2();
	
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<table><tr>'+pan+img+tour+'</tr></table>'
	defaultmap();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////JOSEPH WHIDBEY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function jwhidbey()
	{
	query4markers("select * from "+tableID+" WHERE Park_Name = 'Joseph Whidbey State Park'{AND Tour_Asset='yes'}");
	map.setCenter(new google.maps.LatLng(48.30862,-122.71367));
	map.setMapTypeId(google.maps.MapTypeId.HYBRID);
	map.setZoom(15);

	function ParkKML(){				
				   var  filename = kmlsrc+"joseph_whidbey_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }

	ParkKML();

	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").style.display="block";

	defaultmap();
	};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////MYSTERY BAY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
//
function mysterybay()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Mystery Bay' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(48.059655,-122.695415));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(17);

		function ParkKML(){				
			var  filename = kmlsrc+"mystery_bay_park.kml";
		    	    infowindow = new google.maps.InfoWindow({});
					geoXml = new geoXML3.parser({
					map: map,
			        infoWindow: infowindow,
			        singleInfoWindow: true,
					zoom: myGeoXml3Zoom,
			        afterParse: useTheData
					});
				 geoXml.parse(filename);
			            }

	ParkKML(); 							
	document.getElementById("iconbar").style.display="none";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
	document.getElementById("iconbar2").style.display="block";
	document.getElementById("iconbar2").innerHTML='<table><tr>'+pan+img+'</tr></table>'

	defaultmap();
		};	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////NOLTE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	

function nolte()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Nolte' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(47.273352,-121.940094));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		google.maps.event.trigger(map, 'resize'); 
			var mapType = "SATELLITE";		
			map.setMapTypeId(google.maps.MapTypeId[mapType]);
			map.setZoom(15);
		function ParkKML(){				
				   var  filename = kmlsrc+"nolte_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	document.getElementById("iconbar").style.display="block";
	document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
	document.getElementById("parkbuttons_top").style.display="block";
	document.getElementById("iconbar2").style.display="none";
		ParkKML(); 	
		//defaultpage();
		defaultmap();
		google.maps.event.trigger(map, 'resize'); 	  	
		};

function nolte_tour()
		{		
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		possessionpt();
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////OLALLIE/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function olallie()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Olallie' {AND Tour_Asset='yes'} ORDER BY Title");
		setupMarkers();

		google.maps.event.trigger(map, 'resize'); 
			var mapType = "SATELLITE";		
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			map.setCenter(new google.maps.LatLng(47.433516,-121.697322));
		defaultpage();
		//map.setZoom(17);
		function ParkKML1(){				
				   var  filename = kmlsrc+"olallie_park1b.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }

		function ParkKML2(){				
				   var  filename = kmlsrc+"olallie_park2.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		
		function ParkKML(){				
				   var  filename = kmlsrc+"olallie_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Olallie State Park</span>';
		defaultmap();
		ParkKML1();
		ParkKML2();	
		ParkKML(); 
	map.setZoom(14);
	google.maps.event.trigger(map, 'resize');
		};


function olallie_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		olallie();
		};



function olallie_park(){
		var olallie_loc = new google.maps.LatLng(47.437112,-121.652377);
		var olallie_twinfall_loc = new google.maps.LatLng(47.449810,-121.703653);
		var olallie_cedarbutte_loc = new google.maps.LatLng(47.433063,-121.741318);
	    query4markers("select * from "+tableID+" where Park_Name = 'Olallie' {AND Tour_Asset='yes'} ORDER BY Title");
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Iron Horse'{AND Tour_Asset='yes'}");	
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(olallie_loc);
		map.setZoom(15);
				function ParkKML(){				
				   var  filename = kmlsrc+"olallie_park2.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
				function TrailKML2(){				
				   var  filename = kmlsrc+"olallie_iron_horse.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Olallie State Park</span>';
		TrailKML2();
		ParkKML();
		defaultmap();
};

function olallie_park_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		olallie_park();
		};



function olallie_twinfall(){
		var olallie_loc = new google.maps.LatLng(47.447686,-121.702993);
		var olallie_twinfall_loc = new google.maps.LatLng(47.449810,-121.703653);
		var olallie_cedarbutte_loc = new google.maps.LatLng(47.433063,-121.741318);
	    query4markers("select * from "+tableID+" where Park_Name = 'Olallie' {AND Tour_Asset='yes'} ORDER BY Title");
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Iron Horse'{AND Tour_Asset='yes'}");	
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(olallie_twinfall_loc);
		map.setZoom(15);
		function TrailKML(){				
				  var  filename = kmlsrc+"olallie_twin_falls_trail.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		function ParkKML(){				
				   var  filename = kmlsrc+"olallie_park1b.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML();
						

		function TrailKML2(){				
				   var  filename = kmlsrc+"olallie_iron_horse.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Olallie State Park</span>';

		TrailKML2();
		defaultmap();
		TrailKML();
//		setupMarkers();
		//setupMarkers2();
};

function olallie_twinfall_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		olallie_twinfall();
		};


function olallie_cedarbutte(){
		var olallie_loc = new google.maps.LatLng(47.447686,-121.702993);
		var olallie_twinfall_loc = new google.maps.LatLng(47.449810,-121.703653);
		var olallie_cedarbutte_loc = new google.maps.LatLng(47.433063,-121.741318);
	    query4markers("select * from "+tableID+" where Park_Name = 'Olallie' {AND Tour_Asset='yes'} ORDER BY Title");		
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Iron Horse'{AND Tour_Asset='yes'}");	
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(olallie_cedarbutte_loc);
		map.setZoom(16);
		function TrailKML(){				
				   var  filename = kmlsrc+"olallie_cedar_butte_trail.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		
		function TrailKML2(){				
				   var  filename = kmlsrc+"olallie_iron_horse.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		function ParkKML(){				
				   var  filename = kmlsrc+"olallie_park1b.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML();

		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Olallie State Park</span>';
		TrailKML2();
		defaultmap();
		TrailKML();
		setupMarkers();
		//setupMarkers2();
		
};
function olallie_cedarbutte_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		olallie_cedarbutte();
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////PALOUSE FALLS/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	

function palousefalls()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Palouse Falls' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(46.663713,-118.228677));
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
		google.maps.event.trigger(map, 'resize'); 
			map.setZoom(16);
		defaultpage();

		function ParkKML(){				
				   var  filename = kmlsrc+"palouse_falls_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML(); 	


		document.getElementById("parkbuttons_top").style.display="block";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='<span style="font-size:large;font-weight:bolder;text-align:center;">Select an Area within Olallie State Park</span>';
		defaultmap();
		google.maps.event.trigger(map, 'resize'); 	  	
		};



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////POSSESSION POINT/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	

function possessionpt()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Possession Point State Park' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(47.911899,-122.378429));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		google.maps.event.trigger(map, 'resize'); 
			var mapType = "SATELLITE";		
			map.setMapTypeId(google.maps.MapTypeId[mapType]);
			map.setZoom(17);
		defaultpage();

		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		defaultmap();
		google.maps.event.trigger(map, 'resize'); 	  	
		};

function possessionpt_tour()
		{		
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		possessionpt();
		};
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SAINT EDWARD/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function stedward()
		{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Saint Edward'{AND Tour_Asset='yes'}{AND Icon NOT EQUAL TO 'icon_hiking_kml'}");	
		map.setCenter(new google.maps.LatLng(47.732462,-122.257803));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(16);
		setupMarkers();

		function ParkKML(){				
				   var  filename = kmlsrc+"stedward_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }

		ParkKML();

		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="none";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		document.getElementById("iconbar2").innerHTML='\
			<span style="font-size:large;font-weight:bolder;text-align:center;">\
			<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/>\
			<a href="http://www.fortflagler.net/WSPF/\
			Saint_Edward/index.html\
			" target="_parent">View the park tour page. </a></span>';

		//defaultmap();
		};

function stedward_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		stedward();
		};
		
function stedward_trails()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Saint Edward' {AND Keywords LIKE 'trail'}{AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(47.731840,-122.251697));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			map.setZoom(15);

				function ParkKML(){				
				   var  filename = kmlsrc+"stedward_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="none";
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("iconbar2").innerHTML="Click Trail to view it's path";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+vid+cluster+'</tr></table>'
		defaultmap();
		google.maps.event.trigger(map, 'resize'); 	  	
		ParkKML();
		};

function stedward_trails_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		stedward_trails();
		};
		
function stedward_seminary()
			{
			map.setCenter(new google.maps.LatLng(47.733219,-122.257018));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			map.setZoom(19);
			setupMarkers.mgr.refresh();
			document.getElementById("iconbar").style.display="block";
			document.getElementById("iconbar2").style.display="block";
			document.getElementById("iconbar2").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
			defaultmap();
			google.maps.event.trigger(map, 'resize'); 	  	
			
			};
function stedward_playground()
			{
			map.setCenter(new google.maps.LatLng(47.731689,-122.256060));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			map.setZoom(19);
			setupMarkers.mgr.refresh();
			document.getElementById("iconbar").style.display="block";
			document.getElementById("iconbar2").style.display="block";
			document.getElementById("iconbar2").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
			defaultmap();
			google.maps.event.trigger(map, 'resize'); 	  	
			};
			
			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SALTWATER/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function saltwater()
	{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Saltwater'{AND Tour_Asset='yes'}");
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setCenter(new google.maps.LatLng(47.374032,-122.320498));
		map.setZoom(17);
		
		function ParkKML(){				
				   var  filename = kmlsrc+"saltwater_park.kml";
		               infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML(); 				

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+vid+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("iconbar2").innerHTML='\
			<span style="font-size:large;font-weight:bolder;text-align:center;">\
			<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/>\
			<a href="http://www.fortflagler.net/WSPF/\
			Saltwater/index.html\
			" target="_parent">View the park tour page. </a></span>';
	
		defaultmap();
};

function saltwater_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		document.getElementById("iconbar2").style.display="none";
		saltwater();
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SEAQUEST/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function seaquest()
	{
		query4markers("select * from "+tableID+" WHERE Park_Name = 'Seaquest State Park'{AND Tour_Asset='yes'}");	
		map.setCenter(new google.maps.LatLng(46.294282,-122.819942));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(17);
		
				function ParkKML(){				
				   var  filename = kmlsrc+"seaquest_trail.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
	ParkKML();

		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+tour+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="block";
		document.getElementById("iconbar2").innerHTML='\
			<span style="font-size:large;font-weight:bolder;text-align:center;">\
			<img src="'+assetsrc+'Map_Files/WSPF/WSPF_Google_Map_Icon_Files/tour_icon.png"/>\
			<a href="http://www.fortflagler.net/WSPF/\
			Seaquest_New/index.html\
			" target="_parent">View the park tour page. </a></span>';
	
		
defaultmap();
		};
function seaquest_tour(){
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		document.getElementById("iconbar2").style.display="none";
		seaquest();
		};
		
		
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SOUTH WHIDBEY/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
function southwhidbey()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'South Whidbey State Park' {AND Tour_Asset='yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(48.059277,-122.590786));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		map.setZoom(16);

		function ParkKML(){				
				   var  filename = kmlsrc+"southwhidbey.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML(); 	
										
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";

		defaultmap();
		};

function southwhidbey_tour()
		{		
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		southwhidbey();
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////KANASKAT-PALMER/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
//kanaskat_palmer_park.kml//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////SUN LAKES/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	

//sun_lakes_park.kml


function sunlakes()
		{		
	    query4markers("select * from "+tableID+" where Park_Name = 'Sun Lakes' {AND Tour_Asset='Yes'} ORDER BY Title");
		map.setCenter(new google.maps.LatLng(47.58809,-119.3951317));
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
		google.maps.event.trigger(map, 'resize'); 
			var mapType = "SATELLITE";		
			map.setMapTypeId(google.maps.MapTypeId[mapType]);
			map.setZoom(14);
		function ParkKML(){				
				   var  filename = kmlsrc+"sun_lakes_park.kml";
		                infowindow = new google.maps.InfoWindow({});
						geoXml = new geoXML3.parser({
						map: map,
				        infoWindow: infowindow,
				        singleInfoWindow: true,
						zoom: myGeoXml3Zoom,
				        afterParse: useTheData
				         });
				        geoXml.parse(filename);
			            }
		ParkKML(); 			
		defaultpage();
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("iconbar").style.display="block";
		document.getElementById("iconbar").innerHTML='<table><tr>'+pan+img+cluster+'</tr></table>'
		document.getElementById("iconbar2").style.display="none";
		defaultmap();
		setupMarkers();
		google.maps.event.trigger(map, 'resize'); 	  	
		};

function sunlakes_tour()
		{		
		document.getElementById("parkbuttons_top").style.display="none";
		document.getElementById("resetbutton").style.display="block";
		possessionpt();
		};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////STEAMBOAT ROCK/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
//steamboat_rock_park.kml//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////HARBOR DEFENSE OF PUGETSOUND/////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////	
  function HDPS() 
    {
	map.setCenter(new google.maps.LatLng(48.128,-122.72));	
	map.setZoom(12);
	map.setMapTypeId(google.maps.MapTypeId.ROADMAP); 
	var Fort_Flagler		= new google.maps.LatLng(48.103034,-122.694853);
	var Fort_Worden			= new google.maps.LatLng(48.137579,-122.763254);
	var Fort_Casey			= new google.maps.LatLng(48.154761,-122.679734);
	var Fort_Casey_Pin = new google.maps.Marker({position: Fort_Casey, map: map, title: "Fort Casey",icon:"icon_clear.gif"});
	var Fort_Worden_Pin = new google.maps.Marker({position: Fort_Worden, map: map, title: "Fort Worden",icon:"icon_clear.gif"})
	var Fort_Flagler_Pin = new google.maps.Marker({position: Fort_Flagler, map: map, title: "Fort Flagler",icon:"icon_clear.gif"})
	var linepath =[Fort_Casey,Fort_Worden,Fort_Flagler,Fort_Casey];
	var line = new google.maps.Polyline
		({
		path: linepath,
		strokeColor: "000000",
		strokeOpacity:1.0,
		strokeWeight:2
		});

	line.setMap(map);
	document.getElementById("HDPS").style.display="block";
	}	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
function showtrailpic()
	{
	//  query4markers("select * from "+tableID+" where Keywords LIKE 'trailpic'");
	    query4markers("select * from "+tableID+" where Keywords CONTAINS %'trail'%");
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
//  POLYLINES /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

/////////////////////////////
/////FORT FLAGLER////////////
/////////////////////////////

var Flagler_Retreat_Hoskins_pts=[
new google.maps.LatLng(48.097897,-122.694698),
new google.maps.LatLng(48.097468,-122.694593),
new google.maps.LatLng(48.097814,-122.693057),
new google.maps.LatLng(48.098206,-122.693290),
new google.maps.LatLng(48.097897,-122.694698)
];
/////////////////////// 

var Flagler_Retreat_Wilson_pts=[
new google.maps.LatLng(48.096998,-122.696180),
new google.maps.LatLng(48.096938,-122.695457),
new google.maps.LatLng(48.096394,-122.695415),
new google.maps.LatLng(48.096422,-122.696212),
new google.maps.LatLng(48.096998,-122.696180),
];
/////////////////////// 

var Flagler_Retreat_Richmond_pts=[
new google.maps.LatLng(48.098097,-122.693090),
new google.maps.LatLng(48.097924,-122.692827),
new google.maps.LatLng(48.098278,-122.692282),
new google.maps.LatLng(48.098447,-122.692562),
new google.maps.LatLng(48.098097,-122.693090)
];











