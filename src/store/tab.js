import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const TabSlice = createSlice({
    name: 'tab',
    initialState: {
        selectedKey: '/home'
    },
    reducers: {
        changeSelectedKey(state, { payload }) {
            state.selectedKey = payload;
        }
    }
});

export const { changeSelectedKey } = TabSlice.actions;

export default TabSlice.reducer;
