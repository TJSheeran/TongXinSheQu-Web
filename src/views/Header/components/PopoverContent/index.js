import React, { useState } from 'react';
import { Avatar, Divider, Button, Drawer, Modal } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DrawerContent from '../DrawerContent';

import './index.less';

const PopoverContent = ({ closePopover }) => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const [showDrawer, setShowDrawer] = useState(false);

    const openDrawer = () => {
        setShowDrawer(true);
        closePopover();
    };

    const onClose = () => {
        setShowDrawer(false);
    };

    const handleExit = () => {
        Modal.confirm({
            title: '确认退出登录吗?',
            content: '',
            okText: '是',
            okType: 'primary',
            cancelText: '否',
            onOk: () => {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                navigate('/login');
            }
        });
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
                <Button type="text" className="popover-content-handler" onClick={handleExit}>
                    退出登录
                </Button>
                <Drawer title="修改个人信息" placement="left" closable={true} onClose={onClose} open={showDrawer}>
                    <DrawerContent />
                </Drawer>
            </div>
        </div>
    );
};

export default PopoverContent;
