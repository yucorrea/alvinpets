import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Pets {
  recommends: [];
  new_comers: [];
}

export interface InitialState {
  loading: boolean;
  error: string;
  pets: Pets;
}

const initialState: InitialState = {
  loading: false,
  error: '',
  pets: {
    recommends: [],
    new_comers: [],
  },
};

const reducer = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    getPetsRequest(state) {
      state.loading = true;
    },
    getPetsSuccess(state, {payload}: PayloadAction<any>) {
      state.loading = false;
      state.pets = payload;
    },
    getPetsError(state, {payload}: PayloadAction<string>) {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default reducer;
