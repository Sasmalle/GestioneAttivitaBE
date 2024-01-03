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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RecensioniDAO_1 = __importDefault(require("../repositories/RecensioniDAO"));
const recensioniDAO = new RecensioniDAO_1.default();
class RecensioniService {
    getRecensioniByIdUtente(utenteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return recensioniDAO.getRecensioniByIdUtente(utenteId);
        });
    }
    getRecensioniByIdEvento(eventoId) {
        return __awaiter(this, void 0, void 0, function* () {
            return recensioniDAO.getRecensioniByIdEvento(eventoId);
        });
    }
    // async postRecensione(redensioniData:any) {
    //     return recensioniDAO.postRecensione(redensioniData);
    //   }
    getRecensioniByvalutazione(valutazione) {
        return __awaiter(this, void 0, void 0, function* () {
            return recensioniDAO.getRecensioniByvalutazione(valutazione);
        });
    }
}
exports.default = RecensioniService;
