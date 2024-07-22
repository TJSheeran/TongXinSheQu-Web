import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from './login';
import HeaderReducer from './header';
import TabReducer from './tab';

const store = configureStore({
    reducer: {
        login: LoginReducer,
        header: HeaderReducer,
        tab: TabReducer
    }
});

export default store;
