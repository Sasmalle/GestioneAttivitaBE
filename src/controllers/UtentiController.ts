import express from 'express';
// Importa la logica del servizio
import UtentiService from '../services/UtentiService';
const router = express.Router();
const utentiService = new UtentiService();

//API getUtentixId
router.get('/:id', async (req, res) => {
  try {
    const utente = await utentiService.getUtentiById(parseInt(req.params.id)); // Usa la logica del servizio
    res.json(utente);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

//API postUtente
router.post('/', async (req, res) => {
  try {
    const nuovoUtente = await utentiService.postUtente(req.body); // Crea un nuovo utente usando il corpo della richiesta
    res.status(201).json(nuovoUtente);
  } catch (error) {
    res.status(500).json({ error: 'Errore interno del server' });
  }
});

export default router;