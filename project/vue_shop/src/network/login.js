import {request} from "./request";

export function getLoginData(type,form_info) {
    return request({
      url:'login?',
      params: {
        type,
        form_info
      }
    })
}