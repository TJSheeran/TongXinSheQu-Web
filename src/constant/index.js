import React, { memo } from 'react';
import { CoffeeOutlined, CustomerServiceOutlined, LaptopOutlined, FlagOutlined, PayCircleOutlined, TeamOutlined, TagsOutlined } from '@ant-design/icons';

export const navItems = [
    {
        key: '/home',
        label: '首页'
    },
    {
        key: '/recommend',
        label: '推荐'
    },
    {
        key: '/message',
        label: '消息',
        disabled: true
    },
    {
        key: '/personal',
        label: '个人主页',
        disabled: true
    }
];

export const latAndLong = {
    1: '121.21416,31.286012',
    2: '121.502539,31.282884',
    3: '121.368632,31.03058',
    4: '121.28379,31.333048',
    5: '121.310224,31.295353'
};

export const communityOptions = [
    { value: '1', label: '同济大学嘉定校区' },
    { value: '2', label: '同济大学四平校区' },
    { value: '3', label: '马桥镇' },
    { value: '4', label: '马陆镇' },
    { value: '5', label: '南翔镇' }
];

// export const orderList = [
//     {
//         key: '1',
//         icon: React.createElement(CoffeeOutlined),
//         label: `生活服务`,
//         children: [
//             {
//                 key: '10',
//                 label: '全部'
//             },
//             {
//                 key: '11',
//                 label: '快递'
//             },
//             {
//                 key: '12',
//                 label: '空调'
//             },
//             {
//                 key: '13',
//                 label: '电费'
//             },
//             {
//                 key: '14',
//                 label: '医保'
//             }
//         ]
//     },
//     {
//         key: '2',
//         icon: React.createElement(FlagOutlined),
//         label: '交通出行',
//         children: [
//             {
//                 key: '20',
//                 label: '全部'
//             },
//             {
//                 key: '21',
//                 label: '短驳车'
//             },
//             {
//                 key: '22',
//                 label: '定班车'
//             },
//             {
//                 key: '23',
//                 label: '北安跨线'
//             },
//             {
//                 key: '24',
//                 label: '地铁出行'
//             },
//             {
//                 key: '25',
//                 label: '交通枢纽'
//             }
//         ]
//     },
//     {
//         key: '3',
//         icon: React.createElement(LaptopOutlined),
//         label: `场馆服务`,
//         children: [
//             {
//                 key: '30',
//                 label: '全部'
//             },
//             {
//                 key: '31',
//                 label: '篮球'
//             },
//             {
//                 key: '32',
//                 label: '羽毛球'
//             },
//             {
//                 key: '33',
//                 label: '田径场'
//             },
//             {
//                 key: '34',
//                 label: '游泳馆'
//             }
//         ]
//     },
//     {
//         key: '4',
//         icon: React.createElement(PayCircleOutlined),
//         label: `美食休闲`,
//         children: [
//             {
//                 key: '40',
//                 label: '全部'
//             },
//             {
//                 key: '41',
//                 label: '商圈'
//             },
//             {
//                 key: '42',
//                 label: '电影院'
//             },
//             {
//                 key: '43',
//                 label: '美食'
//             }
//         ]
//     },
//     {
//         key: '5',
//         icon: React.createElement(MedicineBoxOutlined),
//         label: `医疗`,
//         children: [
//             {
//                 key: '50',
//                 label: '全部'
//             },
//             {
//                 key: '51',
//                 label: '医院'
//             },
//             {
//                 key: '52',
//                 label: '药店'
//             },
//             {
//                 key: '53',
//                 label: '报销流程'
//             }
//         ]
//     }
// ]

export const catalogList = [
    {
        key: '1',
        icon: React.createElement(LaptopOutlined),
        label: `社区服务`
    },
    {
        key: '2',
        icon: React.createElement(FlagOutlined),
        label: '交通出行'
    },
    {
        key: '3',
        icon: React.createElement(TagsOutlined),
        label: `团购`
    },
    {
        key: '4',
        icon: React.createElement(CoffeeOutlined),
        label: `美食`
    },
    {
        key: '5',
        icon: React.createElement(CustomerServiceOutlined),
        label: '休闲'
    },
    {
        key: '6',
        icon: React.createElement(PayCircleOutlined),
        label: '二手'
    },
    {
        key: '7',
        icon: React.createElement(TeamOutlined),
        label: '组队'
    }
];

export const catalogKey2Label = {
    1: '社区服务',
    2: '交通出行',
    3: '团购',
    4: '美食',
    5: '休闲',
    6: '二手',
    7: '组队'
};
