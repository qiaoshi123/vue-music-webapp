import axios from 'axios';
import urlObj from './api_config';
let fetch = function ({method = 'post',data={},path,responseType='json'}) {
    if(!path){
      throw new Error('缺少请求地址');
    }
    let requestUrl = urlObj[path];

    if (method.toUpperCase() === 'GET') {
      requestUrl = requestUrl.indexOf('?')>-1
        ? requestUrl + '&' + new URLSearchParams(data)
        : requestUrl + '?' + new URLSearchParams(data);
  }
    return axios({
      method:method,
      url:requestUrl,
      data:method.toUpperCase() === 'GET'?null:data,
      responseType:responseType
    }).then(res=>{
      return res.data
    },error=>{
      throw error
    })
}
export default fetch
