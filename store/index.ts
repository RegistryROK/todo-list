import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { reducer } from '../reducers';

const store = () => {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'production' ? false : true,
  });
};

export const wrapper = createWrapper(store);
