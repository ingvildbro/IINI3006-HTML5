let $parkingMap;
let $mapVisible;


$(function () {
    //  Checks if user has hidden map in session.
    if (sessionStorage.mapStatus) {
        $mapVisible = (sessionStorage.mapStatus !== 'hidden');
    } else {
        sessionStorage.setItem('mapStatus', 'visible');
        $mapVisible = true;
    }


    if ($mapVisible) displayMap();


    //  Button listener

});

const myIcon = L.icon({
    iconUrl: 'my-icon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

const ParkIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
const greenIcon = new ParkIcon({iconUrl: 'leaf-green.png'}),
      redIcon = new ParkIcon({iconUrl: 'leaf-red.png'}),
      orangeIcon = new ParkIcon({iconUrl: 'leaf-orange.png'});


function displayMap() {
    $parkingMap = L.map('parkingMap').setView([63.430178, 10.391149], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiaW5ndmlsZGJybyIsImEiOiJjanA0bXFiMm4wamNzM3BxZjhybTUzM3pvIn0.nVAkwB2rWyWsd6fz-MHM3g'
    }).addTo($parkingMap);

    const marker = L.marker([63.4, 10.4]).addTo($parkingMap);

    // MARKER
    L.marker([50.505, 30.57], {icon: myIcon}).addTo($parkingMap);


    marker.bindPopup("<b>Plasser:</b><br>100/125").openPopup();

    $parkingMap.on('click', onMapClick);
}



const popup = L.popup();

function onMapClick(e) {
    popup.setLatLng(e.latlng).setContent("Lat, long: " + e.latlng.toString()).openOn($parkingMap);
}