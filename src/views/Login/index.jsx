import { Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/utils/api';
import { useContext } from 'react';
import AuthContext from '../../services/context/AuthContext';
import './style.less';

const Login = memo(() => {
    const navigate = useNavigate();
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const onAccountChange = (e) => {
        setAccount(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // async function fetchLogin() {
    //     setLoading(true);
    //     const params = {
    //         username: account,
    //         password: password
    //     };
    //     const result = await login(params);
    //     if (result.info === '登录成功') {
    //         // navigate('/home');
    //         console.log(result);
    //         message.success('登录成功');
    //         setLoading(false);
    //     } else {
    //         message.error(result.info);
    //     }
    //     console.log('result', result);
    // }

    const authCtx = useContext(AuthContext);
    const submitHandler = () => {
        setLoading(true);
        const params = {
            username: account,
            password: password
        };
        authCtx.onLogin(params, () => {
            navigate('/home');
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
                            console.log('注册页');
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
