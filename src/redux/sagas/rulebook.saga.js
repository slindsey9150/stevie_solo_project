import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getRuleBook  (action) {
    try {
        const response = yield axios.get('https://www.dnd5eapi.co/api/')
        console.log('response', response);
        yield put({ type: 'SET_ROUTER', payload: response.data });
    }
    catch (error) {
        console.log('error getting rulebook', error);
    }
}

function* filterRuleBook (action) {
    try {
    const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`)
    console.log('response', response);
    yield put({ type: 'SET_ROUTER', payload: response.data });
}
catch (error) {
    console.log('error filtering ruleBook', error);
}
}

function* getSingleRule (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`)
        console.log('response', response);
        yield put ({ type:'SEARCH_RULE', payload: response.data})

    }
    catch (error) {
        console.log('error getting rule url', error);
    }
}


function* ruleBookSaga() {
    yield takeLatest ('FETCH_ROUTER', getRuleBook);
    yield takeLatest ('RULEBOOK_FILTER', filterRuleBook);
    yield takeLatest ('RULE_URL', getSingleRule)


}

export default ruleBookSaga