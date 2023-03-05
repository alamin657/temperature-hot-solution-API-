const API_Key = `b0b13ec1561c6fbe2cb1bb1ddec55040`;

const temperatureLoad = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ API_Key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature')
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature',data.main.temp)
    setInnerTextById('condition',data.weather[0].main).

    console.log(data.weather[0].main)
}
const setInnerTextById = (id,text) => {
    const temperature = document.getElementById(id)
    temperature.innerText = text;
}
document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    const newcity = document.getElementById('city').innerText = city
    temperatureLoad(city, newcity);  
})

temperatureLoad('dhaka')