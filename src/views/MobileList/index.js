import React, { useState, useEffect } from 'react';
import { List, SpinLoading } from 'antd-mobile';
import { getList } from '@/services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';
import { useNavigate } from 'react-router-dom';
import { navItems, catalogList, communityOptions, catalogKey2Label, latAndLong } from '@/constant';

import './style.less';
import ListItem from './components/ListItem';
import { Button } from 'antd';

export default function MobileList(props) {
    const { category } = props;
    const navigate = useNavigate();
    const userState = useSelector((state) => state.login.user);
    const { searchKey, selectedCommunity } = useSelector((state) => state.header);
    // const [catalog, setCatalog] = useState('1');
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);
    const [isShowFeedback, setIsShowFeedback] = useState(false);

    useEffect(() => {
        fetchAllListData();
        console.log(listData);
    }, [category, selectedCommunity, isRefresh, searchKey]);

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
            category1: category,
            campus: latAndLong[selectedCommunity]
        };
        fetchListData(params);
    };

    return loading ? (
        <SpinLoading color="primary" className="loading" />
    ) : (
        <List className="mobile-list-body">
            {listData.length > 0 &&
                listData.map((item, index) => {
                    return (
                        <List.Item key={index}>
                            <ListItem info={item} />
                        </List.Item>
                    );
                })}
        </List>
    );
}
