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
const express_1 = __importDefault(require("express"));
// Importa la logica del servizio
const UtentiService_1 = __importDefault(require("../services/UtentiService"));
const router = express_1.default.Router();
const utentiService = new UtentiService_1.default();
//API getUtentixId
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const utente = yield utentiService.getUtentiById(parseInt(req.params.id)); // Usa la logica del servizio
        res.json(utente);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
//API postUtente
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuovoUtente = yield utentiService.postUtente(req.body); // Crea un nuovo utente usando il corpo della richiesta
        res.status(201).json(nuovoUtente);
    }
    catch (error) {
        res.status(500).json({ error: 'Errore interno del server' });
    }
}));
exports.default = router;
