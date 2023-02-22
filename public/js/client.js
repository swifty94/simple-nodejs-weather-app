var locationDiv = document.getElementById("location")
var searchInput = document.getElementById("search");
var positionElement = document.getElementById("position");
var countryElement = document.getElementById("country");
var cityElement = document.getElementById("city");
var stateElement = document.getElementById("state");
var postCodeElement = document.getElementById("postCode")
var welcomeTextDiv = document.getElementById("welcome-text");
/*
Don't ever do below thing on production environments.
The key is explicitly declared just because it is a test project and this is absolutely free API
Subscription is connected to the development account with no private data.
*/
const freeApiKey = 'pk.40a922eae2743e2ed5a779906a930daa&lat';

var cyrillicToEnglishMap = {"Ё":"Yo","Й":"I","Ц":"Ts","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"Sh","Щ":"Sch","З":"Z","Х":"Kh","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"kh","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"А","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"Zh","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"Ch","С":"S","М":"M","И":"I","Т":"T","Ь":"","Б":"B","Ю":"Yu","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"","б":"b","ю":"yu","Ї":"Yi","ї":"i","І":"I","і":"i","ь":""};

function getUserLanguage(){
    if (!navigator.language) {
        alert('Cannot determine user language')
    }
    return navigator.language;
}

function isEnglish(){
    lang = getUserLanguage();
    if (!lang === 'en') {
        return false;
    }
}
function transliterate(word){
  return word.split('').map(function (char) {
    return cyrillicToEnglishMap[char] || char;
  }).join("");
}

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
    var url = `https://eu1.locationiq.com/v1/reverse?key=${freeApiKey}=${lat}&lon=${lon}&format=json`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        var country = data.address.country;
        var city = data.address.city || data.address.town;
        var state = data.address.state;
        var postCode = data.address.postcode
        countryElement.innerHTML = country;
        cityElement.innerHTML = city;
        stateElement.innerHTML = state;
        postCodeElement.innerHTML = postCode;
        // fix for input from UA/RU localized browsers
        searchInput.value = isEnglish() ? city : transliterate(city).toString();
        console.log(searchInput.value)
        locationDiv.style.display = "block";
        welcomeTextDiv.style.display = "none";
    });
}

