import React, { useState } from 'react';
import { Button, Layout, Menu, theme, Select, Card, Modal, FloatButton } from 'antd';
import { useSelector } from 'react-redux';
import CommonHeader from '../Header';
import UserInfoBlock from './UserInfoBlock';
import UserInfoContent from './UserInfoContent';
import CommonFooter from '../Footer';
import './index.less';

const { Content, Sider } = Layout;

export default function UserPage({ onCancel }) {
    const {
        token: { colorBgContainer }
    } = theme.useToken();

    const [userInfoSelectItem, setUserInfoSelectItem] = useState('1');

    return (
        <div>
            <CommonHeader
                handleRefresh={() => {
                    console.log('用户主页刷新');
                }}
                selectedNav="/userpage"
                isUserPage={true}
            />
            <Layout>
                <Sider
                    width={300}
                    style={{
                        background: colorBgContainer
                    }}
                >
                    <UserInfoBlock
                        onMenuClick={(item) => {
                            setUserInfoSelectItem(item.key);
                            console.log(userInfoSelectItem);
                        }}
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
                            minHeight: 1000,
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <UserInfoContent userInfoSelectItem={userInfoSelectItem} />
                    </Content>
                </Layout>
            </Layout>
            <CommonFooter />
        </div>
    );
}
