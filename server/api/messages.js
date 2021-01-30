/**
 * Rutas de configuración
 * 
 */
const router = require('express').Router();

// GET /config
router.get('/', (req, res) => {
    res.json({ message: 'Recurso: mensajes' })
});

module.exports = router