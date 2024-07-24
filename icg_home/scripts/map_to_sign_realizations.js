// create the map object and set the view to center on Poland
var map = L.map("map", {
    center: [52.229675, 21.012230],
    zoom: 5,
    zoomControl: false
  });
  
  // add the OpenStreetMap tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // an example array of locations in Poland where the company has completed projects
  var locations = [
    {coords:[51.10, 17.03], city: "Wrocław", description: "opis realizacji"},
    {coords:[52.40, 16.93], city: "Poznań", description: "opis realizacji"},
    {coords:[54.35, 18.67], city: "Gdańsk", description: "opis realizacji"},
    {coords:[50.06, 19.94], city: "Kraków", description: "opis realizacji"},
    {coords:[51.76, 19.46], city: "Łódź", description: "opis realizacji"}
  ];

  // loop through the locations array and add markers to the map
  for (var i = 0; i < locations.length; i++) {
    var latlng = locations[i].coords;
    var city = locations[i].city;
    var description = locations[i].description;
    var marker = L.marker(latlng).addTo(map);
    marker.bindPopup(city + "<br>" + description);
  }
  
  // turn off the layer controls to only show the base map
  map.removeControl(map.zoomControl);