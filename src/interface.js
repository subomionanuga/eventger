var eventList = new EventList()

function listEvent() {
  var newEvent = document.getElementById("desc_id")
  var newDate = document.getElementById("date_id")
  var newTime = document.getElementById("time_id")
  var send = document.getElementById("button")
  var eventHistory = document.getElementById("eventHistory")
  send.onclick = function() {
    var event = new Event(newEvent.value, newDate.value,newTime.value)

    eventList.storeEvent(event)
    var displayEvent = document.createElement("ol")
    displayEvent.innerHTML = event.desc + " - " + event.date + " - " + event.time
    eventHistory.prepend(displayEvent)
    newEvent.value = ""
  }
}
document.onload = eventList
document.onload = listEvent()
