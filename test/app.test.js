const request = require('supertest');
const http = require('http');
const app = require('../app'); // Adjust path if necessary

describe('GET /', () => {
    let server;

    beforeAll(() => {
        server = http.createServer(app);
        server.listen(); // Start the server
    });

    afterAll(() => {
        server.close(); // Stop the server after tests
    });

    it('should return Hello, World!', async () => {
        const response = await request(server).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});
