/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 */

"use strict";

export const Base = {
    // API_URL: 'http://tch.dev.uboxol.com', // 线上地址
    apiPrefix: process.env.NODE_ENV !== "production" ? '/api/' : '',
    isAlipayClient: (navigator.userAgent.indexOf('AlipayClient') > -1) ? true : false,
    getAppLetsData: null,
    url: window.document.location.href,
    phoneTopHeight: 72,
    // 打开新页面
    push: (path, params) => {
        // { 'type': 'h5', 'value': '/othepage' }, { mouldId: id }
        if (!path) {
            return;
        }

        let urlParam = "";
        for (const key in params) {
            if (params.hasOwnProperty(key)) {
                const value = params[key];
                urlParam += key + "=" + escape(value) + "&";
            }
        }
        urlParam = urlParam.replace(/&$/, "");
        console.log(`urlParam ->`, urlParam)
        // path = urlParam ? path + "?" + urlParam : path;
        // path 示例
        // 参数一: pages/serviceCard/index?chInfo=ch_jwyouku__chsub_huolieniao

        console.log(`push ->`, path);
        if (Base.isAlipayClient) {
            Base.url = Base.url.split('#')[0]; // h5内部跳转
            switch (path.type) {
                case 'h5':
                    // h5页面互跳
                    my.postMessage({ 'fromTypes': 'push', 'url': Base.url + '#' + path.value + '?' + urlParam }); // 告诉小程序，要跳了
                    break;
                case 'banner':
                    // 1 小程序内部跳转 2 h5页面 3 null 4 跳支付页面 5 跳小程序
                    if (path.value.jump_type == 1) {

                    } else if (path.value.jump_type == 2) {
                        // 2 h5页面 
                        my.postMessage({ 'fromTypes': 'banner_h5', 'item': path.value }); // 告诉小程序，要跳了
                    } else if (path.value.jump_type == 3) {

                    } else if (path.value.jump_type == 4) {

                    } else if (path.value.jump_type == 5) {
                        // 5 跳小程序
                        my.postMessage({ 'fromTypes': 'banner_app', 'item': path.value }); // 告诉小程序，要跳了
                    }
                    break;
                case 'goodDetail':
                    // 跳商详
                    my.postMessage({ 'fromTypes': 'goDetail', 'item': path.value }); // 告诉小程序，要跳了
                    break;
                default:
                    break;
            }
            // h5像小程序发数据
            // my.postMessage({ 'fromTypes': 'itemClick', 'data': item });
            // my.postMessage({ 'fromTypes': 'push', 'url': Base.url + '#' + path }); // 告诉小程序，要跳了
        } else {
            window.Router.push(path.value + '?' + urlParam);
        }
    },
    back: () => {
        if (Base.isAlipayClient) {
            my.postMessage({ 'fromTypes': 'back' }); // 告诉小程序，要返回
        } else {
            window.Router.goBack();
        }
    },
    log: (msg) => {
        process.env.NODE_ENV === "production" ? null : console.log(msg);
    },
    // 获取页面传来的参数
    getPageParams: (keyStr, url) => {
        url = url || window.document.location.href;
        const str = url.split("?")[1];
        if (typeof str === "undefined") {
            return keyStr ? "" : {};
        }
        const result = {};
        str.split("&").forEach(item => {
            const arr = item.split("=");
            result[arr[0]] = unescape(arr[1]);
        });
        return keyStr ? result[keyStr] : result;
    },
    // 处理请求参数
    _request: (params = {}, callBack, method = "GET") => {
        if (!params["act"] || !params["op"]) {
            return console.error("未传入act或op");
        }
        let requestUrl = `${Base.apiPrefix}${params["act"]}/${params["op"]}`;
        delete params["act"];
        delete params["op"];

        let body = null;
        let url = "";
        // 获取传递参数
        for (let [key, value] of Object.entries(params)) {
            url += key + "=" + value + "&";
        }
        url = url.replace(/&$/, "");
        // get or post
        const get = method.toLocaleLowerCase() === "get";
        if (get) {
            url && (requestUrl += "?" + url);
        } else {
            body = url;
        }
        // 请求头
        const fetchData = {
            method: method,
            headers: {
                Accept: "application/json",
                "Content-Type": get ? "application/json" : "application/x-www-form-urlencoded"
            },
            timeout: 10000,
            body: body
        };
        // 请求
        fetch(requestUrl, fetchData)
            .then(response => response.json())
            .then(res => {
                switch (res.code) {
                    case 200:
                    case -1:
                    case -2:
                        callBack && callBack(res);
                        break;
                    default:
                        console.error(res.msg)
                        break;
                }
            })
            .catch(ex => console.error('500 err!'));
    },
    GET: (params, callBack) => {
        Base._request(params, callBack, "GET");
    },
    POST: (params, callBack) => {
        Base._request(params, callBack, "POST");
    },
    // 格式化数字，比如：0->0.00
    getNumFormat: (n_num, i_len = 2) => {
        n_num = parseFloat(n_num) || 0;
        return n_num.toFixed(i_len);
    },
    // 判断变量是否为空
    empty: xVar => {
        switch (typeof xVar) {
            case 'undefined':
                return true;
            // break;
            case 'string':
                if (xVar == '') {
                    return true;
                }
            // break;
            case 'number':
                if (xVar == 0) {
                    return true;
                }
            // break;
            case 'object':
                if (xVar === null || xVar.length == 0) {
                    return true;
                }
            // break;
        }
        return false;
    },
    // 将字符串转为JSON对象
    toJson: sJson => {
        return JSON.parse(sJson);
    },

    copy: oObject => {
        return JSON.parse(JSON.stringify(oObject));
    },
    //获取本地数据
    getLocalData: (s_storageName, s_key) => {
        let o_data = localStorage.getItem(s_storageName);
        return o_data && s_key ? o_data[s_key] : o_data;
    },
    //设置本地数据
    setLocalData: (s_storageName, u_value, s_key) => {
        let o_data = localStorage.getItem(s_storageName);
        if (s_key) {
            o_data = o_data || {};
            o_data[s_key] = u_value;
        } else {
            o_data = u_value;
        }
        localStorage.setItem(s_storageName, o_data);
    },
    removeLocalData: (s_storageName) => {
        localStorage.removeItem(s_storageName);
    },
}


// axios({
//     method: 'get',
//     url: `${Base.apiPrefix}goods/list`
//     // url: 'http://tch-manage.dev.uboxol.com/goods/list'
// })
//     .then(res => {
//         const { status, data } = res;
//         if (status === 200 && data.data.result_list) {
//             this.setState({ list: data.data.result_list.map_data });
//         } else {
//             alert('数据异常，请刷新重试！')
//         }
//     })
//     .catch(error => console.error(error, "error"))