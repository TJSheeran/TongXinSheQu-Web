import { Input, Modal, Button } from 'antd';
import React, { useState } from 'react';

import './index.less';

const { TextArea } = Input;

export default function FeedbackModal() {
    const [inputContent, setInputContent] = useState('');
    const onContentInputChange = (e) => {
        console.log('ContentInput', e.target.value);
        setInputContent(e.target.value);
    };
    return (
        <div>
            <div className="feedback-header">您遇到了什么问题？</div>
            <TextArea showCount maxLength={150} onChange={onContentInputChange} placeholder="不超过150个字" style={{ width: 500, height: 120 }} />
            <div className="feedback-footer-wrapper">
                <Button>取消</Button>
                <Button type="primary">
                    确认提交
                </Button>
            </div>
        </div>
    );
}
