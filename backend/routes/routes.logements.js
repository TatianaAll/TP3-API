const express = require('express');
const router = express.Router();

router.get('/', logementsController.getAllLogements);
router.post('/', logementsController.createLogement);
router.delete('/:id', logementsController.deleteLogementById);
router.update('/:id', logementsController.updateLogementById);

module.exports = router;