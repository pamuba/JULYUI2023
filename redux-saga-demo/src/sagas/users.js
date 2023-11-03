import { takeEvery, call, fork } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users'; 

//worker sagas - casues state changes
function* getUers(){
    try{
        const result = yield call(api.getUers)
        console.log(result)
    }
    catch(e){

    }
}


//watcher sagas -- listens for an action to be dispatched
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUers)//while(true)
} 

const userSagas = [
    fork(watchGetUsersRequest)
]

export default userSagas;

