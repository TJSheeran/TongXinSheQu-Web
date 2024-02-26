import React, { Component } from 'react';
import { Spin } from 'antd';
import { RecommendCard } from '../RecommendCard';

import './index.less';

export class RecommendList extends Component {
    
    render() {
        const { jumpToDetail, recommendInfo, loading } = this.props;
        return loading ? (
            <div className='r-loading-wrapper'>
                <Spin tip="Loading" size="large">
                    <div className="r-loading" />
                </Spin>
            </div>
        ) : (
            <div>
                {recommendInfo.map((itemInfo) => {
                    return <RecommendCard info={itemInfo} key={itemInfo.id} jumpToDetail={jumpToDetail} />;
                })}
            </div>
        );
    }
}
