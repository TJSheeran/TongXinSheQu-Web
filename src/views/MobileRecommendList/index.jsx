import React, { useState, useEffect } from 'react';
import { List, SpinLoading } from 'antd-mobile';
import { getRecommend } from '@/services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';
import { useNavigate } from 'react-router-dom';
import { navItems, catalogList, communityOptions, catalogKey2Label, latAndLong } from '@/constant';
import ListItem from '@/views/MobileList/components/ListItem';

import './style.less';

export default function MobileRecommendList() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { searchKey, selectedCommunity } = useSelector((state) => state.header);
    const [catalog, setCatalog] = useState('1');
    const [recommendInfo, setRecommendInfo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isShowFeedback, setIsShowFeedback] = useState(false);

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

    return loading ? (
        <SpinLoading color='primary' className='loading' />
    ) : (
        <List>
            {recommendInfo.length > 0 &&
                recommendInfo.map((item, index) => {
                    return (
                        <List.Item key={index}>
                            <ListItem info={item} />
                        </List.Item>
                    );
                })}
        </List>
    );
}
