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

function* charactersSaga() {
    yield takeLatest ('FETCH_CHARACTERS', getCharacters);
    // yield takeLatest ('RULEBOOK_FILTER', filterRuleBook);
    // yield takeLatest ('RULE_URL', getSingleRule)


}

export default charactersSaga