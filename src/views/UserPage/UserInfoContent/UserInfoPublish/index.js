import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMyPublish } from '@/services/utils/api';
import UserInfoPublishList from './UserInfoPublishList';

import './index.less';

const UserInfoPublish = () => {
    const navigate = useNavigate();
    const userState = useSelector((store) => store.login.user);
    const [publishList, setPublishList] = useState([]);
    const [loading, setLoading] = useState(false);

    const jumpToDetail = (info) => {
        navigate('/detail', { state: { info } });
    };

    useEffect(() => {
        async function fetchMyPublish() {
            setLoading(true);
            // const params = {
            //     userid: userState.uid
            // };
            const result = await getMyPublish(userState.uid);
            console.log('我的发布', result);
            if (result) {
                setPublishList(result);
                setLoading(false);
            }
        }
        fetchMyPublish();
    }, []);

    return (
        <div>
            <div className="publish-title">我发布的内容</div>
            <UserInfoPublishList jumpToDetail={jumpToDetail} publishList={publishList} loading={loading} />
        </div>
    );
};

export default UserInfoPublish;
