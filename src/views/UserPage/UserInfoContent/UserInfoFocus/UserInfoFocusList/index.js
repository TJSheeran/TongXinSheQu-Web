import React from 'react';
import { Spin } from 'antd';
import UserInfoFocusCard from '../UserInfoFocusCard';

export default function UserInfoFocusList({ focusList, loading, onReset }) {
    return loading ? (
        <div className="loading-wrapper">
            <Spin tip="Loading" size="large">
                <div className="loading" />
            </Spin>
        </div>
    ) : (
        <div>
            {focusList.map((itemInfo) => {
                return <UserInfoFocusCard info={itemInfo} key={`${itemInfo.authorid}${itemInfo.campus}`} onReset={onReset} />;
            })}
        </div>
    );
}
