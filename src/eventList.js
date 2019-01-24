class EventList {
  constructor() {
    this.entries = []
  }
  storeEvent(event) {
    this.entries.push(event)
  }

  upcomingEvents() {
    var upcoming = []

    this.entries.forEach(function(event) {
      var date = new Date().toLocaleDateString()
      if (event.date > date) {
      upcoming.push(event)
      }
    })
    return upcoming
  }

  displayEvent() {
    // var eventHistory = document.getElementById("eventHistory")
    var div = document.createElement('div')
    // ol.innerHTML = event.desc + " - " + event.date
    this.upcomingEvents().forEach(function(event) {
      var eventElements = event.displayAnEvent()
      console.log("Display event called")
      div.appendChild(eventElements)
    })
    return div
  }
}
