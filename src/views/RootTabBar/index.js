import React, { useState } from 'react';
import { Badge, TabBar } from 'antd-mobile';
import store from '@/store';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { AppOutline, MessageOutline, MessageFill, UnorderedListOutline, UserOutline } from 'antd-mobile-icons';

export default (props) => {
    const navigate = useNavigate();
    const { activateKey } = props;

    const tabs = [
        {
            key: '/mobileHome',
            title: '首页',
            icon: <AppOutline />
        },
        {
            key: '/mobileRecommend',
            title: '推荐',
            icon: <UnorderedListOutline />
        },
        {
            key: '/mobileUser',
            title: '我的',
            icon: <UserOutline />
        }
    ];

    const handleChange = (value) => {
        navigate(value);
    };

    return (
        <div className="tab-bar-wrapper">
            <TabBar activeKey={activateKey} onChange={handleChange}>
                {tabs.map((item) => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                ))}
            </TabBar>
        </div>
    );
};
