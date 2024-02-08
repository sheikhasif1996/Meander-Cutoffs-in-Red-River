var map = L.map('map').setView([39.75621, -104.99404], 4);

// Load a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(map);

$.getJSON('https://raw.githubusercontent.com/sheikhasif1996/Project1_1/main/RedRiverOxbows.json', function (data) {
    var coordinatesOnly = data.features.map(function (feature) {
        return [feature.geometry.coordinates[1], feature.geometry.coordinates[0]];
    });

    // Create a layer group for markers
    var markersLayer = L.layerGroup();

    // Add markers to the layer group
    coordinatesOnly.forEach(function (coordinates) {
      var customIcon = L.icon({
            iconUrl: 'https://www.shutterstock.com/shutterstock/photos/1765577585/display_1500/stock-vector-grunge-red-cut-off-word-with-star-icon-round-rubber-seal-stamp-on-white-background-1765577585.jpg', // URL to your custom icon
            iconSize: [16, 16], // Size of the icon
            iconAnchor: [16, 32], // Anchor point of the icon
            popupAnchor: [0, -32] // Popup offset relative to the icon anchor
        });
      // Create a marker with the custom icon
        var marker = L.marker(coordinates, { icon: customIcon });
        markersLayer.addLayer(marker);
      // Add popup to the marker
        marker.bindPopup("Meander Cutoff");
    });

    // Add the layer group to the map
    markersLayer.addTo(map);
});

  $.getJSON("https://raw.githubusercontent.com/sheikhasif1996/Project1_1/main/RedRiver_ONEPART.json",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
