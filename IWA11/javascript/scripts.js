

let root1 = document.querySelector('[data-key="order1"]')
let biscuits1 = root1.querySelector('.biscuits .count')
let donuts1 = root1.querySelector('.donuts .count')
let pancakes1 = root1.querySelector('.pancakes .count')
let status1 = root1.querySelector('.status dd')


let root2 = document.querySelector('[data-key="order2"]')
let biscuits2 = root2.querySelector('.biscuits .count')
let donuts2 = root2.querySelector('.donuts .count')
let pancakes2 = root2.querySelector('.pancakes .count')
let status2 = root2.querySelector('.status dd')

let root3 = document.querySelector('[data-key="order3"]')
let biscuits3 = root3.querySelector('.biscuits .count')
let donuts3 = root3.querySelector('.donuts .count')
let pancakes3 = root3.querySelector('.pancakes .count')
let status3 = root3.querySelector('.status dd')

// order1
biscuits1.textContent= root1.dataset.biscuits,
donuts1.textContent = root1.dataset.donuts
pancakes1.textContent = root1.dataset.pancakes
status1.textContent = root1.dataset.delivered === "true" ? 'Delivered' : 'Pending'


// order2
biscuits2.textContent = root2.dataset.biscuits,
donuts2.textContent = root2.dataset.donuts
pancakes2.textContent = root2.dataset.pancakes,
status2.textContent = root2.dataset.delivered === "true" ? 'Delivered' : 'Pending'


// order3
biscuits3.textContent = root3.dataset.biscuits
donuts3.textContent = root3.dataset.donuts
pancakes3.textContent = root3.dataset.pancakes
status3.textContent = root3.dataset.delivered === "true" ? 'Delivered' : 'Pending'
