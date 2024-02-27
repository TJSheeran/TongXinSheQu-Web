import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Recommend from '@/views/Recommend';
import Detail from '@/views/Detail';
import Register from '@/views/Register';

// import routes from "@/router";
// import { useRoutes } from "react-router-dom";

const App = () => {
    // 从localStorage取值判定是否登录
    const token = localStorage.getItem('token');
    const isAuthenticated = token && token !== 'undefined' ? true : false;
    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    );
};

export default App;
