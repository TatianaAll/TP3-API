const Logements = require("../models/Logements"); // on appelle le modèle

exports.createLogement = (req, res, next) => {
  // Traitements pour les tags --> on attend un tableau donc on va split
  let tags = [];
  if (req.body.tags) {
    if (typeof req.body.tags === "string") {
      // On split sur les virgules et on enlève les espaces vides
      tags = req.body.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag);
    } else if (Array.isArray(req.body.tags)) {
      tags = req.body.tags;
    }
  }

  let equipments = [];
  if (req.body.equipments) {
    if (typeof req.body.equipments === "string") {
      // On split sur les virguels et on enlève les espaces vides
      equipments = req.body.equipments
        .split(",")
        .map((equipment) => equipment.trim())
        .filter((equipment) => equipment);
    } else if (Array.isArray(req.body.equipments)) {
      equipments = req.body.equipments;
    }
  }
  const logement = new Logements({
    ...req.body, //on décompose le body
    tags: tags, // on remplace les tags par les tags traités
    equipments: equipments, // et les équipements par les équipements traités
  });
  logement
    .save() //on enregistre dans la BDD
    .then(() => {
      res.status(201).json({ message: "Logement enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getAllLogements = (req, res, next) => {
  Logements.find()
    .then((logements) => res.status(200).json(logements))
    .catch((error) => res.status(400).json({ error })); // on utilise la méthode find de mongoose pour récupérer tous les logements
};

exports.getOneLogement = (req, res, next) => {
  Logements.findOne({ _id: req.params.id })
    .then((logement) => res.status(200).json(logement))
    .catch((error) => res.status(404).json({ error })); // on utilise la méthode findOne de mongoose pour récupérer un seul logement en fonction de son id;
};

exports.updateLogementById = (req, res, next) => {
  const logement = new Logements({
    ...req.body, //on décompose le body
  });
  logement
    .save() //on enregistre dans la BDD
    .then(() => {
      res.status(201).json({ message: "Logement enregistré !" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.deleteLogementById = (req, res, next) => {
  Logements.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Logement supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
