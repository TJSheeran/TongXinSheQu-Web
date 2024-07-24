import React from 'react';
import { Card, Button, Toast, Avatar } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

import './index.less';

export default function ListItem(props) {
    const navigate = useNavigate();

    const { info } = props;

    const onClick = () => {
        navigate('/mobileDetail');
    };

    return (
        <Card className="mobile-card-wrapper" title={info.title} onBodyClick={onClick} onHeaderClick={onClick}>
            <div className="mobile-info-wrapper">
                <div className="mobile-user-info">
                    <Avatar style={{ '--size': '50px' }} src={info.baikeAuthorPic || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                    <div>
                        <div className="mobile-user-name">{info.author}</div>
                        <div className="mobile-publish-time">{info.createtime.slice(0, 11)}</div>
                    </div>
                </div>
                <div className="mobile-user-region">{info.campus}</div>
            </div>
            <div className="mobile-card-content">{info.content}</div>
            <div className="mobile-card-footer">
                <div className="mobile-footer-answer-nums">{`${info.collectnum} 人收藏该问题`}</div>
            </div>
        </Card>
    );
}
