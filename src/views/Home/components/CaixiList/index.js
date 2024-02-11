import React, { Component } from 'react'
import { CaixiCard } from '../CaixiCard'

export class CaixiList extends Component {
    render() {
        return (
            <div>
                <CaixiCard content="# 同济的樱花开了" hot="🔥🔥🔥" />
                <CaixiCard content="# 上海汽车城附近美食" hot="🔥🔥🔥" />
                <CaixiCard content="# 同济大学进校申请" hot="🔥🔥🔥" />
                <CaixiCard content="# 上汽集团购车补贴" hot="🔥🔥🔥" />
                <CaixiCard content="# 上海地铁14号线" hot="🔥🔥" />
                <CaixiCard content="# 呼伦小筑特价牛肉" hot="🔥🔥" />
                <CaixiCard content="# 嘉定游泳馆" hot="🔥🔥" />
                <CaixiCard content="# 同济大学秋季招聘会" hot="🔥🔥" />
                <CaixiCard content="# 周杰伦演唱会" hot="🔥" />
                <CaixiCard content="# 特斯拉优惠" hot="🔥" />
                <CaixiCard content="# 淮南牛肉汤" hot="🔥" />
                <CaixiCard content="# 苏州地铁11号线" hot="🔥" />
            </div>
        )
    }
}
