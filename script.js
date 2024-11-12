const apiKey = "2bd5559124f13def23addea6864b8f2c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');


document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        event.preventDefault();
    }
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "images/clouds.png"
    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "images/drizzle.png"
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "images/mist.png"
    } 
    
    // local storage!! 
    function updateStorage() {
        localStorage.setItem('city', data.name);
    }
    updateStorage();
    console.log(localStorage.getItem('city'));
    // end local storage
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
})

// const defaultCity =document.querySelector('searchBox')
    

// function lastCity = 



