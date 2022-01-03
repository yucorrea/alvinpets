import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '~/store';

const PetState = (state: RootState) => state.pets;

export const petsSelector = createSelector(PetState, appState => appState.pets);

export const petsLoadingSelector = createSelector(
  PetState,
  appState => appState.loading,
);

export const petsErrorSelector = createSelector(
  PetState,
  appState => appState.error,
);
