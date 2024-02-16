const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log('req.body', req.params.id);
  // what is the value of req.user????
  console.log('req.user:', req.user);
  queryText = 
  `
  SELECT * FROM inventory
  WHERE inventory.character_id = $1
  `
  const queryParams = [req.params.id]
  // const queryParams = [singleid]
  if(req.isAuthenticated()) {
  pool .query(queryText, queryParams)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for inventory:', error);
      res.sendStatus(500);
    });
  }
  else {
    res.sendStatus(403)
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  queryText = ` 
  INSERT INTO inventory 
  WHER`
});

module.exports = router;
