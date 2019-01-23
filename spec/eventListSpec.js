describe('Event List', function() {
  var eventList = new EventList()
  var event = new Event("Subomi's fantastic jamboree", "24/01/2019", '18:45')

  testWill('check that a new instance of event has an empty array', function() {
    expect(eventList.entries.length).toBeEqualTo(0)
  })

  testWill('check that events can be stored in EventList array', function() {
    eventList.storeEvent(event)
    expect(eventList.entries[0]).toBeEqualTo(event)
  })

  testWill('check that only upcoming events are displayed', function() {
    var pastEvent = new Event("Subomi's NEW YEAR'S jamboree", "01/01/2019", '18:45')
    eventList.storeEvent(pastEvent)
    eventList.storeEvent(event)
    expect(eventList.upcomingEvents()).toBeEqualTo(event)
  })
})
