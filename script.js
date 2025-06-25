const button = ddocument.getElementById('search-button');
const city = document.getElementById('search-input');

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")

async function fetchdata(cityName){
    
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=e83fd402afd24316a89185311252106&q=${cityName}&aqi=yes`)
    return await promise.json()
}


button.addEventListener('click', () => { 
    const value = input.value
    const result = fetchdata(value)
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}, `
    cityTime.innerText = `${result.location.localtime}`
    cityTemp.innerText = `${result.current.temp_c}`
})