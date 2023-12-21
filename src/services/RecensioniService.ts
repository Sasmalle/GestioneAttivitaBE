import RecensioniDAO from "../repositories/RecensioniDAO";

const recensioniDAO = new RecensioniDAO();
class RecensioniService {
    async getRecensioniByIdUtente(utenteId:number) {
        return recensioniDAO.getRecensioniByIdUtente(utenteId);
      }
    async getRecensioniByIdEvento(eventoId:number) {
        return recensioniDAO.getRecensioniByIdEvento(eventoId);
      }
    async postRecensione(redensioniData:any) {
        return recensioniDAO.postRecensione(redensioniData);
      }
}

export default RecensioniService;