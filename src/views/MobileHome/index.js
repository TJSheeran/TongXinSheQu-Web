import React, { useState } from 'react';
import { Tabs, SideBar } from 'antd-mobile';
import RootHeader from '../RootHeader';
import RootTabBar from '../RootTabBar';
import MobileList from '../MobileList';

import './style.less';

export const tabs = [
    {
        key: '美食',
        title: '美食'
    },
    {
        key: '休闲',
        title: '休闲'
    },
    {
        key: '二手',
        title: '二手'
    },
    {
        key: '社区服务',
        title: '社区服务'
    },
    {
        key: '交通出行',
        title: '交通出行'
    }
];

export default function MobileHome() {
    const [activeKey, setActiveKey] = useState('美食');

    return (
        <div className="home-page-wrapper">
            <div className="home-page-top">
                <RootHeader />
                {/* <Tabs>
                    <Tabs.Tab title="水果" key="fruits">
                        菠萝
                    </Tabs.Tab>
                    <Tabs.Tab title="蔬菜" key="vegetables">
                        西红柿
                    </Tabs.Tab>
                    <Tabs.Tab title="动物" key="animals">
                        蚂蚁
                    </Tabs.Tab>
                </Tabs> */}
            </div>
            <div className="home-page-body">
                <SideBar className="home-page-body-nav" onChange={setActiveKey}>
                    {tabs.map((item) => (
                        <SideBar.Item key={item.key} title={item.title} />
                    ))}
                </SideBar>
                <div className="home-page-body-list">
                    <MobileList category={activeKey} />
                </div>
            </div>
            <div className="home-page-bottom">
                <RootTabBar />
            </div>
        </div>
    );
}
