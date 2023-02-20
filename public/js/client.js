var locationDiv = document.getElementById("location")
var searchInput = document.getElementById("search");
var positionElement = document.getElementById("position");
var countryElement = document.getElementById("country");
var cityElement = document.getElementById("city");
var stateElement = document.getElementById("state");
var postCodeElement = document.getElementById("postCode")
var welcomeTextDiv = document.getElementById("welcome-text");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
                positionElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var geoTxt = "Detected your geolocation:<br><br>" + "Latitude: " + lat + "<br>Longitude: " + lon;
    positionElement.innerHTML = geoTxt;
    var freeApiKey = 'pk.40a922eae2743e2ed5a779906a930daa&lat'
    var url = `https://eu1.locationiq.com/v1/reverse?key=${freeApiKey}=${lat}&lon=${lon}&format=json`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(JSON.stringify(data, null, 2));
        var country = data.address.country;
        var city = data.address.city || data.address.town;
        var state = data.address.state;
        var postCode = data.address.postcode
        countryElement.innerHTML = country;
        cityElement.innerHTML = city;
        stateElement.innerHTML = state;
        postCodeElement.innerHTML = postCode;
        searchInput.value = city;
        locationDiv.style.display = "block";
        welcomeTextDiv.style.display = "none";
    });
}