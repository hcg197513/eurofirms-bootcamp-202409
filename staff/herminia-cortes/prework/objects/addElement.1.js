/*
     añadir multiples ele,elementos
*/

function addElement(object) {
    // buscar la ultima posicion -> numbers[2] <- para añadir a partir de ella  (el primer elemento añadido estara en numbers[3])
    // añadir los elementos que estan ene el objeto arguments
    //recorriendo el objeto arguments añado tantos elementos cuantos haya en el eobjeto arguments
    // cantidad de elementos a añadir es arguments.length -1
    for (var i = 1; i < argument.length; i ++) {
        //saco el parametro exacto
        var element = arguments[i]
        //introducto el parametro exacro -> element <- ene ele objeto
        object[object.length] = element
        //incrementar la longitud -> object.length<-
        object.length++
    }

}

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    lenght: 3
}

console.log('CASO 1 -> añadir 3 y 4 a numbers')

addElements(numbers, 3, 4)

console.log('resultado esperado -> { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, length: 5}',numbers)
