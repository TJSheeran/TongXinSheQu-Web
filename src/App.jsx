// 导入必要的React和路由相关组件
import React, { memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// 导入PC端页面组件
import Home from '@/views/Home';
import Login from '@/views/Login';
import Recommend from '@/views/Recommend';
import Detail from '@/views/Detail';
import Register from '@/views/Register';
import Discuss from '@/views/Discuss';
import UserPage from '@/views/UserPage';

// 导入移动端页面组件
import MobileHome from '@/views/MobileHome';
import MobileDetail from '@/views/MobileDetail';
import MobileMyPage from '@/views/MobileMyPage';
import MobileRecommend from '@/views/MobileRecommend';

// 导入通用组件和工具函数
import Agreement from '@/views/Agreement';
import { isMobile } from '@/utils';

// 定义App组件
const App = () => {
    // 从localStorage获取token，判断用户是否已登录
    const token = localStorage.getItem('token');
    const isAuthenticated = token && token !== 'undefined' ? true : false;

    // 获取URL参数，判断是否需要显示协议页面
    const queryParams = new URLSearchParams(window.location.search);
    const isQuery = queryParams.get('is') === 'agreement';
    console.log(isQuery);

    // 根据设备类型返回不同的路由配置
    return isMobile() ? (
        // 移动端路由配置
        <Routes>
            <Route path="/" element={isQuery ? <Navigate to="/agreement" replace={true} /> : isAuthenticated ? <Navigate to="/mobileHome" replace={true} /> : <Navigate to="/login" replace={true} />} />
            <Route path="/mobileHome" element={<MobileHome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mobileDetail" element={<MobileDetail />} />
            <Route path="/mobileUser" element={<MobileMyPage />} />
            <Route path="/mobileRecommend" element={<MobileRecommend />} />
            <Route path="/agreement" element={<Agreement />} />
        </Routes>
    ) : (
        // PC端路由配置
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
