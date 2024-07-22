import React, { useState, useEffect } from 'react';
import { List } from 'antd-mobile';
import { getList } from '@/services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';
import { useNavigate } from 'react-router-dom';
import { navItems, catalogList, communityOptions, catalogKey2Label, latAndLong } from '@/constant';

import './style.less';
import ListItem from './components/ListItem';
import { Button } from 'antd';

export default function MobileList() {
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { searchKey, selectedCommunity } = useSelector((state) => state.header);
    const [catalog, setCatalog] = useState('1');
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isShowFeedback, setIsShowFeedback] = useState(false);

    useEffect(() => {
        fetchAllListData();
        console.log(listData);
    }, [catalog, selectedCommunity, isRefresh]);

    const fetchListData = async (params) => {
        setLoading(true);
        const result = await getList(params);
        console.log(result);
        if (result) {
            setListData(result);
            setLoading(false);
        }
    };

    const fetchAllListData = () => {
        const params = {
            searchKey: searchKey,
            category1: catalogKey2Label[catalog],
            campus: latAndLong[selectedCommunity]
        };
        fetchListData(params);
    };
    
    return (
        <List>
            {listData ||
                [].map((item, index) => (
                    <List.Item key={index}>
                        <ListItem info={item} />
                    </List.Item>
                ))}
        </List>
    );
}
