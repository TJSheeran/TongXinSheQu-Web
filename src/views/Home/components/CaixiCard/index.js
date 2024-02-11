import React, { Component } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, StarOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'

import './index.less'

export class CaixiCard extends Component {
    render() {
        const { content, hot } = this.props
        return (
            <div>
                <Card
                    className="caixi-card-wrapper"
                    // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    // actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}
                    hoverable="true"
                >
                    <div className="caixi-card-content">
                        <div>{content}</div>
                        <div>{hot}</div>
                    </div>
                </Card>
            </div>
        )
    }
}
