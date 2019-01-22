describe('Square', function() {
  var square
  var squareError
  // beforeEach(function() {
  //   square = new Square(5)
  // })

  testWill('check the length of one square side', function() {
    square = new Square(5)
    expect(square.size).toBeEqualTo(5)
  })

  testWill('check the area of the square', function() {
    square = new Square(5)
    expect(square.area()).toBeEqualTo(25)
  })


  testWill('check that size is an integer', function() {
    squareError = function() {
      square = new Square('a')
    }
     expect(squareError).toThrow('argument is not a number')
   })

   testWill('check that size is positive', function() {
     squareError = function() {
       square = new Square(-1)
     }
     expect(squareError).toThrow('size should be a positive number')
   })

})
