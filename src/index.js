import 'normalize.css';
import '@/assets/css/index.less';

import React, { Suspense } from 'react';

import App from '@/App';
import { HashRouter } from 'react-router-dom';
import Loading from './views/loading';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './store';
import AuthContext, { AuthContextProvider } from './services/context/AuthContext';

// import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loading />}>
        <AuthContextProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </AuthContextProvider>
    </Suspense>
);
