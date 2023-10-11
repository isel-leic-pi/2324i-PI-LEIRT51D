import assert from 'node:assert/strict'

import { validateProperty } from '../ex1.mjs' 


describe('Ex1 module tests', function () {
  // Arrange
  const validator = {name : "p1" , validators: [s => typeof s == 'string' && s.length > 2, s => s[0]=="a"]  }
  const obj1 = { p1 : "abc" }
  const obj2 = { p2 : 123 }

  describe('#validateProperties tests', function () {
    it('should map no properties if validator defines a non existing property', function () {
      // Arrange
  
      // Act 
      const valid = validateProperty(obj2, validator)

      // Assert
      assert.equal(valid, false, "Objects are not equal")
    })
    it('should return true if validator defines an existing property and all validators succeed', function () {
      // Arrange

      // Act 
      const valid = validateProperty(obj1, validator)

      // Assert
      assert.ok(valid, "Objects are not equal")
    })



  })

})

