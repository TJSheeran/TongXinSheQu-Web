import React, { Component } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

import './index.less';

const { Meta } = Card;

export class UserInfoPublishCard extends Component {
    render() {
        const { info, jumpToDetail } = this.props;
        return (
            <div>
                <Card className="card-wrapper" hoverable="true" extra={info.isCollected ? <StarFilled className="collect-btn-true" /> : <StarOutlined className="collect-btn-false" />} title={info.title} onClick={() => jumpToDetail(info)}>
                    <div className="info-wrapper">
                        <div className="user-info">
                            <Avatar className="user-avatar" src={info.baikeAuthorPic || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                            <div>
                                <div className="user-name">{info.author}</div>
                                <div className="publish-time">{info.createtime.slice(0, 11)}</div>
                            </div>
                        </div>
                        <div className="user-region">{info.campus}</div>
                    </div>
                    <div className="card-content">{info.content}</div>
                    <div className="card-footer">
                        <div className="footer-answer-nums">{info.collectnum} 人收藏该问题</div>
                    </div>
                </Card>
            </div>
        );
    }
}
