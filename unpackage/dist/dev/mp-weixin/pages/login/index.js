"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../api/uni-fetch.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  _easycom_uni_countdown2();
}
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
if (!Math) {
  _easycom_uni_countdown();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = "登录";
    const handleTo = async () => {
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          day: 1,
          hour: 1,
          minute: 12,
          second: 40
        }),
        b: common_vendor.p({
          ["show-day"]: false,
          hour: 12,
          minute: 12,
          second: 12
        }),
        c: common_vendor.t(title),
        d: common_vendor.o(handleTo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/作业/uni-app-demo/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
