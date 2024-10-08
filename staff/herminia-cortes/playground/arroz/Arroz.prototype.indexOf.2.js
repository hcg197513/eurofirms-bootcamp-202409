var Arroz = function () { this.length =  0 }

Arroz.prototype.indexOf = function (searchElement, fomIndex) {
    if (fomIndex === undefined) {
        /*
        buscar searchElement en Arroz
        iterar element por element hasta encontrar el searchElement
        si lo encontrams, entonces devolvemos la posicion de ese element (p sea, el index)
        y si no, devolvemos -1
        */
       
        for (var i = 0; i < this.length; i ++) {
            var element = this[i]

            if(element === searchElement) return i
        }

        return -1
    } else {
        for (var i = fromIndex; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return i
        }

        return -1
    }
}

console.log('TEST Array.prototype.indexOf')

console.log('CASE get index of bison')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison')
console.log(index);
// 1

console.log('CASE get index of bison starting at index 2')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts .indexOf('bison', 2)
console.log(index);
// 4

console.log('CASE get index of girafffe')

beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('giraffe')
console.log(index);
// -1

