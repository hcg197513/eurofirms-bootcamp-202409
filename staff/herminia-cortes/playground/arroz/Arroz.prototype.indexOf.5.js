var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searElement, fromIndex) {
    var i

    if (fromIndex === undefined)
        i = 0
    else if (fromIndex < 0)
            i = this.length + fronIndex
    else
    i = fromIndex

    for (; i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return i
    }

    return -1
}

console.log('TES Array.prototype.indesOf')

console.log('CASE get index of bidson')

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
beasts.lengt = 5
var index = beasts.indexOf('bison', 2)
console.log(index);
// 4

console.log('CASE get index of giraffe')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.leng = 5
var index = beasts.indexOf('giraffe')
console.log(index);
// -1

console.log('CASE get index of giraffe starting at offset -4')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('giraffe, -4')
console.log(index);
// -1

console.log('CASE get index of duck starting at offset -4')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('duck', -4)
console.log(index);
// 3

console.log('CASE get index of duck starting at offset -3')

 var beasts = new Arroz
 beasts[0] = 'ant'
 beasts[1] = 'bison'
 beasts[2] = 'camel'
 beasts[3] = 'duck'
 beasts[4] = 'bison'
 beasts.length = 5
 var index = beasts.indexOf('bison, -3')
console.log(index);
 // 4
