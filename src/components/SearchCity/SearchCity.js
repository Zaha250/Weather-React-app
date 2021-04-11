import React from 'react';
import './SearchCity.scss';

const SearchCity = ({ value, handleChange, updateWeather }) => {
  return(
    <form onSubmit={updateWeather} id="search">
      <div className="search-box app__search-box">
        <input 
          className="search-box__input"
          type="text"
          value={value}
          placeholder="Введите город"
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

export default SearchCity;