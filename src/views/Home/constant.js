import React, { memo } from 'react'
import { CoffeeOutlined, MedicineBoxOutlined, LaptopOutlined, FlagOutlined, PayCircleOutlined } from '@ant-design/icons'

export const orderList = [
    {
        key: '1',
        icon: React.createElement(CoffeeOutlined),
        label: `生活服务`,
        children: [
            {
                key: '10',
                label: '全部'
            },
            {
                key: '11',
                label: '快递'
            },
            {
                key: '12',
                label: '空调'
            },
            {
                key: '13',
                label: '电费'
            },
            {
                key: '14',
                label: '医保'
            }
        ]
    },
    {
        key: '2',
        icon: React.createElement(FlagOutlined),
        label: '交通出行',
        children: [
            {
                key: '20',
                label: '全部'
            },
            {
                key: '21',
                label: '短驳车'
            },
            {
                key: '22',
                label: '定班车'
            },
            {
                key: '23',
                label: '北安跨线'
            },
            {
                key: '24',
                label: '地铁出行'
            },
            {
                key: '25',
                label: '交通枢纽'
            }
        ]
    },
    {
        key: '3',
        icon: React.createElement(LaptopOutlined),
        label: `场馆服务`,
        children: [
            {
                key: '30',
                label: '全部'
            },
            {
                key: '31',
                label: '篮球'
            },
            {
                key: '32',
                label: '羽毛球'
            },
            {
                key: '33',
                label: '田径场'
            },
            {
                key: '34',
                label: '游泳馆'
            }
        ]
    },
    {
        key: '4',
        icon: React.createElement(PayCircleOutlined),
        label: `美食休闲`,
        children: [
            {
                key: '40',
                label: '全部'
            },
            {
                key: '41',
                label: '商圈'
            },
            {
                key: '42',
                label: '电影院'
            },
            {
                key: '43',
                label: '美食'
            }
        ]
    },
    {
        key: '5',
        icon: React.createElement(MedicineBoxOutlined),
        label: `医疗`,
        children: [
            {
                key: '50',
                label: '全部'
            },
            {
                key: '51',
                label: '医院'
            },
            {
                key: '52',
                label: '药店'
            },
            {
                key: '53',
                label: '报销流程'
            }
        ]
    }
]

export const latAndLong = {
    1: '121.21416,31.286012',
    2: '121.502539,31.282884',
    3: '121.368632,31.03058',
    4: '121.28379,31.333048',
    5: '121.310224,31.295353'
};


export const catalogList = [
    {
        key: '1',
        icon: React.createElement(CoffeeOutlined),
        label: `社区服务`
    },
    {
        key: '2',
        icon: React.createElement(FlagOutlined),
        label: '交通出行'
    },
    {
        key: '3',
        icon: React.createElement(LaptopOutlined),
        label: `团购`
    },
    {
        key: '4',
        icon: React.createElement(PayCircleOutlined),
        label: `美食`
    },
    {
        key: '5',
        icon: React.createElement(MedicineBoxOutlined),
        label: '休闲'
    },
    {
        key: '6',
        icon: React.createElement(MedicineBoxOutlined),
        label: '二手'
    },
    {
        key: '7',
        icon: React.createElement(MedicineBoxOutlined),
        label: '组队'
    }
];

export const catalogKey2Label = {
    '1': '社区服务',
    '2': '交通出行',
    '3': '团购',
    '4': '美食',
    '5': '休闲',
    '6': '二手',
    '7': '组队',
};

