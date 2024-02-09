import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* getEquipment  (action) {
    try {
        const response = yield axios.get('https://www.dnd5eapi.co/api/equipment-categories')
        console.log('response', response);
        yield put({ type: 'SET_EQUIPMENT', payload: response.data });
    }
    catch (error) {
        console.log('error getting equipment', error);
    }
}

function* filterEquipment (action) {
    try {
    const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`)
    console.log('response', response);
    yield put({ type: 'SET_EQUIPMENT_ROUTER', payload: response.data });
}
catch (error) {
    console.log('error filtering equipment', error);
}
}
function* getSingleItem (action) {
    try {
        const response = yield axios.get(`https://www.dnd5eapi.co${action.payload}`)
        console.log('response', response);
        yield put ({ type:'SEARCH_ITEM', payload: response.data})

    }
    catch (error) {
        console.log('error getting item url', error);
    }
}


function* equipmentSaga() {
    yield takeLatest ('FETCH_EQUIPMENT', getEquipment);
    yield takeLatest ('FETCH_EQUIPMENT_CATEGORY', filterEquipment)
    yield takeLatest ('ITEM_URL', getSingleItem)
}

export default equipmentSaga;