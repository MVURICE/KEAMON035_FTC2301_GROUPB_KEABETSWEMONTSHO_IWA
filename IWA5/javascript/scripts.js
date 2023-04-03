const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

let customers = 1
let location = 'RSA'
let currency = null

let shipping = null


if (location === 'RSA') { 
    shipping = 400 
    currency = 'R' 
}else if (location === 'NAM'){
    shipping = 600
    currency = '$'
}else {
    shipping = 800  
}

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED 

let totalAmount = shoes + toys + shirts + batteries + pens

shipping = 400
currency = '$'

if (totalAmount >= 1000 && location === 'RSA'  ) {
    shipping = 0
}
if (totalAmount >= 60 && location === 'NAM'  ) {
    shipping = 0
	
}

if (shipping === 0 && customers !== 1) { console.log(FREE_WARNING) }

if (location === 'NK'){
    console.log(BANNED_WARNING)
}else{
    console.log('price', currency, totalAmount + shipping)

}
