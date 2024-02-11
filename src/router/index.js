import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/views/Home/index"));
const Recommend = lazy(() => import("@/views/Recommend/index"));
const Login = lazy(() => import("@/views/Login/index"));
const Detail = lazy(() => import("@/views/Detail/index"));

const routes = [
	{
		path: "/",
		element: <Navigate to="/login" />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/recommend",
		element: <Recommend />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/detail",
		element: <Detail />,
	},
];

export default routes;
