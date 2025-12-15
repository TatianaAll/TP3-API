const express = require('express');
const router = express.Router();
const logementsController = require('../controllers/logementsController');

router.get("/", logementsController.getAllLogements);
router.get("/:id", logementsController.getOneLogement);
router.post("/", logementsController.createLogement);
router.delete("/:id", logementsController.deleteLogementById);
// router.update("/:id", logementsController.updateLogementById);

module.exports = router;