const router = require('express').Router();
const controller = require('../controllers/redirect.controller');

router.get('/:code', controller.redirect);

module.exports = router;