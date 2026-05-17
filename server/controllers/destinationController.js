const db = require('../config/database');

// Get all destinations
const getAllDestinations = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM destinations ORDER BY rating DESC');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
};

// Get destination by ID
const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query('SELECT * FROM destinations WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error fetching destination:', error);
    res.status(500).json({ error: 'Failed to fetch destination' });
  }
};

// Get destinations by category
const getDestinationsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const [rows] = await db.query(
      'SELECT * FROM destinations WHERE category = ? ORDER BY rating DESC',
      [category]
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching destinations by category:', error);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
};

// Create new destination
const createDestination = async (req, res) => {
  try {
    const { name, country, description, category, rating } = req.body;
    
    if (!name || !country) {
      return res.status(400).json({ error: 'Name and country are required' });
    }
    
    const [result] = await db.query(
      'INSERT INTO destinations (name, country, description, category, rating) VALUES (?, ?, ?, ?, ?)',
      [name, country, description, category, rating || 0]
    );
    
    res.status(201).json({
      message: 'Destination created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating destination:', error);
    res.status(500).json({ error: 'Failed to create destination' });
  }
};

// Update destination
const updateDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, country, description, category, rating } = req.body;
    
    const [result] = await db.query(
      'UPDATE destinations SET name = ?, country = ?, description = ?, category = ?, rating = ? WHERE id = ?',
      [name, country, description, category, rating, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    
    res.status(200).json({ message: 'Destination updated successfully' });
  } catch (error) {
    console.error('Error updating destination:', error);
    res.status(500).json({ error: 'Failed to update destination' });
  }
};

// Delete destination
const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query('DELETE FROM destinations WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Destination not found' });
    }
    
    res.status(200).json({ message: 'Destination deleted successfully' });
  } catch (error) {
    console.error('Error deleting destination:', error);
    res.status(500).json({ error: 'Failed to delete destination' });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  getDestinationsByCategory,
  createDestination,
  updateDestination,
  deleteDestination
};
