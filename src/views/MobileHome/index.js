import React from 'react';
import { Tabs } from 'antd-mobile';
import RootHeader from '../RootHeader';
import RootTabBar from '../RootTabBar';
import MobileList from '../MobileList';

import './style.less';

export default function MobileHome() {
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
                <MobileList />
            </div>
            <div className="home-page-bottom">
                <RootTabBar />
            </div>
        </div>
    );
}
