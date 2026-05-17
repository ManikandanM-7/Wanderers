import React from 'react';
import DestinationCard from './DestinationCard';
import './DestinationList.css';

function DestinationList({ destinations, onDelete, onUpdate }) {
  return (
    <div className="destination-list">
      {destinations.map(destination => (
        <DestinationCard
          key={destination.id}
          destination={destination}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default DestinationList;
