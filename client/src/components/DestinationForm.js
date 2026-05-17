import React, { useState } from 'react';
import './DestinationForm.css';

function DestinationForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    description: '',
    category: 'Beach',
    rating: 0
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await onAdd(formData);
    
    if (result.success) {
      setMessage('✅ Destination added successfully!');
      setFormData({
        name: '',
        country: '',
        description: '',
        category: 'Beach',
        rating: 0
      });
    } else {
      setMessage('❌ Failed to add destination');
    }

    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="destination-form-container">
      <h2>➕ Add New Destination</h2>
      
      {message && <div className="form-message">{message}</div>}
      
      <form onSubmit={handleSubmit} className="destination-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Destination Name"
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
        </div>

        <div className="form-row">
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Beach">🏖 Beach</option>
            <option value="Mountain">⛰ Mountain</option>
            <option value="City">🏙 City</option>
            <option value="Historical">🏛 Historical</option>
            <option value="Adventure">🌿 Adventure</option>
          </select>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating (0-5)"
          />
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description..."
          rows="3"
        />

        <button type="submit" className="btn btn-primary">
          Add Destination
        </button>
      </form>
    </div>
  );
}

export default DestinationForm;
