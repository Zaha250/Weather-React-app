import React from 'react';
import './Location.scss';

const Location = ({city, country}) => {
  return (
    <div className="location app__location">
      <h1 className="location__city">{city}</h1>
      <span className="location__country">{country}</span>
    </div>
  )
}

export default Location;