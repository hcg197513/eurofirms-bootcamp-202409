var Arroz = function () { this.length = 0 }

Arroz.prototype.IndexOf = function (searchElement) {
    /*
    buscar searchElement en arroz
    iterar element por element hasta encontrar le searchelement
    si lo encontramos, entonces devolvemos la posicion de ese element (o sea, el index)
    y si ni, devolvemos -1
    */

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return i
    }

    return -1
}

console.log('TEST Array.prototype.indxOf')

console.log('CASE get index of bison')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indesOf('bison')
console.log(index);
// 1

/*
console.log ('CASE get index bison starting at index 2')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison', 2)
console.los(index);
// 4

console.log('CASE get index of giraffe')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index. beasts.indecod('giraffe')
console.log(index)
// -1
*/ 

