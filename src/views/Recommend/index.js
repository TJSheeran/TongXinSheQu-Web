import { Card, Avatar, Button } from 'antd';
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
    }, selectedCommunity);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    return (
        <div className="bg">
            <CommonHeader />
            <Card className="detail-card-wrapper">
                <div className="r-header">猜你喜欢</div>
                <RecommendList jumpToDetail={jumpToDetail} recommendInfo={recommendInfo} loading={loading} />
            </Card>
        </div>
    );
};

export default Recommend;
