const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('should response the GET method', async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});