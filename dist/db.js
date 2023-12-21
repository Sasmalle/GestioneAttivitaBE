"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientDB = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
// Configurazione client Supabase
const supabaseUrl = 'https://lfhdjtfaovoielmohyrj.supabase.co'; //URL Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaGRqdGZhb3ZvaWVsbW9oeXJqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjk3NzMwNiwiZXhwIjoyMDE4NTUzMzA2fQ.jbfN-AakdYECvVr-JYbAVExQYYw5iX2cYpta9S4EOfk'; //chiave API Supabase
// Crea un'istanza del client Supabase
exports.clientDB = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
// TEST CONNESSIONE BD
// async function testConnection() {
//     try {
//       const { data, error } = await clientDB.from('Utenti').select('*').eq('id', 1);
//       if (error) {
//         console.error('Errore nella connessione a Supabase:', error);
//         return;
//       }
//       console.log('Connessione a Supabase riuscita:', data);
//     } catch (error:any) {
//       console.error('Errore generico:', error.message);
//     }
//   }
// testConnection();
