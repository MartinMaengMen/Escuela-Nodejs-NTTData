var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/*- HU: Yo siendo usuario deseo buscar el pais segun lo que se ingrese
  ---*/
var searchByCodeCountry = function (alpha3Code) { return __awaiter(_this, void 0, void 0, function () {
    var res, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch("https://restcountries.com/v3.1/alpha/".concat(alpha3Code))];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _a.sent();
                return [2 /*return*/, data];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
/*
  ---
    CA: * Se debe usar la function searchByCodeCountry para realizar una busqueda de paises (codigo abreviado: col,pe,at)
        * Se debe mostrar en la consola el nombre del país, nombre y simbolo de moneda y el idioma del país.
        * Se debe mostrar el nombre de los pais vecinos (propiedad borders del response), usando la funcion searchByCodeCountry.
- HU: Yo siendo usuario requiero hornear una pizza congelada. Cada actividad se debe realizar mediantes funciones flecha.
    CA: * Primero se debe precalentar el horno durante 5 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Horno Calentado!')
        * Mientras se precalienta el horno, sacas la pizza y abres la caja y la pones en el sarten de pizzas (duración de actividad 3seg).
        * Como el horno aun sigue caliente, te tomas un refresco.
        * Con el Horno precalentado. Se procede a meter la pizza al horno y calentarla por 10 segundos. Al terminar debe sonar la alerta del horno (ej. 'Bep Bep Beeep! Pizza lista!')
        * Mientras la pizza se calienta, miras la TV.*/
//1
/*searchByCodeCountry('pe').then(value=>{
    const nombrePais = value[0].name.common;
    const moneda = value[0].currencies;
    const idioma = value[0].languages;
    const paisesVecinos = value[0].borders;
    console.log('Nombre del País: '+nombrePais)
    console.log(moneda)
    console.log(idioma)
    console.log(paisesVecinos)
});*/
//2
var prepararPizza = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        abrirCajaPizza();
        setTimeout(function () {
            tomarRefresco();
            console.log('Bep Bep Beeep! Horno Calentado!');
            meterPizza();
        }, 5000);
        return [2 /*return*/];
    });
}); };
var abrirCajaPizza = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setTimeout(function () { return console.log('Pizza colocada en la sartén'); }, 3000);
        return [2 /*return*/];
    });
}); };
var tomarRefresco = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Tomando refresco ....');
        return [2 /*return*/];
    });
}); };
var meterPizza = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        mirarTV();
        setTimeout(function () { return console.log('Bep Bep Beeep! Pizza lista!'); }, 10000);
        return [2 /*return*/];
    });
}); };
var mirarTV = function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log('Mirando TV ...');
        return [2 /*return*/];
    });
}); };
prepararPizza();
