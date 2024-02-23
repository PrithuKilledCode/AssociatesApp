import {takeLatest, all, takeEvery} from 'redux-saga/effects';
import {getUser} from '../slices/getUserSlice';
import {LoginUser} from './getUserSaga';
import {TakeableChannel} from 'redux-saga';
import {getCasesFunc} from './getCasesSaga';
import {getCases} from '../slices/getCasesSlice';
import {getTasks} from '../slices/getTasksSlice';
import {getTasksFunc} from './getTasksSaga';
import {getEvents} from '../slices/getEventSlice';
import {getEventsFunc} from './getEventsSaga';

function* LoginApi() {
  yield takeLatest(
    getUser.type as unknown as TakeableChannel<unknown>,
    LoginUser,
  );
}
function* GetCasesService() {
  yield takeLatest(
    getCases.type as unknown as TakeableChannel<unknown>,
    getCasesFunc,
  );
}
function* GetTasksService() {
  yield takeLatest(
    getTasks.type as unknown as TakeableChannel<unknown>,
    getTasksFunc,
  );
}
function* GetEventsService() {
  yield takeLatest(
    getEvents.type as unknown as TakeableChannel<unknown>,
    getEventsFunc,
  );
}

export default function* RootSaga() {
  yield all([
    LoginApi(),
    GetCasesService(),
    GetTasksService(),
    GetEventsService(),
  ]);
}
