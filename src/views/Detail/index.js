// 导入所需的组件和图标
import { Card, Avatar, Divider, Button, FloatButton, Modal, message } from 'antd';
import { CommentOutlined, EditOutlined, PlusOutlined, HeartFilled, HeartOutlined, StarFilled, StarOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import React, { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnswerList } from './components/AnswerList';
import { AICard } from './components/AICard';
import { getDetail, fetchAddLike, fetchDeleteLike, fetchAddCollect, fetchDeleteCollect, fetchAddFollow, fetchDeleteFollow } from '@/services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';
import AnswerModal from './components/AnswerModal';
import FeedbackModal from '../FeedbackModal';
import CommonFooter from '../Footer';
import './index.less';

// 定义Detail组件
const Detail = memo(() => {
    // 获取路由状态
    const { state } = useLocation();
    // 从Redux store中获取用户状态
    const userState = useSelector((store) => store.login.user);
    const { info } = state;
    const { id, baikeAuthorPic } = info;
    
    // 定义状态变量
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
    const [isShowFeedback, setIsShowFeedback] = useState(false);

    // 使用useEffect钩子获取详细信息
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

    // 处理添加点赞
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

    // 处理取消点赞
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

    // 处理添加收藏
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

    // 处理取消收藏
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

    // 处理添加关注
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

    // 处理取消关注
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

    // 渲染关注按钮
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

    // 渲染组件
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
                <FloatButton icon={<QuestionCircleOutlined />} onClick={() => setIsShowFeedback(true)} tooltip="问题反馈" />
                <FloatButton.BackTop tooltip="返回顶部" />
            </FloatButton.Group>
            <Modal open={isShowFeedback} onCancel={() => setIsShowFeedback(false)} footer={null} width={550}>
                <FeedbackModal onCancel={() => setIsShowFeedback(false)} />
            </Modal>
            <CommonFooter />
        </div>
    );
});

export default Detail;
