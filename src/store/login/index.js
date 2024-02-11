import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getUserInfo } from '@/services'

export const fetchUserInfo = createAsyncThunk("fetchUserInfo", async payload => {
    const res = await getUserInfo(payload)
    return res.user
})

const LoginSlice = createSlice({
    name: 'testa',
    initialState: {
        userInfo: {}
    },
    reducers: {
        changeUserInfo(state, { payload }) {
            state.userInfo = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
                    //request success todo
                    state.userInfo = payload
                })
                .addCase(fetchUserInfo.rejected, () => {
                    //request failed todo
                    console.log("request rejected")
                })
    }
})

export const { changeUserInfo } = LoginSlice.actions;

export default LoginSlice.reducer;