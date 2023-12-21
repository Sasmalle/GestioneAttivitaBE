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
const RecensioniService_1 = __importDefault(require("../services/RecensioniService"));
const router = express_1.default.Router();
const recensioniService = new RecensioniService_1.default();
//API getRecensionixidUtente
router.get('/utenteId/:idUtente', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recensione = yield recensioniService.getRecensioniByIdUtente(parseInt(req.params.idUtente)); // Usa la logica del servizio
        res.json(recensione);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
//API getRecensionixidEvento
router.get('/eventoId/:idEvento', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const recensione = yield recensioniService.getRecensioniByIdEvento(parseInt(req.params.idEvento)); // Usa la logica del servizio
        res.json(recensione);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
//API postRecensione
// router.post('/', async (req, res) => {
//   try {
//     const userId: number = req.user.id; //da capire come gestire in automatico l'id delllo user che fa la recensione
//     const nuovaRecensione = await recensioniService.postRecensione(req.body);
//     res.status(201).json(nuovaRecensione);
//   } catch (error) {
//     res.status(500).json({ error: 'Errore interno del server' });
//   }
// });
exports.default = router;
