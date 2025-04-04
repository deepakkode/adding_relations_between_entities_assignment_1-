import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div className="destination-card">
      <img src={image} alt={name} className="destination-image" />
      <div className="destination-details">
        <h2>{name}</h2>
        <p className="location">{location}</p>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;