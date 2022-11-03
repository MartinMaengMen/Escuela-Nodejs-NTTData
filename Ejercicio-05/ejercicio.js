var rectangulo = /** @class */ (function () {
    function rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    rectangulo.prototype.Area = function () {
        return this.base * this.altura;
    };
    return rectangulo;
}());
var instanciaRectangulo = new rectangulo(4, 2);
console.log("Area del rectangulo: " + instanciaRectangulo.Area());
