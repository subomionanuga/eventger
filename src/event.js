class Event {
  constructor(desc, date) {
    this.desc = desc
    this.date = date
  }

  displayAnEvent() {
    var div = document.createElement('div')
    div.innerText = this.desc + " - " + this.date
    console.log('Display An Event called in Event')
    return div
  }
}
