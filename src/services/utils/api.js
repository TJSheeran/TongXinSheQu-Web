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

export async function userRegister(params) {
    // return post('https://mock.apifox.com/m1/885299-0-default/getAllCardList', params);
    // return post('https://tongxinshequ.cn/findbaikeFromDemo', params);
    return post('https://tongxinshequ.cn/register', params);
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

export async function fetchAddLike(params) {
    return post('https://tongxinshequ.cn/addlike', params);
}

export async function fetchDeleteLike(params) {
    return post('https://tongxinshequ.cn/delectlike', params);
}

export async function fetchAddCollect(params) {
    return post('https://tongxinshequ.cn/addcollect', params);
}

export async function fetchDeleteCollect(params) {
    return post('https://tongxinshequ.cn/delectcollect', params);
}

export async function fetchAddFollow(params) {
    return post('https://tongxinshequ.cn/follow', params);
}

export async function fetchDeleteFollow(params) {
    return post('https://tongxinshequ.cn/delectfollow', params);
}

export async function fetchDeleteFollow2(params) {
    return post('https://tongxinshequ.cn/delectfollow2', params);
}

export async function fetchFeedback(params) {
    return post('https://tongxinshequ.cn/advice/postAdvice', params);
}

export async function getMyPublish(uid) {
    return get(`https://tongxinshequ.cn/getMyBaike/${uid}`);
}

export async function getMyFocus(uid) {
    return get(`https://tongxinshequ.cn/myfollow/${uid}`);
}

