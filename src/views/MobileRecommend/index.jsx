import React from 'react';
import RootHeader from '../RootHeader';
import RootTabBar from '../RootTabBar';

import './style.less';

export default function MobileRecommend() {
    return (
        <div className="recommend-page-wrapper">
            <div className="recommend-page-top"></div>
            <div>666</div>
            <div className="recommend-page-bottom">
                <RootTabBar activateKey="/mobileRecommend" />
            </div>
        </div>
    );
}
