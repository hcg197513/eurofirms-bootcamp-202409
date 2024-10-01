/*
function array.pus()
añade en la ultima posicion del array un elento

*/
function addElement(object, element) {
    //nuestra funcion añadirá dentro del objeto -> object <- en la ultima posicion -> object.length <- el elemento -> element <-
    object[object.length]= element
    //incrementar la longitud -> object.length <- en 1
object.leng++
}
var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}

console.log('PRUEBA 1 : añadir el numero 3 a numbers')

addElement(numbers, 3)

console.log('numbers', numbers)

console.log('resultado esperado -> { '0: 0, 1: 1, 2: 2, 3: 3, length: 4})

addElement(numbers, 100)

console.log('numbers', numbers)


