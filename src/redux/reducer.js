import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default filter;
