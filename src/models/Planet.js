class Planet {
  constructor(data) {
    this.uid = data.uid || Date.now().toString();
    this.name = data.name;
    this.rotation_period = data.rotation_period;
    this.orbital_period = data.orbital_period;
    this.diameter = data.diameter;
    this.climate = data.climate;
    this.gravity = data.gravity;
    this.terrain = data.terrain;
    this.surface_water = data.surface_water;
    this.population = data.population;
    this.created = data.created || new Date().toISOString();
    this.edited = data.edited || new Date().toISOString();
    this.url = data.url || `https://swapi.tech/api/planets/${this.uid}`;
  }

  update(data) {
    Object.keys(data).forEach(key => {
      if (key !== 'uid' && key !== 'created' && this.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    });
    this.edited = new Date().toISOString();
  }

  toJSON() {
    return {
      uid: this.uid,
      name: this.name,
      rotation_period: this.rotation_period,
      orbital_period: this.orbital_period,
      diameter: this.diameter,
      climate: this.climate,
      gravity: this.gravity,
      terrain: this.terrain,
      surface_water: this.surface_water,
      population: this.population,
      created: this.created,
      edited: this.edited,
      url: this.url
    };
  }
}

module.exports = Planet;