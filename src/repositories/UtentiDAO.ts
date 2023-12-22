// UserRepository.ts
import { Utenti } from '../entities/Utenti.entity';
import { clientDB } from '../db';

class UtentiDAO {
  async getUtentiById(utentiId: Utenti["id"]): Promise<Utenti|null[]> {
    // Esegui la query nel database
    const { data, error }= await clientDB.from('Utenti').select('*').eq('id', utentiId);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }


  async postUtente(utentiData: Utenti){
    const { nome,  email, password, sesso, citta} = utentiData;
    const { data, error } = await clientDB.from('Utenti').insert([{ nome,email, password, sesso, citta}]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }


  async getUtentiByEmail(utentEmial: Utenti["email"]){
    const { data, error } = await clientDB.from('Utenti').select('*').eq('email', utentEmial).single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }



}

export default UtentiDAO;