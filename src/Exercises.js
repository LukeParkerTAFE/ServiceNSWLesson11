const axios = require("axios");
const { weatherApiKey } = require("../config/Keys")

// Dereferencing
let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
// let myPeoplePointers = ["abc", "def", "hij"]
// let luke = myPeople[0]
// let lukePointer = "abc"
let luke = { ...myPeople[0] };
// let lukePointer = "lmo"

let dereferencedArray = myPeople.map((person) => { return { ...person } });
// let dereferencedArrayPointers = ["xyz", "tuv", "nop"]

// for (let i = 0; i < myPeople.length; i++) {
//     const person = myPeople[i];
//     dereferencedArray.push(person);
// }

// console.log(myPeople[2]);
// console.log(dereferencedArray[2]);

// myPeople[2].bestFriend = "Dave";

// console.log(myPeople[2]);
// console.log(dereferencedArray[2]);

// APIs and Promises
// 1 Make a postman call that uses the 5-day forecast from OWM (hint: use the documentation here - https://openweathermap.org/forecast5)
// 2 Create a function that takes an argument that is a string representing a City and returns the OWN forecast5 result for that city.
async function get5DayForecast(city) {
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}`);
    return response.data;
}

// 3 Make a console app that asks the user to enter a city and returns the 5 day forecast for that city. Make sure the temperature is in degrees celsius (Hint: don't log everything, try to keep it to the most relevant data).

async function Program() {
    let sydneyPromise = get5DayForecast("Sydney");
    let sydneyData = await sydneyPromise;
    let list = sydneyData.list.map(item => {
        return {
            "Teperature": Math.round(item.main.temp - 273.15),
            "Min Temperature": Math.round(item.main.temp_min - 273.15),
            "Max Temperature": Math.round(item.main.temp_max - 273.15),
            "Humidity": item.main.humidity + "%",
            "Current Date": item.dt_txt
        }
    }).filter(item => item["Current Date"].includes("12:00:00"));
    console.table(list);
    // let ex = {
    //     main: {
    //         temp: 288.61,
    //         temp_min: 288.61,
    //         temp_max: 289.84,
    //         humidity: 86,
    //     },
    //     dt_txt: '2020-05-26 00:00:00'
    // };
}

Program();
