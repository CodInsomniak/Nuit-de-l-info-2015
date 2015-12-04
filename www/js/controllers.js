angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope) {

  // Leaflet
  var map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Marker
  var markers = [], // an array containing all the markers added to the map
      markersCount = 0; // the number of the added markers
  var posTop = $( '.draggable-marker' ).css( 'top' ),
      posLeft = $( '.draggable-marker' ).css( 'left' );
  $( '.draggable-marker' ).draggable({
    stop: function ( event, ui ) {
      $( '.draggable-marker' ).css( 'top', posTop );
      $( '.draggable-marker' ).css( 'left', posLeft );
      var coordsX = event.clientX - 275, // 50 is the width of the menu
          coordsY = event.clientY - 40, // 20 is the half of markers height
          point = L.point( coordsX, coordsY ), // createing a Point object with the given x and y coordinates
          markerCoords = map.containerPointToLatLng( point ), // getting the geographical coordinates of the point
      // Creating a custom icon
      myIcon = L.icon({
        iconUrl: 'img/marker-icon.png', // the url of the img
        iconSize: [20, 40],
        iconAnchor: [10, 40] // the coordinates of the "tip" of the icon ( in this case must be ( icon width/ 2, icon height )
      });
      // Creating a new marker and adding it to the map
      markers[ markersCount ] = L.marker( [ markerCoords.lat, markerCoords.lng ], {
        draggable: true,
        icon: myIcon
      }).addTo( map );

      markersCount++;
    }
  });

})

.controller('ConfigCtrl', function(){

});
