// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// import { login } from '@/services/utils/api';
// import { message } from 'antd';

// // context file
// const AuthContext = React.createContext({
//     token: '',
//     isLoggedIn: false,
//     uid: undefined,
//     onLogin: (token, expTime) => {},
//     username: '',
//     userPicUrl: '',
// });

// export const AuthContextProvider = (props) => {
//     // const navigate = useNavigate();
//     const [token, setToken] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [uid, setUid] = useState(undefined);
//     const [username, setUsername] = useState('');
//     const [userPicUrl, setUserPicUrl] = useState('');

//     async function loginHandler(params, handleNavigate) {
//         const result = await login(params);
//         if (result.info === '登录成功') {
//             // navigate('/home');
//             handleNavigate();
//             console.log('鉴权', result);
//             setToken(result.token);
//             setIsLoggedIn(true);
//             setUid(result.uid);
//             setUsername(result.username);
//             setUserPicUrl(result.picture);
//             message.success('登录成功');
//         } else {
//             message.error(result.info);
//         }
//     }

//     const contextValue = {
//         token: token,
//         isLoggedIn: isLoggedIn,
//         onLogin: loginHandler,
//         uid: uid,
//         username: username,
//         userPicUrl: userPicUrl,
//     };

//     return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
// };

// export default AuthContext;

import React, { useState, useEffect } from 'react';
import { login } from '@/services/utils/api';
import { message } from 'antd';

// context file
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    uid: undefined,
    onLogin: (token, expTime) => {},
    username: '',
    userPicUrl: '',
});

export const AuthContextProvider = (props) => {
    const [state, setState] = useState(() => {
        const storedState = JSON.parse(localStorage.getItem('authContext'));
        return storedState ? storedState : {
            token: '',
            isLoggedIn: false,
            uid: undefined,
            username: '',
            userPicUrl: '',
        };
    });

    useEffect(() => {
        localStorage.setItem('authContext', JSON.stringify(state));
    }, [state]);

    async function loginHandler(params, handleNavigate) {
        const result = await login(params);
        if (result.info === '登录成功') {
            handleNavigate();
            console.log('鉴权', result);
            setState({
                token: result.token,
                isLoggedIn: true,
                uid: result.uid,
                username: result.username,
                userPicUrl: result.picture,
            });
            message.success('登录成功');
        } else {
            message.error(result.info);
        }
    }

    const contextValue = {
        ...state,
        onLogin: loginHandler,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;