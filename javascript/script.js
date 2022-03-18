let now = new Date();

let h2 = document.querySelector("h2");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeatherCondition(response) {
  temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let input = document.querySelector("#input-city");
  let currentLocation = document.querySelector("h1");
  currentLocation.innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = temperature;
}

function handleSubmit(event) {
  event.preventDefault();
  //let input = document.querySelector("#input-city");
  //let currentLocation = document.querySelector("h1");
  //currentLocation.innerHTML = `${input.value}`;

  let city = document.querySelector("#input-city").value;
  let units = "metric";
  let apiKey = "9860ec3dfdc6dad49e4f6a4e8c42cfa9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchCity = document.querySelector("#search-location-form");
searchCity.addEventListener("submit", handleSubmit);
