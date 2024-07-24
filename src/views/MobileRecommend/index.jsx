import React from 'react';
import MobileRecommendList from '../MobileRecommendList';
import RootHeader from '../RootHeader';
import RootTabBar from '../RootTabBar';

import './style.less';

export default function MobileRecommend() {
    return (
        <div className="recommend-page-wrapper">
            <div className="recommend-page-top">
                <RootHeader />
            </div>
            <div className="recommend-page-body">
                <MobileRecommendList />
            </div>
            <div className="recommend-page-bottom">
                <RootTabBar activateKey="/mobileRecommend" />
            </div>
        </div>
    );
}
