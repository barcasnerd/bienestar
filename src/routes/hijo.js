const router = require('express').Router();

const controladorHijo = require('../controllers/controladorHijo');

router.get('/', controladorHijo.list);
router.post('/add', controladorHijo.save);
router.get('/update/:id', controladorHijo.edit);
router.post('/update/:id', controladorHijo.update);
router.get('/delete/:id', controladorHijo.delete);

module.exports = router;