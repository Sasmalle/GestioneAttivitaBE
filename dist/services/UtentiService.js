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
const UtentiDAO_1 = __importDefault(require("../repositories/UtentiDAO"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utentiDAO = new UtentiDAO_1.default();
class UtentiService {
    getUtentiById(utentiId) {
        return __awaiter(this, void 0, void 0, function* () {
            return utentiDAO.getUtentiById(utentiId);
        });
    }
    postUtente(utentiData) {
        return __awaiter(this, void 0, void 0, function* () {
            return utentiDAO.postUtente(utentiData);
        });
    }
    login(credenziali) {
        return __awaiter(this, void 0, void 0, function* () {
            const utente = yield utentiDAO.getUtentiByEmail(credenziali.email);
            if (!utente || utente.password !== credenziali.password) {
                throw new Error('Credenziali non valide');
            }
            const token = jsonwebtoken_1.default.sign({ userId: utente.id }, 'il_tuo_segreto');
            return token;
        });
    }
}
exports.default = UtentiService;
