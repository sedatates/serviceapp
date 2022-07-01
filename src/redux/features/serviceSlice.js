import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getServices = createAsyncThunk(
  'services/getServices',
  async () => {
    const {data} = await axios.get(
      'https://api-test.boatmate.io/v2/api/mocks/2207/services',
    );
    return data.services;
  },
);

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addService: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: {
    // get services
    [getServices.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getServices.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {addService} = serviceSlice.actions;
export default serviceSlice.reducer;
