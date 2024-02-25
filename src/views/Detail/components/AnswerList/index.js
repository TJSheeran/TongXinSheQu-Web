import { Divider } from 'antd';
import React, { Component } from 'react';
import { AnswerCard } from '../AnswerCard';
import { answersList } from '@/constant';

import './index.less';

export class AnswerList extends Component {
    render() {
        const { answerList } = this.props;
        return answerList.length ? (
            <div>
                {answerList.map((itemInfo) => {
                    return <AnswerCard info={itemInfo} />;
                })}
            </div>
        ) : (
            <div className="no-answer-wrapper">
                <div className="no-answer">暂无回答</div>
            </div>
        );
    }
}
