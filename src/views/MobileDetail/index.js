import React from 'react';
import lockerImg from '@/assets/icon/locker.png';

import './style.less';

export default function MobileDetail() {
    return (
        <div className="mobile-detail-body">
            <div className="mobile-detail-icon-wrapper">
                <img className="mobile-detail-icon" src={lockerImg} />
                <div className="mobile-detail-des">更多功能请移步电脑网页版</div>
            </div>
        </div>
    );
}
