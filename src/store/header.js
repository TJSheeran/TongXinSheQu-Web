import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '@/services';

const HeaderSlice = createSlice({
    name: 'header',
    initialState: {
        searchKey: '',
        selectedCommunity: '1'
    },
    reducers: {
        changeSearchKey(state, { payload }) {
            state.searchKey = payload;
        },
        changeCommunity(state, { payload }) {
            state.selectedCommunity = payload;
        }
    }
});

export const { changeSearchKey, changeCommunity } = HeaderSlice.actions;

export default HeaderSlice.reducer;
