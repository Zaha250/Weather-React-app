import React, { useState } from 'react';
import SearchCity from './components/SearchCity/SearchCity';
import Weather from './components/Weather/Weather';
import Location from './components/Location/Location';
import Spinner from './components/Spinner/Spinner';
import './App.scss';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [load, setLoad] = useState(false);
  const [si, setSi] = useState(true);

  const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: '595ffba442e3dbbf8381455946e286cd'
  }

  const updateWeather = (e) => {
    e.preventDefault();
    setLoad(true);

    fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
        setQuery('');
        setLoad(false);
      })
  }

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const toggleSi = () => {
    setSi(si => !si);
  }

  //Получены ли данные
  const checkData = (typeof weather.main != 'undefined');

  const temp = checkData ? Math.round(weather.main.temp) : null;

  const body = load ? <Spinner /> : (
    checkData ? (
      <>
        <Location
          city={weather.name}
          country={weather.sys.country}
        />
        <Weather
          temp={si ? temp - 273 : temp}
          si={si ? 'С' : 'F'}
          icon={weather.weather[0].icon}
          toggleSi={toggleSi}
        />
      </>
    ) : ('')
  )

  return (
    <div className="App">
      <SearchCity 
        updateWeather={updateWeather}
        handleChange={handleChange}
        value={query}
      />
      {body}
    </div>
  );
}

export default App;
