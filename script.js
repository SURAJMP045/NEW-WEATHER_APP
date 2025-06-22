const button = ddocument.getElementById('search-button');
const city = document.getElementById('search-input');

async function fetchdata(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=e83fd402afd24316a89185311252106&q=$(cityName)&aqi=yes`)
}


button.addEventListener('click', () => { 
    

})