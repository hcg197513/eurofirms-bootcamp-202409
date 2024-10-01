/*
    array.pop()
    quita el ultimo elemento en ela ultima posición

*/
function removeLasElement(object) {
    //quitamos dentro del objeto -> object <- el objeto situado en la última posición -> object.length <- 
    delete object[ object.length - 1]
    //decrementtar la longitud -> object.length <- en 1 
    object.length--
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

var fruit = {
    0: 'apple',
    1: 'watermelon',
    length: 2
}

var fridge = {
    0: 'meat',
    1:'salad',
    2: 'wine',
    3: 'burrito',
    3: 'spagetti',
    5: 'fruit',
    6: 'fish',
    7: 'beer',
    8: 'water',
    9: 'pizza',
    length: 10
}

console.log('PRUEBA 1 : quitar el último elemento de numbers')

removeLastElement(numbers)

console.log('numbers', numbers)

console.log('Resultado esperado: { 0:0 ,1:1, length: 2}')

removeLastElement(fridge)

console.log.log('fridge', fridge)
 
console.log('Resultado esperado: { 0: "meat  , 1: "salad" , 2: "wine", 3: "burrito", 4: "spaguetti" ,5: { 0: apple, 1: watermelon ,length: 2}, 6: "finish", 7: "beer", 8: "water, length, 9 }')

// var numbers = {
//     0: 0,
//     1: 1,
//
//     length: 2
// }

// var fridge = {
//     0: 'meat',
//     1: 'salad',
//     2: 'wine',
//     3: 'burrito',
//     4: 'spagetti',
//     5: 'fruit',
//     6: 'fish',
//     7: 'beer',
//     8: 'water',
//
//     length: 9
// }


















