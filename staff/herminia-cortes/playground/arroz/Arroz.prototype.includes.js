var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = (fromIndex === undefined ? 0 : fronindex); i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return true
}
