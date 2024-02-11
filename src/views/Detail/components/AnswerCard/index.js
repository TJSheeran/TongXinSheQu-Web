import React, { Component } from 'react'
import { Avatar, Card, Divider } from 'antd'

import './index.less'

export class AnswerCard extends Component {
    render() {
        const { info } = this.props
        return (
            <div>
                <Divider />
                <div className="ans-info-wrapper">
                    <div className="ans-user-info">
                        <Avatar className="ans-user-avatar" src={info.commnetauthorpic} />
                        <div className="ans-right-block">
                            <div className="ans-user-name">{info.author}</div>
                            <div className="ans-ip-location">IP属地 · {info.ipLoaction ? info.ipLoaction : '上海'}</div>
                        </div>
                    </div>
                </div>
                <div className="ans-content">{info.content}</div>
                <div className="ans-publish-time">发布于 {info.createtime}</div>
            </div>
        )
    }
}
