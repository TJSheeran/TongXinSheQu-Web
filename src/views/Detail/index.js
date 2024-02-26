import { Card, Avatar, Divider, Button } from 'antd';
import React, { memo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnswerList } from './components/AnswerList';
import { AICard } from './components/AICard';
import { getDetail } from '../../services/utils/api';
import { useSelector } from 'react-redux';
import store from '@/store';

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
    }, []);

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
        </div>
    );
});

export default Detail;
