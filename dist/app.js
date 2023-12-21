"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Importa le tue route/controllers
const UtentiController_1 = __importDefault(require("./controllers/UtentiController"));
const EventiController_1 = __importDefault(require("./controllers/EventiController"));
const RecensioniController_1 = __importDefault(require("./controllers/RecensioniController"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Collega le routes
app.use('/api/utenti', UtentiController_1.default);
app.use('/api/eventi', EventiController_1.default);
app.use('/api/recensioni', RecensioniController_1.default);
app.listen(PORT, () => {
    console.log(`Server Express in esecuzione sulla porta http://localhost:${PORT}`);
});
