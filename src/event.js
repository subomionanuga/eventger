class Event {
  constructor(desc, date) {
    this.desc = desc
    this.date = date
  }

  displayAnEvent() {
    let div = document.createElement('div')
    div.innerText = this.desc + " - " + this.date
    return div
  }
}
