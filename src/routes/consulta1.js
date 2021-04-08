const router = require('express').Router();

const controladorConsulta1 = require('../controllers/controladorConsulta1');

router.get('/', controladorConsulta1.list);
router.get('/get/:id', controladorConsulta1.edit);

module.exports = router;