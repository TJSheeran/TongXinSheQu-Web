import React, { useState } from 'react';
import { SearchBar, Picker } from 'antd-mobile';
import { changeNavItem, changeCommunity, changeSearchKey } from '@/store/header';
import { useSelector, useDispatch } from 'react-redux';

import './style.less';

export default function RootHeader() {
    const { selectedCommunity } = useSelector((state) => state.header);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [campus, setCampus] = useState('1');

    const onCommunityChange = (value) => {
        dispatch(changeCommunity(value));
        setCampus(value);
    };

    const basicColumns = [
        [
            { value: '1', label: '同济大学嘉定校区' },
            { value: '2', label: '同济大学四平校区' },
            { value: '3', label: '马桥镇' },
            { value: '4', label: '马陆镇' },
            { value: '5', label: '南翔镇' }
        ]
    ];

    return (
        <div className="root-header-wrapper">
            <div
                className="location-wrapper"
                onClick={() => {
                    setVisible(true);
                }}
            >
                {basicColumns[0][Number(campus) - 1].label}
            </div>
            <SearchBar
                placeholder="请输入内容"
                showCancelButton
                style={{
                    '--border-radius': '100px',
                    '--background': '#ffffff',
                    '--height': '32px',
                    '--padding-left': '12px'
                }}
                className="search-wrapper"
            />
            <Picker
                columns={basicColumns}
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                value={campus}
                onConfirm={onCommunityChange}
            />
        </div>
    );
}
