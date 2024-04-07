import React, { useEffect, useState } from 'react';
import { Avatar, Divider, Button, Drawer, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { getMyFocus } from '@/services/utils/api';
import UserInfoFocusList from './UserInfoFocusList';

import './index.less';

export default function UserInfoFocus() {
    const userState = useSelector((store) => store.login.user);
    const [focusList, setFocusList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isReset, setIsReset] = useState(false);

    useEffect(() => {
        async function fetchMyFocus() {
            setLoading(true);
            console.log(userState.uid);
            const result = await getMyFocus(userState.uid);
            console.log('我的关注', result);
            if (result) {
                setFocusList(result);
                setLoading(false);
            }
        }
        fetchMyFocus();
    }, [isReset]);

    return (
        <div>
            <div className="focus-title">我的关注列表</div>
            <UserInfoFocusList focusList={focusList} loading={loading} onReset={() => setIsReset(!isReset)} />
        </div>
    );
}
