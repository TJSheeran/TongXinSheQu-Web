import { Divider, Avatar, Button, Modal, message } from 'antd';
import { useSelector } from 'react-redux';
import { fetchDeleteFollow2 } from '@/services/utils/api';

import './index.less';

export default function UserInfoFocusCard({ info, onReset }) {
    const userState = useSelector((store) => store.login.user);

    const handleDeleteFollow = () => {
        const params = {
            authorid: info.authorid,
            userid: userState.uid
        };
        Modal.confirm({
            title: '确认取消关注吗?',
            content: '',
            okText: '确认',
            okType: 'primary',
            cancelText: '取消',
            onOk: async () => {
                const res = await fetchDeleteFollow2(params);
                console.log('返回值', res);
                if (res.code === '200') {
                    message.success('取消关注成功');
                    onReset();
                } else {
                    message.error(res);
                    onReset();
                }
            }
        });
    };
    return (
        <div className="user-info-focus-card-wrapper">
            <div className="user-info-focus-card-content-wrapper">
                <Avatar className="user-info-focus-card-avator" src={info.picture || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                <div className="user-info-focus-card-content">
                    <div className="user-info-focus-card-username">{info.username}</div>
                    <div className="user-info-focus-card-campus">{info.campus}</div>
                </div>
            </div>
            <div className="user-info-focus-handler">
                <Button type="primary" shape="round" className="user-info-focus-card-button" onClick={handleDeleteFollow}>
                    取消关注
                </Button>
                <div className="user-info-focus-card-likenum">{`粉丝数: ${info.followednum}`}</div>
            </div>
        </div>
    );
}
