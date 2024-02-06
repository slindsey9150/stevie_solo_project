const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // what is the value of req.user????
  console.log('req.user:', req.user);
  queryText = `SELECT * FROM "adventure"
  WHERE user_id = $1;
  `
  queryParams = [req.user.id]
  if(req.isAuthenticated()) {
  pool .query(queryText, queryParams)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for campaigns:', error);
      res.sendStatus(500);
    });
  }
  else {
    res.sendStatus(403)
  }
});

module.exports = router;
