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

function* getInventory  (action) {
    try {
        const characterId = action.payload
        const response = yield axios.get(`/api/inventory/${characterId}`)
        console.log('response', response);
        yield put({ type: 'SET_INVENTORY', payload: response.data });
    }
    catch (error) {
        console.log('error getting characters', error);
    }
}
function* getSingle  (action) {
    try {
        const singleNumber = action.payload
        yield put({ type: 'SET_SINGLE', payload: singleNumber });
    }
    catch (error) {
        console.log('error getting characters', error);
    }
}
function* getEditChar  (action) {
    try {
        console.log('edit char', action.payload);
       
        yield put({ type: 'SET_EDIT_CHAR', payload: action.payload });
    }
    catch (error) {
        console.log('error getting single character', error);
    }
}



function* charactersSaga() {
    yield takeLatest ('FETCH_CHARACTERS', getCharacters);
    yield takeLatest ('DELETE_CHARACTER', deleteCharacter);
    yield takeLatest ('FETCH_INVENTORY', getInventory)
    yield takeLatest ('THIS_IS_SINGLE', getSingle)
    yield takeLatest('GET_EDIT_CHAR', getEditChar)
    
    // yield takeLatest ('SINGLE_CHARACTER', singleCharacter)


}

export default charactersSaga