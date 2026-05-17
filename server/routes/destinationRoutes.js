const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  getDestinationById,
  getDestinationsByCategory,
  createDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');

// GET all destinations
router.get('/', getAllDestinations);

// GET destination by ID
router.get('/:id', getDestinationById);

// GET destinations by category
router.get('/category/:category', getDestinationsByCategory);

// POST create new destination
router.post('/', createDestination);

// PUT update destination
router.put('/:id', updateDestination);

// DELETE destination
router.delete('/:id', deleteDestination);

module.exports = router;
