import { delay } from 'redux-saga'
import { put, takeLatest, all } from 'redux-saga/effects'

export function* watchHelloSaga(){
    yield takeLatest('hello', helloWorld);
}

export function* helloWorld() {
    yield delay(1000);
    console.log("Hello World")
}


function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}


function* watchIncrementAsync() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
}


export default function* rootSaga() {
  yield all([
    watchHelloSaga(),
    watchIncrementAsync()
  ])
}