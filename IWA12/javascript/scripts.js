const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
const book1 = document.querySelector("#book1")
let status1 = book1.querySelector(".status")
let reserve1 = book1.querySelector(".reserve")
let checkout1 = book1.querySelector(".checkout")
let checkin1 = book1.querySelector(".checkin")


const book2 = document.querySelector("#book2")
let status2 = book2.querySelector(".status")
let reserve2 = book2.querySelector(".reserve")
let checkout2 = book2.querySelector(".checkout")
let checkin2 = book2.querySelector(".checkin")
// checkin2.style.color = ""

const book3 = document.querySelector("#book3")
let status3 = book3.querySelector(".status")
let reserve3 = book3.querySelector(".reserve")
let checkout3 = book3.querySelector(".checkout")
let checkin3 = book3.querySelector(".checkin")



checkin1.style.color = ""
status1.style.color = STATUS_MAP.overdue.color
reserve1.disabled = !STATUS_MAP.overdue.canReserve
checkout1.disabled = !STATUS_MAP.overdue.canCheckout
checkin1 = !STATUS_MAP.overdue.canCheckIn



checkin2.style.color = ""
status2.style.color = STATUS_MAP.reserved.color
reserve2.disabled = !STATUS_MAP.reserved.canReserve
checkout2.disabled = !STATUS_MAP.reserved.canCheckout
checkin2.disabled = !STATUS_MAP.reserved.canCheckIn 


checkin3.style.color = ""
status3.style.color = STATUS_MAP.shelf.color
reserve3.disabled = !STATUS_MAP.shelf.canReserve
checkout3.disabled = !STATUS_MAP.shelf.canCheckout
checkin3.disabled = !STATUS_MAP.shelf.canCheckIn
