import { weather_data } from './data.js';

let loadDayForecastData = () => {
  // Tu lógica para cargar los datos del pronóstico del día
  let [guayaquil, ambato, tena] = weather_data;

  // Desestructurar el objeto guayaquil para obtener las propiedades necesarias
  let { city, date, maxtemperature, mintemperature } = guayaquil;

  // Asignar los valores a los elementos HTML correspondientes
  let cityHTML = document.getElementById("city");
  cityHTML.innerHTML = city;

  let dateHTML = document.getElementById("date");
  dateHTML.innerHTML = date;

  let maxtemperatureHTML = document.getElementById("maxtemperature");
  maxtemperatureHTML.innerHTML = maxtemperature;

  let mintemperatureHTML = document.getElementById("mintemperature");
  mintemperatureHTML.innerHTML = mintemperature;
};

let loadWeekForecastData = () => {
  // Tu lógica para cargar los datos del pronóstico de la semana
}

loadDayForecastData();
loadWeekForecastData();