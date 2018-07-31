const chai = require('chai')
const expect = chai.expect

const VerifyBookData = require('../app/VerifyBookData')

describe('Verify Book Data', () => {
  describe('Verify that data in object contains all keys a book should contain', () => {
    it('Should return true when a book containing the correct object keys is passed', () => {
      var isBook = VerifyBookData({
        id: 0,
        title: 0,
        author: 0,
        genre: 0,
        publishDate: 0,
        price: 0,
        description: 0
      })

      expect(isBook).to.deep.equal(true)
    })
  })
})