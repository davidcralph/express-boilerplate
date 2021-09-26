const router = require('express').Router();

router.get('/', (_req, res) => {
  res.status(200).send('hello');
});

module.exports = router;
