import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu, Select, Button, Modal, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import store from '@/store';
import { changeNavItem, changeCommunity } from '@/store/header';
import { useSelector, useDispatch } from 'react-redux';
import { navItems, latAndLong, communityOptions } from '@/constant';
import PublishModal from './components/PublishModal';

const { Header } = Layout;

const CommonHeader = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedNav, selectedCommunity } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const [isShowPublish, setIsShowDetail] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);

    const onNavMenuClick = (e) => {
        dispatch(changeNavItem(e.key));
        navigate(e.key);
    };

    const onCommunityChange = (value) => {
        dispatch(changeCommunity(value));
    };

    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <Menu theme="dark" mode="horizontal" selectedKeys={selectedNav} defaultSelectedKeys={['/home']} items={navItems} className="header-menu" onClick={onNavMenuClick} />
            <Select defaultValue={selectedCommunity || '1'} popupClassName="community-name" style={{ width: 160, marginLeft: 600 }} options={communityOptions} onChange={onCommunityChange} />
            <Button type="primary" className="publish-btn" onClick={() => setIsShowDetail(true)}>
                发布帖子
            </Button>
            <Modal open={isShowPublish} onCancel={() => setIsShowDetail(false)} footer={null} width={700}>
                <PublishModal
                    handleCancel={() => setIsShowDetail(false)}
                    onChangeRefresh={() => {
                        setIsRefresh(!isRefresh);
                    }}
                />
            </Modal>
            <Avatar className="tab-user-avatar" icon={<UserOutlined />} src={userState.picture} />
            <div className="user-name">{userState.username}</div>
        </Header>
    );
};

export default CommonHeader;
