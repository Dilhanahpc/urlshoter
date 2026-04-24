const router = require('express').Router();
const controller = require('../controllers/url.controller');

router.post('/shorten', controller.create);
router.get('/:code', controller.get);

module.exports = router;