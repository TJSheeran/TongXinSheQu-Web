import LoginReducer from "./login";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		login: LoginReducer,
	},
});

export default store;
