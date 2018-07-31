const chai = require('chai')
const expect = chai.expect

const BookDAO = require('../app/dao/BookDAO')

describe('BookDAO', () => {
  describe('Called without callback', () => {
    it('Should return an object', () => {
      var res = BookDAO(
        '1', 'TitleBook', 
        'Me', 'Pseudoscience', 
        'Yesterday', '999', 
        'Best book'
      )
    
      expect(res).to.be.an('object')
    })
  })

  describe('Called with callback', () => {
    it('Should pass an object to the callback', () => {
      BookDAO(
        '1', 'TitleBook', 
        'Me', 'Pseudoscience', 
        'Yesterday', '999', 
        'Best book', (res) => 
          expect(res).to.be.an('object')
        )
    })
  })
})
