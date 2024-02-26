import React, { Component } from 'react';
import { Flex, Spin } from 'antd';
import { ContentCard } from '../ContentCard';
import { catalogKey2Label } from '@/constant';

import './index.less';

export class ContentList extends Component {
    render() {
        const { jumpToDetail, listData, loading } = this.props;
        return loading ? (
            <div className="loading-wrapper">
                <Spin tip="Loading" size="large">
                    <div className="loading" />
                </Spin>
            </div>
        ) : (
            <div>
                {listData.map((itemInfo) => {
                    return <ContentCard info={itemInfo} key={itemInfo.id} jumpToDetail={jumpToDetail} />;
                })}
            </div>
        );
    }
}
