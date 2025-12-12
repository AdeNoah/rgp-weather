// 2caa38904a61b1d0e9da1b8d229e895f  // open weather default api key

// ahttps://api.openweathermap.org/data/2.5/weather //      actual api url

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} //         api url fetch format

// api.openweathermap.org / data / 2.5 / weather ? q = London, uk & APPID=2caa38904a61b1d0e9da1b8d229e895f //       api call sample from open weather maps mail

const apiKey = `2caa38904a61b1d0e9da1b8d229e895f`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

const weather = document.querySelector('.weather')
const weatherIcon  = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city},&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data)

    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind-speed').innerHTML = `${data.wind.speed} km/h`;
    document.querySelector('.wind-direction').innerHTML = `${data.wind.deg}°`;

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    } else if (data.weather[0].main === 'Drizzle'){
        weatherIcon.src = 'images/drizzle.png'
    } else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = 'images/mist.png'
    } else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'images/rain.png'
    } else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = 'images/snow.png'
    } else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'images/clear.png'
    }

    weather.style.display = 'block'
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


