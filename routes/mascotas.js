// Estructura del CRUD
const router = require('express').Router();
const {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota,
  count
} = require('../controllers/mascotas')

router.get('/', obtenerMascota);
router.get('/:id', obtenerMascota);
router.get('/count/:cat', count);
router.post('/', crearMascota);
router.put('/:id', modificarMascota);
router.delete('/:id', eliminarMascota);


module.exports = router;
