import UtentiDAO from '../repositories/UtentiDAO';
import jwt from 'jsonwebtoken';

const utentiDAO = new UtentiDAO();

class UtentiService {
  async getUtentiById(utentiId:number) {
    return utentiDAO.getUtentiById(utentiId);
  }

  async postUtente(utentiData:any) {
    return utentiDAO.postUtente(utentiData);
  }

  async login(credenziali:{email:string, password:string}){
    const utente = await utentiDAO.getUtentiByEmail(credenziali.email);
    if(!utente||utente.password!==credenziali.password){
      throw new Error('Credenziali non valide');
    }
    const token = jwt.sign({userId:utente.id}, 'il_tuo_segreto');
    return token;
  }
}

export default UtentiService;