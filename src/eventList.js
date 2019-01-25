class EventList {
  constructor() {
    this.entries = []
  }
  storeEvent(event) {
    this.entries.push(event)
    // console.log(event);
  }

  upcomingEvents() {
    let upcoming = []

    this.entries.forEach(function(event) {
      if (new Date(event.date) >= new Date()) {
        // console.log(event.date)
        // console.log(event);
      upcoming.push(event)
      }
    })
    return upcoming
  }

  sortedEvents() {

  }

  displayEvent() {
    // let eventHistory = document.getElementById("eventHistory")
    let div = document.createElement('div')
    // ol.innerHTML = event.desc + " - " + event.date
    this.upcomingEvents().forEach(function(event) {
      let eventElements = event.displayAnEvent()
      div.appendChild(eventElements)
    })
    return div
  }
}
