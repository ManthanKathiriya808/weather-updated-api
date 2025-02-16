
const inputBox = document.getElementById("input-box")
const searchBtn = document.getElementById("searchBtn")
const weather_img = document.querySelector(".weather-img")
const weather_body = document.querySelector(".weather-body")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const humidity = document.getElementById("humidity")
const wind_speed = document.getElementById("wind-speed")
const not_found = document.getElementById("not-found")

let inputValue = inputBox.value

// let api_key = `&appid=f27f657ceeac10c4def5151bb67622d3`
// let base_url = `https://api.openweathermap.org/data/2.5/`
// // let end_point = `weather?q=${city}`
// // let url = base_url+end_point+api_key
// const api_url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${api_key}`


// getWeather(url)
// function getWeather(api){

//         fetch(api)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//         })

// }
// checkWeather("Mumbai")
async function checkWeather(city){
   const api_key = `f27f657ceeac10c4def5151bb67622d3`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data =await fetch(`${url}`).then(response => response.json())

    if(weather_data.cod === `404`){
        not_found.style.display= "flex";
        weather_body.style.display= "none";
        console.log("error")
        
    }
   else{
    not_found.style.display= "none";
    weather_body.style.display= "block";
   }

    temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}<i class="ri-celsius-line"></i>`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`
    description.innerHTML = `${weather_data.weather[0].description}`


    switch(weather_data.weather[0].main){
        case 'Clouds' :
             weather_img.src="img/cloud.png";
             break;
        case 'Clear' :
             weather_img.src="img/clear.png";
             break;
        case 'Mist' :
             weather_img.src="img/mist.png";
             break;
        case 'Rain' :
             weather_img.src="img/rain.png";
             break;
        case 'Snow' :
             weather_img.src="img/snow.png";
             break;
        default:
            weather_img.src="img/clear.png";
    }
}

searchBtn.addEventListener("click",()=> {
    
    checkWeather(inputBox.value)
    console.log(inputBox.value)
})




