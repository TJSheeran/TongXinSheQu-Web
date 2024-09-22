import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { latAndLong } from '@/constant';
import { getList } from '@/services/utils/api';
import CommonHeader from '../Header';
import { Card, FloatButton, Spin } from 'antd';
import { RecommendList } from '../Recommend/components/RecommendList';
import CommonFooter from '../Footer';
import './style.less';
// Discuss组件定义
const Discuss = () => {
    // 使用useNavigate钩子进行路由导航
    const navigate = useNavigate();
    // 从Redux store中获取用户状态
    const userState = useSelector((state) => state.login.user);
    // 从Redux store中获取选中的社区
    const { selectedCommunity } = useSelector((state) => state.header);
    // 定义加载状态
    const [loading, setLoading] = useState(false);
    // 定义刷新状态
    const [isRefresh, setIsRefresh] = useState(false);
    // 定义讨论信息状态
    const [discussInfo, setDiscussInfo] = useState([]);

    // 使用useEffect钩子获取讨论列表
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

    // 跳转到详情页的函数
    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    // 渲染组件
    return (
        <>
            {/* 公共头部组件 */}
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
                        // 加载中显示加载动画
                        <div className="d-loading-warpper">
                            <Spin tip="Loading" size="large">
                                <div className="d-loading"></div>
                            </Spin>
                        </div>
                    ) : (
                        // 加载完成显示推荐列表
                        <RecommendList jumpToDetail={jumpToDetail} recommendInfo={discussInfo} />
                    )}
                </Card>
                {/* 返回顶部按钮 */}
                <FloatButton.BackTop tooltip="返回顶部" />
            </div>
            {/* 公共底部组件 */}
            <CommonFooter />
        </>
    );
};

export default Discuss;
