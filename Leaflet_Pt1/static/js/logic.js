// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

//create a map

// Create a map object.
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Retrieve the data to add to map
d3.json(queryUrl).then(function (data) {

    function mapStyle(feature) {

        return {
            opacity: 1,
            fillColor: mapColor(feature.geometry.coordinates[2]),
            color: "black",
            radius: mapRadius(feature.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
//depth colors
    function mapColor(depth) {
        switch (true) {
            case depth > 100:
                return "yellow";
            case depth > 200:
                return "gold";
            case depth > 300:
                return "orange";
            case depth > 400:
                return "orangered";
            case depth > 500:
                return "red";
            case depth > 600:
                return "darkred";

        }
    }

    function mapRadius(mag) {
        if (mag == 0) {
            return 1;
        
        }

        return mag *4;
    }

    L.geoJson(data), {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },

        style: mapStyle,

        // Activate pop-up data when circles are clicked
        onEachFeature: function (feature, layer) {
            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2]);

        }

}
    }).addTo(myMap);