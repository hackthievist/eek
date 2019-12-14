const express = require('express');
const ItemController = require('../controllers/ItemController');

const router = express.Router();

/* GET home page. */
router.get('/', ItemController.getItems);

module.exports = router;
