const supertest = require('supertest')

const app = require('../app')

describe('Get Books Resource', () => {
  describe('GET /api/books', () => {
    it('Should return a list of books', (done) => {
      supertest(app)
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect(200, done)
    })

    it('Should give us JSON output', (done) => {
      supertest(app)
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/, done)
    })

    it('Has entries as books', (done) => {
      supertest(app)
        .get('/api/books')
        .set('Accept', 'application/json')
        .expect(result => {
          if(result.body.length === 0) throw new Error('No books in library?')
        })
        .end(done)
    })
  })
})