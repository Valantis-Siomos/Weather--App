let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let search = document.getElementById("custom-search");
let placeName = document.querySelector(".name");
let placeTemp = document.querySelector(".temp");
let placeHumidity = document.querySelector(".humidity");
let placeWind = document.querySelector(".wind");
let placeClouds = document.querySelector(".clouds");
let weatherIcon = document.querySelector(".weatherIcon");
let placeTempCelsius = document.querySelector(".temp-celsius");
let placeTempFahrenheit = document.querySelector(".temp-fahrenheit");




async function weather(cityName) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc905b3241f6089dd71211623d55b035&units=metric`
    );
    let data = await response.json();

    // console.log(data);

    weatherIcon.innerHTML = `<img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">`;
    placeName.innerHTML = data.name;
    // placeTemp.innerHTML = Math.floor(data.main.temp) + "°C";
    placeTempCelsius.innerHTML = Math.floor(data.main.temp) + "°C /";
    placeTempFahrenheit.innerHTML =
      Math.floor((data.main.temp * 9) / 5 + 32) + "°F";
    placeHumidity.innerHTML =
      "Humidity " + "&nbsp;".repeat(30) + data.main.humidity + "%";
    placeHumidity.style.color = "white";
    placeWind.innerHTML =
      "Wind " + "&nbsp;".repeat(23) + data.wind.speed + "KM/H";
    placeWind.style.color = "white";
    placeClouds.innerHTML =
      "Cloud coverage " + "&nbsp;".repeat(12) + data.clouds.all + "%";
    placeClouds.style.color = "white";
    placeHumidity.style.borderBottom = "1px solid black";
    placeWind.style.borderBottom = "1px solid black";
    placeClouds.style.borderBottom = "1px solid black";
    // if (data.main.temp < 25) {
    //   return placeTemp.style.color = "blue"
    // } else {
    //   placeTemp.style.color = "red"
    // }
  } catch (error) {
    alert("Could not be found. Please check the spelling and try again.");
  }
}

searchBtn.addEventListener("click", () => {
  weather(searchBox.value);
});
