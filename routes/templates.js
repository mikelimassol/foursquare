var express = require('express');
var router = express.Router();

/* GET template by name */
router.get('/:templateid', function(req, res, next) {
  res.render('templates/' + req.params.templateid);
});

module.exports = router;