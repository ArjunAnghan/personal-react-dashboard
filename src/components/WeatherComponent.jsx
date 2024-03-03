import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiHumidity, WiStrongWind, WiRaindrops } from 'react-icons/wi';

const WeatherComponent = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f49aea03417d3bd6445443d18632c4d0`);
      if(response.status === 200) {
        setWeatherData(response.data);
      }
      else {
        setWeatherData(null);
      }
      
    } catch (error) {
        setWeatherData(null);
    }
  };


  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    if (city && city.trim()!=='') {
      fetchWeatherData();
    }
    else {
        setWeatherData(null);
    }
  }, [city]); // Trigger fetch when city changes

  const temperature = weatherData ? (isCelsius ? convertToCelsius(weatherData.main.temp) : convertToFahrenheit(weatherData.main.temp)) : '';
  const temperatureUnit = isCelsius ? '°C' : '°F';
  const humidity = weatherData ? weatherData.main.humidity : '';
  const windSpeed = weatherData ? (weatherData.wind.speed * 3.6).toFixed(2) : '';
  const precipitation = weatherData ? (weatherData.rain ? weatherData.rain['1h'] : 0) : 0;
  const weatherIcon = weatherData ? weatherData.weather[0].icon : '';
  const weatherDescription = weatherData ? weatherData.weather[0].description : '';
  const backgroundColor = weatherData ? getBackgroundColor(weatherDescription) : '';

  function convertToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  function convertToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
  }

  function getBackgroundColor(description) {
    if (description.includes('rain')) {
      return '#6b7280';
    } else if (description.includes('cloud')) {
      return '#60a5fa';
    } else if (description.includes('clear')) {
      return '#10b981';
    } else {
      return '#f59e0b';
    }
  }


  return (
    <div className="p-4 rounded-md bg-white shadow-md">
      <h3 className="text-lg font-bold mb-2">{weatherDescription}</h3>
      <div className="flex flex-col md:flex-row md:items-center mb-2">
        <img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather icon" className="w-10 h-10 mb-2 md:mr-2 md:mb-0" />
        <p className="md:ml-2">Temperature: {temperature ? temperature.toFixed(2) : null} {temperature ? temperatureUnit : null}</p>
      </div>
      <div className="flex items-center mb-2">
        <WiHumidity size={24} className="mr-2" />
        <p>Humidity: {humidity}%</p>
      </div>
      <div className="flex items-center mb-2">
        <WiStrongWind size={24} className="mr-2" />
        <p>Wind Speed: {windSpeed} km/h</p>
      </div>
      {precipitation > 0 && (
        <div className="flex items-center mb-2">
          <WiRaindrops size={24} className="mr-2" />
          <p>Precipitation: {precipitation} mm</p>
        </div>
      )}
      <button onClick={toggleUnit} className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded-md mt-2">Toggle Unit</button>
    </div>
  );
  
};

export default WeatherComponent;
