// src/redux/selectedProductSlice.js
import { createSlice } from '@reduxjs/toolkit';

const queueSlice = createSlice({
  name: 'Queue',

  initialState: {queueId : null},

  reducers: {
    increment: (state , action) => 
    state.queueId = action.payload
  },
});

export const { increment } = queueSlice.actions;
export default queueSlice.reducer;