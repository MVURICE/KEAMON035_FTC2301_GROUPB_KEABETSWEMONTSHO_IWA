const rent = 400;
let tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line
tax = parseInt(tax);

if (hourOfDay !== null && minuteOfDay !== null){
    if (hourOfDay === 0 && minuteOfDay === 0) {
        const taxAsDecimal = tax / 100
        const startingAfterTax = salary * (1 - taxAsDecimal)
        const balance = startingAfterTax - transport - food - rent
        console.log(balance.toFixed(2))
    }
    
}

	
// console.log(balance.toFixed(2))
// console.log(salary)