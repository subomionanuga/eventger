describe('Event List', function() {
  var eventList = new EventList()
  var event = new Event("Subomi's fantastic jamboree", "2019-01-30T10:00")
  var pastEvent = new Event("Subomi's NEW YEAR'S jamboree", "2019-01-201T10:00")

  testWill('check that a new instance of event has an empty array', function() {
    expect(eventList.entries.length).toBeEqualTo(0)
  })

  testWill('check that events can be stored in EventList array', function() {
    eventList.storeEvent(event)
    expect(eventList.entries[0]).toBeEqualTo(event)
  })

  testWill('check that only upcoming events are displayed', function() {
    var upcomingEvents = eventList.upcomingEvents()
    eventList.storeEvent(pastEvent)
    eventList.storeEvent(event)
    expect(upcomingEvents[0]).toBeEqualTo(event)
  })

  testWill('check that events can be rendered on the page', function() {
    eventList.storeEvent(pastEvent)
    eventList.storeEvent(event)
      console.log(eventList.displayEvent())
    expect(eventList.displayEvent().childElementCount).toBeEqualTo(3)
  })
})
