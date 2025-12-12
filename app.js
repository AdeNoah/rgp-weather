// 2caa38904a61b1d0e9da1b8d229e895f  // open weather default api key
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} // api link 

const apiKey = `2caa38904a61b1d0e9da1b8d229e895f`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=jos,&appid=${apiKey}&units=metric`;

async function checkWeather() {
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();
    console.log(data)

    document.querySelector('.temp').innerHTML = `${data.main.temp}°C`;
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind-speed').innerHTML = `${data.wind.speed} km/h`;
    document.querySelector('.wind-direction').innerHTML = `${data.wind.deg}°`;
}
checkWeather();

