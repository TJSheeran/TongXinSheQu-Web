import React, { Component } from 'react';
import { RecommendCard } from '../RecommendCard';

import './index.less';

export class RecommendList extends Component {
    render() {
        const { jumpToDetail, recommendInfo, loading } = this.props;
        return (
            <div>
                {recommendInfo.map((itemInfo) => {
                    return <RecommendCard info={itemInfo} key={itemInfo.id} jumpToDetail={jumpToDetail} />;
                })}
            </div>
        );
    }
}
