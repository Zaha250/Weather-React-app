import React from 'react';
import './SearchCity.scss';

const SearchCity = ({ value, handleChange, updateWeather }) => {
  return(
    <div className="search-box app__search-box">
      <input 
        className="search-box__input"
        type="text"
        value={value}
        placeholder="Введите город"
        onChange={handleChange}
        onKeyPress={updateWeather}
      />
    </div>
  )
}

export default SearchCity;