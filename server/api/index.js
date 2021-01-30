const router = require('express').Router();
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

// Ruta de /api/config
const config = require('./config');
router.use('/config', config);

// Ruta de /api/agencies
const agencies = require('./agencies');
router.use('/agencies', agencies);

// Ruta de /api/messages
const messages = require('./messages');
router.use('/messages', messages);

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
});

module.exports = router;