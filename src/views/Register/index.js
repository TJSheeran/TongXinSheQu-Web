import { Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '@/services/utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchUserLogin } from '@/store/login';
import store from '@/store';

import './index.less';

const Register = memo(() => {
    const navigate = useNavigate();
    const { token } = useSelector((state) => state.login);
    const loginDispatch = useDispatch();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onAccountChange = (e) => {
        setAccount(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = async () => {
        setLoading(true);
        const params = {
            username: account,
            password: password
        };
        const res = await userRegister(params);
        if (res.info === '注册成功') {
            message.success('注册成功，请登录');
            navigate('/login');
        } else {
            message.error(res.info);
        }
        setLoading(false);
    };

    return (
        <div className="wrap">
            <div className="container">
                <div className="title">注 册</div>

                <Input className="input" size="middle" placeholder="账 号" prefix={<UserOutlined />} onChange={onAccountChange} />

                <Input.Password className="input" size="middle" placeholder="密码" prefix={<LockOutlined />} onChange={onPasswordChange} />

                <Button type="primary" className="button" size="large" onClick={submitHandler} loading={loading}>
                    注册
                </Button>
            </div>
            <div className="square">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="circle">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
});

export default Register;
