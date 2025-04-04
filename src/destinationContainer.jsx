import React from 'react';
import DestinationCard from './DestinationCard';
import './DestinationContainer.css';

const DestinationContainer = () => {
  const destinations = [
    {
      id: 1,
      name: "Bali",
      location: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      description: "Tropical paradise with beautiful beaches and vibrant culture",
      price: "$1,200"
    },
    {
      id: 2,
      name: "Paris",
      location: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "City of love, art, and exquisite cuisine",
      price: "$1,500"
    },
    {
      id: 3,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
      description: "Stunning sunsets and white-washed architecture",
      price: "$1,800"
    },
    {
      id: 4,
      name: "Tokyo",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
      description: "Modern city with rich traditions and amazing food",
      price: "$2,000"
    },
    {
        id: 5,
        name: "Tirupathi",
        location: "India",
        image: "https://images.unsplash.com/photo-1709389137241-af48d39f8b46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRpcnVwYXRpfGVufDB8fDB8fHww",
        description: "Famous for its temple and rich cultural heritage",
        price: "$8,000"
      }
  ];

  return (
    <div className="destination-container">
      <h1>Destinations</h1>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationContainer;