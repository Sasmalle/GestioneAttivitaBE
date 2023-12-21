import EventiDAO from "../repositories/EventiDAO";

const eventiDAO = new EventiDAO();
class EventiService {
    async getEventiById(eventiId:number) {
        return eventiDAO.getEventiById(eventiId);
      }
    async  postEvento(eventiData: any) {
        return eventiDAO.postEvento(eventiData);
      }
}

export default EventiService;