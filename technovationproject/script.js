let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let ap = document.getElementById("ap");
let humid = document.getElementById("humid");
let wind = document.getElementById("wind");
let feelsLike = document.getElementById("feelslike");
let API_key = "6d83156e4e40ca97d0c6924b832fe00c";

const data = async function (search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);
    text1.innerHTML = "";
    text2.innerHTML = "";

    if (jsonData.cod == 400) {
        alert("Please Enter Location")
        image.src = "error1.png";
        city.innerHTML = "";
        temp.innerHTML = "Sorry an error occured";
        type.innerHTML = "Error code: 400";
        ap.innerHTML = "Air Pressure: ";
        humid.innerHTML = "Humidity: ";
        wind.innerHTML = "Wind Speed: ";
        feelsLike = "Feels like: ";
    }
    if (jsonData.cod == 404) {
        alert("Please Enter Write Location")
        image.src = "error_2.png";
        city.innerHTML = "";
        temp.innerHTML = "Sorry an error occured";
        type.innerHTML = "Error code: 404";
        ap.innerHTML = "Air Pressure: ";
        humid.innerHTML = "Humidity: ";
        wind.innerHTML = "Wind Speed: ";
        feelsLike = "Feels like: ";
    }
    city.innerHTML = search;
    temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
    type.innerHTML = jsonData.weather[0].main;
    ap.innerHTML = "Air Pressure: " + (jsonData.main.pressure) + " hPa";
    humid.innerHTML = "Humidity: " + (jsonData.main.humidity) + "%";
    wind.innerHTML = "Wind Speed: " + (jsonData.wind.speed) + "m/s";
    feelsLike.innerHTML = "Feels like: " + (jsonData.main.feels_like) + "°C";

    if (type.innerHTML == "Clouds") {
        image.src = "clouds.png"
    } else if (type.innerHTML == "Clear") {
        image.src = "clears.png"
    } else if (type.innerHTML == "Rain") {
        image.src = "rain.png"
    } else if (type.innerHTML == "Snow") {
        image.src = "rain.png"
    } else if (type.innerHTML == "Haze") {
        image.src = "haze.png"
    } else if (type.innerHTML == "Strom") {
        image.src = "strom.png"
    } else if (type.innerHTML == "Mist") {
        image.src = "mist.png"
    } else if (type.innerHTML == "Drizzle") {
        image.src = "rain.png"
    }
    input.value = ""
}

function myFun() {
    search = input.value;
    data(search)
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        // h = h + 12;
        // session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " ";
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();