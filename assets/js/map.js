---
---

var latlng = L.latLng(-40.38915, 175.58082);
var map = L.map('map', {
  gestureHandling: true
}).setView(latlng,18);

var marker = L.marker(latlng).addTo(map);
marker.bindPopup("{{ site.address }}").openPopup();
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
