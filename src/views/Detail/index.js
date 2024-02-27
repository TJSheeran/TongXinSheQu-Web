import { Card, Avatar, Divider, Button, FloatButton, Modal } from 'antd';
import { CommentOutlined, EditOutlined, PlusOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons';
import React, { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnswerList } from './components/AnswerList';
import { AICard } from './components/AICard';
import { getDetail } from '../../services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';
import AnswerModal from './components/AnswerModal';

import './index.less';

const Detail = memo(() => {
    const { state } = useLocation();
    const userState = useSelector((store) => store.login.user);
    const { info } = state;
    const { id, baikeAuthorPic } = info;
    const [isFocused, setIsFocused] = useState(info.isFocused);
    const [loading, setLoading] = useState(false);
    const [detailInfo, setDetailInfo] = useState([]);
    const [isCollected, setIsCollected] = useState(false);
    const [isFollowed, setIsFollowed] = useState(false);
    const [answerList, setAnswerList] = useState([]);
    const [AIInfo, setAIInfo] = useState('');
    const [isShowAnswerModal, setIsShowAnswerModal] = useState(false);
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        async function fetchDetail() {
            setLoading(true);
            const params = {
                userid: userState.uid,
                tieziid: id
            };
            const result = await getDetail(params);
            if (result) {
                setDetailInfo(result);
                setIsCollected(result[0].iscollected);
                setIsFollowed(result[0].isfollowed);
                setAnswerList(result[0].commentList);
                setAIInfo(result[0].airesult);
                setLoading(false);
            }
            console.log('AIInfo', AIInfo);
        }
        fetchDetail();
    }, [isRefresh]);

    const renderFocusButton = () => {
        return (
            <div>
                {isFollowed ? (
                    <Button type="primary" shape="round" className="isFocusedBtn" onClick={() => setIsFollowed(!isFollowed)}>
                        已关注
                    </Button>
                ) : (
                    <Button type="primary" shape="round" className="isNotFocusedBtn" onClick={() => setIsFollowed(!isFollowed)} ghost>
                        + 关注
                    </Button>
                )}
            </div>
        );
    };
    return (
        <div className="bg">
            <Card className="detail-card-wrapper">
                <div className="header-wrapper">
                    <div className="header-title">{info.title}</div>
                    <div className="user-region">{info.campus}</div>
                </div>
                <div className="info-wrapper">
                    <div className="user-info">
                        <Avatar className="user-avatar" src={info.baikeAuthorPic} />
                        <div className="right-block">
                            <div className="user-name">{info.author}</div>
                            <div className="ip-location">IP属地 · 嘉定区</div>
                        </div>
                    </div>
                    {renderFocusButton()}
                </div>

                {/* <Divider /> */}
                <div className="content-wrapper">{info.content}</div>
                <div className="publish-time">该问题发布于 {info.createtime}</div>
                {AIInfo && <AICard AIInfo={AIInfo} />}
                <AnswerList answerList={answerList} />
            </Card>
            <Modal open={isShowAnswerModal} onCancel={() => setIsShowAnswerModal(false)} footer={null} width={700}>
                <AnswerModal handleCancel={() => setIsShowAnswerModal(false)} tieziid={id} handleRefresh={() => setIsRefresh(!isRefresh)} />
            </Modal>
            <FloatButton.Group
                trigger="hover"
                type="primary"
                style={{
                    right: 24
                }}
                icon={<PlusOutlined />}
            >
                <FloatButton icon={<HeartOutlined />} tooltip={<div>喜欢</div>} />
                <FloatButton icon={<EditOutlined />} tooltip={<div>添加回答</div>} onClick={() => setIsShowAnswerModal(true)} />
                <FloatButton icon={<StarOutlined />} tooltip={<div>收藏</div>} />
            </FloatButton.Group>
        </div>
    );
});

export default Detail;
