import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import {all} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import petsSlice from '../modules/dashboard/presentation/reducers/pets.reducer';
import petsSaga from '../modules/dashboard/presentation/sagas/pets.saga';

const reducers = combineReducers({
  pets: petsSlice.reducer,
});

function* sagas() {
  yield all([petsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof Store.getState>;
export default Store;
