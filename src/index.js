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
import { ConfigProvider } from 'antd';
import { defaultConfig } from '@/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loading />}>
        <AuthContextProvider>
            <HashRouter>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: defaultConfig.colorPrimary,
                            borderRadius: defaultConfig.borderRadius
                        },
                        components: {
                            Button: {
                                colorPrimary: defaultConfig.Button?.colorPrimary,
                                algorithm: defaultConfig.Button?.algorithm
                            }
                        }
                    }}
                >
                    <App />
                </ConfigProvider>
            </HashRouter>
        </AuthContextProvider>
    </Suspense>
);
