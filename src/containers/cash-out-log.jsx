/*
 * @Author: 程巨龙
 * @Date: 2020-07-08 15:37:24
 * @LastEditors: 程巨龙
 * @LastEditTime: 2020-07-08 15:38:10
 * @Descripttion: 提现记录
 */
import React, { Component } from 'react';
import CashOutLogComponent from '../components/cash-out-log/cash-out-log.jsx';

class CashOutLog extends Component {
    render() {
        return (
            <CashOutLogComponent {...this.props} />
        )
    }
}

export default CashOutLog;