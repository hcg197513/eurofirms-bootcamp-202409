console.log('TEST rray, prototype.pop')

console.log('CASE extract tomato from plants')

var plants = ['brocoli', 'cauliflower', 'cabbage', 'kale', 'toamato']
var plant = plants.pop()
console.log(plants)
// ['brocoli', 'cauliflower', 'cabbage', kale]
console.log(plant)
//tomato  

console.log('CASE extrac last item from cart')

var socks = { brand: 'Adidas', size: 'L', price: 10 }
var tshirt = { brand: 'Nike', size: 'L', price: 20 }
var shoes = { brand: 'Puma', size: 44, price: 50 }
var cart = [socks, tshirt, shoes ]
var extracted = car.pop()
console.log(cart)
/*
[
    { brand: 'Adidas', size: 10 },
    { brand: 'Nike'}, size: 'L', price: 20 }
]
*/
console.log(extracted)
// { brand: 'Puma', size: 44, price: 50 }
