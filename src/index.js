import { getWeather, getCurrentWeather } from './js/weather-api';

const body = document.body;
const weatherContainerRef = body.querySelector('.weather');

navigator.geolocation.getCurrentPosition(successCallback);

async function successCallback(position) {
  // renderCurrentLocation(currentLatitude, currentLongitude);
  const { data } = await getCurrentWeather(
    position.coords.latitude,
    position.coords.longitude
  );
  console.log({ data });
  renderCurrentWeather(data);
}
function renderCurrentWeather(data) {
  weatherContainerRef.querySelector(
    '.weather__temperature'
  ).textContent = `${Math.floor(data.main.temp)}°`;
  weatherContainerRef.querySelector(
    '.weather__state'
  ).textContent = `${data.weather[0].main}`;
  weatherContainerRef.querySelector(
    '.weather__location'
  ).textContent = `${data.name}`;
  console.log('weatherContainerRef:', { weatherContainerRef });
}

function renderCurrentLocation(latitude, longitude) {
  body.insertAdjacentHTML(
    'beforeend',
    `<p>Latitude: ${latitude} </p>
<p>Latitude: ${longitude}</p>`
  );
}
