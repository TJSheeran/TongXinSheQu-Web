import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '@/services';

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        selectedNav: ['/home'],
        selectedCommunity: '1'
    },
    reducers: {
        changeNavItem(state, { payload }) {
            state.selectedNav = payload;
        },
        changeCommunity(state, { payload }) {
            state.selectedCommunity = payload;
        }
    }
});

export const { changeNavItem, changeCommunity } = HeaderSlice.actions;

export default HeaderSlice.reducer;
