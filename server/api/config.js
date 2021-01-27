/**
 * Rutas de configuración
 * 
 */
const router = require('express').Router();

// GET /config
router.get('/', function(req, res) {
    res.json({ message: 'Recurso: config' })
});

// GET /config/signatures
router.get('/signatures', function(req, res) {
    let signatures = [
        {"name" : "Victor H. Morales"},
        {"name" : "Ignacio Alonso"},
        {"name" : "Jonathan Pitripan"},   
        {"name" : "Luis F Sanchez"},
    ]
    res.status(200);
    res.json({ message: "Firmas", signatures });
});

/**
router.get('/search', function(req, res) {
    res.json({ message: 'Vas a buscar una configuracion' })
})
router.get('/:id', function(req, res) {
    res.json({ message: 'Vas a obtener la configuracion con id ' + req.params.id })
})
router.post('/', function(req, res) {
    res.json({ message: 'Vas a añadir una configuracion' })
})
router.put('/:id', function(req, res) {
    res.json({ message: 'Vas a actualizar la configuracion con id ' + req.params.id })
})
router.delete('/:id', function(req, res) {
    res.json({ message: 'Vas a borrar la configuracion con id ' + req.params.id})
})
*/

module.exports = router