import React, { useState } from 'react';
import './DestinationCard.css';

function DestinationCard({ destination, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: destination.name,
    country: destination.country,
    description: destination.description,
    category: destination.category,
    rating: destination.rating
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onUpdate(destination.id, formData);
    if (result.success) {
      setIsEditing(false);
    } else {
      alert('Failed to update destination');
    }
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < fullStars ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (isEditing) {
    return (
      <div className="destination-card editing">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            required
          />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="City">City</option>
            <option value="Historical">Historical</option>
            <option value="Adventure">Adventure</option>
          </select>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            rows="3"
          />
          <div className="button-group">
            <button type="submit" className="btn btn-save">Save</button>
            <button type="button" className="btn btn-cancel" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="destination-card">
      <div className="card-header">
        <h3>{destination.name}</h3>
        <span className={`category-badge ${destination.category?.toLowerCase()}`}>
          {destination.category}
        </span>
      </div>
      
      <p className="country">📍 {destination.country}</p>
      
      <p className="description">{destination.description}</p>
      
      <div className="rating">
        {renderStars(destination.rating)}
        <span className="rating-value">{destination.rating}</span>
      </div>
      
      <div className="button-group">
        <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
          ✏️ Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(destination.id)}>
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default DestinationCard;
