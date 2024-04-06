import React from 'react';
import { Spin } from 'antd';
import { UserInfoPublishCard } from '../UserInfoPublishCard';

export default function UserInfoPublishList({ publishList, loading, jumpToDetail }) {
    return loading ? (
        <div className="loading-wrapper">
            <Spin tip="Loading" size="large">
                <div className="loading" />
            </Spin>
        </div>
    ) : (
        <div>
            {publishList.map((itemInfo) => {
                return <UserInfoPublishCard info={itemInfo} key={itemInfo.id} jumpToDetail={jumpToDetail} />;
            })}
        </div>
    );
}
