class EventList {
  constructor() {
    this.entries = []
  }
  storeEvent(event) {
    this.entries.push(event)
    // console.log(event);
  }

  upcomingEvents() {
    var upcoming = []

    this.entries.forEach(function(event) {
      if (new Date(event.date) >= new Date()) {
        console.log(event);
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
      div.appendChild(eventElements)
    })
    return div
  }
}
