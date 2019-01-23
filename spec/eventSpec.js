describe('Event', function() {
  var event = new Event("Subomi's fantastic jamboree", "22/01/2019", '18:45')

  testWill('check that an event has a description', function() {
    expect(event.desc).toBeEqualTo("Subomi's fantastic jamboree")
  })

  testWill('check that an event has a date', function() {
    expect(event.date).toBeEqualTo('22/01/2019')
  })

  testWill('check that an event has a time', function() {
    expect(event.time).toBeEqualTo('18:45')
  })
})
