const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // what is the value of req.user????
  console.log('req.user:', req.user);
  queryText = `SELECT * FROM "characters" 

  WHERE characters.user_id = $1
  ;
  `
  queryParams = [req.user.id]
  if(req.isAuthenticated()) {
  pool .query(queryText, queryParams)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for characters:', error);
      res.sendStatus(500);
    });
  }
  else {
    res.sendStatus(403)
  }
});

router.post('/', rejectUnauthenticated, (req,res) => {
  const character = req.body
  const id = req.user.id
  queryText = `INSERT INTO Characters ( "user_id", "name", "level", "charisma", "constitution", "strength", "dexterity", "wisdom", "intelligence", "player", "class_id", "inventory",  "in_campaign", "backstory", "is_complete", "notes", "race_id")
  VALUES
( $1, $2, $3, $4, $5, $6, $7, $8, $9, true, 1, 1, true, $10, true, $11, 1)`

const queryParams = [id, character.name, character.level, character.charisma, character.constitution, character.strength, character.dexterity, character.wisdom, character.intelligence, character.backstory, character.notes]
 if(req.isAuthenticated()) {
pool.query(queryText, queryParams)
.then((results) => res.sendStatus(200))
.catch((error) => 
console.log('error posting query', error),
 res.sendStatus(500));
 }
 else {
  res.sendStatus(403)
}
})

router.delete('/:id', rejectUnauthenticated, (req,res) => {
  console.log('req', req.params.id);
const characterId = req.params.id

const queryParams = [characterId]
const queryText = `
DELETE FROM characters 
WHERE id = $1
`
  if(req.isAuthenticated()) {
    pool.query(queryText,queryParams)
    .then(result => {
      res.sendStatus(200)
    })
    .catch(error =>  {
      console.log('error deleting character', error);
      res.sendStatus(500)
    })
  }
})

module.exports = router;
