import { Avatar, Divider } from 'antd';
import { useSelector } from 'react-redux';

import React from 'react';

import './index.less';

const PopoverContent = () => {
    const userState = useSelector((state) => state.login.user);

    return (
        <div className="popover-content-body">
            <div className="popover-content-avatar-wrapper">
                <Avatar className="popover-content-avatar" src={userState.picture}></Avatar>
            </div>
            <div className="popover-content-username-wrapper">{userState.username}</div>
            <div className="popover-content-handler-wrapper">
                <div className="popover-content-handler">个人主页</div>
                <div className="popover-content-handler">修改信息</div>
                <div className="popover-content-handler">退出登录</div>
            </div>
        </div>
    );
};

export default PopoverContent;
