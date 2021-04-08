const router = require('express').Router();

const controladorPadre = require('../controllers/controladorPadre');

router.get('/', controladorPadre.list);
router.post('/add', controladorPadre.save);
router.get('/update/:id', controladorPadre.edit);
router.post('/update/:id', controladorPadre.update);
router.get('/delete/:id', controladorPadre.delete);

module.exports = router;