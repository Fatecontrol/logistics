"use strict";
const common_vendor = require("../common/vendor.js");
common_vendor.createUniFetch_1({
  loading: { title: "loading..." },
  baseURL: "https://slwl-api.itheima.net",
  intercept: {
    // 请求拦截器
    request(options) {
      return options;
    },
    // 响应拦截器
    response(result) {
      return result.data;
    }
  }
});
