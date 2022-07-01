import {configureStore} from '@reduxjs/toolkit';
import serviceSlice from './features/serviceSlice';
import categorySlice from './features/categorySlice';

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    category: categorySlice,
  },
});
