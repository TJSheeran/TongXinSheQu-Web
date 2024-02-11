import React, { Component } from 'react';
import { Avatar, Card, Divider } from 'antd';
import chatgpticon from '@/assets/icon/chatgpticon.svg'; // 导入SVG文件

import './index.less';

export class AICard extends Component {
    render() {
        const { AIInfo } = this.props;
        return (
            <div className="ai-wrapper">
                <Divider />
                <div className="ai-info-wrapper">
                    <div className="ai-user-info">
                        <img className="gpt-img" src={chatgpticon} alt="" />
                        <div className="ai-right-block">
                            <div className="ai-user-name">同心AI小助手总结</div>
                            <div className="ai-ip-location">更新于 2024-01-31 12:00:36</div>
                        </div>
                    </div>
                </div>
                <div className="ai-text">{AIInfo}</div>
            </div>
        );
    }
}
