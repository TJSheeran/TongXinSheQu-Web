import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '@/services';

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        selectedCommunity: '1'
    },
    reducers: {
        changeCommunity(state, { payload }) {
            state.selectedCommunity = payload;
        }
    }
});

export const { changeNavItem, changeCommunity } = HeaderSlice.actions;

export default HeaderSlice.reducer;
