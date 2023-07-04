import { takeLatest, call, put, all } from "redux-saga/effects";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "./user-slice";
import * as API from "./api";

function* fetchUsers() {
  try {
    const response = yield call(API.fetchUsers);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* watchFetchUsers() {
  yield takeLatest(fetchUsersRequest.type, fetchUsers);
}

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}