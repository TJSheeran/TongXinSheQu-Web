import React, { useState } from 'react';
import { Avatar, Divider, Button, Drawer } from 'antd';
import { useSelector } from 'react-redux';

import './index.less';

const PopoverContent = ({ closePopover }) => {
    const userState = useSelector((state) => state.login.user);
    const [showDrawer, setShowDrawer] = useState(false);

    const openDrawer = () => {
        setShowDrawer(true);
        closePopover();
    };

    const onClose = () => {
        setShowDrawer(false);
    };

    return (
        <div className="popover-content-body">
            <div className="popover-content-avatar-wrapper">
                <Avatar className="popover-content-avatar" src={userState.picture}></Avatar>
            </div>
            <div className="popover-content-username-wrapper">{userState.username}</div>
            <div className="popover-content-handler-wrapper">
                <Button disabled type="text" className="popover-content-handler">
                    个人主页
                </Button>
                <Button type="text" className="popover-content-handler" onClick={openDrawer}>
                    修改信息
                </Button>
                <Button type="text" className="popover-content-handler">
                    退出登录
                </Button>
                <Drawer title="修改个人信息" placement="left" closable={true} onClose={onClose} open={showDrawer}></Drawer>
            </div>
        </div>
    );
};

export default PopoverContent;
