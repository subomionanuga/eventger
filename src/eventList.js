class EventList {
  constructor() {
    this.entries = []
    // this.upcoming = []
  }
  storeEvent(event) {
    this.entries.push(event)
  }

  upcomingEvents() {
    var upcoming = []

    this.entries.forEach(function(event) {
      var date = new Date().toLocaleDateString()

      console.log(event.date)
      // console.log(date)
      if (event.date > date) {
        // console.log('Hi')
      upcoming.push(event)
      // console.log(upcoming[0] + 'This is the expected return')
      }
    })
    return upcoming
  }
}
