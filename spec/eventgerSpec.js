describe('Eventger', function() {
  var event

  testWill('check that an event has a description', function() {
     event = new Event("Subomi's fantastic jamboree", "22/01/2019")
    expect(event.desc).toBeEqualTo("Subomi's fantastic jamboree")
  })

  testWill('check that an event has a date', function() {
    event = new Event("Subomi's fantastic jamboree", "22/01/2019")
    expect(event.date).toBeEqualTo('22/01/2019')
  })

  testWill('check that an event has a time', function() {
    event = new Event("Subomi's fantastic jamboree", "22/01/2019", "18:45")
    expect(event.time).toBeEqualTo('18:45')
  })
})
