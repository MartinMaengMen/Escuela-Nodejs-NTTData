"use strict";
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
exports.__esModule = true;
/*TRABAJO EN CLASE
- HU: Yo como usuario deseo emitir eventos en cargas de datos con BRASIL
    CA:
        * Se debe emitir un evento cuando se tenga una respuesta de las api. ej. ('Se cargo la data: <NombrePais>')
        * Se debe emitir eventos de falla cuando no se encuentre el vecino del pais (ocasionar el error en el 2do vecino)
        * */
var events_1 = require("events");
var searchByCodeCountry = function (alpha3Code) { return __awaiter(void 0, void 0, void 0, function () {
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
var eventoRespuestaApi = function (eventEmitter, nombrePais) {
    eventEmitter.on('respuestaApi', function (pais) { return console.log("Se cargo la data: ".concat(pais)); });
    eventEmitter.emit('respuestaApi', nombrePais);
};
var eventoError = function (eventEmitter, paisesVecinos /*,paisBuscar*/) {
    eventEmitter.on('error', function (err) {
        var contador = err.length;
        //Buscador de vecinos
        /*const encontrado = err.filter(x => x==paisBuscar).length
        console.log(encontrado)*/
        if (contador < 2) {
            console.log(new Error('No se encontraron vecinos'));
        }
        else {
            console.log("Vecinos: " + err);
        }
    });
    eventEmitter.emit('error', paisesVecinos);
};
searchByCodeCountry('br').then(function (value) {
    var nombrePais = value[0].name.common;
    var eventEmitter = new events_1.EventEmitter();
    eventoRespuestaApi(eventEmitter, nombrePais);
    var paisesVecinos = value[0].borders;
    eventoError(eventEmitter, paisesVecinos /*,'CHL'*/);
});
