const router = require('express').Router();

const config = require('./config');
router.use('/config', config);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
});

module.exports = router;