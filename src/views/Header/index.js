import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Select, Button, Modal, Avatar, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '@/store';
import { changeNavItem, changeCommunity } from '@/store/header';
import { useSelector, useDispatch } from 'react-redux';
import { navItems, latAndLong, communityOptions } from '@/constant';
import PublishModal from './components/PublishModal';
import PopoverContent from './components/PopoverContent';

import './index.less';

const { Header } = Layout;

const CommonHeader = ({ handleRefresh }) => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedNav, selectedCommunity } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const [isShowPublish, setIsShowDetail] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    console.log(selectedNav);

    const closePopover = () => {
        setShowPopover(false);
    };

    const openPopover = (newOpen) => {
        setShowPopover(newOpen);
    };

    const onNavMenuClick = (e) => {
        dispatch(changeNavItem(e.key));
        navigate(e.key);
        console.log(e.key)
    };

    const onCommunityChange = (value) => {
        dispatch(changeCommunity(value));
    };

    const renderPopoverContent = () => {
        return <PopoverContent closePopover={closePopover} />;
    };

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedNav} items={navItems} className="header-menu" onClick={onNavMenuClick} />
            <Select defaultValue={selectedCommunity || '1'} popupClassName="community-name" style={{ width: 160, marginLeft: 600 }} options={communityOptions} onChange={onCommunityChange} />
            <Button type="primary" className="publish-btn" onClick={() => setIsShowDetail(true)}>
                发布帖子
            </Button>
            <Modal open={isShowPublish} onCancel={() => setIsShowDetail(false)} footer={null} width={700}>
                <PublishModal
                    handleCancel={() => setIsShowDetail(false)}
                    handleRefresh={handleRefresh}
                />
            </Modal>
            <Popover content={renderPopoverContent()} style={{ width: 300 }} open={showPopover} onOpenChange={openPopover} trigger="hover">
                <div className="user-wrapper">
                    <Avatar className="tab-user-avatar" icon={<UserOutlined />} src={userState.picture} />
                    <div className="user-name">{userState.username}</div>
                </div>
            </Popover>
        </Header>
    );
};

export default CommonHeader;
