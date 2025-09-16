const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const planetsRouter = require('./routes/planets');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/planets', planetsRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "Star Wars Planets CRUD API",
    version: "1.0.0",
    endpoints: {
      "GET /api/planets": "List all planets with pagination",
      "GET /api/planets/:id": "Get a specific planet",
      "POST /api/planets": "Create a new planet",
      "PUT /api/planets/:id": "Update a planet",
      "DELETE /api/planets/:id": "Delete a planet"
    },
    usage: {
      pagination: "Use ?page=1&limit=10 for pagination",
      example: "/api/planets?page=2&limit=10"
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found"
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong!",
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/planets`);
});

module.exports = app;