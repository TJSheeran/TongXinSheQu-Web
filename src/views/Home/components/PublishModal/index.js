import React, { useState } from 'react';
import { Input, Select, Modal, Popconfirm, Form, Button, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { communityOptions, latAndLong } from '../../constant';
import { useContext } from 'react';
import AuthContext from '../../../../services/context/AuthContext';
import { publish } from '../../../../services/utils/api';

import './index.less';

const { TextArea } = Input;

export const PublishModal = (props) => {
    const { handleCancel, onChangeRefresh } = props;
    console.log(props);
    const authCtx = useContext(AuthContext);
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
        // 在此处执行表单数据的提交操作
        values = {
            ...values,
            campus: latAndLong[values.campus],
            uid: authCtx.uid
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
            {/* <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password />
            </Form.Item> */}
            <Form.Item label="所在社区" name="campus">
                <Select popupClassName="community-name" style={{ width: 160, marginLeft: 10 }} options={communityOptions} />
            </Form.Item>
            <Form.Item label="问题标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
                <Input placeholder="不超过20个字" maxLength={20} style={{ width: 500 }} />
            </Form.Item>
            <Form.Item label="问题描述" name="content" rules={[{ required: true, message: '请描述一下问题' }]}>
                <TextArea showCount maxLength={150} onChange={onContentInputChange} placeholder="不超过150个字" style={{ width: 500, height: 120 }} />
            </Form.Item>
            {/* <Form.Item label="上传图片" valuePropName="fileList" getValueFromEvent={normFile} name="file">
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div
                            style={{
                                marginTop: 8
                            }}
                        >
                            选择图片
                        </div>
                    </div>
                </Upload>
            </Form.Item> */}
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

    // render() {
    //     const { title, loading, content } = this.state;
    //     return (
    //         <div>
    //             {/* <h3>所在社区</h3>
    //             <Select defaultValue="1" popupClassName="community-name" style={{ width: 160, marginTop: 15, marginBottom: 15 }} options={communityOptions} onChange={this.onCommunityChange} />
    //             <h3>标题</h3>
    //             <div className="title-input">
    //                 <Input size="large" placeholder="不超过20个字" maxLength={20} value={title} />
    //             </div>
    //             <h3>问题描述</h3>
    //             <TextArea showCount maxLength={150} onChange={this.onContentInputChange} placeholder="不超过150个字" className="content-input" size="large" value={content} />
    //             <h3>上传图片</h3>
    //             <div className="picture-uploader">
    //                 <Upload name="avatar" listType="picture-card" showUploadList={false} action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" beforeUpload={this.beforeUpload} onChange={this.handleUploadChange}>
    //                     {imageUrl ? (
    //                         <img
    //                             src={imageUrl}
    //                             alt="avatar"
    //                             style={{
    //                                 width: '100%',
    //                                 height: '100%'
    //                             }}
    //                         />
    //                     ) : (
    //                         <div>
    //                             {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //                             <div
    //                                 style={{
    //                                     marginTop: 8
    //                                 }}
    //                             >
    //                                 上传图片
    //                             </div>
    //                         </div>
    //                     )}
    //                 </Upload>
    //             </div> */}

    //             <Form
    //                 labelCol={{
    //                     span: 4
    //                 }}
    //                 wrapperCol={{
    //                     span: 14
    //                 }}
    //                 layout="horizontal"
    //                 style={{
    //                     maxWidth: 600
    //                 }}
    //             >
    //                 <Form.Item label="所在社区">
    //                     <Select defaultValue="1" popupClassName="community-name" style={{ width: 160 }} options={communityOptions} onChange={this.onCommunityChange} />
    //                 </Form.Item>
    //                 <Form.Item label="标题">
    //                     <Input placeholder="不超过20个字" maxLength={20} value={title} style={{ width: 400 }}/>
    //                 </Form.Item>
    //                 <Form.Item label="问题描述">
    //                     <TextArea showCount maxLength={150} onChange={this.onContentInputChange} placeholder="不超过150个字" style={{ width: 400, height: 120 }} size="large" value={content} />
    //                 </Form.Item>
    //                 <Form.Item label="上传图片" valuePropName="fileList" getValueFromEvent={this.normFile}>
    //                     <Upload action="/upload.do" listType="picture-card">
    //                         <div>
    //                             <PlusOutlined />
    //                             <div
    //                                 style={{
    //                                     marginTop: 8
    //                                 }}
    //                             >
    //                                 选择图片
    //                             </div>
    //                         </div>
    //                     </Upload>
    //                 </Form.Item>
    //             </Form>
    //         </div>
    //     );
    // }
};
