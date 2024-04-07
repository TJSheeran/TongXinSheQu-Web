import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { latAndLong } from '@/constant';
import { getList } from '@/services/utils/api';
import CommonHeader from '../Header';
import { Card, FloatButton, Spin } from 'antd';
import { RecommendList } from '../Recommend/components/RecommendList';
import './style.less';
const Discuss = () => {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { selectedCommunity } = useSelector((state) => state.header);
    const [loading, setLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [discussInfo, setDiscussInfo] = useState([]);
    useEffect(() => {
        async function fetchDiscuss() {
            setLoading(true);
            const params = {
                category1: '吐槽',
                campus: latAndLong[selectedCommunity]
            };
            const result = await getList(params);
            if (result) {
                setDiscussInfo(result);
                setLoading(false);
            }
        }
        fetchDiscuss();
    }, [selectedCommunity, isRefresh]);
    
    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    return (
        <>
            <CommonHeader
                handleRefresh={() => {
                    setIsRefresh(!isRefresh);
                }}
                selectedNav="/discuss"
            />

            <div className="box">
                <Card className="discuss-card-wrapper">
                    <div className="d-header">吐槽专区</div>
                    {loading ? (
                        <div className="d-loading-warpper">
                            <Spin tip="Loading" size="large">
                                <div className="d-loading"></div>
                            </Spin>
                        </div>
                    ) : (
                        <RecommendList jumpToDetail={jumpToDetail} recommendInfo={discussInfo} />
                    )}
                </Card>
                <FloatButton.BackTop tooltip="返回顶部" />
            </div>
        </>
    );
};

export default Discuss;
