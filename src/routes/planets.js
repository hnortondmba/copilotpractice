const express = require('express');
const router = express.Router();
const planetStore = require('../models/PlanetStore');
const { planetValidation, handleValidationErrors } = require('../middleware/validation');

// GET /api/planets - List all planets with pagination
router.get('/', (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    if (page < 1 || limit < 1 || limit > 100) {
      return res.status(400).json({
        message: "Invalid pagination parameters. Page must be >= 1, limit must be between 1 and 100"
      });
    }

    const result = planetStore.getAll(page, limit);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

// GET /api/planets/:id - Get a single planet by ID
router.get('/:id', (req, res) => {
  try {
    const planet = planetStore.getById(req.params.id);
    if (!planet) {
      return res.status(404).json({
        message: "Planet not found"
      });
    }
    res.json(planet);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

// POST /api/planets - Create a new planet
router.post('/', planetValidation, handleValidationErrors, (req, res) => {
  try {
    const planet = planetStore.create(req.body);
    res.status(201).json({
      message: "Planet created successfully",
      result: planet.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

// PUT /api/planets/:id - Update a planet
router.put('/:id', planetValidation, handleValidationErrors, (req, res) => {
  try {
    const planet = planetStore.update(req.params.id, req.body);
    if (!planet) {
      return res.status(404).json({
        message: "Planet not found"
      });
    }
    res.json({
      message: "Planet updated successfully",
      result: planet.toJSON()
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error", 
      error: error.message
    });
  }
});

// DELETE /api/planets/:id - Delete a planet
router.delete('/:id', (req, res) => {
  try {
    const deleted = planetStore.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        message: "Planet not found"
      });
    }
    res.json({
      message: "Planet deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
});

module.exports = router;