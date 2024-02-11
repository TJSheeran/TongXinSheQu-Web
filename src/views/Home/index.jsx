import React, { memo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme, Avatar, Select, Card, Modal } from 'antd';
import { navItems, catalogList, communityOptions, catalogKey2Label, latAndLong } from './constant';
import { ContentList } from './components/ContentList';
import { CaixiList } from './components/CaixiList';
import { PublishModal } from './components/PublishModal';
import { UserOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import AuthContext from '../../services/context/AuthContext';
// import { getList } from './action';

import './style.less';
import { getList } from '@/services/utils/api';

const { Header, Content, Sider } = Layout;

const Home = memo(() => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [catalog, setCatalog] = useState('1');
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [community, setCommunity] = useState('1');
    const [isRefresh, setIsRefresh] = useState(false);
    const [isShowPublish, setIsShowDetail] = useState(false);

    useEffect(() => {
        async function fetchListData() {
            setLoading(true);
            const params = {
                category1: catalogKey2Label[catalog],
                // campus: '121.16,31.29'
                campus: latAndLong[community]
            };
            const result = await getList(params);
            if (result) {
                setListData(result);
                setLoading(false);
            }
            console.log('帖子列表', result);
        }
        fetchListData();
    }, [catalog, community, isRefresh]);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };
    const onMenuClick = (e) => {
        console.log('catalog', catalog);
        setCatalog(e.key);
    };
    const onNavMenuClick = (e) => {
        navigate(e.key)
    }
    const onCommunityChange = (value) => {
        console.log('community', latAndLong[community]);
        setCommunity(value);
    };

    const {
        token: { colorBgContainer }
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={navItems} className="header-menu" /> */}
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={navItems}
                    className="header-menu"
                    onClick={onNavMenuClick}
                />
                <Select
                    defaultValue="1"
                    popupClassName="community-name"
                    style={{ width: 160, marginLeft: 600 }}
                    // bordered={false}
                    options={communityOptions}
                    onChange={onCommunityChange}
                />
                <Button type="primary" className="publish-btn" onClick={() => setIsShowDetail(true)}>
                    发布帖子
                </Button>
                <Modal open={isShowPublish} onCancel={() => setIsShowDetail(false)} footer={null} width={700}>
                    <PublishModal
                        handleCancel={() => setIsShowDetail(false)}
                        onChangeRefresh={() => {
                            setIsRefresh(!isRefresh);
                            console.log(666);
                        }}
                    />
                </Modal>
                <Avatar className="tab-user-avatar" icon={<UserOutlined />} src={authCtx.userPicUrl} />
                <div className="user-name">{authCtx.username}</div>
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['10']}
                        style={{
                            height: '100%',
                            borderRight: 0
                        }}
                        items={catalogList}
                        onClick={onMenuClick}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px'
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <ContentList jumpToDetail={jumpToDetail} listData={listData} loading={loading} />
                        <Card className="caixi-list" title="热点词条">
                            <CaixiList />
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
});

export default Home;
