/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 14:19:55
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-08 14:21:26
 * @Descripttion: 提现
 */
import React, { Component } from 'react';
import CashOutComponent from '../components/cash-out/cash-out.jsx';

class CashOut extends Component {
    render() {
        return (
            <CashOutComponent {...this.props} />
        )
    }
}

export default CashOut;