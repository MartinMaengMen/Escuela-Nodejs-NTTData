class rectangulo{
     base : number;
     altura : number;
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    Area(){
        return this.base*this.altura;
    }
}

var instanciaRectangulo : rectangulo = new rectangulo(4,2)
console.log("Area del rectangulo: "+instanciaRectangulo.Area())