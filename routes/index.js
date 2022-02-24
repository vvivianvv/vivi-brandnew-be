const express = require('express');
const logger = require('../lib/logger');
const userRouter = require('./user');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRouter);

module.exports = router;
