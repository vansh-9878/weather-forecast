import { apiKey } from "../app";
let city = document.querySelector("input");
city.value = "chennai";
const temp = document.querySelector("h1");
const newCity = document.querySelector("h2");
const humidity = document.querySelector(".update1");
const windSpeed = document.querySelector(".update2");
const search = document.querySelector("button");
const pic = document.querySelector(".clouds");
checkWeather();

async function checkWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`
  );
  const data = await response.json();
  newCity.innerText = city.value.toUpperCase();
  temp.innerText = `${Math.round(data.main.temp)}°C`;
  humidity.innerText = `${data.main.humidity}%`;
  windSpeed.innerText = `${data.wind.speed}Km/hr`;
  let img = data.weather[0].main;
  console.log(img);

  if (img == "Mist") {
    pic.src = "images/mist.png";
  } else if (img == "Drizzle") {
    pic.src = "images/drizzle.png";
  } else if (img == "Clear") {
    pic.src = "images/clear.png";
  } else if (img == "Rain") {
    pic.src = "images/rain.png";
  } else if (img == "Clouds") {
    pic.src = "images/clouds.png";
  } else if (img == "Snow") {
    pic.src = "images/snow.png";
  } else if (img == "Thunderstorm") {
    pic.src = "images/rain.png";
  }
  city.value = "";
}
// city.value="";
search.addEventListener("click", () => {
  let city = document.querySelector("input");
  checkWeather();
});

// window.addEventListener("keydown",(e)=>{
//     if(e.code=="Enter"){
//         let city=document.querySelector("input");
//     checkWeather();
//     }
// })

var indianCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Chandigarh",
  "Guwahati",
  "Jammu",
  "Shimla",
];

var input = document.getElementById("cityInput");
var cityList = document.getElementById("cityList");

input.addEventListener("input", function () {
  var inputValue = input.value.toLowerCase();
  var suggestions = [];

  cityList.innerHTML = "";

  if (inputValue.length > 0) {
    suggestions = indianCities.filter(function (city) {
      return city.toLowerCase().includes(inputValue);
    });

    suggestions.forEach(function (suggestion) {
      var li = document.createElement("li");
      li.textContent = suggestion;
      li.addEventListener("click", function () {
        input.value = suggestion;
        cityList.innerHTML = "";
      });
      cityList.appendChild(li);
    });

    cityList.style.display = "block";
  } else {
    cityList.style.display = "none";
  }
});

document.addEventListener("click", function (event) {
  if (event.target !== input && event.target !== cityList) {
    cityList.style.display = "none";
  }
});
