// pages/api/interests.js
import Cors from 'cors';

// Initialiser le middleware CORS
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: 'http://127.0.0.1:8000', // Autoriser cette origine
});

// Helper pour exécuter le middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Exécuter le middleware CORS
  await runMiddleware(req, res, cors);

  // Votre logique API ici
  res.json({ interests: [{ name: 'Coding' }, { name: 'Reading' }] });
}