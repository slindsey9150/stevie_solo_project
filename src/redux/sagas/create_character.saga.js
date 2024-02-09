import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCharacter (action) {
    console.log('creating a Character with a saga', action.payload);
    const character = {
        name: action.payload.setName,
        level: action.payload.setLevel,
        charisma: action.payload.setAbilityScores[0],
        constitution: action.payload.setAbilityScores[1],
        strength: action.payload.setAbilityScores[5],
        dexterity: action.payload.setAbilityScores[3],
        wisdom: action.payload.setAbilityScores[2],
        intelligence: action.payload.setAbilityScores[4],
        class: action.payload.setClass,
        Race: action.payload.setRace,
        notes: action.payload.setNotes,
        backstory: action.payload.setBackstory,
        
        isComplete: true
        

    }
    axios.post('/api/characters', character).then(() => {
       console.log('touching server');
    })
    .catch(error => {
        console.log('error with post request', error);
    });


}



function* createCharacterSaga() {
    yield takeLatest ('CREATE_CHARACTER', createCharacter);
 
}

export default createCharacterSaga;
