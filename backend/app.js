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

//On doit appeler le router des logements
const logementRoutes = require('./routes/routes.logements');

// On crée l'application Express
const app = express();

app.use(express.json()); // Permet de parser le body des requêtes en JSON

// Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permet de dire que tout le monde peut y accéder
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // L'autorisation ici de certains en-tête
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next(); // L'autorisation des différentes méthodes HHTP
});

// j'appelle mon Schéma pour enregistrer dans la BDD
const Logements = require('./models/Logements');

// Appel des routes
app.use('/api/logements', logementRoutes);

// Middleware pour le post d'un logement
app.post('/api/logements', (req, res, next) => {
   const logement = new Logements({
      ...req.body //on décompose le body
   });
  logement.save() //on enregistre dans la BDD
    .then(() => {
      res.status(201).json({message: 'Logement enregistré !' });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
});

// Middleware pour le get des logements
app.get('/api/logements', (req, res, next) => {
  const logements = [
	{
		"id": "c67ab8a7",
		"title": "Appartement cosy",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
		],
		"description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
		"host": {
			"name": "Nathalie Jean",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
		},
		"rating": "5",
		"location": "Ile de France - Paris 17e",
		"equipments": [
			"Équipements de base",
			"Micro-Ondes",
			"Douche italienne",
			"Frigo",
			"WIFI"
		],
		"tags": [
			"Batignolle",
			"Montmartre"
		]
	},
	{
		"id": "b9123946",
		"title": "Magnifique appartement proche Canal Saint Martin",
		"cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
		"pictures": [
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
			"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg"
		],
		"description": "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
		"host": {
			"name": "Della Case",
			"picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg"
		},
		"rating": "4",
		"location": "Ile de France - Paris 10e",
		"equipments": [
			"Parking",
			"Sèche Cheveux",
			"Machine à laver",
			"Wi-fi",
			"Cuisine équipée",
			"Télévision"
		],
		"tags": [
			"Canal Saint Martin",
			"République",
			"Appartement"
		]
	}
];
  res.status(200).json(logements); // Permet de retourner les données du tableaux en response
  next();
});

// On export l’application
module.exports = app;