const request = require('supertest');
const app = require('../src/server');

describe('Planets API', () => {
  describe('GET /api/planets', () => {
    it('should return a list of planets with pagination', async () => {
      const response = await request(app)
        .get('/api/planets?page=1&limit=2')
        .expect(200);
      
      expect(response.body.message).toBe('ok');
      expect(response.body.results).toHaveLength(2);
      expect(response.body.total_records).toBeGreaterThan(0);
      expect(response.body).toHaveProperty('total_pages');
    });
    
    it('should handle invalid pagination parameters', async () => {
      const response = await request(app)
        .get('/api/planets?page=0&limit=101')
        .expect(400);
      
      expect(response.body.message).toContain('Invalid pagination parameters');
    });
  });
  
  describe('GET /api/planets/:id', () => {
    it('should return a specific planet', async () => {
      const response = await request(app)
        .get('/api/planets/1')
        .expect(200);
      
      expect(response.body.message).toBe('ok');
      expect(response.body.result.properties.name).toBe('Tatooine');
      expect(response.body.result.properties.uid).toBe('1');
    });
    
    it('should return 404 for non-existent planet', async () => {
      const response = await request(app)
        .get('/api/planets/999')
        .expect(404);
      
      expect(response.body.message).toBe('Planet not found');
    });
  });
  
  describe('POST /api/planets', () => {
    it('should create a new planet', async () => {
      const newPlanet = {
        name: 'Test Planet',
        climate: 'temperate',
        terrain: 'forests',
        population: '1000000'
      };
      
      const response = await request(app)
        .post('/api/planets')
        .send(newPlanet)
        .expect(201);
      
      expect(response.body.message).toBe('Planet created successfully');
      expect(response.body.result.name).toBe('Test Planet');
      expect(response.body.result.uid).toBeDefined();
    });
    
    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/planets')
        .send({})
        .expect(400);
      
      expect(response.body.message).toBe('Validation failed');
      expect(response.body.errors).toBeDefined();
    });
  });
  
  describe('PUT /api/planets/:id', () => {
    it('should update an existing planet', async () => {
      const updateData = {
        name: 'Updated Tatooine',
        climate: 'very arid'
      };
      
      const response = await request(app)
        .put('/api/planets/1')
        .send(updateData)
        .expect(200);
      
      expect(response.body.message).toBe('Planet updated successfully');
      expect(response.body.result.name).toBe('Updated Tatooine');
      expect(response.body.result.climate).toBe('very arid');
    });
    
    it('should return 404 for non-existent planet', async () => {
      const response = await request(app)
        .put('/api/planets/999')
        .send({ name: 'Test' })
        .expect(404);
      
      expect(response.body.message).toBe('Planet not found');
    });
  });
  
  describe('DELETE /api/planets/:id', () => {
    it('should return 404 for non-existent planet', async () => {
      const response = await request(app)
        .delete('/api/planets/999')
        .expect(404);
      
      expect(response.body.message).toBe('Planet not found');
    });
  });
});