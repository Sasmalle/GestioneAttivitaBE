import express from 'express';
// Importa la logica del servizio
import EventiService from '../services/EventiService';
const router = express.Router();
const eventiService = new EventiService();

//API getEvento
router.get('/:id', async (req, res) => {
  try {
    const evento = await eventiService.getEventiById(parseInt(req.params.id)); // Usa la logica del servizio
    res.json(evento);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

//API postEvento
router.post('/', async (req, res) => {
  try {
    const nuovoUtente = await eventiService.postEvento(req.body); // Crea un nuovo utente usando il corpo della richiesta
    res.status(201).json(nuovoUtente);
  } catch (error) {
    res.status(500).json({ error: 'Errore interno del server' });
  }
});

export default router;