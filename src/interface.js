function listEvent() {
  var newEvent = document.getElementById("desc_id");
  var newDate = document.getElementById("date_id");
  var send = document.getElementById("button");
  var eventHistory = document.getElementById("eventHistory");
  send.onclick = function() {
    var event = new Event(newEvent.value, newDate.value);
    var displayEvent = document.createElement("ol");
    displayEvent.innerHTML = event.desc + " - " + event.date
    eventHistory.prepend(displayEvent);
    newEvent.value = "";
  }
}
document.onload = listEvent()
