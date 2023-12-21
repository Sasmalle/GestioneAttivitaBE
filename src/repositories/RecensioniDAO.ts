import { Recensioni } from "../entities/Recensioni.entity";
import { clientDB } from "../db";

class RecensioniDAO{
    async getRecensioniByIdUtente(utenteId:Recensioni["id_utente"]): Promise<Recensioni|null[]>{
        const { data, error }= await clientDB.from('Recensioni').select('*').eq('id_utente', utenteId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }

    async getRecensioniByIdEvento(eventoId:Recensioni["id_evento"]): Promise<Recensioni|null[]>{
        const { data, error }= await clientDB.from('Recensioni').select('*').eq('id_evento', eventoId);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }

    async postRecensione (redensioniData: Recensioni){
        const { valutazione,  testoRecensione, id_utente, id_evento} = redensioniData;
        // Esegui l'operazione di inserimento (create) utilizzando il metodo insert di SupabaseClient
        const { data, error } = await clientDB.from('Recensioni').insert([{ valutazione,testoRecensione, id_utente, id_evento}]);
        
        if (error) {
          throw new Error(error.message);
        }
        return data;
      }
}

export default RecensioniDAO;