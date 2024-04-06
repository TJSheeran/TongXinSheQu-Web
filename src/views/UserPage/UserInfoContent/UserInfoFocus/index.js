import React, { useEffect, useState } from 'react';
import { Avatar, Divider, Button, Drawer, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { getMyFocus } from '@/services/utils/api';

export default function UserInfoFocus() {
    const userState = useSelector((store) => store.login.user);
    const [focusList, setFocusList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchMyFocus() {
            setLoading(true);
            const params = {
                userid: userState.uid
            };
            const result = await getMyFocus(params);
            console.log('我的关注', result);
            if (result) {
                setFocusList(result);
                setLoading(false);
            }
        }
        fetchMyFocus();
    }, []);
    
    return <div>我的关注</div>;
}
