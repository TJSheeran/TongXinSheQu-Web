import React from 'react';
import { Modal } from 'antd-mobile';
import RootHeader from '../RootHeader';
import RootTabBar from '../RootTabBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './style.less';

export default function MobileMyPage() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);

    const handleExit = () => {
        Modal.confirm({
            title: '确认退出登录吗?',
            content: '',
            okText: '是',
            okType: 'primary',
            cancelText: '取消',
            onConfirm: () => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login', { replace: true });
            }
        });
    };

    return (
        <div className="user-page-wrapper">
            <div className="user-page-content">
                <img className="user-page-avatar" src={userState.picture || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                <div className="user-info-name">{userState.username}</div>
                <div className="user-info-sign">这个人很懒，还没有签名~</div>
                <div className="user-exit-login-btn" onClick={handleExit}>
                    退出登录
                </div>
            </div>
            <div className="user-page-bottom">
                <RootTabBar activateKey="/mobileUser" />
            </div>
        </div>
    );
}
