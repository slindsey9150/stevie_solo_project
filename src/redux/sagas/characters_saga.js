import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCharacters  (action) {
    try {
        const response = yield axios.get('/api/characters')
        console.log('response', response);
        yield put({ type: 'SET_CHARACTERS', payload: response.data });
    }
    catch (error) {
        console.log('error getting characters', error);
    }
}

function* deleteCharacter (action) {
    try {
        const characterId = action.payload
        console.log('character id', characterId);
        axios.delete(`/api/characters/${characterId}`).then(() => {
            console.log('touching server');
         })
         .catch(error => {
             console.log('error with post request', error);
         });

    }
    catch (error) {
        console.log('error deleting character', error);
    }
}

function* charactersSaga() {
    yield takeLatest ('FETCH_CHARACTERS', getCharacters);
    yield takeLatest ('DELETE_CHARACTER', deleteCharacter);
    // yield takeLatest ('RULE_URL', getSingleRule)


}

export default charactersSaga