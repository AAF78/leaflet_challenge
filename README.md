# leaflet_challenge

# Process Overview

### The JSON formatted data for this visualization came from the USGS Earthquake Hazards Program website:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson 

### The assignment required the creation of a map that plots earthquakes from the chosen dataset based on longitude and latitude. Circular data markers on this map needed to reflect the magnitude of each earthquake by size (larger markers show higher magnitude), and depth of each earthquake by color (darker color = deeper earthquake). Clickable popups needed to provide additional information about each earthquake in the dataset. Finally, a legend was required to provide reference for the data shown on the map.

### To import the data, I stored the API endpoint as a variable, performed a GET request to the URL, and sent the created object to the createFeatures function. I chose place, time, and magnitude as the features, and these pop-up on the marker when clicked by using the onEachFeature function.
### I created another function, pointToLayer, that displays the circle markers for each feature by latitude/longitude. This function took into account both the radius by magnitude and, through a passed switch case function, also the depth by color of each earthquake.
### Next, I created a geoJSON layer with the data array, then base layers (a street and topo layer); these were made into an overlay map and basemap, respectively. The map was created with layer control; pop-ups with the features previously mentioned are activated upon the user's click on each circle.

### A legend was not included but may be added in future iterations of this map.