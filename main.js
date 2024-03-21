
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-43.000, 175.00417], 5);
L.control.scale(50).addTo(map);



// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE
const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ok44u022701oic20kbh7k/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
        zoomOffset: -1,
	attribution: '&copy; OpenStreetMap'
}).addTo(map);

// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-42.76217994001004, 170.90263030659187]).addTo(map)
	.bindPopup('Hokitika, a place where I go for fishing, hunting, and being with friends/family.');

const marker2 = L.marker([-36.76073178161969, 174.88436516137185]).addTo(map)
	.bindPopup('Auckland, A lot of my family live here, I was born here and travel a lot here to visit.');

const marker3 = L.marker([-44.09446003315905, 171.23178358051968]).addTo(map)
	.bindPopup('Geraldine, This is where I went to school and grew up on a farm just outside Geraldine, I go back maybe once a year to reminisce.');

const marker4 = L.marker([-43.52387066228877, 172.63020436043666]).addTo(map)
	.bindPopup('Christchurch, I live in Christchurch and have lived here for majority of my life.').openPopup();



// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-36.064628619717794, 175.39911800993772],
		[-37.232502054078466, 175.36615902457166],
		[-37.477024677472876, 175.67377622132153],
		[-37.11432282594092, 175.89899595465633],
		[-36.064628619717794, 175.39911800993772]
	],{
		color: 'pink',
		fillColor: '#f03'
	}).addTo(map).bindPopup('Coromandel, My uncle has a house here and it is a very good spot in the summer.');


// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'green',
		fillRule: 'evenodd',
		fillOpacity: '0.2',
		stroke: 'true',
		
	});
geojsonLayer.addTo(map);


setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}





// END OF DOCUMENT