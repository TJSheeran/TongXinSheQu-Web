import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Select, Button, Modal, Avatar, Popover, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '@/store';
import { changeNavItem, changeCommunity } from '@/store/header';
import { useSelector, useDispatch } from 'react-redux';
import { navItems, latAndLong, communityOptions } from '@/constant';
import PublishModal from './components/PublishModal';
import PopoverContent from './components/PopoverContent';

import './index.less';

const { Header } = Layout;
const { Search } = Input;

const CommonHeader = ({ handleRefresh, selectedNav, isUserPage }) => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedCommunity } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const [isShowPublish, setIsShowDetail] = useState(false);
    const [showPopover, setShowPopover] = useState(false);

    const closePopover = () => {
        setShowPopover(false);
    };

    const openPopover = (newOpen) => {
        setShowPopover(newOpen);
    };

    const onNavMenuClick = (e) => {
        navigate(e.key);
        console.log(e.key);
    };

    const onCommunityChange = (value) => {
        dispatch(changeCommunity(value));
    };

    const renderPopoverContent = () => {
        return <PopoverContent closePopover={closePopover} />;
    };

    const onSearch = () => {
        console.log('search');
    };

    const renderAddonBefore = () => {
        return <Select defaultValue={selectedCommunity || '1'} popupClassName="community-name" className="change-community-btn" options={communityOptions} onChange={onCommunityChange} />;
    };

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedNav} defaultSelectedKeys={['/home']} items={navItems} className="header-menu" onClick={onNavMenuClick} />
            <div className="header-right-wrapper">
                {isUserPage ? <div style={{ width: 620 }} /> : <Search addonBefore={renderAddonBefore()} placeholder="寻找你想要的内容" allowClear enterButton size="middle" onSearch={onSearch} style={{ width: 620 }} />}
                {/* <Select defaultValue={selectedCommunity || '1'} popupClassName="community-name" style={{ width: 160, marginLeft: 80 }} options={communityOptions} onChange={onCommunityChange} /> */}
                <Button type="primary" className="publish-btn" onClick={() => setIsShowDetail(true)}>
                    发布帖子
                </Button>
                <Modal open={isShowPublish} onCancel={() => setIsShowDetail(false)} footer={null} width={700}>
                    <PublishModal handleCancel={() => setIsShowDetail(false)} handleRefresh={handleRefresh} />
                </Modal>
                <Popover content={renderPopoverContent()} style={{ width: 300 }} open={showPopover} onOpenChange={openPopover} trigger="hover">
                    <div className="user-wrapper">
                        <Avatar className="tab-user-avatar" icon={<UserOutlined />} src={userState.picture || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                        {/* <div className="user-name">{userState.username}</div> */}
                    </div>
                </Popover>
            </div>
        </Header>
    );
};

export default CommonHeader;
