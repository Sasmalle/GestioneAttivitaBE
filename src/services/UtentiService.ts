import UtentiDAO from '../repositories/UtentiDAO';

const utentiDAO = new UtentiDAO();

class UtentiService {
  async getUtentiById(utentiId:number) {
    return utentiDAO.getUtentiById(utentiId);
  }

  async postUtente(utentiData:any) {
    return utentiDAO.postUtente(utentiData);
  }
}

export default UtentiService;