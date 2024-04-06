import React, { memo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Layout, Menu, theme, Select, Card, Modal, FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { navItems, catalogList, communityOptions, catalogKey2Label, latAndLong } from '@/constant';
import { ContentList } from './components/ContentList';
import { CaixiList } from './components/CaixiList';
import store from '@/store';
import { useSelector } from 'react-redux';
import CommonHeader from '../Header';
import { getList } from '@/services/utils/api';
import FeedbackModal from '../FeedbackModal';

import './style.less';

const { Header, Content, Sider } = Layout;

const Home = memo(() => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedCommunity } = useSelector((state) => state.header);
    const [catalog, setCatalog] = useState('1');
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isShowFeedback, setIsShowFeedback] = useState(false);

    useEffect(() => {
        async function fetchListData() {
            setLoading(true);
            const params = {
                category1: catalogKey2Label[catalog],
                campus: latAndLong[selectedCommunity]
            };
            console.log(666, params);
            const result = await getList(params);
            if (result) {
                setListData(result);
                setLoading(false);
            }
            console.log('帖子列表', result);
        }
        fetchListData();
        console.log('selectedCommunity', selectedCommunity);
    }, [catalog, selectedCommunity, isRefresh]);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };
    const onMenuClick = (e) => {
        console.log('catalog', catalog);
        setCatalog(e.key);
    };

    const {
        token: { colorBgContainer }
    } = theme.useToken();

    return (
        <Layout>
            <CommonHeader
                handleRefresh={() => {
                    setIsRefresh(!isRefresh);
                }}
                selectedNav="/home"
            />
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
                <FloatButton icon={<QuestionCircleOutlined />} onClick={() => setIsShowFeedback(true)} tooltip="问题反馈" />
                <FloatButton.BackTop tooltip="返回顶部" />
                <Modal open={isShowFeedback} onCancel={() => setIsShowFeedback(false)} footer={null} width={550}>
                    <FeedbackModal onCancel={() => setIsShowFeedback(false)} />
                </Modal>
            </Layout>
        </Layout>
    );
});

export default Home;
