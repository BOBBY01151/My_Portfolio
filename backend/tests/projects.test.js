const request = require('supertest');
const app = require('../src/app');

describe('Project Routes', () => {
  describe('GET /api/projects', () => {
    it('should return projects list', async () => {
      const res = await request(app)
        .get('/api/projects');
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('should return only finished projects when finished=true', async () => {
      const res = await request(app)
        .get('/api/projects?finished=true');
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('GET /api/projects/featured', () => {
    it('should return featured projects', async () => {
      const res = await request(app)
        .get('/api/projects/featured');
      
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  describe('POST /api/projects', () => {
    it('should return 401 without authentication', async () => {
      const res = await request(app)
        .post('/api/projects')
        .send({
          title: 'Test Project',
          description: 'Test Description',
          shortDescription: 'Short desc',
          image: 'https://example.com/image.jpg'
        });
      
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
