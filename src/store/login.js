import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userLogin } from '@/services/utils/api';
import { useNavigate } from 'react-router-dom';

export const fetchUserLogin = createAsyncThunk('fetchUserLogin', async (payload) => {
    const res = await userLogin(payload);
    console.log('登录返回结果', res);
    return res;
});

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserLogin.fulfilled, (state, { payload }) => {
                const userParams = {
                    uid: payload.uid || undefined,
                    username: payload.username || '',
                    picture: payload.picture || '',
                    password: payload.password || '',
                    nickname: payload.nickname || ''
                };
                state.token = payload.token;
                state.user = userParams;
                //将state更新的值同步更新到localStorage中
                localStorage.setItem('token', payload.token);
                localStorage.setItem('user', JSON.stringify(userParams));
                console.log('fulfilled', payload);
            })
            .addCase(fetchUserLogin.rejected, () => {
                //request failed todo
                console.log('rejected');
            });
    }
});

export default LoginSlice.reducer;
