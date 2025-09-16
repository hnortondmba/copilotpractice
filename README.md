# Star Wars Planets CRUD API

A RESTful API for managing Star Wars planets data, compatible with the SWAPI (Star Wars API) format.

## Features

- Full CRUD operations (Create, Read, Update, Delete)
- Pagination support
- Data validation
- CORS enabled
- Security headers with Helmet
- In-memory data store with sample planets

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Running the API

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:3000/api/planets`

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/api/planets` | List all planets | `page` (default: 1), `limit` (default: 10, max: 100) |
| GET | `/api/planets/:id` | Get a specific planet | `id` (planet ID) |
| POST | `/api/planets` | Create a new planet | Request body with planet data |
| PUT | `/api/planets/:id` | Update a planet | `id` (planet ID), Request body with updated data |
| DELETE | `/api/planets/:id` | Delete a planet | `id` (planet ID) |

### Example Usage

#### List planets with pagination
```bash
curl "http://localhost:3000/api/planets?page=2&limit=10"
```

#### Get a specific planet
```bash
curl "http://localhost:3000/api/planets/1"
```

#### Create a new planet
```bash
curl -X POST http://localhost:3000/api/planets \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Naboo",
    "climate": "temperate",
    "terrain": "grassy hills, swamps, forests, mountains",
    "population": "4500000000"
  }'
```

#### Update a planet
```bash
curl -X PUT http://localhost:3000/api/planets/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Tatooine",
    "climate": "arid",
    "terrain": "desert",
    "population": "200000"
  }'
```

#### Delete a planet
```bash
curl -X DELETE http://localhost:3000/api/planets/1
```

## Planet Data Structure

```json
{
  "uid": "1",
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304", 
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "created": "2023-01-01T00:00:00.000Z",
  "edited": "2023-01-01T00:00:00.000Z",
  "url": "https://swapi.tech/api/planets/1"
}
```

## Response Format

The API follows the SWAPI response format:

### List Response
```json
{
  "message": "ok",
  "total_records": 3,
  "total_pages": 1,
  "previous": null,
  "next": null,
  "results": [
    {
      "uid": "1",
      "name": "Tatooine",
      "url": "https://swapi.tech/api/planets/1"
    }
  ]
}
```

### Single Planet Response
```json
{
  "message": "ok",
  "result": {
    "properties": {
      "uid": "1",
      "name": "Tatooine",
      // ... other planet properties
    },
    "description": "A planet from the Star Wars universe",
    "_id": "1",
    "uid": "1",
    "__v": 0
  }
}
```

## Development

### Project Structure
```
src/
├── models/
│   ├── Planet.js          # Planet data model
│   └── PlanetStore.js     # In-memory data store
├── routes/
│   └── planets.js         # Planet routes
├── middleware/
│   └── validation.js      # Request validation
└── server.js              # Main application file
```

### Testing

Run the test suite:
```bash
npm test
```

## License

MIT