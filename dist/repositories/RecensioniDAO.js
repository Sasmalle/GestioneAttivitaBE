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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../db");
class RecensioniDAO {
    getRecensioniByIdUtente(utenteId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield db_1.clientDB.from('Recensioni').select('*').eq('id_utente', utenteId);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        });
    }
    getRecensioniByIdEvento(eventoId) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data, error } = yield db_1.clientDB.from('Recensioni').select('*').eq('id_evento', eventoId);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        });
    }
    // async postRecensione (redensioniData: Recensioni){
    //     const { valutazione,  testoRecensione, id_utente, id_evento} = redensioniData;
    //     // Esegui l'operazione di inserimento (create) utilizzando il metodo insert di SupabaseClient
    //     const { data, error } = await clientDB.from('Recensioni').insert([{ valutazione,testoRecensione, id_utente, id_evento}]);
    //     if (error) {
    //       throw new Error(error.message);
    //     }
    //     return data;
    //   }
    getRecensioniByvalutazione(valutazione) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(valutazione);
            const { data, error } = yield db_1.clientDB.from('Recensioni').select('*').eq('valutazione', valutazione);
            if (error) {
                throw new Error(error.message);
            }
            console.log(data);
            return data;
        });
    }
}
exports.default = RecensioniDAO;
