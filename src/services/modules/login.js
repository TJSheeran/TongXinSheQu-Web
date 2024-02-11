import request from "../request";
import { stringify } from "qs";

export function getUserInfo(payload) {
    return request.get({
        url: `/auth/user/login?${stringify(payload)}`
    })
}