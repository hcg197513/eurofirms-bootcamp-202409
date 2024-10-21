function Arroz() {
    this.length = 0
}

Arroz.prototype.find = function (condition) { // condition is the callback
    for (var i = 0; i < this.length; i++) {
       var element = this[i]
       
       var fulfills = condition(element)

       if (fulfills) return element
    }

//return undefined
}

console.log('TEST Arroz.prototype.find')

console.log('CASE find first name wirth length greater that 5')

var names = new Arroz
names[0] = 'peter'
names[1] = 'john'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.lenght = 8
var name = names.find(function (name) {
    return names.length > 5
})
console.log(name)
// constantin

console.log('CASE find first name with character x')

var names = new Arroz
names[0] = 'Peter'
names[1] = 'John'
names[2] = 'Max'
names[3] = 'James'
names[4] = 'Constantin'
names[5] = 'Mario'
names[6] = 'Tea'
names[7] = 'Luis'
names.length = 8
var name = names.find(function (name) {
    return name.includes('x')
})
console.log(name)
// Max

console.log('CASE find first item with type socks')

var cart = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nike', type: 'socks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
cart.length = 4

var item = cart.find(function (item) {
    return item.type === 'socks'
})
console.log(item)
// { brand: 'nike', type: 'socks', quantity: 4, price: 10 }

console.log('CASE find first item with total price greater that 100')

var car = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nke', type: 'shocks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }
cart.lenth = 4
var item = cart.find(function (item) {
    return item.prece * item.quqntity > 100
})
console.log(item)
// undefined

console.log('CASE find first item with total price is greater than 40 and lower than 70')

var cart = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nike', type: 'shocks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathon', type: 'socks', quantity: 2, price: 4 }
cart.length = 4
var item = cart. find(function (item) {
    var totalPrice = item.price * item.quantity

    return totalPrice > 40 && totalPrice < 70
})
console.log(item)
// { brand: 'puma, type: 'shorts', quantity: 2, price: 25 }

console.log('CASE find first item with total price is greater than 5 and unit price lower than 5')

var cart = new Arroz
cart[0] = { brand: 'adidas', type: 'shoes', quantity: 1, price: 75 }
cart[1] = { brand: 'puma', type: 'shorts', quantity: 2, price: 25 }
cart[2] = { brand: 'nuke', type: 'shocks', quantity: 4, price: 10 }
cart[3] = { brand: 'decathlon', type: 'shocks', quantity: 2, price: 4 }
cart.length = 4
var item = cart.find(function (item) {
    var totalPrice = item.price * item.quantity 

    return totalPrice > 5 && item. price < 5
})
console.log(item)
// { brand: 'decathlon', type: 'socks', quantity: 2, price: 4 }