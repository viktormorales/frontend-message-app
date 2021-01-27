const router = require('express').Router();

// Ruta de /api/config
const config = require('./config');
router.use('/config', config);

// Ruta de /api/messages
const messages = require('./messages');
router.use('/messages', messages);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
});

module.exports = router;