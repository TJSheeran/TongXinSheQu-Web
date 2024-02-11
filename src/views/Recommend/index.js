import { Card, Avatar, Button } from 'antd';
import React, { memo, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { getRecommend } from '../../services/utils/api';
import AuthContext from '../../services/context/AuthContext';
import { RecommendList } from './components/RecommendList';

import './index.less';

const Recommend = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [recommendInfo, setRecommendInfo] = useState([]);

    useEffect(() => {
        async function fetchRecommend() {
            setLoading(true);
            const params = {
                userid: authCtx.uid,
                location: '121.21416,31.286012'
            };
            const result = await getRecommend(params);
            if (result) {
                setRecommendInfo(result);
                setLoading(false);
            }
            console.log('详情页', result);
        }
        fetchRecommend();
    }, []);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    return (
        <div className="bg">
            <Card className="detail-card-wrapper">
                <div className="r-header">猜你喜欢</div>
                <RecommendList jumpToDetail={jumpToDetail} recommendInfo={recommendInfo} loading={loading} />
            </Card>
        </div>
    );
};

export default Recommend;
