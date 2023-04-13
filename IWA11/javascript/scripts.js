

let root1 = document.querySelector('[data-key="order1"]')
let biscuits1 = document.querySelector('[data-biscuits="10"]')
let donuts1 = document.querySelector('[data-donuts="13"]')
let pancakes1 = document.querySelector('[ data-pancakes="0"]')
let status1 = document.querySelector('[data-delivered="false"]')

let root2 = document.querySelector('[data-key="order2"]')
let biscuits2 = document.querySelector('[data-biscuits="5"]')
let donuts2 = document.querySelector('[data-donuts="0"]')
let pancakes2 = document.querySelector('[data-pancakes="2"]')
let status2 = document.querySelector('[ data-delivered="false"]')

let root3 = document.querySelector('[data-key="order3"]')
let biscuits3 = document.querySelector('[data-biscuits="12"]')
let donuts3 = document.querySelector('[data-donuts="11"]')
let pancakes3 = document.querySelector('[data-pancakes="15"]')
let status3 = document.querySelector('[data-delivered="true"]')

biscuits1= root1.dataset.biscuits,
donuts1 = root1.dataset.donuts
pancakes1 = root1.dataset.pancakes
status1 = root1.dataset.delivered === "true" ? 'Delivered' : 'Pending'

console.log(status1)


biscuits2 = root2.dataset.biscuits,
donuts2 = root2.dataset.donuts
pancakes2 = root2.dataset.pancakes,
status2 = root2.dataset.delivered === "true" ? 'Delivered' : 'Pending'
console.log(status2)

biscuits3 = root3.dataset.biscuits
donuts3 = root3.dataset.donuts
pancakes3 = root3.dataset.pancakes
status3 = root3.dataset.delivered === "true" ? 'Delivered' : 'Pending'
console.log(status3)


let orders = document.getElementsByClassName("count")
let orderStatus = document.getElementsByTagName("dd")


// first order
orders[0].textContent = biscuits1
orders[1].textContent = donuts1
orders[2].textContent = pancakes1
orderStatus[3].textContent = status1



//second order
orders[3].textContent = biscuits2
orders[4].textContent = donuts2
orders[5].textContent = pancakes2
orderStatus[7].textContent = status2


// Third order
orders[6].textContent = biscuits3
orders[7].textContent = donuts3
orders[8].textContent = pancakes3
orderStatus[11].textContent = status3



