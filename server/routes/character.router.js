const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated
} = require('../modules/authentication-middleware');
// JOIN class on class.id = characters.class_id
router.get('/', rejectUnauthenticated, (req, res) => {
  // what is the value of req.user????
  console.log('req.user:', req.user);
  queryText = `SELECT characters.id AS charid,
  characters.level,
  characters.class_id, 
  characters.name,
  characters.alignment,
  characters.race_id,
  characters.backstory,
  characters.notes,
  characters.charisma,
  characters.constitution,
  characters.dexterity,
  characters.intelligence,
  characters.strength,
  characters.wisdom,
  class.class,
  races.race
  FROM characters
  JOIN "class" ON "class".id = "characters".class_id
  JOIN "races" ON races.id = characters.race_id
  WHERE characters.player_id = $1
  ;
  
  `
  //JOIN races ON races.id = characters.race_id
  //JOIN "class"ON "class".class_id = "characters".class_id
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
  console.log('req.body', req.body);
  const id = req.user.id
  queryText = `INSERT INTO Characters ( "player_id", "name", "alignment", "level", "charisma", "constitution", "dexterity", "intelligence", "strength",  "wisdom", "player", "class_id", "inventory",  "in_campaign", "backstory", "is_complete", "notes", "race_id")
  VALUES
( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, true, $11, 1, true, $12, true, $13, $14)`
let charName = character.name
let charAlign = character.alignment
let charLevel = character.level 
let charCharisma = character.charisma
let charConstitution = character.constitution
let charDexterity = character.dexterity
let charIntelligence= character.intelligence
let charStrength = character.strength
let charWisdom = character.wisdom
let charClassId = character.classId
let charBackstory = character.backstory
let charNotes = character.notes
let charRaceID = character.race
console.log('character dexterity', charDexterity);




if (character.name.length < 1){
  charName = 'No Name Chosen'
}
if (character.alignment.length < 1){
  charAlign = 'No Alignment chosen'
}
if (character.notes.length < 1){
  charNotes = 'No Notes So Far'
}
if (charLevel.length < 1){
  charLevel = 0
}
if (character.backstory.length < 1){
  charBackstory = "That's curious. There's no backstory here"
}
if (character.race.length < 1){
  charRaceID = '10'
}
if (character.classId.length < 1){
  charClassId = '13'
}
if (charCharisma == undefined){
  charCharisma = '0'
}
if (character.constitution == undefined){
  charConstitution = '0'
}
if (charDexterity == undefined){
  charDexterity = '0'
}
if (charIntelligence == undefined){
  charIntelligence = '0'
}
if (charStrength == undefined){
  charStrength = '0'
}
if (charWisdom == undefined){
  charWisdom = '0'
}




const queryParams = [id, charName, charAlign, charLevel, charCharisma,
                    charConstitution, charDexterity, charIntelligence,
                    charStrength, charWisdom,  charClassId, charBackstory,
                    charNotes, charRaceID]
 if(req.isAuthenticated()) {
pool.query(queryText, queryParams)
.then((results) => {
res.sendStatus(200)})

.catch((error) => {
console.log('error posting query', error),
 res.sendStatus(500)});
 }
 else {
  res.sendStatus(403)
}
})

router.delete('/:id', rejectUnauthenticated, (req,res) => {
  console.log('req', req.params.id);
const characterId = req.params.id

const queryParams = [characterId]
const queryText = 
`
DELETE FROM characters 
WHERE id = $1;

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

router.put('/:id', (req, res) => {
  // Update this single student
  const idToUpdate = req.params.id;
  console.log('req.body.name', req.body.name);
  console.log(' value', req.body.editCharacter[req.body.editCriteria]);
  console.log('edit criteria', req.body.editCriteria);
  console.log('req.body', req.body);
  console.log('id to update', idToUpdate)
  console.log();
  let sqlText = ``;
  if (req.body.editCriteria == 'name') {
    sqlText = `UPDATE "characters" SET name = $1 WHERE id = $2`;
  }
  else if (req.body.editCriteria == 'race_id') {
    sqlText= `UPDATE "characters" SET race_id = $1 WHERE id = $2`;
  }
  else if (req.body.editCriteria == 'class_id') {
    sqlText= `UPDATE "characters" SET class_id = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'charisma') {
    sqlText= `UPDATE "characters" SET charisma = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'constitution') {
    sqlText= `UPDATE "characters" SET constitution = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'dexterity') {
    sqlText= `UPDATE "characters" SET dexterity = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'intelligence') {
    sqlText= `UPDATE "characters" SET intelligence = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'strength') {
    sqlText= `UPDATE "characters" SET strength = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'wisdom') {
    sqlText= `UPDATE "characters" SET wisdom = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'notes') {
    sqlText= `UPDATE "characters" SET notes = $1 WHERE id = $2`;
  }else if (req.body.editCriteria == 'backstory') {
    sqlText= `UPDATE "characters" SET backstory = $1 WHERE id = $2`;
  }
 

const queryParams = [req.body.editCharacter[req.body.editCriteria], idToUpdate]
console.log('query params', queryParams)
  pool.query(sqlText, queryParams)
      .then((result) => {
          res.sendStatus(200);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

module.exports = router;
