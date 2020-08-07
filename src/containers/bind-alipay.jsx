/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 14:12:29
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-08 14:14:33
 * @Descripttion: 绑定支付宝
 */
import React, { Component } from 'react';
import BindAliPayComponent from '../components/bind-alipay/bind-alipay.jsx';

class BindAliPay extends Component {
    render() {
        return (
            <BindAliPayComponent {...this.props} />
        )
    }
}

export default BindAliPay;