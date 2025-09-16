const Planet = require('./Planet');

class PlanetStore {
  constructor() {
    this.planets = new Map();
    this.nextId = 1;
    this.initializeSampleData();
  }

  initializeSampleData() {
    const samplePlanets = [
      {
        uid: "1",
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000"
      },
      {
        uid: "2", 
        name: "Alderaan",
        rotation_period: "24",
        orbital_period: "364",
        diameter: "12500",
        climate: "temperate",
        gravity: "1 standard",
        terrain: "grasslands, mountains",
        surface_water: "40",
        population: "2000000000"
      },
      {
        uid: "3",
        name: "Yavin IV",
        rotation_period: "24",
        orbital_period: "4818",
        diameter: "10200",
        climate: "temperate, tropical",
        gravity: "1 standard", 
        terrain: "jungle, rainforests",
        surface_water: "8",
        population: "1000"
      }
    ];

    samplePlanets.forEach(planetData => {
      const planet = new Planet(planetData);
      this.planets.set(planet.uid, planet);
    });
    this.nextId = 4;
  }

  getAll(page = 1, limit = 10) {
    const planetsArray = Array.from(this.planets.values());
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPlanets = planetsArray.slice(startIndex, endIndex);
    
    return {
      message: "ok",
      total_records: planetsArray.length,
      total_pages: Math.ceil(planetsArray.length / limit),
      previous: page > 1 ? `?page=${page - 1}&limit=${limit}` : null,
      next: endIndex < planetsArray.length ? `?page=${page + 1}&limit=${limit}` : null,
      results: paginatedPlanets.map(planet => ({
        uid: planet.uid,
        name: planet.name,
        url: planet.url
      }))
    };
  }

  getById(id) {
    const planet = this.planets.get(id);
    if (!planet) {
      return null;
    }
    return {
      message: "ok",
      result: {
        properties: planet.toJSON(),
        description: `A planet from the Star Wars universe`,
        _id: planet.uid,
        uid: planet.uid,
        __v: 0
      }
    };
  }

  create(planetData) {
    const planet = new Planet({
      ...planetData,
      uid: this.nextId.toString()
    });
    this.planets.set(planet.uid, planet);
    this.nextId++;
    return planet;
  }

  update(id, planetData) {
    const planet = this.planets.get(id);
    if (!planet) {
      return null;
    }
    planet.update(planetData);
    return planet;
  }

  delete(id) {
    return this.planets.delete(id);
  }
}

module.exports = new PlanetStore();