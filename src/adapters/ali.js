import settle from 'axios/lib/core/settle';

export default function myAdapter(config) {
  // At this point:
  //  - config has been merged with defaults
  //  - request transformers have already run
  //  - request interceptors have already run

  // Make the request using config provided
  // Upon response settle the Promise

  return new Promise(function (resolve, reject) {

    my.httpRequest({
      // 目标服务器url
      url: buildURL(
        config.url,
        config.params,
        config.paramsSerializer
      ),
      // 设置请求的 HTTP 头，默认 {'Content-Type': 'application/x-www-form-urlencoded'}
      headers: config.headers,
      // 默认GET，目前支持GET，POST
      method: config.method,
      // 期望返回的数据格式，默认json，支持json，text，base64
      dataType: config.responseType || 'json',
      // 请求参数
      data: config.data,
      // 超时时间，单位ms，默认30000
      timeout: config.timeout || 60 * 1000,
      success: function success(res) {
        // console.log('my.httpRequest-success', res);

        var response = {
          data: res.data,
          headers: res.headers,
          errMsg: '',
          status: res.status,
          statusText: '',
          config: config,
          request: my.httpRequest
        };

        settle(resolve, reject, response);

        // responseCallback({
        //     responseText: res.data,
        //     statusCode: res.status,
        //     errMsg: "",
        //     headers: res.headers
        // })
      },
      fail: function fail(err) {
        console.error('my.httpRequest-fail', err, config);

        var response = {
          data: err.data,
          headers: err.headers || {},
          errMsg: err.error || '',
          status: err.code,
          // status: err.status,
          statusText: '',
          config: config,
          request: my.httpRequest
        };

        settle(resolve, reject, response);

        // responseCallback({
        //     responseText: err.data || "",
        //     statusCode: err.status || "",
        //     errMsg: err.error || "",
        //     headers: err.headers || {}
        // })
      }
    });

    // From here:
    //  - response transformers will run
    //  - response interceptors will run
  });
}

'use strict';

var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');

module.exports = function aliAdapter(config) {
  return new Promise(function dispatchAliRequest(resolve, reject) {
    // var data = config.data
    // var headers = config.headers

  });
};


