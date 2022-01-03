import {call, put, takeLatest} from 'redux-saga/effects';
import petsSlice from '~/modules/dashboard/presentation/reducers/pets.reducer';
import HttpService from '~/modules/dashboard/services/api';

function* fetchPets() {
  try {
    const service = new HttpService();

    const response: Generator<any, any, any> = yield call([
      service,
      'fetchPets',
    ]);

    yield put(petsSlice.actions.getPetsSuccess(response));
  } catch (e) {
    yield put(petsSlice.actions.getPetsError('Falha ao buscar dados.'));
  }
}

export default function* rootSagas() {
  yield takeLatest(petsSlice.actions.getPetsRequest, fetchPets);
}
