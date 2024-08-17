import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home';
import MobileHome from '@/views/MobileHome';
import Login from '@/views/Login';
import Recommend from '@/views/Recommend';
import Detail from '@/views/Detail';
import Register from '@/views/Register';
import Discuss from '@/views/Discuss';
import UserPage from '@/views/UserPage';
import { isMobile } from '@/utils';
import MobileDetail from '@/views/MobileDetail';
import MobileMyPage from '@/views/MobileMyPage';
import MobileRecommend from '@/views/MobileRecommend';
import Agreement from '@/views/Agreement';

// import routes from "@/router";
// import { useRoutes } from "react-router-dom";

const App = () => {
    // 从localStorage取值判定是否登录
    const token = localStorage.getItem('token');
    const isAuthenticated = token && token !== 'undefined' ? true : false;
    const queryParams = new URLSearchParams(window.location.search);
    const isQuery = queryParams.get('is') === 'agreement';
    console.log(isQuery);
    return isMobile() ? (
        <Routes>
            <Route path="/" element={isQuery ? <Navigate to="/agreement" replace={true} /> : isAuthenticated ? <Navigate to="/mobileHome" replace={true} /> : <Navigate to="/login" replace={true} />} />
            <Route path="/mobileHome" element={<MobileHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mobileDetail" element={<MobileDetail />} />
            <Route path="/mobileUser" element={<MobileMyPage />} />
            <Route path="/mobileUser" element={<MobileMyPage />} />
            <Route path="/mobileRecommend" element={<MobileRecommend />} />
            <Route path="/agreement" element={<Agreement />} />
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={isQuery ? <Navigate to="/agreement" replace={true} /> : isAuthenticated ? <Navigate to="/recommend" replace={true} /> : <Navigate to="/login" replace={true} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/userpage" element={<UserPage />} />
            <Route path="/agreement" element={<Agreement />} />
        </Routes>
    );
};

export default App;
