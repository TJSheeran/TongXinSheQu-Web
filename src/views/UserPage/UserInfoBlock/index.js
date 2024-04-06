import React, { useState } from 'react';
import { Avatar, Divider, Button, Drawer, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { userPageItem } from '@/constant';

import './index.less';

export default function UserInfoBlock({ onMenuClick }) {
    const userState = useSelector((state) => state.login.user);

    return (
        <div className="user-info-box">
            <div>
                <Avatar className="user-info-avatar" src={userState.picture || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'}></Avatar>
            </div>
            <div className="user-info-name">{userState.username}</div>
            <div className="user-info-sign">这个人很懒，还没有签名~</div>
            <div className="user-info-menu-wrapper">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        height: '100%',
                        borderRight: 0
                    }}
                    items={userPageItem}
                    onClick={onMenuClick}
                />
            </div>
        </div>
    );
}
