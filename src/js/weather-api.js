import axios from 'axios';
const KEY = 'b45ce7b42bd659df434b4de28331d70c';
export async function getWeather(lat, lon) {
  //   console.log(lat, lon);
  const products = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnts=1&appid=${KEY}`
  );
  return products;
}
export async function getCurrentWeather(lat, lon) {
  //   console.log(lat, lon);
  const products = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
  );
  return products;
}
