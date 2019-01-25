let eventList = new EventList()

function listEvent() {
  let newEvent = document.getElementById("desc_id")
  let newDate = document.getElementById("date_id")
  // let newTime = document.getElementById("time_id")
  let send = document.getElementById("button")
  // let eventHistory = document.getElementById("eventHistory")
  send.onclick = function() {
    let event = new Event(newEvent.value, newDate.value)
    eventList.storeEvent(event)
    newEvent.value = ""
    newDate.value = ""

    // console.log(eventList.upcomingEvents())
    display()
  }
    // let displayEvent = document.createElement("ol")
    // displayEvent.innerHTML = event.desc + " - " + event.date //+ " - " + event.time
    // eventHistory.prepend(displayEvent)
    // eventList.displayEvent()

  function display() {
    let eventsDiv = document.getElementById("eventHistory")
    listOfEvents = eventList.displayEvent()

    // eventsDiv.innerHTML = ''
    eventsDiv.appendChild(listOfEvents)
  }
}
document.onload = listEvent()
document.onload = eventList

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails)
