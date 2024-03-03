// WeatherPage.jsx
import React, { useState } from 'react';
import WeatherComponent from '../components/WeatherComponent';

const WeatherPage = () => {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-md p-4 shadow">
        <h2 className="text-lg font-bold mb-4">Weather</h2>
        <input
          type="text"
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <WeatherComponent city={city} />
      </div>
    </div>
  );
};

export default WeatherPage;
