const request = require('supertest');
const express = require('express');
const app = express();
app.get('/movies', (req, res) => res.json([{ id: 1, title: 'Test Movie' }]));
describe('Movies API', () => {
  test('GET /movies returns array', async () => {
    const response = await request(app).get('/movies');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body[0]).toHaveProperty('title');
  });
});
