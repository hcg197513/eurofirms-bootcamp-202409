var Arroz=function() {
    this.length= 0
    
}

Arroz.prototype.pop=function() {
    var last=this[this.length -1]
    delete this[this.length -1]
    this.length--
    return last
}
 
var animales= new Arroz 
animales[0]="perro"
animales[1]="gato"
animales[2]="caballo"
animales[3]="cabra"

animales.length=4

var deleteElement = animales.pop()
console.log(deleteElement)
console.log(animales)
