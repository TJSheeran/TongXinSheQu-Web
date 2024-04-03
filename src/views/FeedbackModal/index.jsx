import { Input, Modal, Button, message } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchFeedback } from '@/services/utils/api';

import './index.less';

const { TextArea } = Input;

export default function FeedbackModal({ onCancel }) {
    const [inputContent, setInputContent] = useState('');
    const userState = useSelector((store) => store.login.user);

    const onContentInputChange = (e) => {
        setInputContent(e.target.value);
    };

    const handleSubmit = () => {
        if (!inputContent) {
            message.warning('请描述您遇到的问题');
            return;
        } else {
            const params = {
                content: inputContent,
                userid: userState.uid
            };
            console.log(params);
            Modal.confirm({
                title: '确认提交意见反馈吗?',
                content: '',
                okText: '是',
                okType: 'primary',
                cancelText: '否',
                onOk: async () => {
                    const res = await fetchFeedback(params);
                    console.log('返回值', res);
                    if (res.code === '200') {
                        message.success(res.info);
                    } else {
                        message.error(res);
                    }
                    onCancel();
                }
            });
        }
    };
    return (
        <div>
            <div className="feedback-header">您遇到了什么问题？</div>
            <TextArea showCount maxLength={150} onChange={onContentInputChange} placeholder="不超过150个字" style={{ width: 500, height: 120 }} />
            <div className="feedback-footer-wrapper">
                <Button type="primary" onClick={handleSubmit}>
                    确认提交
                </Button>
            </div>
        </div>
    );
}
