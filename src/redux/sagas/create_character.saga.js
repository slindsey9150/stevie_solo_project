import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createCharacter (action) {
    console.log('creating a Character with a saga', action.payload);
    const character = {
        name: action.payload.setName,
        level: action.payload.setLevel,
        charisma: action.payload.setAbilityScores[0],
        constitution: action.payload.setAbilityScores[1],
        strength: action.payload.setAbilityScores[4],
        dexterity: action.payload.setAbilityScores[2],
        wisdom: action.payload.setAbilityScores[5],
        intelligence: action.payload.setAbilityScores[3],
        class: action.payload.setClass,
        race: action.payload.setRaceId,
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

function* characterLevel (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co${action.classurl}/levels/${action.payload}`)
        console.log('response', response);
        yield put ({ type:'CHAR_LEVEL_FILTER', payload: response.data})
    }
    catch (error) {
        console.log('error getting spell url', error);
    }
}



function* createCharacterSaga() {
    yield takeLatest ('CREATE_CHARACTER', createCharacter);
    yield takeLatest ('SET_CHAR_LEVEL', characterLevel)
 
}



export default createCharacterSaga;

