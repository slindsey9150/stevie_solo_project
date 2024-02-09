import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getSpells  (action) {
    try {
        const response = yield axios.get('/api/spells')
        console.log('response', response);
        yield put({ type: 'SET_SPELLS', payload: response.data });
    }
    catch (error) {
        console.log('error getting shelf', error);
    }
}

function* getSingleSpell (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`)
        console.log('response', response);
        yield put ({ type:'SEARCH_SPELL', payload: response.data})

    }
    catch (error) {
        console.log('error getting spell url', error);
    }
}

function* filterSpellsByLevel (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co/api/spells/${action.payload}`)
        console.log('response', response);
        yield put ({ type:'SEARCH_LEVEL_FILTER', payload: response.data})

    }
    catch (error) {
        console.log('error getting spell url', error);
    }
}

function* filterSpellsBySchool (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co/api/spells/${action.payload}`)
        console.log('response', response);
        yield put ({ type:'SEARCH_SCHOOL_FILTER', payload: response.data})

    }
    catch (error) {
        console.log('error getting spell url', error);
    }
}





function* spellsSaga() {
    yield takeLatest ('FETCH_SPELLS', getSpells);
    yield takeLatest ('SPELL_URL', getSingleSpell)
    yield takeLatest ('SPELL_FILTER', filterSpellsByLevel)
    yield takeLatest ('SPELL_SCHOOL_FILTER', filterSpellsBySchool)


}

export default spellsSaga