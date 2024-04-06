import React, { useState } from 'react';
import { Modal, FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import UserInfoAnswer from './UserInfoAnswer';
import UserInfoChange from './UserInfoChange';
import UserInfoFocus from './UserInfoFocus';
import UserInfoPublish from './UserInfoPublish';
import FeedbackModal from '@/views/FeedbackModal';

export default function UserInfoContent({ userInfoSelectItem }) {
    const [isShowFeedback, setIsShowFeedback] = useState(false);

    const selectPage = [<UserInfoChange />, <UserInfoPublish />, <UserInfoFocus />, <UserInfoAnswer />];
    return (
        <div>
            {selectPage[userInfoSelectItem]}
            <FloatButton icon={<QuestionCircleOutlined />} onClick={() => setIsShowFeedback(true)} tooltip="问题反馈" />
            <FloatButton.BackTop tooltip="返回顶部" />
            <Modal open={isShowFeedback} onCancel={() => setIsShowFeedback(false)} footer={null} width={550}>
                <FeedbackModal onCancel={() => setIsShowFeedback(false)} />
            </Modal>
        </div>
    );
}
