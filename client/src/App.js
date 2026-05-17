import React, { useState, useEffect } from 'react';
import './App.css';
import DestinationList from './components/DestinationList';
import DestinationForm from './components/DestinationForm';
import FilterBar from './components/FilterBar';
import api from './services/api';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch all destinations on component mount
  useEffect(() => {
    fetchDestinations();
  }, []);

  // Filter destinations when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredDestinations(destinations);
    } else {
      const filtered = destinations.filter(
        dest => dest.category === selectedCategory
      );
      setFilteredDestinations(filtered);
    }
  }, [selectedCategory, destinations]);

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      const data = await api.getAllDestinations();
      setDestinations(data);
      setFilteredDestinations(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch destinations. Please ensure the server is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddDestination = async (newDestination) => {
    try {
      await api.createDestination(newDestination);
      fetchDestinations(); // Refresh list
      return { success: true };
    } catch (err) {
      console.error('Error adding destination:', err);
      return { success: false, error: 'Failed to add destination' };
    }
  };

  const handleDeleteDestination = async (id) => {
    if (window.confirm('Are you sure you want to delete this destination?')) {
      try {
        await api.deleteDestination(id);
        fetchDestinations();
      } catch (err) {
        alert('Failed to delete destination');
        console.error(err);
      }
    }
  };

  const handleUpdateDestination = async (id, updatedData) => {
    try {
      await api.updateDestination(id, updatedData);
      fetchDestinations();
      return { success: true };
    } catch (err) {
      console.error('Error updating destination:', err);
      return { success: false, error: 'Failed to update destination' };
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌍 Wanderers</h1>
        <p>Explore Amazing Travel Destinations Around the World</p>
      </header>

      <main className="container">
        <DestinationForm onAdd={handleAddDestination} />

        <FilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {loading && <div className="loading">Loading destinations...</div>}
        
        {error && <div className="error-message">{error}</div>}

        {!loading && !error && (
          <DestinationList
            destinations={filteredDestinations}
            onDelete={handleDeleteDestination}
            onUpdate={handleUpdateDestination}
          />
        )}

        {!loading && !error && filteredDestinations.length === 0 && (
          <div className="no-destinations">
            <p>No destinations found in this category.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
