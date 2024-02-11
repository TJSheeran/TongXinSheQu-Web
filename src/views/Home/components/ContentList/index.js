import React, { Component } from 'react';
import { Flex, Spin } from 'antd';
import { ContentCard } from '../ContentCard';
import { catalogKey2Label } from './constant';

import './index.less';

export class ContentList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cardList: [],
    //         loading: false
    //     };
    // }

    // async componentDidMount() {
    //     const { catalog } = this.props;
    //     console.log(666, catalog);
    //     this.setState({
    //         loading: true
    //     });
    //     const params = {
    //         category1: '生活服务',
    //         campus: '121.16,31.29'
    //     };
    //     const res = await getList(params);
    //     if (res) {
    //         this.setState({
    //             cardList: res,
    //             loading: false
    //         });
    //     }
    // }

    render() {
        const { jumpToDetail, listData, loading } = this.props;
        return loading ? (
            <div className='loading-wrapper'>
                <Spin tip="Loading" size="large">
                    <div className="loading" />
                </Spin>
            </div>
        ) : (
            <div>
                {listData.map((itemInfo) => {
                    return <ContentCard info={itemInfo} jumpToDetail={jumpToDetail} />;
                })}
            </div>
        );
    }
}
