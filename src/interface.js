var eventList = new EventList()

function listEvent() {
  var newEvent = document.getElementById("desc_id")
  var newDate = document.getElementById("date_id")
  // var newTime = document.getElementById("time_id")
  var send = document.getElementById("button")
  // var eventHistory = document.getElementById("eventHistory")
  send.onclick = function() {
    var event = new Event(newEvent.value, newDate.value)
    console.log(newEvent.value, newDate.value)
    eventList.storeEvent(event)
    console.log('button clicked')
    display()
    console.log('display called in interface');
  }
    // var displayEvent = document.createElement("ol")
    // displayEvent.innerHTML = event.desc + " - " + event.date //+ " - " + event.time
    // eventHistory.prepend(displayEvent)
    // newEvent.value = ""
    // eventList.displayEvent()

  function display() {
    var eventsDiv = document.getElementById("eventHistory")
    listOfEvents = eventList.displayEvent()
    eventsDiv.innerHTML = ''
    eventsDiv.appendChild(listOfEvents)
  }
}
document.onload = listEvent()
document.onload = eventList
