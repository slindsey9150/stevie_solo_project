import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getCampaigns  (action) {
    try {
        const response = yield axios.get('/api/campaigns')
        console.log('response', response);
        yield put({ type: 'SET_CAMPAIGNS', payload: response.data });
    }
    catch (error) {
        console.log('error getting campaigns', error);
    }
}

function* campaignsSaga() {
    yield takeLatest ('FETCH_CAMPAIGNS', getCampaigns);
    // yield takeLatest ('RULEBOOK_FILTER', filterRuleBook);
    // yield takeLatest ('RULE_URL', getSingleRule)


}

export default campaignsSaga