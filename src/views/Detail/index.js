import { Card, Avatar, Divider, Button, FloatButton, Modal, message } from 'antd';
import { CommentOutlined, EditOutlined, PlusOutlined, HeartFilled, HeartOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import React, { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnswerList } from './components/AnswerList';
import { AICard } from './components/AICard';
import { getDetail, fetchAddLike, fetchDeleteLike, fetchAddCollect, fetchDeleteCollect, fetchAddFollow, fetchDeleteFollow } from '@/services/utils/api';
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
    const [isLiked, setIsLiked] = useState(false);
    const [likeNum, setLikeNum] = useState(undefined);
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
            console.log('详情页请求结果', result);
            if (result) {
                setDetailInfo(result);
                setIsCollected(result[0].iscollected);
                setIsFollowed(result[0].isfollowed);
                setIsLiked(result[0].isliked);
                setLikeNum(result[0].likenum);
                setAnswerList(result[0].commentList);
                setAIInfo(result[0].airesult);
                setLoading(false);
            }
        }
        fetchDetail();
    }, [isRefresh, isLiked, isCollected, isFollowed]);

    const handleAddLike = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchAddLike(params);
        console.log('点赞结果', res);
        if (res.code === '200') {
            setIsLiked(true);
            message.success(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const handleDeleteLike = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchDeleteLike(params);
        console.log('取消点赞结果', res);
        if (res.code === '200') {
            setIsLiked(false);
            message.warning(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const handleAddCollect = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchAddCollect(params);
        console.log('收藏结果', res);
        if (res.code === '200') {
            setIsCollected(true);
            message.success(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const handleDeleteCollect = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchDeleteCollect(params);
        console.log('取消收藏结果', res);
        if (res.code === '200') {
            setIsCollected(false);
            message.warning(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const handleAddFollow = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchAddFollow(params);
        console.log('关注结果', res);
        if (res.code === '200') {
            setIsFollowed(true);
            message.success(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const handleDeleteFollow = async () => {
        const params = {
            userid: userState.uid,
            tieziid: id
        };
        const res = await fetchDeleteFollow(params);
        console.log('取消关注结果', res);
        if (res.code === '200') {
            setIsFollowed(false);
            message.warning(res.info);
        } else {
            message.error('服务出错了');
        }
    };

    const renderFocusButton = () => {
        return (
            <div>
                {isFollowed ? (
                    <Button type="primary" shape="round" className="isFocusedBtn" onClick={handleDeleteFollow}>
                        已关注作者
                    </Button>
                ) : (
                    <Button type="primary" shape="round" className="isNotFocusedBtn" onClick={handleAddFollow} ghost>
                        + 关注作者
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
                        <Avatar className="user-avatar" src={info.baikeAuthorPic || 'https://tongxinshequ.cn/87601e9b1a734c9f9f17803d87074218.jpg'} />
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
                // trigger="hover"
                type="primary"
                style={{
                    right: 24
                }}
                // icon={<PlusOutlined />}
            >
                <FloatButton onClick={isLiked ? handleDeleteLike : handleAddLike} icon={isLiked ? <HeartFilled style={{ color: '#ec5b56' }} /> : <HeartOutlined />} tooltip={<div>{isLiked ? '已喜欢' : '喜欢'}</div>} badge={{ count: likeNum }} />
                <FloatButton onClick={isCollected ? handleDeleteCollect : handleAddCollect} icon={isCollected ? <StarFilled style={{ color: '#fcd732' }} /> : <StarOutlined />} tooltip={<div>{isCollected ? '已收藏' : '收藏'}</div>} />
                <FloatButton icon={<EditOutlined />} tooltip={<div>添加回答</div>} onClick={() => setIsShowAnswerModal(true)} />
                <FloatButton.BackTop tooltip="返回顶部" />
            </FloatButton.Group>
        </div>
    );
});

export default Detail;
