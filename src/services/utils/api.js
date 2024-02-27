import requestFun from './fetchUtil'; //引入
import qs from 'qs';

const { stringify } = qs;
const { post, get } = requestFun;

//get方式
export async function fetchData1(params) {
    return get(`/api/bbb?${stringify(params)}`);
}

//post方式
export async function fetchData2(params) {
    return post(`/api/aaa`, params);
}

export async function fetchGetComments(params) {
    return get(`http://localhost:8001/comments`, params);
}

export async function getList(params) {
    // return post('https://mock.apifox.com/m1/885299-0-default/getAllCardList', params);
    // return post('https://tongxinshequ.cn/findbaikeFromDemo', params);
    return post('https://tongxinshequ.cn/findbaikeFromDemo', params);
}

export async function userLogin(params) {
    // return post('https://mock.apifox.com/m1/885299-0-default/getAllCardList', params);
    // return post('https://tongxinshequ.cn/findbaikeFromDemo', params);
    return post('https://tongxinshequ.cn/login', params);
}

export async function publish(params) {
    // return post('https://mock.apifox.com/m1/885299-0-default/getAllCardList', params);
    // return post('https://tongxinshequ.cn/findbaikeFromDemo', params);
    // const option = {
    //     headers: {
    //         token: null,
    //         Authorization: null,
    //         // 当请求方法是POST，如果不指定content-type是其他类型的话，默认为如下，要求参数传递样式为 key1=value1&key2=value2，但实际场景以json为多
    //         'content-type': 'multipart/form-data',
    //       },
    //       type: 'FormData'
    // };
    return post('https://tongxinshequ.cn/addPost', params);
}

export async function getDetail(params) {
    return post('https://tongxinshequ.cn/searchAll', params);
}

export async function getRecommend(params) {
    return post('https://tongxinshequ.cn/recommendforWeb', params);
}

export async function fetchAnswer(params) {
    return post('https://tongxinshequ.cn/add_comment', params);
}

