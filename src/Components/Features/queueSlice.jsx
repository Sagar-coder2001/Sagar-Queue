import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    queueId: 1, // Start with 1
    userdetails: null,
};

const queueSlice = createSlice({
    name: 'queue',
    initialState,
    reducers: {
        incrementQueueId: (state) => {
            state.queueId += 1;
        },
        setUserDetails: (state, action) => {
            state.userdetails = action.payload;
        },
    },
});

export const { incrementQueueId, setUserDetails } = queueSlice.actions;
export default queueSlice.reducer;
