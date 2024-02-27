import React, { useState } from 'react';
import { Input, Select, Modal, Popconfirm, Form, Button, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { communityOptions, latAndLong } from '@/constant';
import store from '@/store';
import { useSelector } from 'react-redux';
import { fetchAnswer } from '@/services/utils/api';

import './index.less';

const { TextArea } = Input;

const AnswerModal = (props) => {
    const { handleCancel, onChangeRefresh, tieziid, handleRefresh } = props;
    const userState = useSelector((state) => state.login.user);
    const [form] = Form.useForm();

    const onContentInputChange = (e) => {
        console.log('ContentInput', e.target.value);
    };

    const onFinish = async (values) => {
        values = {
            ...values,
            tieziid: tieziid,
            uid: userState.uid
        };

        Modal.confirm({
            title: '确认发布此回答吗?',
            content: '',
            okText: '是',
            okType: 'primary',
            cancelText: '否',
            onOk: async () => {
                const res = await fetchAnswer(values);
                console.log('返回值', res);
                if (res.code === '200') {
                    message.success('发布成功');
                    onReset();
                    handleCancel();
                    handleRefresh();
                } else {
                    message.error(res);
                }
            }
        });
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Form
            onFinish={onFinish}
            initialValues={{
                content: ''
            }}
            form={form}
        >
            <Form.Item label="您的回答" name="content" rules={[{ required: true, message: '请给出您的回答' }]} style={{ marginTop: 15 }}>
                <TextArea showCount maxLength={150} onChange={onContentInputChange} placeholder="不超过150个字" style={{ width: 500, height: 120 }} />
            </Form.Item>
            <Form.Item>
                <div className="ans-footer-wrapper">
                    <Popconfirm title="确定重置吗？" onConfirm={onReset} okText="确定" cancelText="取消">
                        <Button htmlType="button" className="ans-reset-btn">
                            重置
                        </Button>
                    </Popconfirm>
                    <Button type="primary" htmlType="submit" className="ans-publish-btn">
                        发布回答
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default AnswerModal;
