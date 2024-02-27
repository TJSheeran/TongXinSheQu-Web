import { Card, Avatar, Button, Spin, FloatButton } from 'antd';
import React, { memo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRecommend } from '../../services/utils/api';
import { RecommendList } from './components/RecommendList';
import CommonHeader from '@/views/Header';
import { latAndLong } from '@/constant';
import store from '@/store';
import { useSelector } from 'react-redux';

import './index.less';

const Recommend = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedCommunity } = useSelector((state) => state.header);
    const [loading, setLoading] = useState(false);
    const [recommendInfo, setRecommendInfo] = useState([]);
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        async function fetchRecommend() {
            setLoading(true);
            const params = {
                userid: userState.uid,
                location: latAndLong[selectedCommunity]
            };
            const result = await getRecommend(params);
            if (result) {
                setRecommendInfo(result);
                setLoading(false);
            }
            console.log('详情页', result);
        }
        fetchRecommend();
    }, [selectedCommunity, isRefresh]);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    return (
        <div>
            <CommonHeader
                handleRefresh={() => {
                    setIsRefresh(!isRefresh);
                }}
            />
            <Card className="detail-card-wrapper">
                <div className="r-header">猜你喜欢</div>
                {loading ? (
                    <div className="r-loading-wrapper">
                        <Spin tip="Loading" size="large">
                            <div className="r-loading" />
                        </Spin>
                    </div>
                ) : (
                    <RecommendList jumpToDetail={jumpToDetail} recommendInfo={recommendInfo} />
                )}
            </Card>
            <FloatButton.BackTop tooltip='返回顶部' />
        </div>
    );
};

export default Recommend;
