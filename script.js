const apiKey = "f6c01ff97056de599aefed12870d51c8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.getElementById("input-field")
const searchBtn = document.getElementById("btn")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        let data = await response.json()

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png"
        } else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "smoke.png"
        } else {
            weatherIcon.src = "sunny.webp"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}




searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})

