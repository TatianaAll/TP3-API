// on importe le paquet mongoose pour se connecter à la base de données MongoDB
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"))


// on importe le paquet express
const express = require('express');

// On crée l'application Express
const app = express();

app.use(express.json()); // Permet de parser le body des requêtes en JSON

//On doit appeler le router des logements
const logementRoutes = require('./routes/logementsRoutes');

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permet de dire que tout le monde peut y accéder
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // L'autorisation ici de certains en-tête
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next(); // L'autorisation des différentes méthodes HHTP
});

// Appel des routes
app.use('/api/logements', logementRoutes);


// On export l’application
module.exports = app;