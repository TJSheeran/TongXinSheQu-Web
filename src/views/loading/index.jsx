import React, { memo } from 'react';
import { Spin } from 'antd';

import './index.less';

const Loading = memo(() => {
    return (
        // <div>Page Loading</div>
        <div className="loading-wrapper">
            <Spin tip="Loading" size="large">
                <div className="loading" />
            </Spin>
        </div>
    );
});

export default Loading;
