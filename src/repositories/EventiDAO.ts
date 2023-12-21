import { Eventi } from "../entities/Eventi.entity";
import { clientDB } from "../db";

class EventiDAO{
    async getEventiById(eventiId:Eventi["id"]): Promise<Eventi|null[]>{
        const { data, error }= await clientDB.from('Eventi').select('*').eq('id', eventiId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async postEvento(eventiData: Eventi){
    const {titolo, descrizione, date, luogo, immagini } = eventiData;
    // Esegui l'operazione di inserimento (create) utilizzando il metodo insert di SupabaseClient
    const { data, error } = await clientDB.from('Eventi').insert([{titolo, descrizione, date, luogo, immagini }]);
    
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

}

export default EventiDAO;