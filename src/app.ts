import express from 'express';
// Importa le tue route/controllers
import UtentiController from './controllers/UtentiController';
import EventiController from './controllers/EventiController';
import RecensioniController from './controllers/RecensioniController';
const app = express();
const PORT = 3000;

app.use(express.json());
// Collega le routes
app.use('/api/utenti', UtentiController);
app.use('/api/eventi', EventiController);
app.use('/api/recensioni', RecensioniController);

app.listen(PORT, () => {
  console.log(`Server Express in esecuzione sulla porta http://localhost:${PORT}`);
});