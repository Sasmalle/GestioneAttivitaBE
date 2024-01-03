import express from 'express';
import RecensioniService from '../services/RecensioniService';
const router = express.Router();
const recensioniService = new RecensioniService();

//API getRecensionixidUtente
router.get('/utenteId/:idUtente', async (req, res) => {
    try {
      const recensione = await recensioniService.getRecensioniByIdUtente(parseInt(req.params.idUtente)); // Usa la logica del servizio
      res.json(recensione);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  });

//API getRecensionixidEvento
router.get('/eventoId/:idEvento', async (req, res) => {
  try {
    const recensione = await recensioniService.getRecensioniByIdEvento(parseInt(req.params.idEvento)); // Usa la logica del servizio
    res.json(recensione);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

//API getRecensionixvalutazione
router.get('/valutazione/:valutazione', async (req, res) => {
  try {
    const recensione = await recensioniService.getRecensioniByvalutazione(parseFloat(req.params.valutazione)); // Usa la logica del servizio
    res.json(recensione);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});


// // API postRecensione
// router.post('/', async (req, res) => {
//   try {
//     const : number = req.user.id; //da capire come gestire in automatico l'id delllo user che fa la recensione
//     const nuovaRecensione = await recensioniService.postRecensione(req.body, userId);
//     res.status(201).json(nuovaRecensione);
//   } catch (error) {
//     res.status(500).json({ error: 'Errore interno del server' });
//   }
// });


export default router;