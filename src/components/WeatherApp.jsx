import React, { useState } from 'react';
import '../css-components/WeatherApp.css';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/',
};

function WeatherApp() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === 'Enter') {
      fetch(`${api.base}weather?q=${query},us&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${month} ${year}, ${day} ${date}`;
  };

  return (
    <div className='app'>
      <div className='input-container'>
        {' '}
        <div className='search-box'>
          <i className='fa-solid fa-magnifying-glass'></i>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>
      {typeof weather.main != 'undefined' ? (
        <div className='weather-container'>
          <div className='location-box'>
            <div className='date'>{dateBuilder(new Date())}</div>
            <div className='location'>{weather.name}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>{Math.round(weather.main.temp)}°F</div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default WeatherApp;
