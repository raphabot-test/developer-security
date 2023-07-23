var express = require('express');
var router = express.Router();

const sayHello = (name) => {
  const world = 'world!';
  return `Hello ${JSON.stringify(eval(name), null, 2)}`;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  const name = req.query.q? req.query.q : 'world';
  res.send(sayHello(name));
});

module.exports = router;
