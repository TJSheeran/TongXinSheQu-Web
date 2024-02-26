import React, { useState } from 'react';
import { Input, Select, Modal, Popconfirm, Form, Button, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { communityOptions, latAndLong } from '@/constant';
import store from '@/store';
import { useSelector } from 'react-redux';
import { publish } from '../../../../services/utils/api';

import './index.less';

const { TextArea } = Input;

const PublishModal = (props) => {
    const { handleCancel, onChangeRefresh } = props;
    const userState = useSelector((state) => state.login.user);
    const [form] = Form.useForm();
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const onContentInputChange = (e) => {
        console.log('ContentInput', e.target.value);
    };

    const onFinish = async (values) => {
        values = {
            ...values,
            campus: latAndLong[values.campus],
            uid: userState.uid
        };

        Modal.confirm({
            title: '确认发布此问题吗?',
            content: '',
            okText: '是',
            okType: 'primary',
            cancelText: '否',
            onOk: async () => {
                const res = await publish(values);
                console.log('返回值', res);
                if (res.code === '200') {
                    message.success('发布成功');
                    onReset();
                    handleCancel();
                    onChangeRefresh();
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
                campus: '1'
            }}
            form={form}
        >
            <Form.Item label="所在社区" name="campus">
                <Select popupClassName="community-name" style={{ width: 160, marginLeft: 10 }} options={communityOptions} />
            </Form.Item>
            <Form.Item label="问题标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
                <Input placeholder="不超过20个字" maxLength={20} style={{ width: 500 }} />
            </Form.Item>
            <Form.Item label="问题描述" name="content" rules={[{ required: true, message: '请描述一下问题' }]}>
                <TextArea showCount maxLength={150} onChange={onContentInputChange} placeholder="不超过150个字" style={{ width: 500, height: 120 }} />
            </Form.Item>
            <Form.Item>
                <div className="footer-wrapper">
                    <Popconfirm title="确定重置吗？" onConfirm={onReset} okText="确定" cancelText="取消">
                        <Button htmlType="button" className="reset-btn">
                            重置
                        </Button>
                    </Popconfirm>
                    <Button type="primary" htmlType="submit" className="publish-btn">
                        发布
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default PublishModal;
