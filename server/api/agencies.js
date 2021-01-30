/**
 * Rutas de Agencias
 * 
 */
const router = require('express').Router();

// GET /config
router.get('/', function(req, res) {
    let agencies = [
        { name: "All Patagonia" },
        { name: "Antartur" },
        { name: "Baqueanos" },
        
    ]
    res.json({ message: 'Recurso: agencias' })
});

module.exports = router