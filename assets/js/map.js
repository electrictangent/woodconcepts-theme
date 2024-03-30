// https://leafletjs.com/examples/quick-start/

var latlng = L.latLng(-40.38915, 175.58082);
var map = L.map('map', {
  gestureHandling: true
}).setView(latlng,20);

var marker = L.marker(latlng).addTo(map);
marker.bindPopup("<b>Reclaimed Timber Traders</b><br/>50 Tip Road<br/>Palmerston North 4412").openPopup();
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
