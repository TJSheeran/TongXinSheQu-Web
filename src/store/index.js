import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './login';
import HeaderReducer from './header';

const store = configureStore({
    reducer: {
        login: LoginReducer,
        header: HeaderReducer
    }
});

export default store;
