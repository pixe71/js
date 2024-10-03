let cityEl = document.querySelector(".city");
let iconEl = document.querySelector(".icon");
let descriptionEl = document.querySelector(".description");
let temperatureEl = document.querySelector(".temp");
let humidite = document.querySelector(".humidite");
let ventvitesse = document.querySelector(".ventvitesse");
let dirvent = document.querySelector(".dirvent");
let pression = document.querySelector(".pression");
let gps = document.querySelector(".gps");
let tempres = document.querySelector(".tempres");
let iuv = document.querySelector(".uv");
let ventdeg = document.querySelector(".ventdeg");
let tempdem = document.querySelector(".tempdem");
/*
* * En suivant le même principe que les lignes de code ci-dessus, déclarer :
* - Humidité : à coder
* - Vitesse du vent : à coder
* - Direction du vent : à coder
* - Pression atmosphérique en hectopascals (hPa) : à coder
* - Coordonnées GPS de la ville de rodez (Latitude et Longitude) : à coder
* - Température ressentie en °C : à coder
* - Index UV : à coder
*/

let weatherEl = document.querySelector(".weather");

let weather = {
 "apikey": "a6f6fef1470f473cb0694459230605",

 fetchWeather: function (city) {
  fetch("http://api.weatherapi.com/v1/forecast.json?key=a6f6fef1470f473cb0694459230605%20&lang=fr&units=metric&q=Rodez&aqi=&days=5").then((response) => response.json()).then((data) => this.displayWeather(data));
 },

 displayWeather: function (data) {
  const { name } = data.location;
  const { icon, text } = data.current.condition;
  const { temp_c } = data.current;
  const{ humidity } = data.current;
  const{ wind_kph } = data.current;
  const{ wind_dir } = data.current;
  const{ pressure_mb } = data.current;
  const{ lat } = data.location;
  const{ lon } = data.location;
  const{ feelslike_c } = data.current;
  const{ uv } = data.current;
  const { wind_degree } = data.current;
  const { maxtemp_c } = data.forecast.forecast[1].day;
  /*
  * * En suivant le même principe que les 3 lignes de 
  * * code ci-dessus et en consultant le fichier JSON, 
  * * récupérer et Coder les différents données 
  * * météorologiques demandées
  */

  cityEl.innerText = `Météo à ${name}`;
  iconEl.src = `https:`+icon;
  descriptionEl.innerText = text;
  temperatureEl.innerText = `Température : ${temp_c}°C`;
  humidite.innerText = `Humidité : ${humidity}%`;
  ventvitesse.innerText = `Vitesse du vent : ${wind_kph}km/h`;
  dirvent.innerText = `Direction du vent : ${wind_dir}`;
  pression.innerText = `Pression : ${pressure_mb}hPa`;
  gps.innerText = `Coordonnées : Latitude  ${lat}° Longitude  ${lon}°`;
  tempres.innerText = `Temperature ressenti : ${feelslike_c}°C`;
  iuv.innerText = `Indice UV : ${uv}`;
  ventdeg.innerText = `Degrée du vent : ${wind_degree}°`;
  tempdem.innerText = `Température maximal de demain : ${maxtemp_c}°C`;
  /*
  * * En suivant le même principe que les 4 lignes de 
  * * code ci-dessus, coder les champs qui seront 
  * * affichés dans le document HTML 
  */


  weatherEl.classList.remove("loading");
 },
};

weather.fetchWeather("Rodez");