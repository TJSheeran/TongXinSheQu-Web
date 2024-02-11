import React, { Component } from 'react';
import { Input, Select, message, Upload, Form } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { communityOptions, latAndLong } from '../../constant';

import './index.less';

const { TextArea } = Input;
export class PublishModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
            loading: false,
            community: '1'
        };
    }

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    onContentInputChange = (e) => {
        console.log('ContentInput', e.target.value);
    };

    onCommunityChange = (value) => {
        console.log('community', latAndLong[this.state.community]);
        this.setState({
            community: value
        });
    };

    render() {
        const { title, loading, content } = this.state;
        return (
            <div>
                {/* <h3>所在社区</h3>
                <Select defaultValue="1" popupClassName="community-name" style={{ width: 160, marginTop: 15, marginBottom: 15 }} options={communityOptions} onChange={this.onCommunityChange} />
                <h3>标题</h3>
                <div className="title-input">
                    <Input size="large" placeholder="不超过20个字" maxLength={20} value={title} />
                </div>
                <h3>问题描述</h3>
                <TextArea showCount maxLength={150} onChange={this.onContentInputChange} placeholder="不超过150个字" className="content-input" size="large" value={content} />
                <h3>上传图片</h3>
                <div className="picture-uploader">
                    <Upload name="avatar" listType="picture-card" showUploadList={false} action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" beforeUpload={this.beforeUpload} onChange={this.handleUploadChange}>
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt="avatar"
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        ) : (
                            <div>
                                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                <div
                                    style={{
                                        marginTop: 8
                                    }}
                                >
                                    上传图片
                                </div>
                            </div>
                        )}
                    </Upload>
                </div> */}

                <Form
                    labelCol={{
                        span: 4
                    }}
                    wrapperCol={{
                        span: 14
                    }}
                    layout="horizontal"
                    style={{
                        maxWidth: 600
                    }}
                >
                    <Form.Item label="所在社区">
                        <Select defaultValue="1" popupClassName="community-name" style={{ width: 160 }} options={communityOptions} onChange={this.onCommunityChange} />
                    </Form.Item>
                    <Form.Item label="标题">
                        <Input placeholder="不超过20个字" maxLength={20} value={title} style={{ width: 400 }}/>
                    </Form.Item>
                    <Form.Item label="问题描述">
                        <TextArea showCount maxLength={150} onChange={this.onContentInputChange} placeholder="不超过150个字" style={{ width: 400, height: 120 }} size="large" value={content} />
                    </Form.Item>
                    <Form.Item label="上传图片" valuePropName="fileList" getValueFromEvent={this.normFile}>
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
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
