$( document ).ready(function() {

const apiKey = "6f8dcf36e6f31e65b708f8a6f0a9355f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status === 404 || /\d/.test(searchInput.value) == true){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
        const weatherCondition = data.weather[0].main;
    
        if(weatherCondition == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }else if(weatherCondition == "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(weatherCondition == "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(weatherCondition == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(weatherCondition == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }



}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

});