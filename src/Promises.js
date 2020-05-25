async function wait(waitTime) {
    if (isNaN(waitTime)) {
        throw new Error("waitTime must be a number");
    } else {
        return await new Promise(resolve => setTimeout(() => resolve(`You have waited ${waitTime} milliseconds`), waitTime));
    }
}

const axios = require("axios");
const { weatherApiKey } = require("../config/Keys");


async function getTheWeather(city) {
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weatherApiKey}`)
}

async function Program() {
    let sydneyWeatherPromise = getTheWeather("Sydney");
    let londonWeatherPromise = getTheWeather("London");
    sydneyWeather = await sydneyWeatherPromise;
    londonWeather = await londonWeatherPromise;
    console.log(sydneyWeather.data.main.temp);
    console.log(londonWeather.data.main.temp);

}

Program().then(() => {
    process.exit(0);
});

