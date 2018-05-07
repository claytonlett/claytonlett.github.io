var map
var infowindow


function createMarker(lat, lon, content) {
  var latLng = new google.maps.LatLng(lat, lon)
//change the custom marker icon.
var icon = {
    url:"images/img.png",
    scaledSize: new google.maps.Size(50,50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,0)
}

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: icon
  });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.setContent("<div class='content'>" + content + "</div>");
    infowindow.open(map,marker);
  })

}


function initMap() {



    
    
    
    
    
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.0522, lng: -118.2437},
    zoom: 5
  })

  infowindow = new google.maps.InfoWindow({
    content: "placeholder"
  })
  //Change the coordinates for the points, you need 15 points. 
  createMarker(37.8044, -122.2711, "Oakland, California - Kamaiyah <br><img src='images/kamaiyah.jpg'>")
  createMarker(40.8385, -73.9272 , "Highbridge, New York - A Boogie Wit Da Hoodie <br><img src='images/boogie.jpg'>")
  createMarker(39.9526, -75.1652, "Philadelphia, Pennsylvania  - PnB Rock<br><img src='images/rock.jpg'>")
  createMarker(26.1901, -80.3659, "Broward County, Florida   - XXXTentacion<br><img src='images/x.jpg'>")    
  createMarker(33.7490, -84.3880, "Atlanta, Georgia   - Playboi Carti, MadeinTYO<br><img src='images/carti.jpg'>")
  createMarker(29.7604, -95.3698, "Houston, Texas   - Ugly God<br><img src='images/ugly.jpg'>")
  createMarker(45.5231, -122.6765, "Portland, Oregon   - Aminé<br><img src='images/amine.jpg'>")            
  createMarker(33.6534, -84.4494, "College Park, Georgia   - KapG<br><img src='images/kap.jpg'>")
  createMarker(34.2746, -119.2290, "Ventura, California   - Kyle<br><img src='images/kyle.jpg'>")
  createMarker(33.8187, -84.5824, "Mableton, Georgia   - Lil Yachty<br><img src='images/boat.jpg'> ")
   createMarker(26.2379, -80.1248, "Pompano Beach, Florida   - Kodak Black<br><img src='images/kodak.jpg'> ")
    createMarker(25.9406, -80.2456, "Carol City, Florida   - Denzel Curry<br><img src='images/denzel.jpg'> ")
     createMarker(41.8781, -87.6298, "Chicago, Illinois   - G Herbo <br><img src='images/herbo.jpg'> ")
      createMarker(40.0813, -75.1370, "Cheltenham Township, Pennsylvania - Lil Dicky<br><img src='images/dicky.jpg'> ")
       createMarker(35.0527, -78.8784, "Fayetteville, North Carolina   - JCole<br><img src='images/Jcole.jpg'> ")
  


}
