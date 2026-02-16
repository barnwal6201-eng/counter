const inputCityName = document.getElementById("userinput-city");
const searchBtn = document.getElementById("search-button");
const cityname = document.getElementById("city-name");
const temp = document.getElementById("temperature");
const humid = document.getElementById("humidity");
const errorShow = document.querySelector(".error");
const reSet = document.getElementById(reset);


searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(inputCityName.value);
    searchWeather();
})

function searchWeather(){
    const city = inputCityName.value;
    fetchData(city);
}

async function fetchData(city) {

    const weatherAPIkey = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09b98899b8f996a49b9b989b827bcdfa&units=metric`;

    try{
        const response = await fetch(weatherAPIkey);
        const data = await response.json();
        console.log(data);
          if (response.ok) {
            const cityName = data.name;          
            const temperature = data.main.temp;  
            const humidity = data.main.humidity;

            cityname.innerHTML = `City name: ${cityName}`;
            temp.innerHTML = `temperature: ${temperature}`;
            humid.innerHTML = `humidity: ${humidity}`;
        } else {
            errorShow.style.display = "block"; 
        }

    }catch(error) {
       console.error(error);
    } 
}

reSet.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Lalita")
    reset();
})

function reset(){
     inputCityName.value = "";
     cityname.innerHTML = "";
     humid.innerHTML = ""
     temp.innerHTML = "";
     console.log("clicked")
}