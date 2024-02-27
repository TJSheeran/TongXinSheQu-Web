import { Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchUserLogin } from '@/store/login';
import './style.less';
import store from '@/store';

const Login = memo(() => {
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

    const submitHandler = () => {
        if (!account) {
            message.warning('请输入用户名');
            return;
        }
        if (!password) {
            message.warning('请输入密码');
            return;
        }
        setLoading(true);
        const params = {
            username: account,
            password: password
        };
        loginDispatch(fetchUserLogin(params))
            .then(unwrapResult)
            .then((data) => {
                if (data.info === '登录成功') {
                    message.success('登录成功');
                    navigate('/home');
                } else {
                    message.error(data.info);
                }
            })
            .catch((err) => {
                message.error('登录出错');
            });
        setLoading(false);
    };

    return (
        <div className="wrap">
            <div className="container">
                <div className="title">登 录</div>

                <Input className="input" size="middle" placeholder="账 号" prefix={<UserOutlined />} onChange={onAccountChange} />

                <Input.Password className="input" size="middle" placeholder="密码" prefix={<LockOutlined />} onChange={onPasswordChange} />

                <Button type="primary" className="button" size="large" onClick={submitHandler} loading={loading}>
                    登录
                </Button>
                <span>
                    没有账号？
                    <span
                        className="register"
                        onClick={() => {
                            navigate('/register');
                        }}
                    >
                        去注册
                    </span>
                </span>
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

export default Login;
