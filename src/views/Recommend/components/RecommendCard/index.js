import React, { Component } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'

import './index.less'

const { Meta } = Card

export class RecommendCard extends Component {
    
    render() {
        const { info, jumpToDetail } = this.props
        const newInfo = {
            ...info,
            userpic: info.userpic || 'https://s2.loli.net/2024/01/25/Dakegmh5YzU2fXO.jpg'
        }
        return (
            <div>
                <Card
                    className="r-card-wrapper"
                    // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    // actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                    hoverable="true"
                    extra={newInfo.isCollected ? <StarFilled className="r-collect-btn-true" /> : <StarOutlined className="collect-btn-false" />}
                    title={newInfo.title}
                    onClick={() => jumpToDetail(newInfo)}
                >
                    <div className="r-info-wrapper">
                        <div className="r-user-info">
                            <Avatar className="r-user-avatar" src={newInfo.baikeAuthorPic || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
                            <div>
                                <div className="r-user-name">{newInfo.author}</div>
                                <div className="r-publish-time">{newInfo.createtime.slice(0, 11)}</div>
                            </div>
                        </div>
                        <div className="r-user-region">{newInfo.campus}</div>
                    </div>
                    <div className="r-card-content">{newInfo.content}</div>
                    <div className="r-card-footer">
                        <div className="r-footer-answer-nums">{newInfo.collectnum} 人收藏该问题</div>
                    </div>
                </Card>
            </div>
        )
    }
}
