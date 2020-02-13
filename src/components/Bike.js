import React from 'react';
import { Link } from 'react-router-dom';

const Bike = (({bike}) => {
  const { model, price, image, slug } = bike;
  
  return (
    <div className="bike-wrapper">
      <Link to={'/bike/${slug}'}>
        <div>
          <img src={image} alt=""/>
          <h2>{model}</h2>
          <h3>{price}</h3>
        </div>
      </Link>
    </div>
  )
})

export default Bike
